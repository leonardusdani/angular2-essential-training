import {Component, Input} from '@angular/core';

@Component({
  selector: 'image-switcher',
  templateUrl: 'app/imageswitcher.component.html',
  styleUrls: ['app/imageswitcher.component.css']
})

export class ImageSwitcherComponent{
  @Input() images;
  index = 1;

  onPrev(){
    if(this.index>1){
      this.index--;
    }
  }

  onNext(){
    if(this.index < this.images.length){
      this.index++;
    }
  }

}