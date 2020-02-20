import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (form: FormGroup) => {
        const control = form.controls[controlName];
        const matchingControl = form.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
    };
}

export const patterns = {
    email: {
        regex: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
        errorMessage: 'No cumple el formato de email (ejemplo@dominio.co)'
    },
    password: {
        regex: '^(?=.*[a-z])(?=.*?[A-Z])(?=.*?\\d).*$',
        errorMessage: 'Es necesario minimo un número, una minuscúla y una mayuscúla'
    }
};
