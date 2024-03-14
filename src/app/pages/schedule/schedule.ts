import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
  styleUrls: ['./schedule.scss'],
})
export class SchedulePage implements OnInit {
  alertButtons = ['Okay', 'go back'];
  constructor(private router: Router) { }

  ngOnInit() {
    
  }



}
