import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})

export class PopupComponent{
  @Input() mediaItem;
  @Output() close = new EventEmitter();


  onClosePopup() {
    this.close.emit(true);
  }
}