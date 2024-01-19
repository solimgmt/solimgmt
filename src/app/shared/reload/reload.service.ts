import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  RELOAD : string = 'reload'

  constructor() { }

  reload(): void {
    if (!localStorage.getItem(this.RELOAD)) { 
      localStorage.setItem(this.RELOAD, 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem(this.RELOAD) 
    } 
  }
}
