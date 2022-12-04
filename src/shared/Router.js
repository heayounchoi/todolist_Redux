import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetail from "../pages/TodoDetail";
import Layout from "../components/layout/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="tododetail/:id" element={<TodoDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;