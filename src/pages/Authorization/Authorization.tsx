import React from 'react';
import Login from "../../components/Login/Login";
import styles from './Authorization.module.css'
const Authorization = () => {
    return (
        <div className={styles.authorization__wrapper}>
            <Login/>
        </div>
    );
};

export default Authorization;