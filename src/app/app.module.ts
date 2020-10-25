import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { BookStoreComponent } from './bookstore/bookstore.component';
import { HttpClientModule } from '@angular/common/http';
import { BookItemComponent } from './book-item/book-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalBookComponent } from './modal-book/modal-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    BookStoreComponent,
    BookItemComponent,
    ModalBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
