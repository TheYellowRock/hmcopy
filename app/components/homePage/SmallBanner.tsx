import React from 'react';

export default function SmallBanner() {
  return (
    <div>
      <div className="flex flex-row w-full py-10">
        <div className="mx-auto w-7/12 bg-baseMembership">
          <div className="w-full flex flex-row justify-center text-3xl text-textMembership font-semibold py-5">
            Member giveaway: Win two pairs of jeans of your choice!
          </div>
        </div>
      </div>
    </div>
  );
}
