import * as Accordion from "@radix-ui/react-accordion";

export default function TaskList({ task, subtasks }) {
    const subtaskList = subtasks.filter(
        (subtask) => subtask.parent_task_id === task.id
    );
    return (
        <Accordion.Root type="multiple">
            <Accordion.Item value={task.id}>
                <Accordion.Trigger>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <p>{task.priority}</p>
                    <p>{task.status}</p>
                </Accordion.Trigger>

                <Accordion.Content>
                    <div>
                        {subtaskList.map((subtask) => (
                            <div key={subtask.id}>
                                <h4>{subtask.name}</h4>
                                <p>{subtask.description}</p>
                                <p>{subtask.priority}</p>
                                <p>{subtask.status}</p>
                            </div>
                        ))}
                    </div>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    );
}
