import React from "react";
import Link from "next/link";
import { Button } from 'antd';
import styles from '../styles/Home.module.scss'

export default function Home({user}) {
    console.log('user', user);
    return (
      <div className={styles.main}>
          <Link href="/api/login"><a>Login</a></Link>
          <Link href="/api/logout"><a>Logout</a></Link>
            <Link href="/users">
                <a>
                    <Button className={styles.showUsersBtn}>
                        Show list of users
                    </Button>
                </a>
            </Link>
      </div >
  )
};
