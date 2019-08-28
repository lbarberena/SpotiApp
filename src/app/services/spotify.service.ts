import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQBzhqipGx-qrjGx1OFl7tRdYwyOaSC-btPbAu_GB0rg0KxZDxRGMB7yZSd-M-28mcswBDtdsbjMb2ttRtE'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    .pipe( map( data => data['albums'].items ));
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQBzhqipGx-qrjGx1OFl7tRdYwyOaSC-btPbAu_GB0rg0KxZDxRGMB7yZSd-M-28mcswBDtdsbjMb2ttRtE'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    .pipe( map(data => data['artists'].items ));
  }
}


