"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import React from "react";
import TaskList from "@/components/TaskList";

export default function ProjectPage() {
    const params = useParams();
    const projectId = params.id;
    const [taskList, setTaskList] = useState({ tasks: [], subtasks: [] });
    const [project, setProject] = useState([]);

    useEffect(() => {
        async function grabTasks() {
            try {
                const result = await axios.get(
                    `http://localhost:4000/tasks/${projectId}`
                );

                const allTasks = result.data.tasks;
                const highLevelTasks = allTasks.filter(
                    (task) => !task.parent_task_id
                );
                const lowLevelTasks = allTasks.filter(
                    (task) => task.parent_task_id
                );

                setTaskList({ tasks: highLevelTasks, subtasks: lowLevelTasks });
                setProject(result.data.project);
            } catch (err) {
                console.error(err);
            }
        }

        grabTasks();
    }, []);

    const date = new Date(project.created_at);
    const formattedDate = date.toLocaleDateString("en-GB");

    // Each task needs a subtask property so might b good to do that. Or send a task &  subtasks (seperate variables)

    return (
        <div className="max-w-5xl mx-auto px-6 py-8">
            {/**Top section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
                        {project.name}
                    </h1>
                    <p className="text-sm opacity-70">
                        Created:{" "}
                        <span className="text-indigo-400">{formattedDate}</span>
                    </p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-indigo-500/20">
                        <p className="text-sm">
                            Credits left:{" "}
                            <span className="text-indigo-400 font-semibold">
                                5
                            </span>
                        </p>
                    </div>
                    <button className="px-4 py-2 flex items-center gap-2 border border-violet-500/20 rounded-lg hover:bg-violet-500/10 transition-all">
                        Export
                        <span className="text-violet-400">⬇️</span>
                    </button>
                </div>
            </div>

            {/**Tasks section */}
            <div className="relative flex justify-center w-full">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-violet-500/5 blur-3xl -z-10" />

                {/**Main tasks */}
                <div className="space-y-6">
                    {taskList.tasks.map((task) => (
                        <TaskList
                            key={task.id}
                            task={task}
                            subtasks={taskList.subtasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
