import "./Header.css";
import React from 'react'

export default function Header(props) {
    return (
        <div>
            <header className='header'>
                <div className='arrow'>
                    <a href="/">{props.arrow}</a>
                </div>
                <div>
                    <p>
                        <b>{props.Name}</b>
                    </p>
                    <p>
                        {props.EmployeeID}
                    </p>
                </div>
                <div className='button'>
                    <a href="/">
                        <button className='button1'>Print</button>
                    </a>
                </div>
            </header>
        </div>
    )
}