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
  email: any;

  dataRegistrazione: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.email = JSON.parse(localStorage.getItem('user')).email;
    console.log(JSON.parse(localStorage.getItem('user')).email);
    this.prendiProfilo(this.email);
  }

  prendiProfilo(email: string) {
    // this.userService.getUser(email).pipe(take(1)).subscribe({
    //   next: res => {
    //     this.user = res;
    //     this.dataRegistrazione = moment(this.user.createdAt).locale('it').format('dddd DD MMMM YYYY')
    //   }
    // })
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
