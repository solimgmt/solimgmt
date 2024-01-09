import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubHeaderService {

  public subHeaderTitle  = new BehaviorSubject("Soli Mgmt");

  constructor() { }

  public setSubHeaderTitle(subheader: string): void {
    this.subHeaderTitle.next(subheader);
  }

  public getSubHeaderTitle() {
    return this.subHeaderTitle;
  }
}
