import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { HttpClient, HttpHeaders,HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  cookieValue = 'UNKNOWN';

  constructor(private dataService: DataService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder,
    private cookieService: CookieService,private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      User: []
    })
    //this.cookieService.set( 'Test', 'Hello World' );
    //this.cookieValue = this.cookieService.get('silogeado');
    //localStorage.setItem(this.cookieValue, this.cookieValue);

  }
 


  checkUser() {
    this.dataService.getUser(this.form.value)
      .subscribe(token => {
        localStorage.setItem('token', token.text());
        this.router.navigate(['animes']);
        
      })
  }

}
