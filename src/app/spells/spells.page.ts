import { Component, OnInit } from '@angular/core';
import { SpellserviceService } from '../spellservice.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.page.html',
  styleUrls: ['./spells.page.scss'],
})
export class SpellsPage implements OnInit {

  constructor(private SpellManager: SpellserviceService) { }

  ngOnInit() {
    this.SpellManager.fetchSpells().subscribe((spells)=>{
      this.SpellManager.Spells = spells;
    })
  }

}
