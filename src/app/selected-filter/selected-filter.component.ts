import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../service/manager.service';


@Component({
  selector: 'app-selected-filter',
  templateUrl: './selected-filter.component.html',
  styleUrls: ['./selected-filter.component.scss']
})
export class SelectedFilterComponent implements OnInit {
  removable = true;
  selectedFilter = [];
  constructor(
    private managerService: ManagerService
  ) { }

  ngOnInit() {
    this.appendFilters();
  }

  appendFilters() {
    this.managerService.filterEvent.subscribe(data => {
      if (data && data.ischecked) {
        this.selectedFilter.push(data);
      } else {
        this.selectedFilter = this.selectedFilter.filter((item) => item.id !== data.id);
      }
      this.filterCharacterData();
    });
  }

  removeCharacter(data) {
    this.selectedFilter = this.selectedFilter.filter((item) => item.id !== data.id);
    this.managerService.checkboxEvent.emit(data);
    this.filterCharacterData();
  }

  filterCharacterData() {
    this.managerService.characterFilterEvent.emit(this.selectedFilter);
  }

}
