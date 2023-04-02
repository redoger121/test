import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class GetDataService{
    constructor (private http: HttpClient){}


    getDataMethod(){
        return this.http.get('https://reqres.in/api/unknown')
    }
}