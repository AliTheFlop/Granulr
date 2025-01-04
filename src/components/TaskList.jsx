import * as Accordion from "@radix-ui/react-accordion";

// We're making a MODAL -> See You.com chat listed (modal)

export default function TaskList({ task, subtasks }) {
    const subtaskList = subtasks.filter(
        (subtask) => subtask.parent_task_id === task.id
    );

    return (
        <Accordion.Root type="multiple" className="w-full mx-auto">
            <Accordion.Item
                value={task.id}
                className="mb-4 border border-indigo-500/20 p-4 hover:border-indigo-500/4 rounded-xl"
            >
                <Accordion.Trigger className="w-full bg-white/5 backdrop-blur-sm 0 transition-all group">
                    <div className="flex justify-between items-start w-full">
                        <div className="flex flex-col items-start gap-2 text-left">
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                                {task.name}
                            </h3>
                            <p className="text-sm opacity-70">
                                {task.description}
                            </p>
                            <div className="flex gap-2 mt-2">
                                <span className="px-2 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-400">
                                    {task.priority}
                                </span>
                                <span className="px-2 py-1 rounded-full text-xs bg-violet-500/10 text-violet-400">
                                    {task.status}
                                </span>
                            </div>
                        </div>
                        <svg
                            className="w-6 h-6 transform transition-transform group-data-[state=open]:rotate-180 opacity-50 m-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </Accordion.Trigger>
                <div className="flex gap-2 flex-col items-end">
                    <button className="underline px-2 py-1 rounded-full mx-3 text-sm self-end">
                        Edit
                    </button>
                </div>
                <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                    <div className="mt-2 space-y-4 rounded-b-lg">
                        {subtaskList.map((subtask) => (
                            <div
                                key={subtask.id}
                                className="p-3 bg-white/5 rounded-md hover:bg-white/10 transition-all"
                            >
                                <h4 className="font-medium text-indigo-400">
                                    {subtask.name}
                                </h4>
                                <p className="text-sm opacity-70 mt-1">
                                    {subtask.description}
                                </p>
                                <div className="flex gap-2 mt-2">
                                    <span className="px-2 py-1 rounded-full text-xs bg-violet-500/10 text-violet-400">
                                        {subtask.status === "not_started"
                                            ? "Not Started"
                                            : subtask.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    );
}
