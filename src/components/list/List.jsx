import React from 'react';
import Todo from "../todo/Todo";

import {useSelector} from 'react-redux';

import styled from 'styled-components';

const TitleBox = styled.h2`
    width: fit-content;
    margin-left: 20px;
    font-size: xx-large;
`;

const List = ({checkedList}) => {
    const items = useSelector((state) => state.item);

    const {todos} = items

    return (
        <div>
            <TitleBox>{checkedList ? '다했🐿️' : '안했🐿️'}</TitleBox>
            <div>
                {todos &&
                    todos.map((todo) => {

                        if (todo.deleted) return null

                        if (checkedList !== todo.checked) return null

                        return (
                                <Todo todo={todo}/>
                        );
                    })}
            </div>
        </div>
    );
};

export default List;
