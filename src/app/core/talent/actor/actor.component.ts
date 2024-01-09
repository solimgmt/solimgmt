import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/shared/resources/objects';
import { DataService } from 'src/app/shared/services/data-service.service';
import { SubHeaderService } from 'src/app/shared/services/sub-header.service';

@Component({
  selector: 'soli-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  actors: Actor[] = []

  constructor(private subHeaderService: SubHeaderService,  private dataService: DataService) { }

  ngOnInit(): void {
    this.subHeaderService.setSubHeaderTitle("Soli Actors");
    this.actors = this.dataService.getActors();
  }

}
