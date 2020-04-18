import React from 'react';
import './header.scss';

const Header = () => (
    <header>
        <div className="overlay">
            <h1>Find your favourite tab!</h1>
            <h3>Type artist name or song name</h3>
            <p>After you get your results, click on song's name to see song's tab or click in artist's name to access all his tabs.</p>
        </div>
    </header>
);

export default React.memo(Header);
