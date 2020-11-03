import React, {useEffect} from "react";
import {Table, Button, Row} from 'antd';
import Link from "next/link";
import 'antd/dist/antd.css';
import styles from '../styles/Users.module.scss'

export default function Users ({data}) {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'userId',
            key: 'userId',
            align: 'center',
            className: styles.rowName,
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            align: 'center',
            className: styles.rowAge,
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            className: styles.rowLoc,
            align: 'center',
        },
    ];

    return (
        <div className={styles.usersPage}>
            <Row className={styles.rowTable}>
                <Table columns={columns} dataSource={data} size="middle"/>
            </Row>
            <Row className={styles.rowBtn}>
                <Link href="/">
                    <a>
                        <Button className={styles.backBtn}>
                            Back to home
                        </Button>
                    </a>
                </Link>
            </Row>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch('http://merlin-demo.us-east-2.elasticbeanstalk.com/user/users');
    const data = await response.json();
    return {
        props: {data},
    }
}

