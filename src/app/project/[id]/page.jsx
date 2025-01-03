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

    console.log(taskList);
    console.log(project);

    // Each task needs a subtask property so might b good to do that. Or send a task &  subtasks (seperate variables)

    return (
        <div>
            {/**Top section */}
            <div>
                <div>
                    <h1>{project.name}</h1>
                    <p>
                        Created: <strong>{formattedDate}</strong>
                    </p>
                </div>
                <div>
                    <p>Credits left: 5</p>
                    <button>Export ⬇️</button>
                </div>
            </div>
            {/**Tasks section */}
            <div>
                {/**Main tasks */}
                {taskList.tasks.map((task) => (
                    <TaskList
                        key={task.id}
                        task={task}
                        subtasks={taskList.subtasks}
                    />
                ))}
                {/**Editor tasks */}
            </div>
        </div>
    );
}
