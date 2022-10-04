import { Component, OnInit } from '@angular/core';
import { format } from 'mysql2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router  } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:any

  constructor() { }

  ngOnInit(): void {
  }

}
