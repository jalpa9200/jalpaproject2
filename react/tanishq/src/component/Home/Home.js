import React from 'react';
import Header from '../Header';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Owl from './Owl';

const Home = () => {
    return(
        <>
            <Header/>
            <Search/>
            <QuickSearch/>
            <Owl/>
        </>
    )
}

export default Home;