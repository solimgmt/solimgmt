import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/shared/resources/objects';
import { BookingService } from 'src/app/shared/services/booking.service';
import { DataService } from 'src/app/shared/services/data-service.service';
import { SubHeaderService } from 'src/app/shared/services/sub-header.service';

@Component({
  selector: 'soli-single-model',
  templateUrl: './single-model.component.html',
  styleUrls: ['./single-model.component.css']
})
export class SingleModelComponent implements OnInit {

  id : string | null = "";
  model : Partial<Model> = {};

  constructor(private subHeaderService: SubHeaderService, private route: ActivatedRoute, private dataService: DataService, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.model = this.dataService.getModel(this.id+"");
    this.subHeaderService.setSubHeaderTitle(this.model.brand+"");
    this.bookingService.setBookingTitle("Book " +this.model.brand);
  }
}
