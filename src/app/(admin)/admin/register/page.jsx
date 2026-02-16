"use client";

import { useReducer } from 'react';
import Link from 'next/link';
import { registerAdmin } from '@/lib/actions';
import { useRouter } from 'next/navigation';


const initialForm = {
    email: "",
    password: "",
    repeatedPassword: "",
    resMessage: "",
    resSuccess: "",
}
export default function BlogRegisterPage() {
    

    const formReducer = (state, action) => {
        switch(action.type){
            case "EMAIL_PASSWORD" :
                return {
                    ...state,
                    [action.payload.name] : action.payload.value
                }

            case "MESSAGE":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }

            case "SUCCESS":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }    
            default: return state;    
        }
    }

    const [ formValue, dispatch ] = useReducer(formReducer, initialForm);
    const router = useRouter();
    
    const handleChange = (e) => {
        dispatch({
            type: "EMAIL_PASSWORD",
            payload: {
                name: e.target.name,
                value: e.target.value,
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await registerAdmin(formValue);
            if (res.success) {
                dispatch({
            type: "SUCCESS",
            payload: {
                name: "resSuccess",
                value: res.success,
            }
        });
            }
        
            dispatch({
            type: "MESSAGE",
            payload: {
                name: "resMessage",
                value: res.message,
            }
        });
        if(formValue.resSuccess){
            router.push("/admin/login")
        }
        
            
        
    }
    

    return (
        <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                        
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#654321] outline-none transition-all"
                                required
                                onChange={handleChange}
                                name='email'
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#654321] outline-none transition-all"
                                required
                                onChange={handleChange}
                                name='password'
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700" htmlFor="repeatPassword">Repeat Password</label>
                            <input
                                id="repeatPassword"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#654321]  outline-none transition-all"
                                required
                                onChange={handleChange}
                                name='repeatedPassword'
                            />
                        </div>

                        <span>{formValue.resMessage && formValue.resMessage}</span>

                        <button
                            type='submit'
                            className="w-full py-3 bg-[#654321]  text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer active:transform active:scale-95"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <Link href="/blog/login" className="text-[#654321] font-bold">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
