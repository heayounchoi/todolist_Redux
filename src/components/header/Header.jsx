import React from "react";
import styled from 'styled-components';

const HeaderTitle = styled.h1`
    font-size: 80px;
    font-synthesis: none;
    color: whitesmoke;
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 20px;
`;

const Header = () => {
    return (
        <HeaderTitle>우주인의 하루</HeaderTitle>
    );
};

export default Header;