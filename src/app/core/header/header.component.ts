import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private storageService: DataStorageService, private authService: AuthService, private router: Router) {}

  onSaveData() {
    this.storageService.storeRecipes().subscribe(response => {
      console.log(response);
    });
  }

  onFetchData() {
    this.storageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
