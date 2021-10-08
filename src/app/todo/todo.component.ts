import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    alert("Sayfa Açılmadan Ben Açılırım.")
  }

  listeyeEkle(value: string) {
    this.todoList.push(value);
  }

}
