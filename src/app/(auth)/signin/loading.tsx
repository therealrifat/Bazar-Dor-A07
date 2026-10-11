import React from "react";

const loading = () => {
  return (
    <div>
      <div className="h-80  md:w-2xl mx-auto bg-white my-10 rounded-2xl flex items-center  ">
        <div className="h-10 rounded-xl w-20 bg-[#f0f5f0] overflow-hidden mx-15 ">
          <div className="skeleton h-30 w-20 rounded-none bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
