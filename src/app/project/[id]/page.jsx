export default function NewProject() {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="flex flex-col w-full max-w-3xl border px-10 py-8 rounded-xl">
                <div>
                    <h2 className="text-xl mb-2 font-semibold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                        Create New Project
                    </h2>
                    <p className="text-gray-500">
                        Let's break down your project into manageable tasks
                    </p>
                </div>
                <div className="flex flex-row gap-4 my-8">
                    <button
                        className={
                            "px-4 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 text-white rounded-xl"
                        }
                    >
                        Simple Input
                    </button>
                </div>

                <div className="flex flex-col border rounded-xl px-6 py-6">
                    <label className="text-sm">Project Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter project name"
                        className="p-2 my-2 border rounded-md focus:outline-none"
                    />

                    <label className="mt-2 text-sm">Description</label>
                    <textarea
                        className="p-2 my-2 border rounded-md h-32 focus:outline-none"
                        placeholder="Describe your project..."
                    />

                    <label className="text-sm">Timeframe (optional)</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. 2 weeks, 6 months, 12 hours"
                        className="p-2 my-2 border rounded-md focus:outline-none"
                    />

                    <div className="flex flex-row gap-4 my-4 justify-end">
                        <button className="px-4 py-2 rounded-xl border">
                            Cancel
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 hover:opacity-90 transition-all text-white rounded-xl">
                            Generate Tasks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
