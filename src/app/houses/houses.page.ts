import { Component, OnInit } from '@angular/core';
import { HousemanagerService } from "../housemanager.service"
import { LoadingController } from "@ionic/angular"

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.scss'],
})
export class HousesPage implements OnInit {
  private houses: Object;

  constructor(private HousemanagerService: HousemanagerService, private LoadingController: LoadingController) { }

  async ngOnInit(){
    this.refresh()
  }

  //Could be bit of data, let user refresh if didn't work
  async refresh(){
    const Loader = await this.LoadingController.create({
      message: "Loading...",
      backdropDismiss: true
    })
    Loader.present();

    this.HousemanagerService.getHouses().subscribe((data)=>{
      this.houses = data;
      Loader.dismiss();
    },(_)=>{
      Loader.dismiss()
    })
  }
}
