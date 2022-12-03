import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoList from "../pages/TodoList";
import Layout from "../components/layout/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="todolist/:id" element={<TodoList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;