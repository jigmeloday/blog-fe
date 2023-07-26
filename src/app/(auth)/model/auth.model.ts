export interface AuthForm {
    name: string;
    label: string;
    type: string
}

export interface LoginIcons {
    name: string
    img?: string
}

export interface AuthValue {
    userName: string,
    password: string,
    email: string,
    confirmPassword: string
}
