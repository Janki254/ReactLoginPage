import React from 'react';

interface props {
    user: string;
}

const Home: React.FC<props> = ({user}) => {
    return (
        <React.Fragment>
            <h3>Welcome to the Site {user}</h3>
        </React.Fragment>
    );
};

export default Home;
