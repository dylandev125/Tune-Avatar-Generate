import React from 'react';
import Header from './Header'

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ( props: AppLayoutProps ) => {
    return (
        <div className='flex flex-col min-h-[100vh]'>
            <Header/>
            {props.children}
        </div>
    )
}

export default AppLayout;