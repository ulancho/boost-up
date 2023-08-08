import React from 'react';
import styles from '../MyInput/MyInput.module.css';
import { useField } from 'formik';
import directions from '../../pages/main/components/directions/Directions';

const MySelect = ({ label, data, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={styles.form_group}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props}>
                <option value="0">Выберите</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
            {meta.touched && meta.error ? <p className={styles.error}>{meta.error}</p> : null}
        </div>
    );
};

export default MySelect;
