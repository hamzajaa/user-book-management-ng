import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../services/Auth.service";


@Component({
    selector: 'app-login-admin',
    templateUrl: './login-admin.component.html',
    styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
    loginForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
    }

    submit() {
        const formValues = this.loginForm.value;
        const userName = formValues.userName;
        const password = formValues.password;
        console.log(userName + " " + password);
        this.authService.loginAdmin(userName, password);

    }

    register() {
        this.router.navigate(['/admin/register']);
    }
}
