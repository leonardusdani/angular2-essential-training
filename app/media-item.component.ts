import { Component, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() preview = new EventEmitter();
  

  onDelete() {
    
  }

  onPreview(){
    this.preview.emit(false);
  }
}
