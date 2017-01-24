'use strict';
// Tasks Controller
class TasksController {
  constructor() {
    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
  }

  init() {
    this.addTaskToList()
  }

  addTaskToList() {
    this.$addTaskForm.submit((event) => {
      event.preventDefault()

      var $description = this.$taskDescriptionInput.val()
      var $priority = this.$taskPriorityInput.val()
      var $list_id = this.$selectListMenu.val()
      let task = new Task($description, $priority, List.all[$list_id])
      task.build()
      this.destroyTask(task)
    })
  }
  destroyTask(task) {
    $('button.destroy-task').on("click", function(event) {
      $(this).parent().remove()
      task.list.tasks.splice(task, 1, null)
    })
  }
}
