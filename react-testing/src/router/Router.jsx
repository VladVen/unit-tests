import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import Users from "../components/users/Users";
import DetailedUsersPage from "../pages/DetailedUsersPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/users/:id'} element={<DetailedUsersPage/>}/>
            <Route path={'/*'} element={<ErrorPage/>}/>
        </Routes>
    );
};

export default Router;