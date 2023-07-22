import gmail from '../../../../public/icons/Gmail.svg';
import { LoginForm, LoginIcons } from '@/app/auth/model/auth.model';

export const LOGIN_FORM: LoginForm[] = [
 {
  name: 'email',
  label: 'Email',
  type: 'email'
 },
 {
  name: 'password',
  label: 'Password',
  type: 'password'
 },
];

export const REGISTER_FORM: LoginForm[] = [
 {
  name: 'userName',
  label: 'User Name',
  type: 'text'
 },
 {
  name: 'email',
  label: 'Email',
  type: 'email'
 },
 {
  name: 'password',
  label: 'Password',
  type: 'password'
 },
 {
  name: 'confirmPassword',
  label: 'Confirm Password',
  type: 'password'
 },
];

export const AUTH_ICON: LoginIcons[] = [
 {
  name: 'Gmail',
  img: gmail
 }
];

export const REGISTRATION_INITIAL_VALUE = {
 email: '',
 password: '',
 confirmPassword: '',
 userName: ''
};

export const LOGIN_INITIAL_VALUE = {
 email: '',
 password: '',
};
