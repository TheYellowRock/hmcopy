import React from 'react'

export default function BigBanner() {
  return (
    <div className='flex flex-row w-full pt-20 pb-10'>
      <div className='mx-auto w-7/12 bg-baseMembership'>
        <div className='flex flex-col py-60 '>
            <div className='w-full flex flex-row justify-center text-textMembership font-semibold tracking-widest'>
            Member exclusive!
            </div>
            <div className='w-full flex flex-row justify-center text-6xl text-textMembership font-bold py-2'>20% off app orders</div>
            <div className='w-full flex flex-row justify-center text-2xl text-textMembership  tracking-widest'>Download the app and find your code.</div>
            <div className='w-full flex flex-row justify-center text-sm text-textMembership  '>Not a member? Join today for exclusive perks, giveaways & more!</div>
            <div className='w-full flex flex-row justify-center pt-10'>
              <div className='p-2 mx-1 font-semibold border border-black'>Join for free</div>
              <div className='p-2 mx-1 font-semibold border border-black'>Download iOS</div>
              <div className='p-2 mx-1 font-semibold border border-black'>Download Android</div>
            </div>
        </div>
        
      </div>
    </div>
  )
}
