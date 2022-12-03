import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styled from 'styled-components';

import {saveItem} from "../../redux/modules/item";

const FormBox = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const InputTitle = styled.span`
    font-size: large;
    margin-left: 10px;
    margin-right: 5px;
`;

const InputBox = styled.input`
    width: 200px;
    height: 25px;
    border-radius: 3px;
`;

const AddButton = styled.button`
    &:hover {
    background-color: lightgray;
    }
    margin-left: 5%;
    background-color: transparent;
    border: 1px solid;
    border-radius: 3px;
    width: 50px;
    height: 33px;
`;

const Form = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    };

    const onChangeBody = (e) => {
        setBody(e.target.value)
    };


    const onClickAddButton = () => {
        if (title === '' || body === '') {
            alert('명왕성 조깅이라도 하3')
        } else {
            dispatch(saveItem({
                id: new Date().valueOf(),
                title,
                body,
                checked: false,
                deleted: false,
            }));
        }

        setTitle('');
        setBody('');
    };

    return (
        <FormBox>
            <InputTitle>제목</InputTitle>
            <InputBox type="text"
                      value={title}
                      onChange={onChangeTitle}
            />
            <InputTitle>내용</InputTitle>
            <InputBox type="text"
                      value={body}
                      onChange={onChangeBody}
            />
            <AddButton type="button"
                       onClick={onClickAddButton}
            >
                등록
            </AddButton>
        </FormBox>
    );
};

export default Form;
