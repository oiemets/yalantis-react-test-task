import React, { useEffect } from 'react';
import styles from './Employees.module.css';
import { connect } from 'react-redux';
import { getUsers, getSelectedFromStorage } from '../../store/actionCreator';
import Users from '../Users/Users';
import Birthday from '../Birthday/Birthday';


const Employees = ({ error, getEmployees, getSelected }) => {

    useEffect(() => {
        getEmployees();
        getSelected();
    }, []);

    return (
        <>
            {error && <div className={styles.error}>{error}</div>}
            
            <div className={styles.container}>
                <Users/>
                <hr/>
                <Birthday/>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        error: state.users.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getEmployees: () => dispatch(getUsers()),
        getSelected: () => dispatch(getSelectedFromStorage())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
