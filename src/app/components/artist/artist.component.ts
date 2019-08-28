import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent  {
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor( private route: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe( params => {
      this.getArtist( params['id']);
      this.getTopTracks( params['id']);
      this.loading = false;
  });
  }

  getArtist( id: string ) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks( id: string ){
    this.spotify.getTopTracks( id ).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
