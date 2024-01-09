import { Component, OnInit } from '@angular/core';
import { SubHeaderService } from '../../services/sub-header.service';

@Component({
  selector: 'soli-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  public subHeader : string = "Sub Header";

  constructor(private subHeaderService: SubHeaderService) { }

  ngOnInit(): void {
    this.subHeaderService.getSubHeaderTitle().subscribe((val) => {
      this.subHeader = val;
    });
  }

}
