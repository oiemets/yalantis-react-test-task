import React from 'react';
import { connect } from 'react-redux';
import { userHandler } from '../../store/actionCreator';
import styles from './Users.module.css';

const alphabet = [...Array(26)].map((_, y) => String.fromCharCode(y + 65));

const Users = ({ users, selected, userHandler }) => {
    return (
        <div className={styles.users}>
            <h1>Employees</h1>

            <ul className={styles.usr_list}>
                
                {alphabet.map((l, i)=> {
                let group = users.filter(usr => usr.lastName.charAt(0) === l);
                    return (
                        <ul key={i} className={styles.usr_list_inner}>
                            <h3>{l}</h3>
                            
                            {group.length === 0 ? 

                            <li>----</li> : 

                            group.map(u => {
                                return (

                                    <div key={u.id}>
                                        <label htmlFor="user">{u.lastName} {u.firstName}</label>
                                        <input 
                                            type="checkbox"
                                            name="user" 
                                            onChange={() => userHandler(selected, u)} 
                                            checked={selected.find(user => user.id === u.id) ? true : false}  
                                        />
                                    </div>);
                                })}
                        </ul>)
                    })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        selected: state.users.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userHandler: (selected, user) => dispatch(userHandler(selected, user))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Users);