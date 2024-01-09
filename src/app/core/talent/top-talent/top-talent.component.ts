import { Component, OnInit } from '@angular/core';
import { Talent } from 'src/app/shared/resources/objects';
import { DataService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'soli-top-talent',
  templateUrl: './top-talent.component.html',
  styleUrls: ['./top-talent.component.css']
})
export class TopTalentComponent implements OnInit {

  elites : Talent[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.elites = this.dataService.getElites();
  }

}
