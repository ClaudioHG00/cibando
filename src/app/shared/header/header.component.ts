import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: any;

  ruolo: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private userService: UserService,
     ) {}

  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      // this.onGetUser(this.user.email); Problema di ciclo infinito, diversamente dal componente (dove viene avviato 1 volta)
      this.onGetUser();
    }
  }

  // onGetUser(email): void {
  //   this.userService.getUser(email).pipe(take(1)).subscribe({
  //     next: (res) => {
  //       this.ruolo = res.role;
  //     },
  //     error: err => console.log(err)
  //   })
  // }

  onGetUser(): void {
    this.userService.ruoloUtente.subscribe({
      next: (res: any) => {
        this.ruolo = res;
      },
      error: err => console.log(err)
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
