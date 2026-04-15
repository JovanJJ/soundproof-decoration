#!/usr/bin/env node
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : undefined,
});

async function inspect() {
  try {
    console.log('Products columns:');
    const prodCols = await pool.query(`SELECT column_name, data_type, udt_name FROM information_schema.columns WHERE table_name='products' ORDER BY ordinal_position`);
    console.log(prodCols.rows);

    console.log('Brands columns:');
    const brandCols = await pool.query(`SELECT column_name, data_type, udt_name FROM information_schema.columns WHERE table_name='brands' ORDER BY ordinal_position`);
    console.log(brandCols.rows);

    console.log('Foreign keys on products:');
    const fkeys = await pool.query(`SELECT conname, pg_get_constraintdef(oid) as def FROM pg_constraint WHERE conrelid = 'products'::regclass AND contype = 'f'`);
    console.log(fkeys.rows);

    console.log('Example brands rows:');
    const brands = await pool.query('SELECT * FROM brands LIMIT 10');
    console.log(brands.rows);

    console.log('Example products rows (limit 5):');
    const products = await pool.query('SELECT * FROM products LIMIT 5');
    console.log(products.rows);
  } catch (err) {
    console.error('Inspect error', err.message || err);
  } finally {
    await pool.end();
  }
}

inspect();
