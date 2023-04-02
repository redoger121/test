import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class GetDataService{
    constructor (private http: HttpClient){}


    getDataMethod(id: string){
        return this.http.get(`https://reqres.in/api/users/${id}`)
    }

    putData(userData: any){
        return this.http.put(`https://reqres.in/api/users/${userData.id}`, userData)
    }
}