import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'bs-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() addBookToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addBook(book) {
    this.addBookToCart.emit(book);
  }

}
