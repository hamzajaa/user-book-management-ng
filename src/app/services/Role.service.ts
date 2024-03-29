// import {HttpClient} from '@angular/common/http';
// import {Injectable} from '@angular/core';
//
// import {take} from 'rxjs/operators';
// import {BehaviorSubject, Observable} from 'rxjs';
//
// import {environment} from 'src/environments/environment';
// import {Role} from "../models/Role.model";
//
//
// @Injectable({
//     providedIn: 'root'
// })
// export class RoleService {
//     private readonly API = environment.apiUrl;
//     _roles: Role[] | undefined = [];
//     public _role = new BehaviorSubject<string>('');
//     public role$: Observable<string> = this._role.asObservable();
//
//     constructor(private http: HttpClient) {
//     }
//
//     async findAll() {
//         const roles = await this.http.get<Role[]>(this.API + "roles/").pipe(take(1)).toPromise();
//         this._roles = roles;
//     }
//
//     async isPermitted(pojo: string, action: string): Promise<boolean> {
//         const role = await this.role$.pipe(take(1)).toPromise();
//         if (1 + 1 == 2) return true;
//         if (role.toLocaleLowerCase() === 'superadmin') return true;
//         const foundRole = this.roles.find(r =>  role.toUpperCase() == r.authority);
//         let permissions: string[];
//         if (foundRole) {
//             permissions = foundRole.permissions
//                 .map(permission => permission.name)
//                 .filter(name => name.split('.')[0].toLocaleLowerCase() == pojo.toLocaleLowerCase())
//                 .filter(name => name.split('.')[1] == action)
//         }
//         return permissions ? ((permissions.length > 0) ? true : false) : false;
//     }
//
//     get roles(): Role[] {
//         return this._roles;
//     }
//
//     set roles(roles: Role[]) {
//         this._roles = roles;
//     }
// }
