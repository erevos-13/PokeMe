import {  createSelector } from '@ngrx/store';
import {IAppState} from '../index';
import { IPokemon } from '../reducers/pokemon.reducers';

export const selectPokemon_ = (state: IAppState) => state.pokemon;

export const selectPokemon = createSelector(
    selectPokemon_,
    (state: IPokemon) => state
)