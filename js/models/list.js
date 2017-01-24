'use strict';
// List Model
class List {
  constructor(title) {
    this.title = title
    this.id = List.all.length
    this.tasks = []
    List.all.push(this)
  }
  listEl() {
    return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
  }
  optionEl() {
    return `<option value="${this.id}">${this.title}</option>`
  }
  build() {
    var $select = $('select#select_list')
    $select.append(this.optionEl())

    var $section = $('section#lists')
    $section.append(this.listEl())
  }
}

List.all = []
