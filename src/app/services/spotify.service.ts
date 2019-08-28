import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDTXiWAYpC3_u3lTBzBshmxb3FVfAIjs1TMBGsHMHdrCNWC0NLmuxmwRq3-ZrQ3hpCJiyf3KI8TlOWnEJw'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQDTXiWAYpC3_u3lTBzBshmxb3FVfAIjs1TMBGsHMHdrCNWC0NLmuxmwRq3-ZrQ3hpCJiyf3KI8TlOWnEJw'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}


