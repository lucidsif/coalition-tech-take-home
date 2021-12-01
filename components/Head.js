import React from 'react';
import Link from 'next/link'

export default class Head extends React.Component {
    render() {
        return (
            <div>
                <title>Tawsif's Coalition Technologies Project</title>
                <link rel="icon" href="/favicon.ico" />
                <img 
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    height="50"
                    width="50"
                    alt="Coalition Technologies logo"
                />
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