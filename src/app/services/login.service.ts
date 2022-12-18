import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private auth: Auth
  ) {
  }

  public get authState() {
    return authState(this.auth);
  }

  public registerUser(formEmail: string, formPass: string) {
    return createUserWithEmailAndPassword(this.auth, formEmail, formPass);
  }

  public loginUser(formEmail: string, formPass: string) {
    return signInWithEmailAndPassword(this.auth, formEmail, formPass);
  }

  public signOut() {
    return signOut(this.auth);
  }

}
