import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  text: string = 'current value dashboard';

  constructor() {}

  ngAfterViewInit(){
    console.log("ngAfterViewInit do pai");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit do pai");
  }
}


