import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from './get.data.service';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  constructor(
    private getDataservice: GetDataService,
    private _rout: ActivatedRoute,
    private _titleService: Title
  ) {}

  user: any;
  editing = false;
  errorMessage = '';

  setEditing() {
    this.editing = !this.editing;
  }

  finishEditUser(newFirstName: any, newLastName: any, newEmail: any) {
    this.errorMessage = '';
    if (newFirstName.match(/^[A-ZА-Я]/) && newFirstName.length > 1) {
      this.user.first_name = newFirstName;
    } else {
      console.log('not last_name');
      this.errorMessage = 'Имя введено неверно';
      return;
    }

    if (newLastName.match(/^[A-ZА-Я]/) && newLastName.length > 1) {
      this.user.last_name = newLastName;
    } else {
      console.log('not last_name');
      this.errorMessage = 'Фамилия введена неверно';
      return;
    }

    if (
      newEmail.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      this.user.email = newEmail;
    } else {
      console.log('not email');
      this.errorMessage = 'Email введен неверно';
      return;
    }

    this.getDataservice.putData(this.user).subscribe((res) => {
    
    });
  }

  ngOnInit(): void {
    this._rout.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.getDataservice.getDataMethod(params.get(`id`)!)
        )
      )
      .subscribe((res) => {
        this.user = res['data' as keyof typeof res];
      });
  }
}
