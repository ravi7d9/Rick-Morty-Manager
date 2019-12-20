import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';
import { ManagerService } from '../service/manager.service';


@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  config = Config;
  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.manageSpeciesList();
  }

  manageSpecies(event: Event, specie) {
    this.managerService.filterEvent.emit(specie);
  }

  manageSpeciesList() {
    this.managerService.checkboxEvent.subscribe(data => {
      for (let i = 0; i < this.config.species.length; i++) {
        if (data.id === this.config.species[i].id) {
          this.config.species[i].ischecked = false;
        }
      }
    });
  }

}
