import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email :new FormControl('',[Validators.required]),
      mobile :new FormControl('',[Validators.required])
      // Tel:new FormControl('',Validators.required)
    }) 
  
    console.log(this.user);
    

  }

  get login(){
    return this.user.controls
  
  }
  submit() {
    if (this.user.invalid) {
      this.user.markAllAsTouched();
    } else {
      console.log('ssssssssssssss', this.user.value);
      this.router.navigate(['school'])
}
  }
}