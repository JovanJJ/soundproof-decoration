import Link from 'next/link';

export default function BlogRegisterPage() {
    return (
        <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                        <p className="text-gray-500">Join us today!</p>
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
                            <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="repeatPassword">Repeat Password</label>
                            <input
                                id="repeatPassword"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer active:transform active:scale-95"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link href="/blog/login" className="text-blue-600 hover:text-blue-700 font-bold">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
