import React from "react";
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';

import styled from 'styled-components';

const HeaderBox = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    height: 200px;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://preview.redd.it/i1cbgz50pu561.png?width=960&crop=smart&auto=webp&s=6cb1ae07645581cdbf0527973b16e1bb03bbe786");
`;

const Layout = () => {
    return (
        <div>
            <HeaderBox>
                <Header/>
            </HeaderBox>
            <Form/>
            <List checkedList={false}/>
            <List checkedList={true}/>
        </div>
    );
};

export default Layout;
