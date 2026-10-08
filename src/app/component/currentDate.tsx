
import React from 'react';

const CurrentDate =async () => {

    const today = new Date().toLocaleDateString("bn-bd",{
        dateStyle: "full"
    })


    return <span>{today}</span>
};

export default CurrentDate;