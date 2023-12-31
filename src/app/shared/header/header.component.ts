import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck{

  user: any;
  ruolo: any;

  constructor(
    public authService: AuthService,
    private router: Router,
    private userService: UserService,
     ) {
      this.userService.ruoloUtente.subscribe(res => this.ruolo = res);
     }

  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.ruolo = JSON.parse(localStorage.getItem('user')).role;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('user/login');
  }

}
