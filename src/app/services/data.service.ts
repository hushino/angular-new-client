import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Anime } from '../models/anime';
import { Home } from '../models/home';
import { AnimeById } from '../models/animeById';
import { EpisodeById } from '../models/episodeById';
import { TagByid } from '../models/tagById';
import { User } from '../models/user';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getUser(user: User ) {
    const headerss = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    //let headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/x-www-form-urlencoded'); , withCredentials: true ,responseType: 'text' 
    return this.http.post<any>('http://localhost:8080/login/check/', user, {  headers: headerss})
  }

  addAnime(anime: Anime) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post('http://localhost:8080/v1/animes/', anime, { headers })
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
