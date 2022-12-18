import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
  ) { }



  public emailOrNull(control): any {
    // eslint-disable-next-line max-len
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return control.value === '' ? null : (EMAIL_REGEXP.test(control.value) ? null : { email: true });
  }

  public checkErrorsValidation(errorCode): string {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Contraseña incorrecta.';

      case 'auth/user-disabled':
        return 'Lo sentimos, el usuario está deshabilitado.';

      case 'auth/user-not-found':
      case 'auth/email-already-in-use':
        return 'Usuario no encontrado, revisa email o contraseña.';

      case 'auth/invalid-email':
        return 'Email inválido';

      default:
        return errorCode;
    }
  }




}
