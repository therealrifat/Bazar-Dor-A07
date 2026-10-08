
import React from 'react';

const CurrentDate =async () => {

    const today = new Date().toLocaleDateString("bn-bd",{
        dateStyle: "full"
    })
    console.log(today)

    return <span>{today}</span>
};

export default CurrentDate;