import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  text: string = 'current value dashboard';
  router = inject(Router);

  constructor() {}

  ngAfterViewInit(){
    console.log("ngAfterViewInit do pai");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit do pai");
  }

  navigateTo(page: string) {
    this.router.navigateByUrl(page);
  }
}


