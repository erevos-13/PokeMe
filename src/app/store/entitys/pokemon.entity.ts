export interface PokemonDTO {
    id: number;
    name: string;
    url: string;
    image:string;
}

export interface EntityState<V> {
    ids: string[] | number[];
    entities: { [id: number]: V };
  }