import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class RegisterPage {

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);
  router = inject(Router);

  authService = inject(AuthService);

  registerForm = this.fb.group({
    fullName: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[ Validators.required, Validators.email ]],
    password: ['',[ Validators.required, Validators.minLength(6)]]
  });

    onSubmit() {
    if( this.registerForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }
    const {fullName = '', email = '', password = ''} = this.registerForm.value;

    this.authService.register(fullName! ,email!, password!).subscribe(isSucces => {

      if(isSucces){
        this.router.navigateByUrl('/auth/login');
        return;
      }

      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
    })

  }

}
