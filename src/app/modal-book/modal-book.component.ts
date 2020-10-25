import { BooksService } from './../books.service';
import { Order } from './../model/order';
import { BookList } from './../model/bookList';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'bs-modal-book',
  templateUrl: './modal-book.component.html',
  styleUrls: ['./modal-book.component.css']
})
export class ModalBookComponent implements OnInit {
  @Input() boughtBooks: BookList;
  @Input() totalPrice: number;
  @Input() showButton: boolean;
  @Output() emptyArray = new EventEmitter();
  order: Order = new Order();
  orderForm: FormGroup;
  constructor(private fb: FormBuilder, private service: BooksService, private modal: NgbModal) {
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.orderForm = this.fb.group({
      address: ['', Validators.required],
      apartment: ['', Validators.required],
      telephone: ['', Validators.required]
    })
  }

  onSubmit() {
    this.order.name = this.boughtBooks.results.map(data => data.name);
    this.order.price = this.boughtBooks.results.map(data => data.price);
    this.order.totalPrice = this.totalPrice;
    this.order.address = this.orderForm.controls.address.value;
    this.order.apartment = this.orderForm.controls.apartment.value;
    this.order.telephone = this.orderForm.controls.telephone.value;
    this.service.postOrder(this.order).subscribe(data => {
      this.order = data;
      console.log(data);
      this.emptyArray.emit(new BookList())
      this.modal.dismissAll();
    }, err => {
      console.log('Error: ' + err);
    })
  }

  deleteItem(id) {
    let index = this.boughtBooks.results.findIndex(data => data._id == id);
    if (index > -1) {
      this.boughtBooks.results.splice(index, 1);
    } else {
      this.modal.dismissAll();
    }
  }
}
