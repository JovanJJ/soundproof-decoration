import { addBlogPost } from "../../../../lib/actions";

export default async function BlogAdminPage() {
    return (
        <section className="w-full pt-15">
            <form action={addBlogPost} className="max-w-4xl pl-5 flex flex-col gap-7">
                <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Reading Time</span>
                        <input name="readingTime" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    </div>
                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">Mobile Title</span>
                    <input name="mobileTitle" type="text" className="border border-gray-600 rounded-xl min-w-3xl text-xl py-3" />
                </div>
                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">Mobile Description</span>
                    <textarea name="mobileDescription" type="text" className="border border-gray-600 rounded-xl min-w-3xl text-xl py-3" />
                </div>

                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">H1</span>
                    <input name="title" type="text" className="border border-gray-600 rounded-xl min-w-3xl text-xl py-3" />
                </div>
                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">Intro</span>
                    <textarea name="intro" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[200px]" />
                </div>
                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">Slug</span>
                    <textarea name="slug" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[200px]" />
                </div>
                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">Blog Hero Image</span>
                    <textarea name="blogHeroImage" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[200px]" />
                </div>
                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">Card Preview Image</span>
                    <textarea name="cardPrevierwImage" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[200px]" />
                </div>
                <div className="p-5 border flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Images</span>
                        <textarea name="images" rows={3} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 " />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Image Text</span>
                        <textarea name="imagesText" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 " />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Image Text Title</span>
                        <textarea name="imagesTextTitle" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[150px]" />
                    </div>

                </div>
                <div className="p-5 border flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Tips</span>
                        <textarea name="tips" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 " />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Tips answers</span>
                        <textarea  name="tipsAnswers" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 " />
                    </div>
                </div>
                <div className="p-5 border flex flex-col gap-5">
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Tips 2</span>
                        <textarea name="tips2" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 " />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Tips 2 answers</span>
                        <textarea name="tips2Answers" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 " />
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="min-w-[80px]">Closing paragraph</span>
                    <textarea name="closingParagraph" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[300px]" />
                </div>

                <div className="border flex flex-col">
                    <h2>Seo</h2>
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Meta Title</span>
                        <textarea name="metaTitle" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[70px]" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">Meta Description</span>
                        <textarea name="metaDescription" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[70px]" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="min-w-[80px]">canonicalUrl</span>
                        <textarea name="canonicalUrl" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[70px]" />
                    </div>
                </div>
                <button type="submit" className="px-5 py-2 bg-red-500 cursor-pointer">Submit</button>
            </form>
        </section>
    );
}