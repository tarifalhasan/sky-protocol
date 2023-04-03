import React from 'react';

const Filter = () => {
  return (
    <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row  justify-between items-center">
      <div className="flex space-y-5 lg:space-y-0 flex-col lg:flex-row  justify-center  gap-4 items-center">
        <h2 className="text-xs lg:text-base font-normal text-[#F3F3F3]">
          TVL Rankings
        </h2>
        <div>
          <ul className="flex  flex-wrap lg:flex-nowrap items-center justify-center gap-y-5 gap-2 2xl:gap-x-4">
            <li>
              <button className="btn_primary">All</button>
            </li>
            <li>
              <button className="btn_primary">Ethereum</button>
            </li>
            <li>
              <button className="btn_primary">Tron</button>
            </li>
            <li>
              <button className="btn_primary">BSC</button>
            </li>
            <li>
              <button className="btn_primary">Arbitrum</button>
            </li>
            <li>
              <button className="btn_primary">Polygon</button>
            </li>
            <li>
              <button className="btn_primary">Optimism</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <button className="btn">
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
            <button className="btn">
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
