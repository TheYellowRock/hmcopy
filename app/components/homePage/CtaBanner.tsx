import React from 'react';

export default function CtaBanner() {
  return (
    <div className="flex flex-row w-full py-7">
      <div className="mx-auto w-7/12 bg-baseInfo">
        <div className="flex flex-col py-5 ">
          <div className="w-full flex flex-row justify-center text-3xl font-bold py-2">
          Product Safety Recall
          </div>
          <div className="py-5 flex flex-row justify-center ">
            <div className="border border-white  bg-white py-1 px-2 font-semibold">
              Learn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
