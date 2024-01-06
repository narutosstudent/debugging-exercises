const { ProjectManager } = require('./projectManager')
const { TaskManager } = require('./taskManager')
const { UserManager } = require('./userManager')

const main = async () => {
  const projectManager = new ProjectManager()
  const taskManager = new TaskManager()
  const userManager = new UserManager()

  try {
    const projectId = 'project1'
    const taskId = 'task5' // Change to task5 for testing
    const userId = 'user1'

    // Simulate user completing a task
    const user = await userManager.getUser(userId)
    const project = await projectManager.getProject(projectId)
    const task = project.tasks.find((t) => t.id === taskId)

    if (task) {
      const result = await taskManager.completeTask(task, project)
      console.log(`Task completion status for ${task.name}: ${result}`)
    } else {
      console.error('Task not found.')
    }
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}

main()
