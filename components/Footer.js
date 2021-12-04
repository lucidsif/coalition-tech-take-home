import React from 'react';

export default class Footer extends React.Component {
    render () {
        return (
            <div>
                <img 
                    id="footer-logo"
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                    height="50"
                    width="50"
                    alt="Coalition Technologies logo"
                />
                <span>
                    COPYRIGHT 2016. ALL RIGHTS RESERVED
                </span>
            </div>
        )
    }
}