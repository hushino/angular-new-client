import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  addForm: FormGroup;

  cookieValue = 'UNKNOWN';

  constructor(private dataService: DataService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder,
    private cookieService: CookieService ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      User: [] 
    })
    this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
  }

  checkUser() {
    this.dataService.getUser(this.addForm.value)
      .subscribe(user =>
        this.router.navigate(['animes']));
  }
}
