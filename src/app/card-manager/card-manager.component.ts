import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// import { ManagerService } from '../service/manager.service';
// import { AbcService } from '../service/abc.service';


@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.scss', '../app.component.scss']
})
export class CardManagerComponent implements OnInit {

  private ngUnsubscribe = new Subject();

  constructor(
    // private managerService: ManagerService,
    // private abcService: AbcService,
  ) { }

  ngOnInit() {
    this.updateCharacter();
  }

  updateCharacter() {
    console.log('hjdbfhjswbhjbfgver');
    // const test = this.abcService.testing11();
    // console.log('******* ', test);
      // .pipe(takeUntil(this.ngUnsubscribe))
      // .subscribe(res => {
      //  console.log('========= ', res);
      // }, err => {
      //  console.log('********* ', err);
      // });

  }

}
