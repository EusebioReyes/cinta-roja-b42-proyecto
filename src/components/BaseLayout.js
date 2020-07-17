import React, { Children } from 'react';
import MenuBar from './MenuBar';
import Footer from './Footer';

const BaseLayout = ({ title,children}) =>{
    return (
        <div className="container">
            <MenuBar title={title} ></MenuBar>
            {children}
            <Footer></Footer>
        </div>
    );

}

export default BaseLayout;