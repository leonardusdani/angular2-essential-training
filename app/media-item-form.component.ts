import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
      movieid: new FormControl('',Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      watchedon: new FormControl('',this.pastDateValidator)
    });
  }

  pastDateValidator(control){
    if(new Date(control.value)>new Date()){
      return {
        'watchedon':true
      }
    }
    return null;
  }

  yearValidator(control) {
    if(control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;
    if(year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { 'year': {
        min: minYear,
        max: maxYear
      } };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
