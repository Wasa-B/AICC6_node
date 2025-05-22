const TASKS =[
  {title:"task1", description:"description1", completed:false},
  {title:"task2", description:"description2", completed:false},
  {title:"task3", description:"description3", completed:false},
]

export const getTasks = async (req, res) => {
  return res.json(TASKS)
}

export const addTask = async (req, res) => {
  TASKS.push(req.body)
  return res.json(TASKS)
}