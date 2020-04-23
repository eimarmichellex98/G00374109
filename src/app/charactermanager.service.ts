import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactermanagerService {
  public Characters: any;

  constructor( private HttpClient: HttpClient ) { }

  fetchCharacters(){
    return this.HttpClient.get("https://www.potterapi.com/v1/characters?key=$2a$10$OhU3Z/cnMrTfukI2bzp2gO5HWuLRiHNDIl5ssDaZRNqOyBwN7Xtu2");
  }
}
