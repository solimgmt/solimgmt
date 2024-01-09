import { Component, OnInit } from '@angular/core';
import { SubHeaderService } from 'src/app/shared/services/sub-header.service';

@Component({
  selector: 'soli-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  constructor(private subHeaderService: SubHeaderService) { }

  ngOnInit(): void {
    this.subHeaderService.setSubHeaderTitle("Work with us");
  }

}
