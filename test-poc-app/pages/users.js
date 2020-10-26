import React from "react";
import {Table, Button, Row} from 'antd';
import Link from "next/link";
import { data } from './api/users_list'
import 'antd/dist/antd.css';
import styles from '../styles/Users.module.scss'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        className: styles.rowName,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        align: 'center',
        className: styles.rowAge,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        className: styles.rowLoc,
        align: 'center',
    },
];

export default function Users () {
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

