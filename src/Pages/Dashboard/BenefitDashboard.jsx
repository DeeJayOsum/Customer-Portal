import React from 'react';
import { useNavigate } from 'react-router-dom';

const Benefits = () => {

    const navigate = useNavigate();
    const goTo = (route) => {
        navigate(route);
    }

    return (
        <>
            <div className='tile'>
                <button className='blue-button' onClick={() => goTo('/application')}>Apply</button>
            </div>
            <div className='tile'>
                <button className='blue-button' onClick={() => goTo('/dashboard/documents')}>Upload Doc</button>
            </div>
        </>
    )
}
export default Benefits;