import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { BookItemComponent } from './book-item.component';
import { BookListComponent } from './book-list.component';
import { BookService } from './book.service';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BookItemComponent,
    BookListComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{}
