import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  constructor(private _user: UserService, private _router: Router) { }

  ngOnInit() {
  }
  registerUser() {
    this._user.registerUser(this.registerUserData).
    subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/events']);
      },
      err => console.log(err)
    );
  }
}
