import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptHttpClientModule } from "@nativescript/angular";

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

import { PhotosService } from './services/photos.services';

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, NativeScriptHttpClientModule, NativeScriptUIListViewModule],
  declarations: [HomeComponent],
  providers: [PhotosService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
