import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import {CategoryListPipe} from './category-list.pipe';
import {PopupComponent} from './popup.component';
import {ImageSwitcherComponent} from './imageswitcher.component';
import {ZoomDirective} from './zoom.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    PopupComponent,
    ImageSwitcherComponent,
    ZoomDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}