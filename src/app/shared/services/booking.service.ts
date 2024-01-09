import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public bookingTitle  = new BehaviorSubject("Book");

  constructor() { }

  public setBookingTitle(subheader: string): void {
    this.bookingTitle.next(subheader);
  }

  public getBookingTitle() {
    return this.bookingTitle;
  }
}
