"use client"

import { usePathname } from "next/navigation";



const PathName = () => {
    const pathName = usePathname()
    
    return pathName
};

export default PathName;