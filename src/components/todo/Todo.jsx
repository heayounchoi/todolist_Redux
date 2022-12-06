import React from 'react';
import {useDispatch, useSelector} from "react-redux";
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
    border: 2px solid ${(props) => props.color};
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
    
    cursor: pointer;
    background-color: transparent;
    font-size: larger;
    padding: 5px;
    margin-right: 7px;
    border-radius: 3px;
    border: 1px solid ${(props) => props.color};
`;

const ToDo = ({todo: {id, title, body, checked}}) => {
    const dispatch = useDispatch();

    const color = useSelector((state) => state.item.colors)

    const doneToggle = () => {
        dispatch(doneItem(id));
    };

    const deleteButton = () => {
        dispatch(deleteItem(id));
    };

    return (
        <BoxContainer>
            <TodoBox color={color}>
                <TodoLink to={`/tododetail/${id}`}>
                    <TodoTitle>{title}</TodoTitle>
                    <TodoBody>{body}</TodoBody>
                </TodoLink>
                <TodoButtonBox>
                    <TodoButton type="button"
                                onClick={deleteButton}
                                color={color}
                    >
                        삭제
                    </TodoButton>
                    <TodoButton type="button"
                                onClick={doneToggle}
                                color={color}
                    >
                        {checked ? '취소' : '완료'}
                    </TodoButton>
                </TodoButtonBox>
            </TodoBox>
        </BoxContainer>
    );
};

export default ToDo;
