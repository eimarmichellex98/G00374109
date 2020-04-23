import { Component } from '@angular/core';
import { HatmanagerService } from "../hatmanager.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pages = [
    {
      name: "Sorting hat",
      router: "/hat"
    },
    {
      name: "Spells",
      router: "/spells"
    },
    {
      name: "Characters",
      router: "/characters"
    },
    {
      name: "Houses",
      router: "/houses"
    }
  ];

  colors = {
    "Gryffindor": "#ff3900",
    "Ravenclaw": "#007eff",
    "Hufflepuff": "#ffd500",
    "Slytherin": "#2ab700",
  }

  constructor(private HatmanagerService: HatmanagerService) {}
}
