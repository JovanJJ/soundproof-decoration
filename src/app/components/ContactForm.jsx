"use client"

import { submitContactForm } from "@/lib/actions";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await submitContactForm(formData);
            setMessage(res.message);
            setSuccess(res.success);
            if (res.success) {
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            setSuccess(false);
            setMessage("Something went wrong, please try again");
        } finally {
            setIsLoading(false);
        }
    }
    
    return (
        <div className="h-full flex flex-col justify-center">
            {isLoading ? <div className="text-gray-500 animate-pulse">Sending message...</div> :
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                            type="text"
                            placeholder="Your name"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C08552]/40 focus:border-[#C08552] transition-colors bg-gray-50/50"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C08552]/40 focus:border-[#C08552] transition-colors bg-gray-50/50"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            onChange={handleChange}
                            name="message"
                            rows={4}
                            value={formData.message}
                            placeholder="Write your message"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C08552]/40 focus:border-[#C08552] transition-colors bg-gray-50/50 resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#C08552] to-[#C1785A] text-white px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-[#C08552]/20 transition-all font-medium mt-2"
                    >
                        Send message
                    </button>
                    {message &&
                        <p className={`text-sm mt-4 text-center ${success ? "text-emerald-600" : "text-red-500"}`}>{message}</p>
                    }
                </form>
            }
        </div>
    );
}