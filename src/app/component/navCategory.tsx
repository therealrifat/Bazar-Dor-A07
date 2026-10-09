"use client";
import React from "react";
import { ICategoryList } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavCategory = ({ navList }: { navList: ICategoryList[] }) => {
  const pathName = usePathname();


  return (
    <div className="flex gap-1 md:gap-3 md:justify-start justify-center">
      {navList.map((p: ICategoryList) => {
        const isActive = pathName === `/category/${p.slug}`
        return(
          <Link key={p.id} href={`/category/${p.id}`} className={isActive ? "bg-green-700 text-white p-2 rounded-lg items-center  ":" items-center p-2" }>
            <div className="flex gap-1">
              <samp>{p.icon}</samp>
              <p>{p.nameBn}</p>
            </div>


          </Link>

        )
      })
      }
    </div>
  );
};

export default NavCategory;



