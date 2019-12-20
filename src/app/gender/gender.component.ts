import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';
import { ManagerService } from '../service/manager.service';


@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  config = Config;
  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.manageGenderList();
  }

  manageGender(event: Event, gender) {
    this.managerService.filterEvent.emit(gender);
  }

  manageGenderList() {
    this.managerService.checkboxEvent.subscribe(data => {
      for (let i = 0; i < this.config.gender.length; i++) {
        if (data.id === this.config.gender[i].id) {
          this.config.gender[i].ischecked = false;
        }
      }
    });
  }

}
