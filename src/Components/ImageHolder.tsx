import styled from 'styled-components';

import signIn from '../assets/Images/Sign in-bro.png';

const ImageWrapper = styled.div`
    width: 60%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 100%;
    height: -webkit-fill-available;
`;

const ImageHolder = () => {
    return (
        <ImageWrapper>
            <Image src={signIn} alt='signin-girl' />
        </ImageWrapper>
    );
};

export default ImageHolder;
