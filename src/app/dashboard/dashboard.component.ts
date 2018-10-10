import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  addForm: FormGroup;

  constructor(private dataService: DataService, private router: Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      title: [] 
    })
  }

  addOrEdit() {
    this.dataService.addAnime(this.addForm.value)
      .subscribe(anime =>
        this.router.navigate(['animes']));
  }
}
