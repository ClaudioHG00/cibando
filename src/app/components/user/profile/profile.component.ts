import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { take } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  email = localStorage.getItem('email');

  dataRegistrazione: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser(this.email).subscribe({
      next: (res) => {
        console.log(res);
        this.user = res;
        if (this.user.note == null) {
          this.user.note = 'Nota non trovata';
        }
      },
      error: (e) => console.log(e)
    });
  }

  prendiProfilo(email: string) {
    this.userService.getUser(email).pipe(take(1)).subscribe({
      next: res => {
        this.user = res;
        this.dataRegistrazione = moment(this.user.createdAt).locale('it').format('dddd DD MMMM YYYY')
      }
    })
  }

}
