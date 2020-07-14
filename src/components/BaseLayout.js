import React, { Children } from 'react';
import MenuBar from './MenuBar';

const BaseLayout = ({ title,children}) =>{
    return (
        <div className="container">
            <MenuBar title={title} ></MenuBar>
            {children}
        </div>
    );

}

export default BaseLayout;