import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ManagerService } from '../service/manager.service';
import { Config } from '../config/config';


@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.scss', '../app.component.scss']
})
export class CardManagerComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  characterDetail = {};

  constructor(
    private managerService: ManagerService,
  ) { }

  ngOnInit() {
    this.updateCharacter();
    this.validateFilterReq();
  }

  updateCharacter(reqParam?: string) {
    this.managerService.getManulalCharacter(reqParam)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.characterDetail = res;
      }, err => {
       throw err;
      });
  }

  validateFilterReq() {
    this.managerService.characterFilterEvent.subscribe(data => {
      let reqParam = '';
      for (const char of data) {
        reqParam += `${char.type}=${char.value}&`
      }
      reqParam = reqParam && reqParam.substring(0, reqParam.length-1)
      this.updateCharacter(reqParam);
    });
  }

  sortArr(event: Event) {
    this.characterDetail['results'] = this.characterDetail['results'].reverse();
  }

}
