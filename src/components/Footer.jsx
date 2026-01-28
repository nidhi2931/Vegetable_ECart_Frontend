import React from 'react';


export default function Footer(){
    return (
        <footer className="bg-green-800 text-white text-sm py-4">

            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 ">
                <p>@2026 Vegetable E-Cart. All rights reserved.</p>
                <div className="flex gap-4">
                    <span className="cursor-pointer hover:underline">About</span>
                    <span className="cursor-pointer hover:underline">Contact</span>
                    <span className="cursor-pointer hover:underline">Privacy</span>
                </div>
            </div>
        </footer>
    )
}