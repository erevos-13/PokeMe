import { map } from 'rxjs/operators';
import { PekomonServices } from './../../store/services/pokemon.service';
import { PokemonDTO, IInfo } from './../../store/entitys/pokemon.entity';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectByIdPokemon, selectPokemonEntities } from 'src/app/store/selector/pokemon.selector';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.page.html',
  styleUrls: ['./pokemon-info.page.scss'],
})
export class PokemonInfoPage implements OnInit {
  pokemonId;
  pokemonSelected: IInfo;
  image: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private pokemonSrv: PekomonServices
  ) { }

  ngOnInit() {
    this.pokemonId = Number(this.route.snapshot.params['id']);
    console.log('[Pokemon Info]', this.pokemonId);
    // this.store.pipe(select(selectByIdPokemon, {id: this.pokemonId})).subscribe((_pok) => console.log('[Pokemon selected]',_pok))
    this.pokemonSrv.getPokemonInfo(this.pokemonId).pipe(
      map((pokemon_) => {
        console.log('[Pokemon Selected]', pokemon_);
        pokemon_.image = `https://pokeres.bastionbot.org/images/pokemon/${this.pokemonId}.png`
        return pokemon_;
      })
    ).subscribe((pokemons) => this.pokemonSelected= pokemons );

  }

}
