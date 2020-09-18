import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../index';
import { IPokemon } from '../reducers/pokemon.reducers';
import * as pokemonFrom from "../reducers/pokemon.reducers";
import { PokemonDTO } from '../entitys/pokemon.entity';

export const selectPokemon_ = (state: IAppState) => state.pokemon;



export const selectPokemon = createSelector(
    selectPokemon_,
    (state: IPokemon) => state
)

export const selectPokemonrState = createFeatureSelector<pokemonFrom.IPokemon>('pokemon');

export const selectPokemonEntities = createSelector(
    selectPokemonrState,
    pokemonFrom.selectPokemonEntities
);

export const selectPokemonIds = createSelector(
    selectPokemonrState,
    pokemonFrom.selectPokemonIds
);

export const selectAllPokemon = createSelector(
    selectPokemonrState,
    pokemonFrom.selectAllPokemon
  );