export class User {
    public id!: number;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public userName!: string;
    public password!: string;
    public passwordChanged!: boolean;
    public newPassword!: string;
    public confirmPassword!: string;
    public roles: any = [];
}
