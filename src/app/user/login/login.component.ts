import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _user: UserService, private _router: Router) { }

  ngOnInit() {
  }
  loginUser() {
    this._user.loginUser(this.loginUserData)
      .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/events']);
      },
      err => console.log(err)
    );
  }
}
