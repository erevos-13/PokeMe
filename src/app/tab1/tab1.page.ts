import { getMorePokemons } from './../store/actions/pokemon.actions';
import { PokemonDTO } from './../store/entitys/pokemon.entity';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPokemons, GET_POKEMON_SUCCESS } from '../store/actions/pokemon.actions';
import { selectAllPokemon, selectPokemonEntities, selectPokemonIds } from '../store/selector/pokemon.selector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pokemen$: Observable<PokemonDTO[]>;
  pokemenIds$
  limit: number = 10;
  offset: number = 0;
  constructor(
    private store: Store,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    this.store.dispatch(getPokemons({payload: {limit:this.limit, offset: this.offset}}));
    this.pokemen$ = this.store.pipe(select(selectAllPokemon))
  }

  onLoadMore() {
    this.limit = this.limit + 10;
    this.store.dispatch(getMorePokemons({payload: {limit:this.limit, offset: this.offset}}));
  }

  onPokemon(pokemon: PokemonDTO) {
    this.router.navigate(['pokemon-info',pokemon.id]);
  }
}
