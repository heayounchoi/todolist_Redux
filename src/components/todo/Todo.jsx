import React from 'react';
import {useDispatch} from "react-redux";
import {doneItem, deleteItem} from "../../redux/modules/item";

import styled from 'styled-components';

import {Link} from "react-router-dom";

const BoxContainer = styled.div`
`;

const TodoBox = styled.div`
    height: 110px;
    width: 48%;
    margin: 10px;
    display: flex;
    float: left;
    border: 2px solid;
    border-radius: 5px;
`;

const TodoLink = styled(Link)`
    &:hover {
    color: hotpink;
    }
    
    text-decoration: none;
    display: grid;
    width: 30vw;
    color: black;
`;

const TodoTitle = styled.span`
    font-size: x-large;
    margin-top: 15px;
    margin-left: 20px;
`;

const TodoBody = styled.span`
    margin-left: 30px;
    font-size: larger;
`;

const TodoButtonBox = styled.div`
    justify-content: center;
    align-items: center;
    display: flex
`;

const TodoButton = styled.button`
    &:hover {
    background-color: lightgray;
    }
    
    background-color: transparent;
    font-size: larger;
    padding: 5px;
    margin-right: 7px;
    border-radius: 3px;
    border: 1px solid;
`;

const ToDo = (props) => {
    const dispatch = useDispatch();

    const doneToggle = () => {
        dispatch(doneItem(props.todo.id));
    };

    const deleteButton = () => {
        dispatch(deleteItem(props.todo.id));
    };

    return (
        <BoxContainer>
            <TodoBox>
                <TodoLink to={`/tododetail/${props.todo.id}`}>
                    <TodoTitle>{props.todo.title}</TodoTitle>
                    <TodoBody>{props.todo.body}</TodoBody>
                </TodoLink>
                <TodoButtonBox>
                    <TodoButton type="button"
                                onClick={deleteButton}
                    >
                        삭제
                    </TodoButton>
                    <TodoButton type="button"
                                onClick={doneToggle}
                    >
                        {props.todo.checked ? '취소' : '완료'}
                    </TodoButton>
                </TodoButtonBox>
            </TodoBox>
        </BoxContainer>
    );
};

export default ToDo;
