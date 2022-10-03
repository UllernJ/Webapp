import Link from "next/link";
import React from "react";

const Nav = (props) => {
    const pages = [{
        name: 'Home',
        path: '/'
    },
    {
        name: 'User',
        path: '/user'
    },
    {
        name: 'Test',
        path: '/test'
    }]
    return(
        <nav id="navbar">
            <ul>
            {pages.map(page => {
                return(
                    <li key={page.name}><Link key={page.name} href={page.path}>{page.name}</Link></li>
                )
            })}
            </ul>
        </nav>
    )
}
export default  Nav;