import { Component, OnInit } from '@angular/core';
import { setString } from "@nativescript/core/application-settings";
import { RouterExtensions } from "@nativescript/angular";

import { User } from './shared/user.class';

@Component({
	selector: 'user',
	templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

    public user: User;

	constructor(private routerExtensions: RouterExtensions) {
        this.user = new User();
    }

	ngOnInit() { }

    public save(): void {
        if (this.user.email.trim().length > 0 && this.user.name.trim().length > 0) {
            setString('userProfile', JSON.stringify(this.user));

            this.routerExtensions.navigate(['/home'], {
                transition: {
                    name: "fade"
                }
            });
        }
    }

    public back(): void {
        this.routerExtensions.back();
    }
}
