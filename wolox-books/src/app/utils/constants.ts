export const SPANISH_FORM_ERROR_MESSAGES = {
    EMAIL: 'No cumple el formato de email (ejemplo@dominio.co)',
    PASSWORD: 'Es necesario minimo un número, una minuscúla y una mayuscúla',
    PASSWORD_MUST_MATCH: 'Ambas password deben coincidir'
};

export const PATTERNS = {
    EMAIL: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    ONE_DIGIT_ONE_LOWERCASE_ONE_UPPERCASE: '^(?=.*[a-z])(?=.*?[A-Z])(?=.*?\\d).*$'
};
