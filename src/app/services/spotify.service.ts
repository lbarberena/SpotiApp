import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQA2u4-CgsF047brkDnxHVon4Wydc3h2LdHbH6tEG6_vatGOL72k7MRnG7ZY5VRupZhZlW2FE8DvLypHYt4'
    });

    return this.http.get(url, { headers } );
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe( map( data => data['artists'].items ));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }
}


