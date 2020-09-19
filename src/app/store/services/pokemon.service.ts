import { IInfo, PokemonDTO } from './../entitys/pokemon.entity';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of, zip } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class PekomonServices {
    readonly pokemon = 'pokemon'
    constructor(
        private http: HttpClient
    ) { }


    getPokememon(limit_: number, offset: number = 0): Observable<any> {
        return this.http.get(
            `${environment.URL}${this.pokemon}?limit=${limit_.toString()}&offset=${offset}`
        );
    }

    getPokemonInfo(pokemonId: number): Observable<any> {
        return this.http.get(
            `${environment.URL}${this.pokemon}/${pokemonId}`
        )
    }

    getPokemonAndInfo(limit: number, offset: number = 0): Observable<any> {
        return new Observable(observer => {
            this.getPokememon(limit, offset).subscribe(
                (pokemons) => {
                    try {
                        const apiCallZip = [];
                    const pokemon_: PokemonDTO[] = [];
                    pokemons.results.forEach((element, index) => {
                        pokemon_.push({
                            id: index + 1,
                            url: element.url,
                            name: element.name,
                            image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`
                        })
                    });
                    pokemon_.forEach((pok_) => {
                        apiCallZip.push(this.getPokemonInfo(pok_.id))
                    })
                    zip(...apiCallZip).subscribe((pokemonInfos_: IInfo[]) => {
                        console.log('all', pokemonInfos_);
                        pokemonInfos_.forEach((_pokemonInfo: IInfo, index) => {
                            pokemon_[index].info = pokemonInfos_[index];
                        });
                        observer.next(pokemon_);
                    })
                    } catch (error) {
                        observer.error([]);
                    }
                }
            )
        })

    }




}