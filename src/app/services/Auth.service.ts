import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {environment} from 'src/environments/environment';

import {BehaviorSubject} from 'rxjs';
import {User} from "../models/User.model";
import {Role} from "../models/Role.model";
import {TokenService} from "./Token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly API = environment.loginUrl;
  public _user = new User();
  private _authenticatedUser = new User();
  // @ts-ignore
  private _authenticated = <boolean>JSON.parse(localStorage.getItem('autenticated')) || false;
  public _loggedIn = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this._loggedIn.asObservable();
  public error: null = null;


  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) {
  }

  public loginAdmin(usernameOrEmail: string | null | undefined, password: string | null | undefined) {
    this.http.post<any>(this.API + 'login', {usernameOrEmail, password}, {observe: 'response'}).subscribe(
      resp => {
        this.error = null;
        const jwt4 = resp.headers.get('Authorization');
        console.log(jwt4);
        const jwt = resp.body.accessToken;
        console.log(jwt)
        jwt != null ? this.tokenService.saveToken(jwt) : false;
        this.loadInfos();
        console.log('you are logged in successfully');
        this.router.navigate(['/dashboard']);
      }, (error: HttpErrorResponse) => {
        this.error = error.error;
        console.log(error);
      }
    );
  }

  public loadInfos() {
    const tokenDecoded = this.tokenService.decode();
    const username = tokenDecoded.sub;
    const roles = tokenDecoded.roles;
    const email = tokenDecoded.email;
    const prenom = tokenDecoded.prenom;
    const nom = tokenDecoded.nom;
    const passwordChanged = tokenDecoded.passwordChanged;
    this._authenticatedUser.passwordChanged = passwordChanged;
    this._authenticatedUser.userName = username;
    this._authenticatedUser.firstName = nom;
    this._authenticatedUser.lastName = prenom;
    this._authenticatedUser.email = email;
    this._authenticatedUser.roles = roles;
    localStorage.setItem('autenticated', JSON.stringify(true));
    this.authenticated = true;
    this._loggedIn.next(true);

  }


  // public hasRole(role: Role): boolean {
  //     const index = this._authenticatedUser.roles.findIndex(r => r.authority === role.authority);
  //     return index > -1 ? true : false;
  // }

  public registerAdmin() {
    this.http.post<any>(this.API + 'api/users/save', this.user, {observe: 'response'}).subscribe(
      resp => {
        this.router.navigate(['admin/admin']);
      }, (error: HttpErrorResponse) => {
        console.log(error.error);
      }
    );
  }

  public logout() {
    this.tokenService.removeToken();
    localStorage.setItem('autenticated', JSON.stringify(false));
    this.authenticated = false;
    this._loggedIn.next(false);
    this._authenticatedUser = new User();
    this.router.navigate(['/login']);
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get authenticated(): boolean {
    return this._authenticated;
  }

  set authenticated(value: boolean) {
    this._authenticated = value;
  }

  get authenticatedUser(): User {
    return this._authenticatedUser;
  }

  set authenticatedUser(value: User) {
    this._authenticatedUser = value;
  }


}
