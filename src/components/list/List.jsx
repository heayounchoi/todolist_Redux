import React from 'react';
import Todo from "../todo/Todo";

import {useSelector} from 'react-redux';

import styled from 'styled-components';

const TitleBox = styled.h2`
    cursor: default;
    width: fit-content;
    margin-left: 20px;
    font-size: xx-large;
`;

const List = ({checkedList}) => {
    const todos = useSelector((state) => state.item.todos);
    return (
        <div>
            <TitleBox>{checkedList ? '다했🐿️' : '안했🐿️'}</TitleBox>
            <div>
                {todos &&
                    todos.map((todo) => {
                        if (checkedList !== todo.checked) return null

                        return (
                                <Todo key={todo.id} todo={todo}/>
                        );
                    })}
            </div>
        </div>
    );
};

export default List;
