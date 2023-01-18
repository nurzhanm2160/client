import React from 'react';
import s from "./UsersTable.module.scss"
import {users} from "./UsersData/usersData";


const UsersTable = () => {
    return (
        <div className={s.users_table}>
            <div className="container">
                <div className={s.table_block}>
                    <table className={s.table}>
                        <tr className={s.high_tr}>
                            <th>PLACE</th>
                            <th>EMAIL</th>
                            <th>POINTS</th>
                            <th className="d-flex justify-content-center">REWARD</th>
                        </tr>
                        {users.map(items =>
                            <tr>
                                <td><span className={s.place_items}>{items.id}</span></td>
                                <td><span>{items.email}</span></td>
                                <td><span>{items.points}</span></td>
                                <td><span className="d-flex justify-content-center">{items.reward}</span></td>
                            </tr>)}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UsersTable;