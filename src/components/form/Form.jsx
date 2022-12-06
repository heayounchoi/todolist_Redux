import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';

import {saveItem, changeColor} from "../../redux/modules/item";

const FormBox = styled.div`
    cursor: default;
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
    border-color: ${(props) => props.color};
`;

const AddButton = styled.button`
    &:hover {
    background-color: lightgray;
    }
    
    cursor: pointer;
    margin-left: 5%;
    background-color: transparent;
    border: 1px solid ${(props) => props.color};
    border-radius: 3px;
    width: 50px;
    height: 33px;
`;

const ColorButton = styled.button`
    &:hover {
    background-color: lightgray;
    }
    
    cursor: pointer;
    margin-left: 5px;
    background-color: transparent;
    border: 1px solid ${(props) => props.color};
    border-radius: 3px;
    width: 50px;
    height: 33px;
`;

const Form = () => {
    const dispatch = useDispatch();

    const color = useSelector((state) => state.item.color)

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [count, setCount] = useState(0);

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    };

    const onChangeBody = (e) => {
        setBody(e.target.value)
    };


    const addButton = () => {
        if (title === '' || body === '') {
            alert('머라도 하라')
        } else {
            dispatch(saveItem({
                id: new Date().valueOf(),
                title,
                body,
                checked: false,
            }));
        }

        setTitle('');
        setBody('');
    };

    const colored = () => {
        setCount((prev) => prev + 1)

        const newColor = ["black", "hotpink", "aquamarine", "dodgerblue"]

        dispatch(changeColor(newColor[count % 4]))
    }

    return (
        <FormBox>
            <InputTitle>제목</InputTitle>
            <InputBox type="text"
                      value={title}
                      onChange={onChangeTitle}
                      color={color}
            />
            <InputTitle>내용</InputTitle>
            <InputBox type="text"
                      value={body}
                      onChange={onChangeBody}
                      color={color}
            />
            <AddButton type="button"
                       onClick={addButton}
                       color={color}
            >
                등록
            </AddButton>
            <ColorButton type="button"
                         onClick={colored}
                         color={color}
            >
                Color
            </ColorButton>
        </FormBox>
    );
};

export default Form;
