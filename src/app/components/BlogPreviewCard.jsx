import Image from "next/image";
import Link from "next/link";

export default function BlogPreviewCard({
    blog,
    className = "",
    imageHeightClassName = "h-[420px]",
    imageSizes = "(min-width: 1536px) 30vw, (min-width: 1024px) 45vw, 100vw",
    priority = false,
}) {
    const title = blog.mobileTitle || blog.title || "Blog post";
    const description = blog.mobileDescription || "";

    return (
        <article className={`w-full ${className}`.trim()}>
            <Link
                href={`/blog/${blog.slug}`}
                className="group relative block overflow-hidden rounded-2xl"
            >
                <Image
                    src={blog.cardPreviewImage}
                    alt={title}
                    width={576}
                    height={600}
                    sizes={imageSizes}
                    priority={priority}
                    className={`${imageHeightClassName} w-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/60" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-8">
                    <h3 className="text-2xl font-light tracking-wide">{title}</h3>
                    <p className="mt-2 max-w-sm text-sm opacity-90">{description}</p>
                    {blog.readingTime ? (
                        <span className="mt-2 block">Reading time: {blog.readingTime} min.</span>
                    ) : null}
                    <span className="mt-4 inline-block border-b border-white/60 pb-1 text-sm uppercase tracking-widest">
                        See Post
                    </span>
                </div>
            </Link>
        </article>
    );
}
