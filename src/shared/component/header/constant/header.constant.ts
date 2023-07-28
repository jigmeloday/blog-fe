import { FilterChip, HeaderIconModel } from '@/shared/component/header/model/header.model';

export const HEADER_ICON: HeaderIconModel[] = [
 {
  name: 'chat_bubble_outlined'
 },
 {
  name: 'notifications_none'
 }
];

export const FILTER_CHIP: FilterChip[] = [
 {
  label: 'All',
  value: 'all'
 },
 {
  label: 'For You',
  value: 'for_you'
 },
 {
  label: 'Popular',
  value: 'popular'
 },
 {
  label: 'Following',
  value: 'following'
 }
];
