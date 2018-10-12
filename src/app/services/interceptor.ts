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

@Injectable()
export class interceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (req.responseType == 'json') {
			req = req.clone({ responseType: 'text' });

			return next.handle(req).pipe(map(response => {
				if (response instanceof HttpResponse) {
					response = response.clone<any>({ body: JSON.parse(response.body) });
				}
				return response;
			}));
		}
		return next.handle(req);
	}
	// providers: [CookieService,{provide: HTTP_INTERCEPTORS,useClass:interceptor,multi:true}]
}