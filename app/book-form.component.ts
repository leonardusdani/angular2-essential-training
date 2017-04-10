import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

import { BookService } from './book.service';
import {lookupListToken} from './providers';


@Component({
  selector: 'book-form',
  templateUrl: 'app/book-form.component.html',
  styleUrls: ['app/book-form.component.css']
})

export class BookFormComponent{
  form;

  constructor(
    private formBuilder : FormBuilder,
    private bookService : BookService,
    private router : Router,
    @Inject(lookupListToken) public lookupLists){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('',Validators.required),
      author: this.formBuilder.control('',Validators.required),
      category: this.formBuilder.control('',Validators.required),
      year: this.formBuilder.control('',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$'),this.pastDateValidator]))
    });
  }

  pastDateValidator(control){
    if(control.value > (new Date().getFullYear())){
      return {
        'year':true
      }
    }
    return null;
  }

  onSubmit(book) {
    this.bookService.add(book).subscribe(() => {
      this.router.navigate(['/',book.category]);
    });
  }

}