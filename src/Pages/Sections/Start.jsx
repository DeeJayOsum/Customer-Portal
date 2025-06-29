import React from 'react';

const Start = () => {


    return (
        <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '60vh', margin: 0 }}>

            <main style={{
                maxWidth: '600px',
                background: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ color: '#003366', marginBottom: '10px' }}>Apply for Medicaid</h1>
                <p>
                    Welcome to the New York State Medicaid application portal. This application is for individuals and families seeking health coverage through Medicaid.
                </p>
                <p>Before you begin, make sure you have the following:</p>
                <ul>
                    <li>Personal information (name, date of birth, SSN)</li>
                    <li>Proof of identity and residence in New York State</li>
                    <li>Income details and household information</li>
                </ul>
            </main>

        </div>
    );
};

export default Start;
