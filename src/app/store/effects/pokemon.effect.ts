import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as ActionPokemon from '../actions/pokemon.actions';
import { PekomonServices } from '../services/pokemon.service';

@Injectable()
export class PokemonEffects {
 
  loadPokemon$ = createEffect(() => this.actions$.pipe(
    ofType(ActionPokemon.GET_POKEMON_START),
    switchMap(() => this.pokemonSrv.getPokememon(151)
      .pipe(
        map(pokemon => {
            return ActionPokemon.getPokemonsSuccess({payload: pokemon});
        }),
        catchError(() => EMPTY)
      ))
    )
  ,{dispatch: true});
 
  constructor(
    private actions$: Actions,
    private pokemonSrv: PekomonServices
  ) {}
}