import { createAction, props } from '@ngrx/store';

export const GET_POKEMON_START = "GET_POKEMON_START";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAIL = "GET_POKEMON_FAIL";''

export const getPokemons = createAction(
    '[POKEMON Page] get pokemons'
);

export const getPokemonsSuccess = createAction(
    '[POKEMON Page] get pokemons success',
    props<{payload: any[]}>()
);

export const getPokemonsFail = createAction(
    '[POKEMON Page] get pokemons fail',
    props<{error: any}>()
);