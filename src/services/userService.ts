import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/user';
import { config } from 'src/config/config';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // private baseUrl = 'https://round-concept-367712.uc.r.appspot.com'; 
    private baseUrl =  'http://localhost:8080';

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/getAll`);
    }

    register(user: User) {
        return this.http.post(`${this.baseUrl}/user/add`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/user/${id}`);
    }

    login(id: String, password: String): Observable<any> {
        let login = {id,password};
        return this.http.post(`${this.baseUrl}/user/login`,login);
    }
   
    public  isAthunticated(){
    let token = sessionStorage.getItem("token");
     if(token!= null && token != ''){
      return true;
     }else{
        return false;
     }
    
}
}