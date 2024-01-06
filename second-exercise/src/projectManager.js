const fs = require('fs').promises
const path = require('path')

class ProjectManager {
  async getProject(projectId) {
    const dataFilePath = path.join(__dirname, 'projects.json')
    const data = await fs.readFile(dataFilePath, 'utf8')

    const projects = JSON.parse(data)
    return projects.find((p) => p.id === projectId)
  }
}

module.exports = { ProjectManager }
