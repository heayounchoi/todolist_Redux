const SAVE = "SAVE";
const DONE = "DONE";
const DELETE = "DELETE";
const COLOR = "COLOR"

export const saveItem = (payload) => {
    return {
        type: SAVE,
        payload
    };
};

export const doneItem = (payload) => {
    return {
        type: DONE,
        payload,
    };
};

export const deleteItem = (payload) => {
    return {
        type: DELETE,
        payload
    };
};

export const changeColor = (payload) => {
    return {
        type: COLOR,
        payload
    };
};

const initialState = {
    todos: [
        {
            id: 1,
            title: '겨울나기 준비',
            body: '감자 심기',
            checked: false,
        },
        {
            id: 2,
            title: '식사',
            body: '돌맹이 먹기',
            checked: false,
        },
        {
            id: 3,
            title: '친구 만들기',
            body: '외계인 납치',
            checked: true,
        },
    ],
    colors: "black",
};

const item = (state = initialState, action) => {
    switch (action.type) {
        case SAVE:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DONE:
            return {
                todos: state.todos.map((item) => ({
                    ...item,
                    checked: item.id === action.payload ? !item.checked : item.checked,
                }))
            };
        case DELETE:
            return {
                todos: state.todos.filter((item) => item.id !== action.payload)
            };
        case COLOR:
            return {
                ...state,
                colors: action.payload
            };
        default:
            return state;
    }
    ;
};

export default item;