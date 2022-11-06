// Project constructor
class Project {
  constructor (title) {
    this.title = title
    this.tasks = []
  }

  getTitle () {
    return this.title
  }

  setTitle (title) {
    this.title = title
  }

  contains (taskName) {
    return this.tasks.some((task) => task.getTitle() === taskName)
  }

  addTask (newTask) {
    this.tasks.push(newTask)
  }

  getTasks () {
    return this.tasks
  }

  getTask (taskTitle) {
    return this.tasks.find((task) => task.title === taskTitle)
  }

  deleteTask (taskTitle) {
    this.tasks = this.tasks.filter((task) => task.title !== taskTitle)
  }
}

export default Project
