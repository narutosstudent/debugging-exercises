const fs = require('fs').promises
const path = require('path')

class UserManager {
  async getUser(userId) {
    // Correct the path to point to the `./data` directory
    const dataFilePath = path.join(__dirname, 'users.json')
    const data = await fs.readFile(dataFilePath, 'utf8')
    const users = JSON.parse(data)
    return users.find((u) => u.id === userId)
  }
}

module.exports = { UserManager }
