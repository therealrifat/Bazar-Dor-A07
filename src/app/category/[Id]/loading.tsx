import React from "react";

const loading = () => {
  return (
   <div>
      <div className="h-40 w-5xl mx-auto bg-white my-10 rounded-2xl flex items-center  ">
        <div className="h-30 rounded-xl w-30 bg-[#f0f5f0] overflow-hidden mx-15 ">
          <div className="skeleton h-30 w-20 rounded-none bg-white"></div>
        </div>
      </div>

      <div className="h-20 w-5xl mx-auto bg-white my-10 rounded-2xl flex items-center justify-end ">
        <div className="h-9 rounded-xl w-30 bg-[#f0f5f0] overflow-hidden mx-15  ">
          <div className="skeleton h-30 w-20 rounded-none bg-white"></div>
        </div>
      </div>

      <div className="h-40 w-5xl mx-auto  my-10 rounded-2xl gap-5 items-center grid grid-cols-3">
        <div>
          <div className="w-75 h-45 bg-white rounded-2xl flex  gap-2">
            {/* photo */}
            <div className="w-20 h-20 bg-[#f0f5f0] m-5 overflow-hidden rounded-2xl">
                <div className="skeleton h-20 w-8 rounded-none bg-white"></div>

            </div>
            <div className="flex flex-col my-5 space-y-1">
                {/* text */}
              <div className=" w-30 h-5 bg-[#f0f5f0]"></div>
              <div className=" w-20 h-5 bg-[#f0f5f0] "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-75 h-45 bg-white rounded-2xl flex  gap-2">
            {/* photo */}
            <div className="w-20 h-20 bg-[#f0f5f0] m-5 overflow-hidden rounded-2xl">
                <div className="skeleton h-20 w-8 rounded-none bg-white"></div>

            </div>
            <div className="flex flex-col my-5 space-y-1">
                {/* text */}
              <div className=" w-30 h-5 bg-[#f0f5f0]"></div>
              <div className=" w-20 h-5 bg-[#f0f5f0] "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-75 h-45 bg-white rounded-2xl flex  gap-2">
            {/* photo */}
            <div className="w-20 h-20 bg-[#f0f5f0] m-5 overflow-hidden rounded-2xl">
                <div className="skeleton h-20 w-8 rounded-none bg-white"></div>

            </div>
            <div className="flex flex-col my-5 space-y-1">
                {/* text */}
              <div className=" w-30 h-5 bg-[#f0f5f0]"></div>
              <div className=" w-20 h-5 bg-[#f0f5f0] "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-75 h-45 bg-white rounded-2xl flex  gap-2">
            {/* photo */}
            <div className="w-20 h-20 bg-[#f0f5f0] m-5 overflow-hidden rounded-2xl">
                <div className="skeleton h-20 w-8 rounded-none bg-white"></div>

            </div>
            <div className="flex flex-col my-5 space-y-1">
                {/* text */}
              <div className=" w-30 h-5 bg-[#f0f5f0]"></div>
              <div className=" w-20 h-5 bg-[#f0f5f0] "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-75 h-45 bg-white rounded-2xl flex  gap-2">
            {/* photo */}
            <div className="w-20 h-20 bg-[#f0f5f0] m-5 overflow-hidden rounded-2xl">
                <div className="skeleton h-20 w-8 rounded-none bg-white"></div>

            </div>
            <div className="flex flex-col my-5 space-y-1">
                {/* text */}
              <div className=" w-30 h-5 bg-[#f0f5f0]"></div>
              <div className=" w-20 h-5 bg-[#f0f5f0] "></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-75 h-45 bg-white rounded-2xl flex  gap-2">
            {/* photo */}
            <div className="w-20 h-20 bg-[#f0f5f0] m-5 overflow-hidden rounded-2xl">
                <div className="skeleton h-20 w-8 rounded-none bg-white"></div>

            </div>
            <div className="flex flex-col my-5 space-y-1">
                {/* text */}
              <div className=" w-30 h-5 bg-[#f0f5f0]"></div>
              <div className=" w-20 h-5 bg-[#f0f5f0] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
