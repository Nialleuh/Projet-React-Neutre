import * as React from 'react';
import { Outlet } from "react-router-dom";

const Index = () => {
    return (
        <div>
            <Outlet />
            <p>"xd"</p>
        </div>
    )
};

export default Index;