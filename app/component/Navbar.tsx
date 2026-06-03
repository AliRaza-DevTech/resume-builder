// import Link from "next/link";

// export default function Navbar() {
//     return (
//         <nav className="w-full bg-gray-100  border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//             <Link href="/" className="text-xl font-bold text-blue-600">
//                 ResumeAI
//             </Link>
//             <div className="flex gap-6">
//                 <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-bold">
//                     Home
//                 </Link>
//                 <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-bold">
//                     About
//                 </Link>
//             </div>
//         </nav>
//     );
// }

import Link from "next/link";
import logoImage from "../images/resume.png";
import Image from 'next/image';
export default function Navbar() {
    return (
        <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10  mt-2 rounded-fullflex items-center justify-center text-white font-bold">
                        <Image
                            src={logoImage}
                            alt="ResumeAI Logo"
                            className="w-6 h-6"
                        />
                    </div>
                    <span className="text-2xl font-extrabold text-blue-600">Resume</span>
                    <span className="text-2xl font-extrabold text-gray-700">AI</span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-blue-600 font-medium transition"
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="text-gray-600 hover:text-blue-600 font-medium transition"
                    >
                        About
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5">
                    <Link
                        href="/login"
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        Log in
                    </Link>

                    <Link
                        href="/signup"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition"
                    >
                        Get Started Free
                    </Link>
                </div>
            </div>
        </nav>
    );
}

