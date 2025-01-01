import Navbar from "@/components/layout/NavbarHome";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[var(--background)] relative">
                {/* Dot pattern background */}
                <div className="absolute inset-0 opacity-[0.20] bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* Content */}
                <div className="relative flex flex-col h-[80vh] items-center justify-center px-6">
                    <div className="flex flex-col text-center gap-8 max-w-3xl">
                        <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-500 bg-clip-text text-transparent relative">
                            {/* Subtle glow effect behind text */}
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-violet-500/20 blur-xl -z-10" />
                            Granulize Your Projects
                            <br />
                            Amplify Your Productivity
                        </h1>
                        <p className="text-lg md:text-xl opacity-80">
                            Don't waste time planning your projects - we'll do
                            it for you
                        </p>
                        <div className="flex gap-4 justify-center mt-4">
                            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:opacity-90 transition-all">
                                Get Started Free
                            </button>
                            <button className="px-6 py-3 border border-[var(--foreground)] rounded-lg hover:bg-violet-500 hover:border-violet-500 hover:text-white transition-all">
                                See How It Works
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
