import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-filter',
  templateUrl: './selected-filter.component.html',
  styleUrls: ['./selected-filter.component.scss']
})
export class SelectedFilterComponent implements OnInit {
  removable = true;
  constructor() { }

  ngOnInit() {
  }

}
