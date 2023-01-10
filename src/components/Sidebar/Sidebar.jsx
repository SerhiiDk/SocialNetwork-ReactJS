import React, { Component } from 'react';
import Person from './Person/Person';
import s from './Sidebar.module.css';


const Sidebar = () => {
    return (
        (store) => {
            let state = store.getState();
            // debugger
            const personElement = state.sidebar.friends.map(person => {
                return <Person key={person.id} state={person} />
            });
            return (
                <>
                    <h3 className={s.heading}>Friends</h3>
                    <div className={s.sidebar}>
                        {personElement}
                    </div>
                </>
            );
        }
    )
};

export default Sidebar;