import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {

  edited = true;
  mediaItem;


  onPreview(mediaItem){
    this.mediaItem = mediaItem;
    this.edited = false;
    console.log(this.mediaItem);
  }

  onClosePopup(popup){
    console.log(popup);
    this.edited = popup;
  }

}
