import React, { useState } from 'react';
import './Userprofile.css';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const [title, setTitle] = useState('Benefits');


    return (
        <>
            <div>
                <h1>{title}</h1>
            </div>

            <div style={{ display: 'flex' }}>
                <div className='left-nav'>
                    <div style={{ marginBottom: '20px' }} onClick={() => setTitle('Benefits')}>
                        <Link to="benefits" style={{ marginRight: '10px' }}>Benefits</Link>
                    </div>
                    <div style={{ marginBottom: '20px' }} onClick={() => setTitle('Contact')}>
                        <Link to="contact" style={{ marginRight: '10px' }}>Contact</Link>
                    </div>
                    <div style={{ marginBottom: '20px' }} onClick={() => setTitle('Documents')}>
                        <Link to="documents" style={{ marginRight: '10px' }}>Documents</Link>
                    </div>
                </div>
                <div className='left-nav-screens'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
export default Dashboard;