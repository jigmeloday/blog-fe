import styles from './auth-links.module.css';
import Link from 'next/link';
function AuthLinks () {
 const status = false;
 return(
  <div>
   {
    status ?
     <Link href='/'>LogIn</Link> :
     <>
      <Link href='/'>Write</Link>
      <span className={styles.link}>Logout</span>
     </>
    
   }
  </div>
 );
}

export default AuthLinks;
