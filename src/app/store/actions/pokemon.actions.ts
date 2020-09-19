import { createAction, props } from '@ngrx/store';

export const GET_POKEMON_START = "GET_POKEMON_START";
export const GET_POKEMON_SUCCESS = "GET_POKEMON_SUCCESS";
export const GET_POKEMON_FAIL = "GET_POKEMON_FAIL";
export const GET_MORE_POKEMONS = "GET_MORE_POKEMONS";
export const GET_MORE_POKEMONS_SUCCESS = "GET_MORE_POKEMONS_SUCCESS";

export const GET_POKEMON_BY_ID_START = "GET_POKEMON_BY_ID_START";
export const GET_POKEMON_BY_ID_SUCCESS = "GET_POKEMON_BY_ID_SUCCESS";
export const GET_POKEMON_BY_ID_FAIL = "GET_POKEMON_BY_ID_FAIL";

export const getPokemons = createAction(
    GET_POKEMON_START,
    props<{payload: {limit: number, offset: number}}>()
);

export const getPokemonsSuccess = createAction(
    GET_POKEMON_SUCCESS,
    props<{payload: any[]}>()
);

export const getPokemonsFail = createAction(
    GET_POKEMON_FAIL,
    props<{error: any}>()
);

export const getMorePokemons = createAction(
    GET_MORE_POKEMONS,
    props<{payload: any}>()
);

export const getMorePokemonsSuccess = createAction(
    GET_MORE_POKEMONS_SUCCESS,
    props<{payload: any}>()
);
// get by id

export const getPokemonsByIdStart = createAction(
    GET_POKEMON_BY_ID_START,
    props<{payload: any}>()
);
export const getPokemonsByIdSuccess = createAction(
    GET_POKEMON_BY_ID_SUCCESS,
    props<{payload: any}>()
);
export const getPokemonsByIdFail = createAction(
    GET_POKEMON_BY_ID_FAIL,
    props<{payload: any}>()
);