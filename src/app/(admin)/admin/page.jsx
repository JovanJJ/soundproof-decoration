import { addProduct } from "@/lib/actions";
import { verifyAuth } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const res = await verifyAuth();
    const id = await res?.id;
    console.log(id);
    
    if(!id){
        redirect("/admin/login");
    }
        
    return (
        <section className="w-full min-h-screen bg-gray-50 p-6 md:p-12 flex justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-white border-b border-gray-100 p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Add New Product</h1>
                    <p className="text-gray-500 mt-2">Enter product details below to create a new item.</p>
                </div>

                <form action={addProduct} className="p-6 md:p-8 space-y-8">
                    {/* Basic Info Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Product Title</label>
                                <input type="text" name="title" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="e.g. Acoustic Foam Panel" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Mobile Title</label>
                                <input type="text" name="mobileTitle" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Short title for mobile" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Slug</label>
                                <input type="text" name="slug" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="product-url-slug" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Brand</label>
                                <input type="text" name="brand" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Category</label>
                                <input name="category" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Product Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Size</label>
                                <input type="text" name="size" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Color</label>
                                <input type="text" name="color" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Affiliate URL</label>
                                <input type="text" name="affiliateUrl" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="https://..." />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Features</label>
                                <input name="features" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Images</label>
                                <input name="image" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Image URLs" />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Content</h2>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Short Description</label>
                            <textarea type="text" name="shortDescription" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[120px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Description Intro</label>
                            <textarea type="text" name="descriptionIntro" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Full Description</label>
                            <textarea type="text" name="description" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[200px]" />
                        </div>
                    </div>

                    {/* SEO Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">SEO Settings</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Meta Title</label>
                                <input type="text" name="metaTitle" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Canonical URL</label>
                                <input type="text" name="canonicalUrl" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-sm font-medium text-gray-600">Meta Description</label>
                                <input type="text" name="metaDescription" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <button type="submit" className="w-full md:w-auto px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-colors cursor-pointer active:transform active:scale-95">
                            Add Product
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}
