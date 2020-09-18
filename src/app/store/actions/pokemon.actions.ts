import { createAction, props } from '@ngrx/store';

export const GET_POKEMON_START = "GET_POKEMON_START";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAIL = "GET_POKEMON_FAIL";''

export const getPokemons = createAction(
    GET_POKEMON_START
);

export const getPokemonsSuccess = createAction(
    GET_POKEMON_SUCCESS,
    props<{payload: any[]}>()
);

export const getPokemonsFail = createAction(
    GET_POKEMON_FAIL,
    props<{error: any}>()
);