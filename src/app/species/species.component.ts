import { Component, OnInit } from '@angular/core';
import { Config } from '../config/config';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {
  config = Config;
  constructor() { }

  ngOnInit() {
  }

}
