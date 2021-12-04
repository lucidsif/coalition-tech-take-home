import React from 'react';

export default class Head extends React.Component {
    render() {
        return (
            <div>
                <title>Tawsif's Coalition Technologies Project</title>
                <link rel="icon" href="/favicon.ico" />
                <img 
                    id="header-logo"
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    height="50"
                    width="50"
                    alt="Coalition Technologies logo"
                />
                <a href="#history">01. HISTORY</a>
                <a href="#team">02. TEAM</a>
            </div>
        )
    }
}