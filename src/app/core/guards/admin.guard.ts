import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(): boolean {
    return true;
    // return this.authService.user$.pipe(
    //   take(1),
    //   map(user => user && user.roles.admin ? true : false),
    //   tap(isAdmin => {
    //     if (!isAdmin) {
    //       console.error('Access denied - Admins only');
    //       this.router.navigate(['/tabs/videos']);
    //     } else {
    //       return true;
    //     }
    //   })
    // );

  }

}
