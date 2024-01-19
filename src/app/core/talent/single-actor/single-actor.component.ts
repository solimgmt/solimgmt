import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReloadService } from 'src/app/shared/reload/reload.service';
import { Actor } from 'src/app/shared/resources/objects';
import { BookingService } from 'src/app/shared/services/booking.service';
import { DataService } from 'src/app/shared/services/data-service.service';
import { SubHeaderService } from 'src/app/shared/services/sub-header.service';

@Component({
  selector: 'soli-single-actor',
  templateUrl: './single-actor.component.html',
  styleUrls: ['./single-actor.component.css']
})
export class SingleActorComponent implements OnInit {

  id : string | null = "";
  actor : Partial<Actor> = {};

  constructor(private subHeaderService: SubHeaderService, private route: ActivatedRoute, private dataService: DataService, private bookingService: BookingService, private reloadService: ReloadService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.actor = this.dataService.getActor(this.id+"");
    this.subHeaderService.setSubHeaderTitle(this.actor.brand+"");
    this.bookingService.setBookingTitle("Book " +this.actor.brand);
    this.reloadService.reload()
  }

}
