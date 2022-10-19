import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = [];

  constructor(PhotoService: PhotoService){

    PhotoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos)

  }

}
