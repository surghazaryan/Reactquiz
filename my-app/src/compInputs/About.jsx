import React from 'react'
import { useContext } from 'react'
import { Contextvalue } from '../App'


export default function About() {
    const obj = useContext(Contextvalue);
    return (
        <div className='about'>
            {obj.name} {obj.surname} {obj.age} {obj.date}
        </div>
    )
}
