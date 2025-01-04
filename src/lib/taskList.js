// Storing these for winter

const [editingTasks, setEditingTasks] = useState(() => {
    const initialEditState = {};
    subtaskList.forEach((subtask) => {
        initialEditState[subtask.id] = false;
    });

    initialEditState[task.id] = false;

    console.log(subtaskList);

    return initialEditState;
});

// Task changes
const [taskChanges, setTaskChanges] = useState({});

function handleTaskChange(taskId, field, value) {
    console.log(taskChanges);
    setTaskChanges((prev) => {
        //Task NOT modified yet add it
        if (!prev[taskId]) {
            return {
                ...prev,
                [taskId]: {
                    id: taskId,
                    [field]: value,
                },
            };
        }

        if (value === task[field]) {
            // checks if the field is the same as original, if so delete it (no purpose in saving that)
            const updatedTask = { ...prev[taskId] };
            delete updatedTask[field];

            // checks if ID is the last field left (if we've entered it in then took away fields then this is needed to delete the entire entry)
            if (Object.keys(updatedTask).length <= 1) {
                const newChanges = { ...prev };
                delete newChanges[taskId];
                return newChanges;
            }

            return {
                ...prev,
                [taskId]: updatedTask,
            };
        }

        return {
            // add & update the changed field
            ...prev,
            [taskId]: {
                ...prev[taskId],
                [field]: value,
            },
        };
    });
}

function getCurrentValue(taskId, field, isSubtask = false) {
    if (taskChanges[taskId] && taskChanges[taskId][field]) {
        return taskChanges[taskId][field];
    }

    if (isSubtask) {
        const subtask = subtaskList.find((st) => st.id === taskId);
        return subtask ? subtask[field] : "";
    } else {
        return task[field];
    }
}

function toggleEditTask(taskId) {
    setEditingTasks((prev) => ({
        ...prev,
        [taskId]: !prev[taskId],
    }));
}
