const pool = require("./db.js");

async function insertProject(projectData, taskList) {
    const client = await pool.connect();
    try {
        await client.query("BEGIN");

        // 1: Create project
        const projectQuery = `
            INSERT INTO projects (name, description, timeframe, created_by)
            VALUES ($1, $2, $3, $4)
            RETURNING id
        `;

        const projectResults = await client.query(projectQuery, [
            projectData.name,
            projectData.description,
            projectData.timeframe,
            projectData.userId,
        ]);

        const projectId = projectResults.rows[0].id;

        console.log(projectId);

        // 2: Keep track of IDs

        const taskIds = {};

        for (let i = 0; i < taskList.length; i++) {
            const task = taskList[i];

            // main task

            const taskQuery = `
                INSERT INTO tasks (
                    project_id,
                    name,
                    description,
                    status,
                    priority,
                    estimated_duration
                )
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING id    
            `;

            const taskResult = await client.query(taskQuery, [
                projectId,
                task.taskName,
                task.taskDescription,
                task.status,
                task.priority,
                task.estimatedDuration,
            ]);

            const parentTaskId = taskResult.rows[0].id;
            taskIds[i] = parentTaskId;

            // subtasks

            if (task.subtasks && task.subtasks.length > 0) {
                for (const subtask of task.subtasks) {
                    await client.query(
                        `
                            INSERT INTO tasks (
                                project_id,
                                parent_task_id,
                                name,
                                description,
                                status,
                                estimated_duration
                            )
                                VALUES($1, $2, $3, $4, $5, $6)
                        `,
                        [
                            projectId,
                            taskResult.rows[0].id,
                            subtask.subtaskName,
                            subtask.subtaskDescription,
                            "not_started",
                            subtask.estimatedDuration,
                        ]
                    );
                }
            }
        }

        // SAVE EVERYTHING

        await client.query("COMMIT");

        return {
            projectId,
            taskIds,
        };
    } catch (err) {
        await client.query("ROLLBACK");
        console.log(err);
        throw err;
    } finally {
        await client.release();
    }
}

module.exports = insertProject;
