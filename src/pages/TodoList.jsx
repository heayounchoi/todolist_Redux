
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
    border: 1px solid;
    border-radius: 7px;
`;

const TodoTitle = styled.span`
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

const HomeButton = styled(Link)`
    &:hover {
    background-color: lightgray;
    }
    
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

const TodoList = () => {
    const items = useSelector((state) => state.item);

    const {todos} = items

    const param = useParams();

    const todoList = todos.find((item) => item.id === parseInt(param.id));

    return (
        <Wrap>
            <TodoBox>
                <h1><TodoTitle>{todoList.title}</TodoTitle><TodoId>ID: {todoList.id}</TodoId></h1>
                <TodoBody>{todoList.body}</TodoBody>
                <HomeButton to={`/`}>목록</HomeButton>
            </TodoBox>
        </Wrap>
    )
}

export default TodoList;