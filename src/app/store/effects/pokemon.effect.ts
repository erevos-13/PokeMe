import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import * as ActionPokemon from '../actions/pokemon.actions';
import { PokemonDTO } from '../entitys/pokemon.entity';
import { PekomonServices } from '../services/pokemon.service';

@Injectable()
export class PokemonEffects {
 
  loadPokemon$ = createEffect(() => this.actions$.pipe(
    ofType(ActionPokemon.GET_POKEMON_START),
    switchMap(() => this.pokemonSrv.getPokememon(151)
      .pipe(
        map(pokemon => {
          const pokemon_: PokemonDTO[] = [];
          pokemon.results.forEach((element,index )=> {
            pokemon_.push({
              id: index,
              url: element.url,
              name: element.name,
              image: `https://pokeres.bastionbot.org/images/pokemon/${index}.png`
            })
          });
            return ActionPokemon.getPokemonsSuccess({payload: pokemon_});
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