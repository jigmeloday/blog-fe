'use client';
import styles from './auth-links.module.css';
import Link from 'next/link';
import { useState } from 'react';
function AuthLinks () {
 const [open, setOpen] = useState(false);
 const status = false;
 return(
  <div>
   {
    status ?
     <Link href='/' className={styles.link}>LogIn</Link> :
     <>
      <Link href='/' className={styles.link}>Write</Link>
      <span className={styles.link}>Logout</span>
     </>
   }
   <div className={styles.burger} onClick={() => setOpen(!open)}>
    <div className={styles.line}/>
    <div className={styles.line}/>
    <div className={styles.line}/>
   </div>
   {open && (
    <div className={styles.responsiveMenu}>
     <Link href="/">Homepage</Link>
     <Link href="/">About</Link>
     <Link href="/">Contact</Link>
     {status ? (
      <Link href='/login'>Login</Link>
     ) : (
      <>
       <Link href='/write'>Write</Link>
       <span className={styles.link}>Logout</span>
      </>
     )}
    </div>
   )}
  </div>
 );
}

export default AuthLinks;
