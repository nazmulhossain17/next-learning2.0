import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cdetails from '../Pages/Cdetails/Cdetails';

const Courses = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>Courses : {data.length}</h1>
        
            
            <div>
            {
                data.map(nse => <Cdetails 
                key={nse.id} 
                nse={nse}
                ></Cdetails>)
            }
            </div>
        </div>
    );
};

export default Courses;