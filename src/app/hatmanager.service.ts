import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Storage } from "@ionic/storage";


@Injectable({
  providedIn: 'root'
})
export class HatmanagerService{
  currentHouse: String;

  constructor(private HTTPClient: HttpClient, private Storage: Storage) { }

  getRandomHouse(): Observable<Object> {
    return this.HTTPClient.get("https://www.potterapi.com/v1/sortinghat");
  }

  saveHouse(house?: String){
    this.Storage.set("house", house || this.currentHouse )
  }
}
