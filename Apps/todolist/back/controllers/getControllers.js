const { TASKS } = require("../controllers/tasksController")


const getTasks = async (req, res) => {
  return res.json(TASKS)
}

module.exports = {
  getTasks
}
