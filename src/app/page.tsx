import styled from './page.module.css';
import Featured from '@/shared/component/featured/featured';
import CategoryList from '@/shared/component/categorylist/categorylist';
import CardList from '@/shared/component/cardlist/cardlist';
import Menu from '@/shared/component/menu/menu';

export default function Home () {
 return (
  <div className={styled.container}>
   <Featured/>
   <CategoryList/>
   <div className={styled.content}>
    <CardList />
    <Menu />
   </div>
  </div>
 );
}
