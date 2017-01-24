'use strict';
// Lists Controller
class ListsController {
  constructor() {
    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')
  }

  init() {
    this.hideListForm()
    this.addSubmit()
  }

  hideListForm() {
    this.$addTaskForm.css("display", "none")
  }
  addSubmit() {
    this.$addListForm.on("submit", (event) => {
      event.preventDefault()
      this.$addTaskForm.css("display", "block");
      let $input = $('#add_list input').val()
      let list = new List($input)
      list.build()
      this.destroyForm()
    })
  }
  destroyForm() {
    $('h2 button.destroy-list').on("click", function(event) {
      $(this).parent().parent().remove()
    })
  }
}
