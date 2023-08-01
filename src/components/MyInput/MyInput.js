import React from 'react';
import styles from './MyInput.module.css';
import { useField } from 'formik';

const MyInput = ({ label, type, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={styles.form_group}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={type} {...field} {...props} />
            {meta.touched && meta.error ? <p className={styles.error}>{meta.error}</p> : null}
        </div>
    );
};

export default MyInput;
