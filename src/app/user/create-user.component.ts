import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ToastrNotificationService } from '../services/toastr-notification.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  constructor(private notificationService: ToastrNotificationService) {
  }

  ngOnInit() {
      this.userForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  onSubmit(): void {
    this.notificationService.success(JSON.stringify(this.userForm.value));
    console.log(this.userForm.value);
  }

}
