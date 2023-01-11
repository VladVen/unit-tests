import React from 'react';
import Counter from "../components/counter/Counter";

const MainPage = () => {
    return (
        <div data-testid={'main-page'}>
           <h2>Main Page</h2>
            <Counter/>
        </div>
    );
};

export default MainPage;