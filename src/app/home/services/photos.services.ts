import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Photo } from "../interfaces/photo.interface";

@Injectable()
export class PhotosService {
    constructor(private httpClient: HttpClient) { }

    public getPhotos(): Observable<Array<Photo>> {

        return this.httpClient.get<Array<Photo>>("https://jsonplaceholder.typicode.com/photos?_limit=10");
    }


}
