import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getPokemons, GET_POKEMON_SUCCESS } from '../store/actions/pokemon.actions';
import { selectPokemon } from '../store/selector/pokemon.selector';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
    private store: Store
  ) {
    
  }

  ngOnInit() {
    this.store.dispatch(getPokemons());
    const pokemen_ = this.store.pipe(select(selectPokemon));
    console.log('[select pokemon]', pokemen_);
  }

}
