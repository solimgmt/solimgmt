import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/shared/resources/objects';
import { DataService } from 'src/app/shared/services/data-service.service';
import { SubHeaderService } from 'src/app/shared/services/sub-header.service';

@Component({
  selector: 'soli-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})

export class ModelComponent implements OnInit {

  models : Model[] = []

  constructor(private subHeaderService: SubHeaderService, private dataService: DataService) { }

  ngOnInit(): void {
    this.subHeaderService.setSubHeaderTitle("Soli Models");
    this.models = this.dataService.getModels();
  }

}
