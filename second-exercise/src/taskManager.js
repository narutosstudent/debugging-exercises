class TaskManager {
  async completeTask(task, project) {
    if (this.checkDependencies(task, project)) {
      task.status = 'completed'
      return 'completed'
    } else {
      return 'pending dependencies'
    }
  }

  checkDependencies(task, project) {
    return task.dependencies.every((depId) =>
      project.tasks.some((t) => t.id === depId && t.status === 'completed')
    )
  }
}

module.exports = { TaskManager }
