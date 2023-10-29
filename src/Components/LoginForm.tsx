import React, {ChangeEvent, FormEvent, useState} from 'react';

import {
    ChangePasswordLink,
    CheckBoxLabel,
    Form,
    InputField,
    InputLabel,
    RegisterLink,
    RegisterParagraph,
    Remember_n_Password_Wrapper,
    SubmitButton,
    TermsLink,
    Title,
} from './StyledComponents/StyledComonents';

interface PropType {
    onUserLogin: (name: string, password: string) => void;
}
const LoginForm: React.FC<PropType> = ({onUserLogin}) => {
    const [username, setUsername] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handleUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setUserPassword(event.target.value);
    };

    const submitHandler = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        if (username.trim() === '' && userPassword.trim() === '') {
            return;
        }
        onUserLogin(username, userPassword);

        setUserPassword('');
        setUsername('');
    };
    return (
        <React.Fragment>
            <Form onSubmit={submitHandler}>
                <Title>Login Form</Title>
                <div>
                    <InputLabel htmlFor='username'>Username</InputLabel>
                    <InputField
                        type='text'
                        id='username'
                        placeholder='Enter Login ID'
                        onChange={handleUsername}
                    />
                </div>
                <div>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <InputField
                        type='password'
                        id='password'
                        placeholder='Enter Password'
                        onChange={handleUserPassword}
                    />
                </div>
                <Remember_n_Password_Wrapper>
                    <div>
                        <input
                            type='checkbox'
                            name='remember_me'
                            id='remember_me'
                        />
                        <CheckBoxLabel>Remember Me</CheckBoxLabel>
                    </div>
                    <div>
                        <ChangePasswordLink href='#'>
                            change Password
                        </ChangePasswordLink>
                    </div>
                </Remember_n_Password_Wrapper>
                <div>
                    <input
                        type='checkbox'
                        name='agree_terms'
                        id='agree_terms'
                    />
                    <CheckBoxLabel>
                        Agree to&nbsp;
                        <TermsLink href='#'>Terms & Conditions</TermsLink>
                    </CheckBoxLabel>
                </div>
                <SubmitButton type='submit'>Login</SubmitButton>
                <div>
                    <RegisterParagraph>
                        Don't have an account?
                        <RegisterLink href='#'>Register here</RegisterLink>
                    </RegisterParagraph>
                </div>
            </Form>
        </React.Fragment>
    );
};

export default LoginForm;
