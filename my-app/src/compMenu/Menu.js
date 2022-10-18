import React, { useState } from 'react'
import "./Menu.css"
import { BsCaretDownFill } from "react-icons/bs";

export default function Menu(props) {
    const [open, setOpen] = useState(false);
    const [open2, setopen2] = useState(false);
    function Clickburger() {
        setOpen(!open)
    }
    function click() {
        setopen2(!open2)
    }

    return (
        <div className='parent-Menu'>
            <img src={props.icon} className="burger" onClick={Clickburger} />
            {open ?
                <nav>
                    <ul className='list-parent'>
                        <img src={props.logo} className="logo" />
                        <li><a href="#" onClick={click}>Docs <BsCaretDownFill /></a>
                            {open2 ?
                                <ul className='child-list'>
                                    <li><a href="">Try React</a></li>
                                    <li><a href="">Learn React</a></li>
                                    <li><a href="">Staying Informed</a></li>
                                    <li><a href="">Versioned Documentation</a></li>
                                    <li><a href="">Something Missing?</a></li>
                                </ul>
                                : null}
                        </li>
                        <li><a href="#">Tutorial</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>
                </nav>
                : null}
        </div>
    )
}
