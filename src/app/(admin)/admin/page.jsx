import { addNeonProduct, verifyAuth } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const res = await verifyAuth();
    
    if(!res){
        redirect("/admin/login");
    }
        
    return (
        <section className="w-full min-h-screen bg-gray-50 p-6 md:p-12 flex justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-white border-b border-gray-100 p-6 md:p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Add New Product</h1>
                    <p className="text-gray-500 mt-2">Enter product details below to create a new item.</p>
                </div>

                <form action={addNeonProduct} className="p-6 md:p-8 space-y-8">
                    {/* Basic Info Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-sm font-medium text-gray-600">Product Title</label>
                                <input type="text" name="productTitle" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Brand, model, and other details. Not too large." />
                                <span className="text-xs text-gray-500">Title displayed on larger screens. Brand goes first, then model, then everything else that fits.</span>
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-sm font-medium text-gray-600">Product Card Title</label>
                                <input type="text" name="productCardTitle" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Card title" />
                                <span className="text-xs text-gray-500">Fits nice on cards/mobile. Brand goes first, then model, then everything else.</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Slug</label>
                                <input type="text" name="slug" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="e.g. brand-model" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Category</label>
                                <input name="category" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="e.g. panels or curtains" />
                                <span className="text-xs text-gray-500">Lowercase 'panels' or 'curtains'</span>
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-sm font-medium text-gray-600">Brand</label>
                                <input type="text" name="brand" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Product Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Size</label>
                                <input type="text" name="size" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Color</label>
                                <input type="text" name="color" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Features</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <input name="feature1" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Feature 1" />
                                    <input name="feature2" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Feature 2" />
                                    <input name="feature3" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Feature 3" />
                                    <input name="feature4" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Feature 4" />
                                </div>
                                <span className="text-xs text-gray-500">Three or four best features that mean to customer</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-600">Images</label>
                                <input name="images" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Image URL" />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">Content</h2>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Short Description</label>
                            <textarea type="text" name="shortDescription" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px]" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Description Intro</label>
                            <textarea type="text" name="descriptionIntro" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[80px]" placeholder="Nice text about product before description..." />
                            <span className="text-xs text-gray-500">About 40 characters</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-600">Full Description</label>
                            <textarea type="text" name="description" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[160px]" />
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
