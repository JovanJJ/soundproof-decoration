import { verifyAuth } from "../../../../lib/actions";
import { addBlogPost } from "../../../../lib/actions";
import { redirect } from "next/navigation";

export default async function BlogAdminPage() {

    const res = await verifyAuth();
        
        if(!res){
            redirect("/admin/login");
        }
    return (
        <section className="w-full min-h-screen bg-gray-50 p-6 md:p-12 flex justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-white border-b border-gray-100 p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Add New Blog Post</h1>
                    <p className="text-gray-500 mt-2">Create a new blog article.</p>
                </div>

                <form action={addBlogPost} className="p-6 md:p-8 space-y-8">
                    {/* Header Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Header Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">H1 Title</label>
                                <input name="title" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Mobile Title</label>
                                <input name="mobileTitle" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Reading Time</label>
                                <input name="readingTime" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="e.g. 5 min read" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Slug</label>
                                <textarea name="slug" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[50px]" placeholder="blog-post-url" />
                            </div>
                        </div>
                    </div>

                    {/* Media Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Media</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Blog Hero Image URL</label>
                                <textarea name="blogHeroImage" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Card Preview Image URL</label>
                                <textarea name="cardPrevierwImage" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Content</h2>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Intro</label>
                            <textarea name="intro" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[150px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Mobile Description</label>
                            <textarea name="mobileDescription" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                        </div>
                    </div>

                    {/* Gallery / Images Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Gallery & Images</h2>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Images (Comma separated)</label>
                                <textarea name="images" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-600">Image Text</label>
                                    <textarea name="imagesText" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-600">Image Text Title</label>
                                    <textarea name="imagesTextTitle" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tips Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Tips / FAQ 1</h2>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 space-y-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-600">Tip / Question</label>
                                    <textarea name="tips" className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[80px]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-600">Answer</label>
                                    <textarea name="tipsAnswers" className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Tips / FAQ 2</h2>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 space-y-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-600">Tip / Question</label>
                                    <textarea name="tips2" className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all min-h-[80px]" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-600">Answer</label>
                                    <textarea name="tips2Answers" className="w-full px-4 py-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all min-h-[100px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Closing Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Conclusion</h2>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Closing Paragraph</label>
                            <textarea name="closingParagraph" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[150px]" />
                        </div>
                    </div>

                    {/* SEO Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">SEO Settings</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Meta Title</label>
                                <textarea name="metaTitle" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[60px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Meta Description</label>
                                <textarea name="metaDescription" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[80px]" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Canonical URL</label>
                                <textarea name="canonicalUrl" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[60px]" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <button type="submit" className="w-full md:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-colors cursor-pointer active:transform active:scale-95">
                            Submit Post
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
