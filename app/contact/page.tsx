import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page: React.FC = () => {
    return <div className="bg-gray-100 dark:text-gray-900">

        <Navbar />
        <div className="grid max-w-screen-xl shadow-lg shadow-gray-400 border border-black grid-cols-1 gap-8 py-24 px-10 mx-10 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    <div className="dark:text-gray-600">Get In Touch.</div>
                </div>
                <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
            </div>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded border border-black dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded border border-black dark:bg-gray-100" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows={3} className="w-full p-3 rounded border border-black dark:bg-gray-100"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-purple-600 dark:text-gray-50">Send Message</button>
            </form>
        </div>

        <Footer />

    </div>;
};

export default page;
