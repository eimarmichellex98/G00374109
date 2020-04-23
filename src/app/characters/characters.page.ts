import { Component, OnInit } from '@angular/core';
import { CharactermanagerService } from "../charactermanager.service"
import { LoadingController } from "@ionic/angular"

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
  constructor(private CharService: CharactermanagerService, private LoadingController: LoadingController) { }

  async ngOnInit() {
    const Loader = await this.LoadingController.create({
      message: "Loading...",
      backdropDismiss: true
    })
    Loader.present();

    this.CharService.fetchCharacters().subscribe(data=>{
      this.CharService.Characters = data
      Loader.dismiss()
    });
  }
}
