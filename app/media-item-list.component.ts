import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  @Output() preview = new EventEmitter();

  onMediaItemDelete(mediaItem) { }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
      images: [{imageSource: 'media/01.png',id: 1},{imageSource: 'media/02.png', id: 2}, {imageSource: 'media/03.png', id: 3}]
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true,
      images: [{imageSource: 'media/01.png',id: 1},{imageSource: 'media/02.png', id: 2}, {imageSource: 'media/03.png', id: 3}]
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false,
      images: [{imageSource: 'media/01.png',id: 1},{imageSource: 'media/02.png', id: 2}, {imageSource: 'media/03.png', id: 3}]
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true,
      images: [{imageSource: 'media/01.png',id: 1},{imageSource: 'media/02.png', id: 2}, {imageSource: 'media/03.png', id: 3}]
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
      images: [{imageSource: 'media/01.png',id: 1},{imageSource: 'media/02.png', id: 2}, {imageSource: 'media/03.png', id: 3}]
    }
  ];

  onPreview(mediaItem){
    this.preview.emit(mediaItem);
  }
}
