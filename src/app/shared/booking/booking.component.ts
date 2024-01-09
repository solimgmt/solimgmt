import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../resources/objects';

@Component({
  selector: 'soli-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  isBookingValid : boolean = true;
  bookingErrorMessage : string = "";
  bookingTypes : string[] = ["fullday","halfday","hourly"]
  date : Date = new Date();
  booking : Booking = {
    type: undefined,
    startHour: undefined,
    startMin: undefined,
    endHour: undefined,
    endMin: undefined,
    date: this.date
  }
  public bookingTitle : string = "Book";

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.date = new Date();
    this.bookingService.getBookingTitle().subscribe((val) => {
      this.bookingTitle = val;
    });
    this.booking = {
      type: undefined,
      startHour: undefined,
      startMin: undefined,
      endHour: undefined,
      endMin: undefined,
      date: this.date
    };
  }

  bookTalent(): void {
    this.validateBooking();
    if(this.isBookingValid)
    {
      console.log("Valid Booking");
    }
  }

  validateBooking() : void {
    if(this.booking.type == undefined || this.booking.startHour == undefined || this.booking.endHour == undefined || this.booking.startMin == undefined || this.booking.endMin == undefined)
    {
      this.bookingErrorMessage = "Please fill all the values for booking."
      this.isBookingValid = false;
      return;
    }
    if(this.booking.type != undefined && this.bookingTypes.indexOf(this.booking.type) == -1)
    {
      this.bookingErrorMessage = "Please select valid booking time."
      this.isBookingValid = false;
      return;
    }
    if(parseInt(this.booking.startHour+"") > parseInt(this.booking.endHour+""))
    {
      this.bookingErrorMessage = "Start time cannot be after end time."
      this.isBookingValid = false;
      return;
    }
    if(parseInt(this.booking.startHour+"") === parseInt(this.booking.endHour+"") && parseInt(this.booking.startMin+"") > parseInt(this.booking.endMin+""))
    {
      this.bookingErrorMessage = "Start time cannot be after end time."
      this.isBookingValid = false;
      return;
    }
    this.isBookingValid = true;
    this.bookingErrorMessage = "";
  }

}
