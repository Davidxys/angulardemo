import { CanActivate } from "@angular/router";

// import { CanActivate } from "@angular/router";

export class PermisionGuard implements CanActivate {

    canActivate() {
        var hasPermission:boolean = Math.random() < 0.5;
        if(!hasPermission) {
            console.log("you don't have access!");
        }
        return hasPermission;
    }
}