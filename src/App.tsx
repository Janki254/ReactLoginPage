import { useEffect, useState } from 'react';

import Home from './Components/Home';
import ImageHolder from './Components/ImageHolder';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar/Navbar';
import { Inner, Wrapper } from './Components/StyledComponents/StyledComonents';

const App = () => {
    const [isLoggedInState, setIsLoggedInState] = useState<boolean>(false);
    const [userLoginDetails, setUserLoginDetails] = useState<string>('');

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInfo === '1') {
            setIsLoggedInState(true);
        }
    }, []);
    const LoginHandler = (name: string, password: string) => {
        console.log(name);
        console.log(password);
        
        setUserLoginDetails(name);
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedInState(true);
    };
    const LogoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedInState(false);
    };
    return (
        <Wrapper>
            <Navbar isloggedIn={isLoggedInState} onLogout={LogoutHandler} />
            {isLoggedInState ? (
                <Inner>
                    <Home user={userLoginDetails} />
                </Inner>
            ) : (
                <Inner>
                    <ImageHolder />
                    <LoginForm onUserLogin={LoginHandler} />
                </Inner>
            )}
        </Wrapper>
    );
};

export default App;
