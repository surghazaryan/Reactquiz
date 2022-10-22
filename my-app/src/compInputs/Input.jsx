import React, { useCallback, useContext, useState } from 'react'
import { Contextvalue } from '../App'
import "./compInput.css";
import { FaUserAlt } from "react-icons/fa";



export default function Input() {

    const obj = useContext(Contextvalue);
    const [namevalue, setnamevalue] = useState();
    const [valueSurname, setvalueSurname] = useState();
    const [valueage, setvalueAge] = useState();
    const [datevalue, setvalueDate] = useState();

    const Clicksend = useCallback((event) => {
        event.preventDefault();
        obj.setName(namevalue);
        obj.setsurName(valueSurname);
        obj.setAge(valueage);
        obj.setDate(datevalue);
    }, [namevalue, valueSurname, valueage, datevalue]);

    return (
        <div className='container'>
            <div className='parents'>
                <form className='table'>
                    <FaUserAlt className='iconname' />
                    <input type="text" placeholder="Name" value={namevalue} onChange={(e) => { setnamevalue(e.target.value) }} />
                    <FaUserAlt className='surnameicon' />
                    <input type="text" placeholder='Surname' value={valueSurname} onChange={(e) => { setvalueSurname(e.target.value) }} />
                    <FaUserAlt className='ageicon' />
                    <input type="text" placeholder='Age' value={valueage} onChange={(e) => { setvalueAge(e.target.value) }} />
                    <input type="date" value={datevalue} onChange={(e) => { setvalueDate(e.target.value) }} />
                    <button onClick={Clicksend}> Submit</button>
                </form>
            </div>
        </div>
    )
}
