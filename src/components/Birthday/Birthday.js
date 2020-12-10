import React from 'react';
import { connect } from 'react-redux';
import styles from './Birthday.module.css';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
const dateToMonthConverter = (date) => {
    let newDate = new Date(Date.parse(date));
    return months[newDate.getMonth()]
}

const dateToStringConverter = (date) => {
    let output = new Date(Date.parse(date));
    let month = months[output.getMonth()];
    let day = output.getDate();
    let year = output.getFullYear();
    return day + ' ' + month + ', ' + year + ' year';
}


const Birthday = ({ selected }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Employees birthday</h2>
            <hr/>

            {selected.length === 0 && <h2 className={styles.noselected}>No selected employees</h2>}

            <ul className={styles.selected_container}>

                {months.map((month, i) => { 
                    let grouped = selected.filter(usr => dateToMonthConverter(usr.dob) === month)
                    if(grouped.length > 0) {
                        return (

                            <ul key={i} className={styles.birthday_group}>
                                <h3 className={styles.month_title}>{month}</h3>
                                {grouped.map(user => 
                                    <li key={user.id} className={styles.birthday_user}>
                                        {user.firstName} {user.lastName} - {dateToStringConverter(user.dob)}
                                    </li>
                                    )
                                }
                            </ul>

                        );
                    }})
                }

            </ul>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        selected: state.users.selected
    }
}


export default connect(mapStateToProps)(Birthday);