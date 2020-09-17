import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})
export class PekomonServices {
    readonly pokemon = 'pokemon'
    constructor(
        private http: HttpClient
    ) {}


    getPokememon(limit_: number): Observable<any> {
        return this.http.get(
            `${environment.URL}${this.pokemon}?limit=${limit_.toString()}`
        )
    }
}