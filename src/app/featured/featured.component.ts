import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Image } from '@nativescript/core'

import * as camera from "@nativescript/camera";

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
  styles: [`
      Button {
          background-color: blue;
          color: white;
      }
  `]
})
export class FeaturedComponent implements OnInit {

  public imagePhoto: Image;

  constructor() {
    // Use the component constructor to inject providers.

    this.imagePhoto = new Image();
    this.imagePhoto.src = "res://logoopenwebinars";
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  public onTap(): void {
    camera.requestPermissions().then(
        () => {
            camera.takePicture().then(
                (imageAsset) => {
                    this.imagePhoto.src = imageAsset;
                }
            )
        }
    );
  }
}
