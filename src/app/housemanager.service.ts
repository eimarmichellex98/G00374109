import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HousemanagerService {

  constructor(private HttpClient: HttpClient) { }


  getHouses(): Observable<Object>{
    return this.HttpClient.get("https://www.potterapi.com/v1/houses?key=$2a$10$OhU3Z/cnMrTfukI2bzp2gO5HWuLRiHNDIl5ssDaZRNqOyBwN7Xtu2");
  }
}
