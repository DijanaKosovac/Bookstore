import { ModalBookComponent } from './../modal-book/modal-book.component';
import { BookList } from './../model/bookList';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../model/book';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class BookStoreComponent implements OnInit {
  bookList: BookList;
  boughtBooks = new BookList();
  showButton: boolean = false;
  totalNumber: number;
  totalPrice: number = 0;
  parameters = {
    discount: false,
    bestseller: false
  }
  constructor(private service: BooksService, private modal: NgbModal) { }

  ngOnInit() {
    this.updateBooks();
  }

  updateBooks() {
    this.service.getBooks(this.parameters).subscribe(data => {
      this.bookList = data;
    })
  }


  addToCart(book: Book) {
    this.boughtBooks.results.push(book);
    if (this.boughtBooks.results.length >= 1) {
      this.showButton = true;
      this.totalNumber = this.boughtBooks.results.length;
      for (let i = 0; i < this.boughtBooks.results.length; i++) {
        return this.totalPrice += (this.boughtBooks.results[i].price);
      }

    }
  }

  openModal() {
    let modalRef = this.modal.open(ModalBookComponent);
    modalRef.componentInstance.boughtBooks = this.boughtBooks;
    modalRef.componentInstance.totalPrice = this.totalPrice;
    modalRef.componentInstance.showButton = this.showButton;
    modalRef.componentInstance.emptyArray.subscribe((receivedEntry) => {
      this.boughtBooks = receivedEntry;
    })
  }

}
