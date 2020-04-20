import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }


  /**
   * 
   * @param nav 
   */
  link(nav) {
    this.router.navigateByUrl(nav);
  }

}
