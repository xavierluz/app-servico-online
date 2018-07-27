export class UsuarioModel{
    Id:string;
    LockoutEnabled:boolean;
    LockoutEnd:string;
    NormalizedEmail:string;
    NormalizedUserName:string;
    PasswordHash:string;
    PhoneNumber:string;
    PhoneNumberConfirmed:boolean;
    SecurityStamp:string;
    TwoFactorEnabled:string;
    UserName:string;
    AccessFailedCount:number;
    ConcurrencyStamp:string;
    Email:string;
    EmailConfirmed:boolean;
}