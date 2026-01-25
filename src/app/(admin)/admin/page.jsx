

import addProduct from "@/lib/actions";
export default function AdminPage(){
    return(
        <section className="w-full md:p-20">
            <form action={addProduct} className="flex flex-col gap-4 max-w-2xl">
                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Title</span>
                    <input type="text" name="title" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Slug</span>
                    <input type="text" name="slug" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-31 flex justify-center">Short description</span>
                    <textarea type="text" name="shortDescription" className="w-full sm:flex-1 border border-gray-400 py-1 rounded-xl p-5" />
                </div>

                 <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-31 flex justify-center">Description</span>
                    <textarea type="text" name="description" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl p-5" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Features</span>
                    <input name="features" type="text" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Images</span>
                    <input name="image" type="text" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Category</span>
                    <input name="category" type="text" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Brand</span>
                    <input type="text" name="brand" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Affiliate url</span>
                    <input type="text" name="affiliateUrl" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>

                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Meta title</span>
                    <input type="text" name="metaTitle" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>
                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Meta description</span>
                    <input type="text" name="metaDescription" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>
                <div className="flex flex-col sm:flex-row items-center p-5 gap-2">
                    <span className="w-30 flex justify-center">Canonical url</span>
                    <input type="text" name="canonicalUrl" className="w-full sm:flex-1  border border-gray-400 py-1 rounded-xl" />
                </div>
                
                <div className="w-full flex justify-center">
                <button type="submit" className="px-8 py-1 bg-blue-500 rounded-3xl text-white cursor-pointer active:bg-blue-300">Add</button>
                </div>
                
            </form>
        </section>
    );
}