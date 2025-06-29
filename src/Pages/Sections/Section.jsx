import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Spinner from '../../components/Popup/Popup';

const Section = () => {

    const allSections = ['START', 'HHAPL', 'HHIND', 'CNGRTS']
    const titleMapping = {
        START: 'Start',
        HHAPL: 'Account Holder',
        HHIND: 'People',
        CNGRTS: 'Congratulations'
    }

    const navigate = useNavigate();
    const [section, setSection] = useState('START');
    const [spinner, setSpinner] = useState(false);
    const goNext = () => {
        setTimeout(() => {
            setSpinner(false)
            const nextSectionIndex = allSections.findIndex(s => s === section);
            if (allSections[nextSectionIndex + 1]) {
                setSection(allSections[nextSectionIndex + 1]);
                navigate('/application/' + allSections[nextSectionIndex + 1]);
            }
            else {
                navigate('/dashboard');
            }
        }, 600);
        setSpinner(true)
    }

    const goPrevious = () => {
        const prevSectionIndex = allSections.findIndex(s => s === section);
        if (allSections[prevSectionIndex - 1]) {
            setSection(allSections[prevSectionIndex - 1]);
            navigate('/application/' + allSections[prevSectionIndex - 1]);
        }
        else {
            navigate('/dashboard');
        }

    }
    const [formData, setFormData] = useState({});


    return (
        <div>
            {spinner && <Spinner />}
            <h1>{titleMapping[section]}</h1>
            <div>
                <a onClick={goPrevious}>&lt; Back to Previous</a>
            </div>
            <br></br>
            <div className='section-margin'>
                <Outlet context={{ formData, setFormData }} />
            </div>
            <br></br>
            <button className='blue-button' onClick={goNext}>
                {section === 'CNGRTS' ? <span>Back to Dashboard &gt;</span> : <span>Next &gt;</span>}

            </button>
        </div>
    )
}
export default Section;