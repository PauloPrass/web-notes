import React from 'react';

function Header({ logout }) {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className="logout-btn" onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default Header;