import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // decl object
  ProfilUser = {
    _id: '',
    token: '',
    name: '',
    prenom: '',
    datenais: '',
    telephone: '',
    email: ''

  }
  // variable
  IsLoggedIn: boolean = false
  helper = new JwtHelperService;


  constructor(private http: HttpClient) {
  }

  private url = 'http://127.0.0.1:5001/user/';


  inscription(user: any) {
    return this.http.post(environment.url + '/api/users', user) as Observable<any>;
  }

  login(author: any) {
    return this.http.post(this.url + 'login', author);
  }



  saveDataProfil(token: any) {
    let decodeToken = this.helper.decodeToken(token)
    localStorage.setItem('token', token)
    localStorage.setItem('_id', decodeToken._id)
    localStorage.setItem('name', decodeToken.name)
    localStorage.setItem('prenom', decodeToken.prenom)
    localStorage.setItem('datenais', decodeToken.datenais)
    localStorage.setItem('telephone', decodeToken.telephone)
    localStorage.setItem('email', decodeToken.email)
    console.log(decodeToken)
  }

// get utilisateur
  getall_utilisateur() {
    return this.http.get(environment.url + '/api/users');
  }

// sup utilisateur
  deleteUser(id: any) {
    return this.http.delete(environment.url + '/api/users/' + id);

  }

//  get bt id
  getbyid(id: any) {
    return this.http.get(this.url + 'getbyid/' + id);
  }


// mise a jour

  updateUser(newprofile: any) {
    return this.http.put(environment.url + '/api/users/' + newprofile._id, newprofile)
  }


//modifier mot de passe
  resetpassword(user: any) {
    return this.http.post(this.url + 'reset-password', user);
  }


  userLogin(user: any) {
    return this.http.post(environment.url + '/api/auth/user/login', {
      email: user.email,
      password: user.password
    }) as Observable<any>;
  }

  changePassword(oldPassword: string, newPassword: string, id: string) {
    return this.http.put(environment.url + '/api/users/updatepassword/' + id, {
      oldPassword,
      newPassword
    }) as Observable<any>;
  }
}

