import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-genre-by-id',
  templateUrl: './genre-by-id.component.html',
  styleUrls: ['./genre-by-id.component.scss']
})
export class GenreByIdComponent implements OnInit {

  genreId = [];
  constructor(private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getTagsByGenre(params['id']).subscribe(data => {
        this.genreId = data;
        console.log(data);
      });
    });
  }
}
