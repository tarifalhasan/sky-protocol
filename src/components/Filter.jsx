import React from 'react';

const Filter = () => {
  return (
    <div className="flex flex-col space-y-6 lg:flex-row justify-between items-center">
      <div className="flex space-y-5 flex-col lg:flex-row  gap-4 items-center">
        <h2 className="text-xs lg:text-lg font-normal text-[#F3F3F3]">
          TVL Rankings
        </h2>
        <ul className="flex  flex-wrap items-center gap-4">
          <li>
            <button className="px-6 py-0.5  bg-[#0EAAEC] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              All
            </button>
          </li>
          <li>
            <button className="px-6 py-0.5  bg-[#0EAAEC] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              Ethereum
            </button>
          </li>
          <li>
            <button className="px-6 py-0.5   bg-[#0EAAEC] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              Tron
            </button>
          </li>
          <li>
            <button className="px-6 py-0.5   bg-[#0EAAEC] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              BSC
            </button>
          </li>
          <li>
            <button className="px-6 py-0.5  bg-[#0EAAEC] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              Arbitrum
            </button>
          </li>
          <li>
            <button className="px-6 py-0.5   bg-[#0EAAEC] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              Polygon
            </button>
          </li>
          <li>
            <button className="px-6  py-0.5  bg-[#0EAAEC] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              Optimism
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <button className="px-6 flex items-center gap-2 py-0.5  bg-[#31505D] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              Chains
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00002 0H9.00002V12L14.5 6.5L15.92 7.92L8.00002 15.84L0.0800171 7.92L1.50002 6.5L7.00002 12V0Z"
                  fill="#F3F3F3"
                />
              </svg>
            </button>
          </li>
          <li>
            <button className="px-6 flex items-center gap-2 py-0.5  bg-[#31505D] rounded-[100px]  text-xs lg:text-lg font-semibold text-[#F3F3F3]">
              TVL Range
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00002 0H9.00002V12L14.5 6.5L15.92 7.92L8.00002 15.84L0.0800171 7.92L1.50002 6.5L7.00002 12V0Z"
                  fill="#F3F3F3"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
