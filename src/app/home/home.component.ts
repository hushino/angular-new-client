import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  homes = [];

  episodeId = [];

  AnimeList2 = [];

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getHome().subscribe(data => {
      this.homes = data;
    });
  /*   this.route.params.subscribe(params => {
       this.dataService.getUniqueEpisode(params['id'],params['id']).subscribe(data => {
         this.episodeId = data
       })
     });  */

  }
  onShowEpisode(id: number, id2: number) {
    /* this.dataService.getUniqueEpisode(id, id2).subscribe(datas => {
      this.AnimeList2 = datas;
      console.log(datas)
    }) */
    this.router.navigate(['', id, id2]);
  }

}
