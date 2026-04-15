#!/usr/bin/env node
// Seed script for Neon/Postgres DB - inserts mock soundproof panels and curtains
// Usage: set DATABASE_URL and run `node src/lib/seeds/seedNeon.js`

const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

function loadLocalEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;

  const fileContent = fs.readFileSync(envPath, 'utf8');
  for (const line of fileContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    if (!key || process.env[key]) continue;

    process.env[key] = rawValue.replace(/^['"]|['"]$/g, '');
  }
}

loadLocalEnv();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : undefined,
});

async function getOrCreateCategory(name) {
  const res = await pool.query('SELECT id FROM categories WHERE name = $1', [name]);
  if (res.rows.length) return res.rows[0].id;
  const insert = await pool.query('INSERT INTO categories(name) VALUES($1) RETURNING id', [name]);
  return insert.rows[0].id;
}

async function getOrCreateBrand(name) {
  // Uses `brand` table (singular) which matches the existing schema
  const res = await pool.query('SELECT id FROM brand WHERE name = $1', [name]);
  if (res.rows.length) return res.rows[0].id;
  const insert = await pool.query('INSERT INTO brand(name) VALUES($1) RETURNING id', [name]);
  return insert.rows[0].id;
}

async function insertProduct(product, categoryId, brandId) {
  const existing = await pool.query('SELECT id FROM products WHERE slug = $1', [product.slug]);
  if (existing.rows.length) {
    return existing.rows[0].id;
  }

  const sql = `INSERT INTO products (title, mobile_title, short_description, description_intro, description, color, size, slug, meta_title, meta_description, canonical_url, category_id, brand_id)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
    RETURNING id`;

  const values = [
    product.productTitle,
    product.productCardTitle,
    product.shortDescription,
    product.descriptionIntro,
    product.description,
    product.color,
    product.size,
    product.slug,
    product.metaTitle,
    product.metaDescription,
    product.canonicalUrl,
    categoryId,
    brandId,
  ];

  let result;
  try {
    result = await pool.query(sql, values);
  } catch (err) {
    console.error('insertProduct failed, values:', values, 'error:', err.message || err);
    throw err;
  }
  const id = result.rows[0].id;

  // Insert image (single image URL)
  const imagesSql = `INSERT INTO product_images(product_id, url) VALUES($1, $2)`;
  await pool.query(imagesSql, [id, product.images]);

  // Insert features
  const featuresSql = `INSERT INTO product_features (product_id, feature) VALUES($1, $2)`;
  for (const f of product.features) {
    await pool.query(featuresSql, [id, f]);
  }

  return id;
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function ensureTables() {
  // Create minimal schema if tables do not exist to allow seeding
  await pool.query(`CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
  )`);

  await pool.query(`CREATE TABLE IF NOT EXISTS brand (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
  )`);

  await pool.query(`CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    mobile_title TEXT NOT NULL,
    short_description TEXT NOT NULL,
    description_intro TEXT NOT NULL,
    description TEXT NOT NULL,
    color TEXT NOT NULL,
    size TEXT,
    slug TEXT UNIQUE NOT NULL,
    affiliate_url TEXT,
    meta_title TEXT NOT NULL,
    meta_description TEXT NOT NULL,
    canonical_url TEXT NOT NULL,
    category_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
    brand_id INTEGER REFERENCES brand(id) ON DELETE SET NULL
  )`);

  await pool.query(`ALTER TABLE products
    ADD COLUMN IF NOT EXISTS affiliate_url TEXT`);

  await pool.query(`CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug)`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id)`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_products_brand_id ON products(brand_id)`);

  await pool.query(`CREATE TABLE IF NOT EXISTS product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    url TEXT NOT NULL
  )`);

  await pool.query(`CREATE TABLE IF NOT EXISTS product_features (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    feature TEXT NOT NULL
  )`);

  await pool.query(`CREATE INDEX IF NOT EXISTS idx_product_images_product_id ON product_images(product_id)`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_product_features_product_id ON product_features(product_id)`);
}

const PANEL_IMG = 'https://arturel.com/cdn/shop/articles/5_Places_to_Use_Decorative_Sound_Panels_2ef95468-dab7-419a-bc34-ae78c9779f8d.jpg?v=1748450036&width=3840';
const CURTAIN_IMG = 'https://www.bobvila.com/wp-content/uploads/2022/05/The-Best-Soundproof-Curtains_Pony-Dance-Blackout-Insulated-Soundproof-Curtains-.jpg?quality=85&w=768';

const products = [
  // Panels (15)
  {
    productTitle: 'AuralAbsorb Breeze Panel 60x60',
    productCardTitle: 'AuralAbsorb Breeze Panel',
    slug: 'auralabsorb-breeze-panel-60x60',
    shortDescription: 'Lightweight decorative acoustic panel for medium rooms.',
    descriptionIntro: 'High-performance absorption for clearer sound.',
    description:
      'The AuralAbsorb Breeze Panel is a lightweight, fabric-wrapped acoustic panel engineered to reduce mid and high-frequency reflections. Ideal for home studios, offices, and media rooms. Easy to mount with keyhole brackets or adhesive strips.',
    features: ['High NRC mid-high absorption', 'Fabric-wrapped, decorative', 'Easy surface mounting'],
    category: 'panels',
    brand: 'AuralAbsorb',
    size: '60x60 cm',
    color: 'charcoal',
    images: PANEL_IMG,
    metaTitle: 'AuralAbsorb Breeze Panel — Acoustic Panel 60x60',
    metaDescription: 'AuralAbsorb Breeze Panel offers decorative sound absorption for studios and living spaces.',
    canonicalUrl: 'https://example.com/products/auralabsorb-breeze-panel-60x60',
  },
  {
    productTitle: 'SoundShield Pro Panel 30x120',
    productCardTitle: 'SoundShield Pro',
    slug: 'soundshield-pro-panel-30x120',
    shortDescription: 'Tall sound absorbing panel for speech clarity.',
    descriptionIntro: 'Designed to tame echoes and reverberation.',
    description:
      'SoundShield Pro Panel provides deep absorption across mid-frequencies with a slim profile perfect for vertical placement. Its dense core improves speech intelligibility in conference rooms and classrooms.',
    features: ['Deep mid frequency absorption', 'Slim vertical profile', 'Durable core material'],
    category: 'panels',
    brand: 'SoundShield',
    size: '30x120 cm',
    color: 'slate gray',
    images: PANEL_IMG,
    metaTitle: 'SoundShield Pro Panel — Vertical Acoustic Panel',
    metaDescription: 'Reduce echo and improve speech clarity with SoundShield Pro panels.',
    canonicalUrl: 'https://example.com/products/soundshield-pro-panel-30x120',
  },
  {
    productTitle: 'EchoGuard Studio Panel 50x50',
    productCardTitle: 'EchoGuard Studio',
    slug: 'echoguard-studio-panel-50x50',
    shortDescription: 'Studio-oriented acoustic foam panel.',
    descriptionIntro: 'Ideal for mixing and recording environments.',
    description:
      'EchoGuard Studio Panels combine absorption and diffusion to create a balanced acoustic environment for recording. The textured surface helps scatter reflections while the core reduces resonant frequency ringing.',
    features: ['Textured diffusion surface', 'Optimized studio absorption', 'Lightweight foam core'],
    category: 'panels',
    brand: 'EchoGuard',
    size: '50x50 cm',
    color: 'graphite',
    images: PANEL_IMG,
    metaTitle: 'EchoGuard Studio Panel — Acoustic Foam 50x50',
    metaDescription: 'Balanced absorption and diffusion for home studios and booths.',
    canonicalUrl: 'https://example.com/products/echoguard-studio-panel-50x50',
  },
  {
    productTitle: 'AcousticWave Hex Panel',
    productCardTitle: 'AcousticWave Hex',
    slug: 'acousticwave-hex-panel',
    shortDescription: 'Decorative hexagonal acoustic panels.',
    descriptionIntro: 'Stylish tiles that reduce echoes.',
    description:
      'AcousticWave Hex Panels are decorative hex tiles that install in patterns to deliver both visual flair and effective mid/high-frequency control. Great for lobbies, cafes, and creative spaces.',
    features: ['Designer geometry', 'Cluster installation', 'Effective high-frequency control'],
    category: 'panels',
    brand: 'AcousticWave',
    size: 'approx 30x35 cm (hex)',
    color: 'navy',
    images: PANEL_IMG,
    metaTitle: 'AcousticWave Hex — Decorative Sound Panels',
    metaDescription: 'Create patterns while cutting reverberation with AcousticWave Hex panels.',
    canonicalUrl: 'https://example.com/products/acousticwave-hex-panel',
  },
  {
    productTitle: 'QuietForm Timber Panel 60x120',
    productCardTitle: 'QuietForm Timber',
    slug: 'quietform-timber-panel-60x120',
    shortDescription: 'Wood-faced acoustic panel with natural look.',
    descriptionIntro: 'Combines aesthetics with sound control.',
    description:
      'QuietForm Timber Panels pair a decorative wood veneer with an absorptive core to give rooms a warm, finished look while significantly reducing reverberation and flutter echo.',
    features: ['Wood veneer finish', 'Low visual impact', 'High NRC core'],
    category: 'panels',
    brand: 'QuietForm',
    size: '60x120 cm',
    color: 'birch',
    images: PANEL_IMG,
    metaTitle: 'QuietForm Timber Panel — Decorative Acoustic Panel',
    metaDescription: 'Timber-faced panels for elegant sound absorption in living and work spaces.',
    canonicalUrl: 'https://example.com/products/quietform-timber-panel-60x120',
  },
  {
    productTitle: 'NoiseBlocker Classic Panel',
    productCardTitle: 'NoiseBlocker Classic',
    slug: 'noiseblocker-classic-panel',
    shortDescription: 'Budget-friendly acoustic panel solution.',
    descriptionIntro: 'Affordable panels for quick improvements.',
    description:
      'NoiseBlocker Classic Panels are engineered for cost-effective absorption. They are perfect for studios, rehearsal spaces, and classrooms where budget is a priority.',
    features: ['Affordable', 'Easy to mount', 'Good mid-frequency absorption'],
    category: 'panels',
    brand: 'NoiseBlocker',
    size: '60x60 cm',
    color: 'light gray',
    images: PANEL_IMG,
    metaTitle: 'NoiseBlocker Classic — Affordable Acoustic Panels',
    metaDescription: 'Budget acoustic panels to reduce echo and improve clarity in common spaces.',
    canonicalUrl: 'https://example.com/products/noiseblocker-classic-panel',
  },
  {
    productTitle: 'Reson8 Soft Panel 50x100',
    productCardTitle: 'Reson8 Soft',
    slug: 'reson8-soft-panel-50x100',
    shortDescription: 'Soft felt acoustic panel for offices.',
    descriptionIntro: 'Soft felt finish for a cozy finish.',
    description:
      'Reson8 Soft Panels offer a tactile felt finish over a highly absorptive core. They’re an excellent choice for collaborative spaces and offices that need both acoustics and warmth.',
    features: ['Felt finish', 'Comfortable aesthetic', 'Good mid-range control'],
    category: 'panels',
    brand: 'Reson8',
    size: '50x100 cm',
    color: 'beige',
    images: PANEL_IMG,
    metaTitle: 'Reson8 Soft Panel — Felt Acoustic Panel',
    metaDescription: 'Felt-faced acoustic panels for comfortable, low-reverb spaces.',
    canonicalUrl: 'https://example.com/products/reson8-soft-panel-50x100',
  },
  {
    productTitle: 'SoundMate Decorative Panel',
    productCardTitle: 'SoundMate Decorative',
    slug: 'soundmate-decorative-panel',
    shortDescription: 'Patterned decorative acoustic tile.',
    descriptionIntro: 'Make walls beautiful and quiet.',
    description:
      'SoundMate Decorative Panels bring pattern and texture to any wall while improving room acoustics. Perfect for cafes, open-plan offices, and lounges.',
    features: ['Decorative patterns', 'Surface texture', 'Easy to rearrange'],
    category: 'panels',
    brand: 'SoundMate',
    size: '40x40 cm',
    color: 'forest green',
    images: PANEL_IMG,
    metaTitle: 'SoundMate Decorative Panel — Patterned Acoustic Tile',
    metaDescription: 'Decorative tiles that reduce echo while creating a designed interior.',
    canonicalUrl: 'https://example.com/products/soundmate-decorative-panel',
  },
  {
    productTitle: 'SilentGrid Foam Panel',
    productCardTitle: 'SilentGrid Foam',
    slug: 'silentgrid-foam-panel',
    shortDescription: 'Classic wedge foam for treatment.',
    descriptionIntro: 'Classic foam for dampening reflections.',
    description:
      'SilentGrid Foam Panels are a classic wedge/eggcrate-style foam designed to reduce early reflections in small rooms and booths. Lightweight and easy to apply.',
    features: ['Wedge foam texture', 'Good for early reflections', 'Lightweight installation'],
    category: 'panels',
    brand: 'SilentGrid',
    size: '50x50 cm',
    color: 'black',
    images: PANEL_IMG,
    metaTitle: 'SilentGrid Foam Panel — Acoustic Foam',
    metaDescription: 'Wedge foam panels to tame reflections in recording spaces and booths.',
    canonicalUrl: 'https://example.com/products/silentgrid-foam-panel',
  },
  {
    productTitle: 'HushCraft Premium Panel',
    productCardTitle: 'HushCraft Premium',
    slug: 'hushcraft-premium-panel',
    shortDescription: 'Premium absorption with designer finish.',
    descriptionIntro: 'High-end panels for refined spaces.',
    description:
      'HushCraft Premium Panels combine premium fabric and absorptive cores to deliver top-tier acoustic control without compromising interior design. Suitable for studios, restaurants and executive offices.',
    features: ['Premium fabric', 'High NRC across band', 'Designer aesthetic'],
    category: 'panels',
    brand: 'HushCraft',
    size: '60x120 cm',
    color: 'ivory',
    images: PANEL_IMG,
    metaTitle: 'HushCraft Premium Panel — High-End Acoustic Panels',
    metaDescription: 'Premium panels for spaces that demand both style and acoustic performance.',
    canonicalUrl: 'https://example.com/products/hushcraft-premium-panel',
  },
  {
    productTitle: 'DynaQuiet Hybrid Panel',
    productCardTitle: 'DynaQuiet Hybrid',
    slug: 'dynaquiet-hybrid-panel',
    shortDescription: 'Hybrid absorptive/diffusive wall panel.',
    descriptionIntro: 'Blend of absorption and diffusion control.',
    description:
      'DynaQuiet Hybrid Panels combine absorptive cores with faceted surfaces to reduce reverberation while avoiding dead-sounding rooms. Great for multipurpose spaces.',
    features: ['Hybrid performance', 'Faceted surface', 'Balanced acoustic control'],
    category: 'panels',
    brand: 'DynaQuiet',
    size: '60x60 cm',
    color: 'ash',
    images: PANEL_IMG,
    metaTitle: 'DynaQuiet Hybrid Panel — Absorption and Diffusion',
    metaDescription: 'Hybrid panels that control reverberation and preserve room liveliness.',
    canonicalUrl: 'https://example.com/products/dynaquiet-hybrid-panel',
  },
  {
    productTitle: 'VibraMute Ridge Panel',
    productCardTitle: 'VibraMute Ridge',
    slug: 'vibramute-ridge-panel',
    shortDescription: 'Ridge-profile panel for visual depth.',
    descriptionIntro: 'Adds texture while absorbing sound.',
    description:
      'VibraMute Ridge Panels provide a visually-striking ridge profile that helps scatter and absorb sound. Use as feature walls or behind TV/monitor setups.',
    features: ['Ridge surface', 'Scattering + absorption', 'Great behind displays'],
    category: 'panels',
    brand: 'VibraMute',
    size: '60x60 cm',
    color: 'graphite',
    images: PANEL_IMG,
    metaTitle: 'VibraMute Ridge Panel — Textured Acoustic Panel',
    metaDescription: 'Stylish ridge panels that both look great and reduce echo.',
    canonicalUrl: 'https://example.com/products/vibramute-ridge-panel',
  },
  {
    productTitle: 'CalmSpace Felt Panel',
    productCardTitle: 'CalmSpace Felt',
    slug: 'calmspace-felt-panel',
    shortDescription: 'Soft felt panels for modern interiors.',
    descriptionIntro: 'Soft finish, effective sound control.',
    description:
      'CalmSpace Felt Panels are made from recycled felt with strong absorptive properties. They are ideal for open-plan offices and co-working spaces for visual and acoustic comfort.',
    features: ['Recycled felt', 'Sustainable', 'Soft aesthetic'],
    category: 'panels',
    brand: 'CalmSpace',
    size: '50x50 cm',
    color: 'taupe',
    images: PANEL_IMG,
    metaTitle: 'CalmSpace Felt Panel — Sustainable Acoustic Felt',
    metaDescription: 'Eco-friendly felt panels that reduce reverberation and look great.',
    canonicalUrl: 'https://example.com/products/calmspace-felt-panel',
  },

  // Curtains (15)
  {
    productTitle: 'AuralAbsorb Heavy-Duty Curtain 2x2.4m',
    productCardTitle: 'AuralAbsorb Heavy Curtain',
    slug: 'auralabsorb-heavy-curtain-2x2-4m',
    shortDescription: 'Thick sound-dampening blackout curtain.',
    descriptionIntro: 'Layered fabric that absorbs and blocks sound.',
    description:
      'The AuralAbsorb Heavy-Duty Curtain features a multi-layer construction with dense cores that block airborne noise and reduce room reflections. Ideal for home theaters and bedrooms.',
    features: ['Multi-layer dense construction', 'Blackout and thermal', 'Machine washable'],
    category: 'curtains',
    brand: 'AuralAbsorb',
    size: '2m x 2.4m',
    color: 'charcoal',
    images: CURTAIN_IMG,
    metaTitle: 'AuralAbsorb Heavy-Duty Soundproof Curtain',
    metaDescription: 'Thick blackout curtains that reduce noise and light for better sleep and viewing.',
    canonicalUrl: 'https://example.com/products/auralabsorb-heavy-curtain-2x2-4m',
  },
  {
    productTitle: 'SoundShield Thermal Curtain',
    productCardTitle: 'SoundShield Thermal',
    slug: 'soundshield-thermal-curtain',
    shortDescription: 'Insulated curtain that lowers noise and heat loss.',
    descriptionIntro: 'Thermal and acoustic performance combined.',
    description:
      'SoundShield Thermal Curtains are designed to reduce heat loss through windows while also improving indoor acoustics by lowering reflections and blocking outdoor noise.',
    features: ['Thermal insulation layer', 'Noise reduction', 'Energy saving'],
    category: 'curtains',
    brand: 'SoundShield',
    size: '2.1m x 2.5m',
    color: 'navy',
    images: CURTAIN_IMG,
    metaTitle: 'SoundShield Thermal Curtain — Insulated Noise-Reducing Curtain',
    metaDescription: 'Insulated curtains that improve energy efficiency and reduce outside noise.',
    canonicalUrl: 'https://example.com/products/soundshield-thermal-curtain',
  },
  {
    productTitle: 'EchoGuard Blackout Curtain',
    productCardTitle: 'EchoGuard Blackout',
    slug: 'echoguard-blackout-curtain',
    shortDescription: 'Blackout curtain with sound-damping layers.',
    descriptionIntro: 'Blocks light and reduces reverberation.',
    description:
      'EchoGuard Blackout Curtains combine dense weaves with a sound-damping lining to simultaneously reduce window glare and improve room acoustics for media spaces.',
    features: ['Complete blackout', 'Sound-damping lining', 'Heavyweight drape'],
    category: 'curtains',
    brand: 'EchoGuard',
    size: '2m x 2.2m',
    color: 'black',
    images: CURTAIN_IMG,
    metaTitle: 'EchoGuard Blackout Curtain — Sound-Damping Blackout',
    metaDescription: 'Blackout curtains with an inner liner that also helps absorb sound.',
    canonicalUrl: 'https://example.com/products/echoguard-blackout-curtain',
  },
  {
    productTitle: 'QuietForm Insulated Curtain',
    productCardTitle: 'QuietForm Insulated',
    slug: 'quietform-insulated-curtain',
    shortDescription: 'Layered curtain for noise and thermal control.',
    descriptionIntro: 'Insulating layers that soften room sound.',
    description:
      'QuietForm Insulated Curtains are designed for bedrooms and living rooms where noise reduction and thermal efficiency are priorities. Their dense lining reduces higher frequency noise effectively.',
    features: ['Layered insulation', 'Soft drape', 'Easy install'],
    category: 'curtains',
    brand: 'QuietForm',
    size: '2m x 2.5m',
    color: 'beige',
    images: CURTAIN_IMG,
    metaTitle: 'QuietForm Insulated Curtain — Noise Reducing Drapes',
    metaDescription: 'Insulated curtains that help keep rooms quieter and warmer.',
    canonicalUrl: 'https://example.com/products/quietform-insulated-curtain',
  },
  {
    productTitle: 'HushCraft Acoustic Curtain',
    productCardTitle: 'HushCraft Acoustic',
    slug: 'hushcraft-acoustic-curtain',
    shortDescription: 'Curtain optimized to absorb mid/high frequencies.',
    descriptionIntro: 'Improves speech clarity and reduces reflections.',
    description:
      'HushCraft Acoustic Curtains utilize a dense weave fabric with an absorptive lining to reduce room flutter and improve speech intelligibility in open-plan or shared spaces.',
    features: ['Mid/high absorption', 'Soft finish', 'Stylish colors'],
    category: 'curtains',
    brand: 'HushCraft',
    size: '2.2m x 2.6m',
    color: 'olive',
    images: CURTAIN_IMG,
    metaTitle: 'HushCraft Acoustic Curtain — Speech-Friendly Drapes',
    metaDescription: 'Curtains engineered to reduce reflections and improve speech clarity.',
    canonicalUrl: 'https://example.com/products/hushcraft-acoustic-curtain',
  },
  {
    productTitle: 'SilentWave Noise-Blocking Curtain',
    productCardTitle: 'SilentWave Noise-Blocking',
    slug: 'silentwave-noise-blocking-curtain',
    shortDescription: 'Heavy curtain that blocks outside noise.',
    descriptionIntro: 'Dense fabric that blocks airborne sound.',
    description:
      'SilentWave Noise-Blocking Curtains are heavy, tightly-woven curtains that act as a barrier to reduce sound ingress from outside, ideal for street-facing windows and noisy apartments.',
    features: ['Heavyweight weave', 'Blocks external noise', 'Durable construction'],
    category: 'curtains',
    brand: 'SilentWave',
    size: '2m x 2.4m',
    color: 'charcoal',
    images: CURTAIN_IMG,
    metaTitle: 'SilentWave Noise-Blocking Curtain — Heavy Duty',
    metaDescription: 'Heavy curtains designed to reduce incoming noise from outside.',
    canonicalUrl: 'https://example.com/products/silentwave-noise-blocking-curtain',
  },
  {
    productTitle: 'CalmSpace Layered Curtain',
    productCardTitle: 'CalmSpace Layered',
    slug: 'calmspace-layered-curtain',
    shortDescription: 'Layered curtain system for improved acoustics.',
    descriptionIntro: 'Dual-layer construction for absorption and block.',
    description:
      'CalmSpace Layered Curtains offer an outer aesthetic fabric and an inner absorptive lining. The combination reduces reflections while maintaining a high-end textile look.',
    features: ['Two-layer system', 'Customizable fabrics', 'Improves room tone'],
    category: 'curtains',
    brand: 'CalmSpace',
    size: '2m x 2.5m',
    color: 'navy',
    images: CURTAIN_IMG,
    metaTitle: 'CalmSpace Layered Curtain — Dual Layer Acoustic Curtains',
    metaDescription: 'Dual-layer curtains that combine aesthetics with acoustic performance.',
    canonicalUrl: 'https://example.com/products/calmspace-layered-curtain',
  },
  {
    productTitle: 'Reson8 Studio Curtain',
    productCardTitle: 'Reson8 Studio',
    slug: 'reson8-studio-curtain',
    shortDescription: 'Curtain tuned for studio monitoring spaces.',
    descriptionIntro: 'Reduces reflections around monitoring areas.',
    description:
      'Reson8 Studio Curtains are tailored for use behind speaker monitors and reflection points. Their absorptive lining helps flatten room response for better monitoring accuracy.',
    features: ['Speaker reflection control', 'Acoustic lining', 'Clean edge finish'],
    category: 'curtains',
    brand: 'Reson8',
    size: '2m x 2.2m',
    color: 'gray',
    images: CURTAIN_IMG,
    metaTitle: 'Reson8 Studio Curtain — Monitor Reflection Control',
    metaDescription: 'Curtains for monitoring environments to reduce early reflections.',
    canonicalUrl: 'https://example.com/products/reson8-studio-curtain',
  },
  {
    productTitle: 'SonicDamp Velvet Curtain',
    productCardTitle: 'SonicDamp Velvet',
    slug: 'sonicdamp-velvet-curtain',
    shortDescription: 'Luxurious velvet curtain with sound absorption.',
    descriptionIntro: 'Velvet face with absorptive backing layer.',
    description:
      'SonicDamp Velvet Curtains pair a plush velvet exterior with a dense backing to soften room acoustics while adding a premium look to theaters and lounges.',
    features: ['Velvet face', 'Absorptive backing', 'Premium look'],
    category: 'curtains',
    brand: 'SonicDamp',
    size: '2m x 2.6m',
    color: 'burgundy',
    images: CURTAIN_IMG,
    metaTitle: 'SonicDamp Velvet — Luxury Sound Absorbing Curtain',
    metaDescription: 'Velvet curtains that combine luxury finishes with acoustic benefits.',
    canonicalUrl: 'https://example.com/products/sonicdamp-velvet-curtain',
  },
  {
    productTitle: 'NoiseBlocker Stage Curtain',
    productCardTitle: 'NoiseBlocker Stage',
    slug: 'noiseblocker-stage-curtain',
    shortDescription: 'Heavy stage curtain for performance spaces.',
    descriptionIntro: 'Blocks stage noise and controls backstage sound.',
    description:
      'NoiseBlocker Stage Curtains are rugged, heavy curtains designed for theaters and auditoriums to block sound and improve on-stage acoustics.',
    features: ['Stage-grade heavyweight', 'Dramatic blackout', 'Durable hardware compatible'],
    category: 'curtains',
    brand: 'NoiseBlocker',
    size: '3m x 5m',
    color: 'black',
    images: CURTAIN_IMG,
    metaTitle: 'NoiseBlocker Stage Curtain — Heavy Theater Drapes',
    metaDescription: 'Professional stage curtains that block sound and light.',
    canonicalUrl: 'https://example.com/products/noiseblocker-stage-curtain',
  },
  {
    productTitle: 'AcousticWave Thick Curtain',
    productCardTitle: 'AcousticWave Thick',
    slug: 'acousticwave-thick-curtain',
    shortDescription: 'Thick, dense curtain that lowers reverb.',
    descriptionIntro: 'Dense weave for effective absorption.',
    description:
      'AcousticWave Thick Curtains are engineered to reduce reverberation in larger rooms while also providing soft furnishings that improve room comfort.',
    features: ['Dense weave', 'Low reverb', 'Suitable for larger rooms'],
    category: 'curtains',
    brand: 'AcousticWave',
    size: '2.5m x 3m',
    color: 'charcoal',
    images: CURTAIN_IMG,
    metaTitle: 'AcousticWave Thick Curtain — Low Reverb Drapes',
    metaDescription: 'Curtains designed to reduce reverberation in larger spaces.',
    canonicalUrl: 'https://example.com/products/acousticwave-thick-curtain',
  },
  {
    productTitle: 'SoundMate Heavy Curtain',
    productCardTitle: 'SoundMate Heavy',
    slug: 'soundmate-heavy-curtain',
    shortDescription: 'Practical heavy curtain for noisy rooms.',
    descriptionIntro: 'Reliable choice for everyday noise reduction.',
    description:
      'SoundMate Heavy Curtains are a practical option for homeowners and renters who need an easy-to-install solution to reduce noise and improve room comfort.',
    features: ['Practical installation', 'Heavy fabric', 'Cost-effective'],
    category: 'curtains',
    brand: 'SoundMate',
    size: '2m x 2.5m',
    color: 'stone',
    images: CURTAIN_IMG,
    metaTitle: 'SoundMate Heavy Curtain — Practical Noise-Reducing Drapes',
    metaDescription: 'Affordable heavy curtains to improve room acoustics and block light.',
    canonicalUrl: 'https://example.com/products/soundmate-heavy-curtain',
  },
];

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('Please set DATABASE_URL environment variable before running the seed script.');
    process.exit(1);
  }

  try {
    console.log('Ensuring tables exist...');
    await ensureTables();
    console.log('Seeding products...');
    for (const p of products) {
      const categoryId = await getOrCreateCategory(p.category);
      const brandId = await getOrCreateBrand(p.brand);

      await pool.query('BEGIN');
      try {
        const id = await insertProduct(p, categoryId, brandId);
        await pool.query('COMMIT');
        console.log(`Inserted product id=${id} slug=${p.slug}`);
      } catch (err) {
        await pool.query('ROLLBACK');
        console.error('Failed to insert product', p.slug, err.message || err);
              try {
                const brandLookup = await pool.query('SELECT * FROM brand WHERE id = $1', [brandId]);
                console.error('brand lookup', brandId, brandLookup.rows);
              } catch (e) {
                console.error('brand lookup error', e.message || e);
              }
        try {
          const catLookup = await pool.query('SELECT * FROM categories WHERE id = $1', [categoryId]);
          console.error('category lookup', categoryId, catLookup.rows);
        } catch (e) {
          console.error('category lookup error', e.message || e);
        }
      }
    }
    console.log('Seeding complete.');
  } catch (err) {
    console.error('Seeding error', err.message || err);
  } finally {
    await pool.end();
  }
}

main();
