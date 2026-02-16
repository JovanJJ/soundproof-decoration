
import Link from 'next/link';

export default function BlogLoginPage() {
    return (
        <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                        <p className="text-gray-500">Sign in to your account</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                                <Link href="#" className="text-sm text-[#654321] font-medium">Forgot password?</Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer active:transform active:scale-95"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <Link href="/blog/register" className="text-blue-600 hover:text-blue-700 font-bold">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
