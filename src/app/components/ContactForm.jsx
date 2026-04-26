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
    console.log(formData);
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
        <>
            {isLoading ? <div>Loading...</div> :
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                        type="text"
                        placeholder="Your name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <input
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                        type="email"
                        placeholder="Your email"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <textarea
                        onChange={handleChange}
                        name="message"
                        rows={5}
                        value={formData.message}
                        placeholder="Your message"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <button
                        type="submit"
                        className="inline-block bg-[#654321] text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                    {message &&
                        <p className={`${success ? "text-green-700" : "text-red-400"}`}>{message}</p>
                    }
                </form>
            }
        </>
    );
}