import React from 'react';
import styles from '../MyInput/MyInput.module.css';
import { useField } from 'formik';

const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={styles.form_group}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>
                <option value="0">Выберите</option>
                <option value="1">Frontend</option>
            </select>
            {meta.touched && meta.error ? <p className={styles.error}>{meta.error}</p> : null}
        </div>
    );
};

export default MySelect;
