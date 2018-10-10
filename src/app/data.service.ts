import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Anime } from './anime';
import { Home } from './home';
import { AnimeById } from './animeById';
import { EpisodeById } from './episodeById';
import { TagByid } from './tagById';
import { User } from './user'; 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
 
  getUser(nameofuser: number | string): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/login/l/' + nameofuser);
  }
  addAnime(anime: Anime) {
    //const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8080/v1/animes/',anime) 
  }
  // implementar el paginado con la url correcta
  getAll(): Observable<Anime[]> {
    return this.http.get<Anime[]>('http://localhost:8080/v1/animes/');
  }
  getAnimeById(id: number | string): Observable<AnimeById[]> {
    return this.http.get<AnimeById[]>('http://localhost:8080/v1/animes/' + id);
  }
  getHome(): Observable<Home[]> {
    return this.http.get<Home[]>('http://localhost:8080/v1/');
  }

  // --------episodes----------
  getEpisodeById(id: | string): Observable<EpisodeById[]> {
    return this.http.get<EpisodeById[]>('http://localhost:8080/' + id);
  }
  getUniqueEpisode(animeId: number, episodeId: number): Observable<EpisodeById[]> {
    return this.http.get<EpisodeById[]>('http://localhost:8080/' + animeId + '/' + episodeId);
  }
  // ------------tags-------------
  getTagsByGenre(id: number): Observable<TagByid[]> {
    return this.http.get<TagByid[]>('http://localhost:8080/tag/getAllAnimeByGenre/' + id);
  }
  getTagsOfAnime(id: number): Observable<TagByid[]> {
    return this.http.get<TagByid[]>('http://localhost:8080/tag/' + id);
  }
}
