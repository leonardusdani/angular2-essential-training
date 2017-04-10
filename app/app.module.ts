import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import {AppComponent} from './app.component';
import { BookItemComponent } from './book-item.component';
import { BookListComponent } from './book-list.component';
import { BookFormComponent } from './book-form.component';
import { BookService } from './book.service';
import { MockXHRBackend } from './mock-xhr-backend';
import { HoverBookDirective } from './hover-book.directive';
import { routing } from './app.routing';
import { lookupListToken, lookupLists } from './providers';
import { ParseYearPipe } from './parse-year.pipe';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    BookItemComponent,
    BookListComponent,
    BookFormComponent,
    HoverBookDirective,
    ParseYearPipe
  ],
  providers: [
    BookService,
    { provide: lookupListToken, useValue: lookupLists },
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{}
