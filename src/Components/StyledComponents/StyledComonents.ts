import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Inner = styled.div`
    padding: 20px;
    background: #fff;
    max-width: 850px;
    border: 2px solid #ccc;
    border-radius: 12px;
    margin: auto;
    display: flex;
    justify-content: center;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
export const Form = styled.form`
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    @media (max-width: 768px) {
        border: 1px solid #ccc;
        border-radius: 12px;
    }
`;

export const Remember_n_Password_Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    @media (max-width: 400px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
`;

export const InputLabel = styled.label`
    color:
    display: block;
    margin-bottom: 10px;
`;

export const InputField = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const CheckBoxLabel = styled.span`
    display: inline;
    margin-left: 10px;
    font-size: 16px;
`;

export const SubmitButton = styled.button`
    background-color: #1575a7;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin: 1rem auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const ChangePasswordLink = styled.a`
    color: #f89d44;
    font-weight: bold;
    text-decoration: none;

    @media (max-width: 400px) {
        display: block;
        width: 100%;
        margin: 0.5rem 0;
        text-decoration: underline;
    }
`;

export const RegisterLink = styled.a`
    color: #f89d44;
    font-weight: bold;
    text-decoration: underline;
`;

export const TermsLink = styled.a`
    color: #f89d44;
    text-decoration: underline;
`;

export const RegisterParagraph = styled.p`
    text-align: center;
`;
