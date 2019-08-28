import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(private spotify: SpotifyService) { }
  loading: boolean;
  artistas: any[] = [];

  buscar(termino: string) {
    this.loading = true;
    console.log(termino);
    this.spotify.getArtists( termino ).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }

}
