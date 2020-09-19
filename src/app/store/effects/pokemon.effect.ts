import { PokemonDTO } from './../entitys/pokemon.entity';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, zip } from 'rxjs';
import { map, mergeMap, catchError, switchMap, zipAll } from 'rxjs/operators';
import * as ActionPokemon from '../actions/pokemon.actions';
import { PekomonServices } from '../services/pokemon.service';

@Injectable()
export class PokemonEffects {

  loadPokemon$ = createEffect(() => this.actions$.pipe(
    ofType(ActionPokemon.GET_POKEMON_START),
    switchMap(({ payload }: any) => this.pokemonSrv.getPokemonAndInfo(payload.limit, payload.offset)
      .pipe(
        map((pokemon) => {
          return ActionPokemon.getPokemonsSuccess({ payload: pokemon });
        }),
        
        catchError(() => EMPTY)
      )),
  )
    , { dispatch: true });


    loadByPokemon$ = createEffect(() => this.actions$.pipe(
      ofType(ActionPokemon.GET_POKEMON_BY_ID_START),
      switchMap(({ payload }: any) => this.pokemonSrv.getPokemonInfo(payload.id)
        .pipe(
          map((pokemon) => {
            return ActionPokemon.getPokemonsByIdSuccess({ payload: pokemon });
          }),
          
          catchError(() => EMPTY)
        )),
    )
      , { dispatch: true });


    loadMorePokemon$ = createEffect(() => this.actions$.pipe(
      ofType(ActionPokemon.GET_MORE_POKEMONS),
      switchMap(({ payload }: any) => this.pokemonSrv.getPokemonAndInfo(payload.limit, payload.offset)
        .pipe(
          map((pokemon) => {
            return ActionPokemon.getMorePokemonsSuccess({ payload: pokemon });
          }),
          
          catchError(() => EMPTY)
        )),
    )
      , { dispatch: true });

  constructor(
    private actions$: Actions,
    private pokemonSrv: PekomonServices
  ) { }
}

/* 

map(pokemon => {
          const pokemon_: PokemonDTO[] = [];
          pokemon.results.forEach((element, index) => {
            pokemon_.push({
              id: index + 1,
              url: element.url,
              name: element.name,
              image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`
            })
          });
          return ActionPokemon.getPokemonsSuccess({ payload: pokemon_ });
          // return pokemon_;
        }),
*/