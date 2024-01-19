import { Component, OnInit } from '@angular/core';
import { ReloadService } from 'src/app/shared/reload/reload.service';

@Component({
  selector: 'soli-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private reloadService: ReloadService) { }

  ngOnInit(): void {
    this.reloadService.reload()
  }

}
