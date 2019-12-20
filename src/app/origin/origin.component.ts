import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';
import { ManagerService } from '../service/manager.service';


@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss']
})
export class OriginComponent implements OnInit {
  config = Config;
  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.manageOriginList();
  }

  manageOrigin(event: Event, origin) {
    this.managerService.filterEvent.emit(origin);
  }

  manageOriginList() {
    this.managerService.checkboxEvent.subscribe(data => {
      for (let i = 0; i < this.config.origin.length; i++) {
        if (data.id === this.config.origin[i].id) {
          this.config.origin[i].ischecked = false;
        }
      }
    });
  }

}
