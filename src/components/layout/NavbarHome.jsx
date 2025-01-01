import Link from "next/link";

/* Can take login / logout states from Relixx/src/components/navbar.jsx */

/* Navbar for HOME and navbar for DASHBOARD -> Home handles auth if ur signed up there's a dashboard button. Dashboard has its own, only accessable if authenticated */

export default function Navbar() {
    return (
        <nav className="fixed w-full backdrop-blur-sm border-b border-slate-800/10 bg-white/50 dark:bg-black/50 z-50">
            <div className="flex flex-row h-16 items-center justify-between max-w-7xl mx-auto px-6">
                <div className="flex flex-row gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-indigo-500 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-indigo-500 transition-colors"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-medium hover:text-indigo-500 transition-colors"
                    >
                        Docs
                    </Link>
                </div>
                <div className="flex flex-row gap-4">
                    <Link
                        href="/"
                        className="px-4 py-2 text-sm font-medium hover:text-indigo-500 transition-colors"
                    >
                        Login
                    </Link>
                    <Link
                        href="/"
                        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:opacity-90 transition-all"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    );
}
