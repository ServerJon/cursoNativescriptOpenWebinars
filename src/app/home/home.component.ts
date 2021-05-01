import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ObservableArray } from '@nativescript/core'
import { Photo } from './interfaces/photo.interface';
import { PhotosService } from './services/photos.services';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _dataPhotos: ObservableArray<Photo>;

  constructor(private photosService: PhotosService) {
    // Use the component constructor to inject providers.

    this._dataPhotos = new ObservableArray();
  }

  ngOnInit(): void {
    // Init your component properties here.

    this.listPhotos();
  }

  get dataPhotos(): ObservableArray<Photo> {
      return this._dataPhotos;
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  private listPhotos(): void {

    // this._dataPhotos = new ObservableArray(this._datos);
    this.photosService.getPhotos().subscribe(
        (data) => {
            data.forEach(element => {
                this._dataPhotos.push(element);
            })
        }
    )
  }
}
