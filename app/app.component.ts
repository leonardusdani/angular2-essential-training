import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {

  edited = true;

  onMediaItemDelete(mediaItem) {
    
  }

  onPreviewPopup(popup){
    console.log(popup);
    this.edited = popup;
  }

  onClosePopup(popup){
    console.log(popup);
    this.edited = popup;
  }



  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };
}
