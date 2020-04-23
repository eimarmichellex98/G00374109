import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpellserviceService {
  public Spells: any;

  constructor( private HttpClient: HttpClient ) { }

  fetchSpells(){
    return this.HttpClient.get("https://www.potterapi.com/v1/spells?key=$2a$10$OhU3Z/cnMrTfukI2bzp2gO5HWuLRiHNDIl5ssDaZRNqOyBwN7Xtu2")
  }
}
