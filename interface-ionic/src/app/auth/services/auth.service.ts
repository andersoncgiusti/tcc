import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthData } from "../models/auth-data.model";


@Injectable({
    providedIn: 'root'
  })
export class AuthuService {
    constructor(private http: HttpClient) { }
    
    createUser(userEmail: string, userPassword: string) {
        const authData: AuthData = {userEmail: userEmail, userPassword: userPassword};
        this.http.post(environment.apiUrl + 'register', authData)
        .subscribe(response => {
            console.log(response);            
        })
    }

    authenticate(userEmail: string, userPassword: string) {
        const authData: AuthData = {userEmail: userEmail, userPassword: userPassword};
        this.http.post(environment.apiUrl + 'authenticate', authData)
        .subscribe(response => {
            console.log(response);            
        })
    }
}