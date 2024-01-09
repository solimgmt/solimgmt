import { Component, OnInit } from '@angular/core';
import { SubHeaderService } from 'src/app/shared/services/sub-header.service';

@Component({
  selector: 'soli-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private subHeaderService: SubHeaderService) { }

  ngOnInit(): void {
    this.subHeaderService.setSubHeaderTitle("The agency");
  }

}
