import gmail from '../../../../public/icons/Gmail.svg';
import { AuthForm, LoginIcons } from '@/app/(auth)/model/auth.model';

export const LOGIN_FORM: AuthForm[] = [
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

export const REGISTER_FORM: AuthForm[] = [
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
  name: 'name',
  label: 'Name',
  type: 'text'
 },
 {
  name: 'gender',
  label: 'Gender',
  type: 'dropdown'
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
 userName: '',
 name: '',
 gender: ''
};

export const LOGIN_INITIAL_VALUE = {
 email: '',
 password: '',
};

export const GENDER: string[] = [
 'Male',
 'Female',
 'Other'

];
