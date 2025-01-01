export default function Dashboard() {
    const projects = [
        {
            name: "Building a Boat",
            image: "/project-colors/blue.png",
            tasksRemaining: 24,
            tasksComplete: 12,
            timeLeft: "3 days",
            status: "In Progress",
            priority: "High",
        },
        {
            name: "Garden Redesign",
            image: "/project-colors/green.png",
            tasksRemaining: 8,
            tasksComplete: 16,
            timeLeft: "1 week",
            status: "On Track",
            priority: "Medium",
        },
        // Add more sample projects
    ];

    return (
        <div className="flex flex-col max-w-7xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                    Your Projects
                </h2>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-lg hover:opacity-90 transition-all text-sm">
                    New Project
                </button>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-slate-800/10 overflow-hidden">
                <div className="grid grid-cols-7 gap-4 p-4 text-sm font-medium text-gray-500">
                    <div className="col-span-2">Project</div>
                    <div>Progress</div>
                    <div>Tasks</div>
                    <div>Time Left</div>
                    <div>Status</div>
                    <div>Priority</div>
                </div>

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-7 gap-4 p-4 hover:bg-slate-50/50 border-t border-slate-800/10 items-center text-sm"
                    >
                        <div className="col-span-2 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500" />
                            <span className="font-medium">{project.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-indigo-500 h-2 rounded-full"
                                    style={{ width: "60%" }}
                                />
                            </div>
                            <span>60%</span>
                        </div>
                        <div>
                            {project.tasksComplete}/
                            {project.tasksRemaining + project.tasksComplete}
                        </div>
                        <div>{project.timeLeft}</div>
                        <div>
                            <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                {project.status}
                            </span>
                        </div>
                        <div>
                            <span className="px-2 py-1 rounded-full bg-orange-100 text-orange-700 text-xs">
                                {project.priority}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
