import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStoreService } from '../../shared/dataStore.service';
import { AuthService } from '../../auth/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private dataStoreService: DataStoreService, private authService: AuthService) {}
onSave() {
    this.dataStoreService.storeData()
.subscribe(
    (response: Response) => {
        console.log(response);
    }
);
    }
    onFetch() {
    this.dataStoreService.getData();
    }
    onLogOut() {
    this.authService.logOut();
    }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
