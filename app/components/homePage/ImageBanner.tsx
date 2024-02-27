import {Image} from '@shopify/hydrogen';
import React from 'react';

const ImageBanner = ({
  imgUrl,
  bannerText,
}: {
  imgUrl: string;
  bannerText: string;
}) => {
  return (
    <div className="mx-auto w-7/12">
      <div className="relative">
        <Image className="" alt="t" src={imgUrl} />

        <div className="absolute bottom-0 w-full z-50 flex flex-col pb-10">
          <div className="py-5 font-bold flex flex-row justify-center text-5xl text-white">
            {bannerText}
          </div>
          <div className="py-5 flex flex-row justify-center ">
            <div className="border border-white  bg-white py-1 px-2 font-semibold">
              Shop now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
