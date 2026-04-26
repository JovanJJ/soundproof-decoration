import BlogPreviewCard from "./BlogPreviewCard";

export default function BlogMainSection({data}) {
    return (
        <section className="w-full abosolute p-5 md:px-18 md:pt-0 mt-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">Blog posts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-5 mt-5">
                {data.safeList.map((blog, index) => {
                    return (
                        <BlogPreviewCard
                            key={blog._id}
                            blog={blog}
                            className="max-w-xl"
                            priority={index < 3}
                        />
                    );
                })}
            </div>
        </section>
    );
}
