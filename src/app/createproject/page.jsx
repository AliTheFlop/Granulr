"use client";
import { useRef, useState } from "react";
import axios from "axios";
import LoadingSpinner from "@/components/LoadingSpinner";

//TODO:

// Send data to GPT
// Store GPT Response
// Loading states

// Get the project creation DONE then do auth

export default function CreateProject() {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const timeframeRef = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        const formData = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            timeframe: timeframeRef.current.value,
        };

        try {
            setIsLoading(true);
            const response = await axios.post(
                "http://localhost:4000/api/generatetasks",
                {
                    formData: formData,
                }
            );

            console.log(response.data.tasks);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

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
                        ref={nameRef}
                    />

                    <label className="mt-2 text-sm">Description</label>
                    <textarea
                        className="p-2 my-2 border rounded-md h-32 focus:outline-none"
                        placeholder="Describe your project..."
                        ref={descriptionRef}
                    />

                    <label className="text-sm">Timeframe (optional)</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. 2 weeks, 6 months, 12 hours"
                        className="p-2 my-2 border rounded-md focus:outline-none"
                        ref={timeframeRef}
                    />

                    <div className="flex flex-row gap-4 my-4 justify-end">
                        <button className="px-4 py-2 rounded-xl border">
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-violet-500 hover:opacity-90 transition-all text-white rounded-xl  disabled:opacity-50"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingSpinner /> : "Generate Tasks"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
