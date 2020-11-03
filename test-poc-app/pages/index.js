import React from "react";
import Link from "next/link";
import { Button } from 'antd';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
      <div className={styles.main}>
            <Link href="/users">
                <a>
                    <Button className={styles.showUsersBtn}>
                        Show list of users
                    </Button>
                </a>
            </Link>
      </div >
  )
}
