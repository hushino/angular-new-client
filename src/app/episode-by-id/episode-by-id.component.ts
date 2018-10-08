import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
declare var jwplayer: any;
@Component({
  selector: 'app-episode-by-id',
  templateUrl: './episode-by-id.component.html',
  styleUrls: ['./episode-by-id.component.css']
})
export class EpisodeByIdComponent implements OnInit {


  ids = [];
  loadAPI: Promise<any>;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getUniqueEpisode(params['id'], params['id2']).subscribe(data => {
        this.ids = data;
        console.log(data);
      });
    });

    /* setTimeout(() => {
       this.loadAPI = new Promise((resolve) => {
         this.loadScript('../assets/js/jwplayer.js');
       });
     this.loadAPI = new Promise((resolve) => {
       this.loadJwplayer();
     });
     }, 100);  */
  }
// https://content.jwplatform.com/libraries/bfIbW5Pe.js
  // tslint:disable-next-line:use-life-cycle-interface
  async ngAfterViewInit() {
    await this.loadScript('https://content.jwplatform.com/libraries/bfIbW5Pe.js');
    setTimeout(() => {
        this.loadJwplayer();
    }, 600);
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  loadJwplayer() {
    jwplayer('player').setup({
      // playlist: 'https://cdn.jwplayer.com/v2/media/8L4m9FJB',
      file: '../assets/videos/Overlord 7.mp4',
      image: '../assets/images/asobi.jpg',
      width: '100%',
      height: '100%',
      aspectratio: '16:9',
      mute: false,
      autostart: false,
      primary: 'html5',
      preload: 'metadata',
      playbackRateControls: [0.25, 1, 1.25, 2],
    });
  }

}
