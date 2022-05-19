import React from 'react';
import Image from 'next/image';

const ServicePost: React.FC = () => {
  return (
    <div className="border-2 active:border-primary active:border-l-8 w-80 h-32 p-3 border-gray-300 mb-1">
      <div className="flex flex-row gap-2">
        <div className="">
          <Image
            src={'https://i.pravatar.cc'}
            width={35}
            height={35}
            className="rounded-md"
          />
          <p className="text-xs font-bold text-center">4.2 ✰</p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="leading-5">
            <p className="text-md font-medium">Nate's Repair Shop</p>
            <p>Plumming Service</p>
          </div>

          <p className="text-xs">Burnaby, BC</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePost;
