'use client'
import React, { useEffect, useState } from 'react';


const CurrentDate = () => {
const [date, setDate] = useState<string | null>(null)

useEffect(() => {setDate (new Date().toLocaleDateString("bn-bd",{
        dateStyle: "full"
    }))}, [])

    

    return <span>{date}</span>
};

export default CurrentDate;