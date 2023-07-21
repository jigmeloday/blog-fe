import { LoginForm, LoginIcons } from '@/app/auth/login/model/login.model';
import gmail from '../../../../../public/icons/Gmail.svg';

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

export const LOGIN_ICONS: LoginIcons[] = [
 {
  name: 'Gmail',
  img: gmail
 }
];
