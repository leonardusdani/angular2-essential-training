import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from './book.service';

@Component({
  selector: 'book-list',
  templateUrl: 'app/book-list.component.html',
  styleUrls: ['app/book-list.component.html']
})

export class BookListComponent{

  constructor(
    private bookService : BookService,
    private activatedRoute: ActivatedRoute
    ){}

  books = [];
  medium = '';
  paramsSubscription;


  
  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {
        let medium = params['medium'];
        if(medium.toLowerCase() === 'all') {
          medium = '';
        }
        this.getMediaItems(medium);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onRemoveBook(book) {
    this.bookService.delete(book)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.bookService.get(medium)
      .subscribe(books => {
        this.books = books;
      });
  }


}