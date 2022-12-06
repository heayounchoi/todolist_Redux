
import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
`;

const TodoBox = styled.div`
    width: 400px;
    height: 400px;
    display: grid;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props) => props.color};
    border-radius: 7px;
`;

const TodoTitle = styled.span`
    font-size: xx-large;
    font-weight: bolder;
    margin-right: 10px;
`;

const TodoId = styled.span`
    font-weight: 100;
    color: lightgray;
    font-style: italic;
`;

const TodoBody = styled.span`
    font-size: x-large;
`;

const HomeLink = styled(Link)`
    &:hover {
    background-color: lightgray;
    }
    
    cursor: pointer;
    text-decoration: none;
    font-size: initial;
    color: black;
    background-color: transparent;
    height: 40px;
    border: 1px solid;
    border-radius: inherit;
    display: grid;
    justify-content: center;
    align-items: center;
`;

const TodoDetail = () => {
    const todos = useSelector((state) => state.item.todos);

    const param = useParams();

    const todoDetail = todos.find((item) => item.id === parseInt(param.id));

    return (
        <Wrap>
            <TodoBox>
                <TodoTitle>{todoDetail.title}</TodoTitle>
                <TodoId>ID: {todoDetail.id}</TodoId>
                <TodoBody>{todoDetail.body}</TodoBody>
                <HomeLink to={`/`}>목록</HomeLink>
            </TodoBox>
        </Wrap>
    )
}

export default TodoDetail;