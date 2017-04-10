import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-item',
  templateUrl: 'app/book-item.component.html',
  styleUrls: ['app/book-item.component.css']
})

export class BookItemComponent{
  @Input() book;
  @Output() bookItem = new EventEmitter();

  removeBook(){
    this.bookItem.emit(this.book);
  }

}