import { Component, OnInit } from '@angular/core';
import { SubHeaderService } from 'src/app/shared/services/sub-header.service';

@Component({
  selector: 'soli-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private subHeaderService: SubHeaderService) { }

  ngOnInit(): void {
    this.subHeaderService.setSubHeaderTitle("Get in touch");
  }

}
