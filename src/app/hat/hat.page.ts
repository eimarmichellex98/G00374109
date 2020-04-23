import { Component, OnInit } from '@angular/core';
import { HatmanagerService } from "../hatmanager.service";
import { ToastController } from "@ionic/angular";
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-hat',
  templateUrl: './hat.page.html',
  styleUrls: ['./hat.page.scss'],
})
export class HatPage implements OnInit {

  constructor(private HatService: HatmanagerService, private tController: ToastController) { }

  ngOnInit() {
  }


  private async buttonClick(){
    if(!isNullOrUndefined(this.HatService.currentHouse)){
      const toast = await this.tController.create({
        message: `You already belong to a house! (${this.HatService.currentHouse})`,
        duration: 2000,
        color: "warning"
      });

      toast.present()
      return;
    }

    this.HatService.getRandomHouse().subscribe( (JSONData) =>{
      this.HatService.currentHouse = JSONData.toString();
      this.HatService.saveHouse(JSONData.toString());
    })
  }
}
