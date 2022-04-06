import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../views/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isSticky: boolean = false;
  constructor(
    private router: Router,
    private generalServices: GeneralService,
  ) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }

  }


  to(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  isLogin(): boolean {
    if (localStorage.getItem("id") != null && localStorage.getItem("pass") != null) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.clear();
    this.generalServices.foodInfo = null;
    this.generalServices.ticketsInfo = null;
    this.router.navigateByUrl('/home')
  }
}
