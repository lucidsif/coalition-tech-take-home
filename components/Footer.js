import React from 'react';
import Link from "next/link";

export default class Footer extends React.Component {
    render () {
        return (
            <div>
                <Link href="/history">
                    <a>01. HISTORY</a>
                </Link>
                <Link href="/team">
                    <a>02. TEAM</a>
                </Link>
            </div>
        )
    }
}