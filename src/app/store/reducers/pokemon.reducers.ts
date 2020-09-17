import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from "../actions/pokemon.actions";

export interface IPokemon {
    pokemons: any[];
    loading: boolean;
    error: any
}

export const initialState: IPokemon = {
    pokemons: [],
    loading: false,
    error: null
};

const reducer = createReducer(
    initialState,
    on(Actions.getPokemons, state => ({ ...state, loading: true })),
    on(Actions.getPokemonsSuccess, (state, props) => ({ ...state, pokemons: props.payload, loading: false })),
    on(Actions.getPokemonsFail, (state, props) => ({ ...state, pokemons: [], error: props.error, loading: false })),
);

export function pokemonReducer(state: IPokemon | undefined, action: Action) {
    return reducer(state, action);
}