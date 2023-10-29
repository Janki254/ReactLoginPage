import React from 'react';

import styles from './Navbar.module.css';

interface props {
    isloggedIn: boolean;
    onLogout: () => void;
}

const Navbar: React.FC<props> = ({isloggedIn, onLogout}) => {
    return (
        <React.Fragment>
            <div className={styles.navbar} id='navbar'>
                <ul className={styles.nav}>
                    <li className={styles.navlinks}>
                        <h3>Login Page Application</h3>
                    </li>
                    {isloggedIn && (
                        <li className={styles.navlinks}>
                            <button
                                className={styles.logout_btn}
                                onClick={onLogout}
                            >
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
