import React from 'react';

const ServicePost: React.FC = () => {
  return (
    <div className="border-2 border-red-600 w-64">
      <div className="flex flex-row">
        <img src={'https://i.pravatar.cc'} className="w-10 h-10" />
        <div>
          <p>Nate's Repair Shop</p>
          <p>Plumming Service</p>
          <p>Burnaby, BC</p>
        </div>
      </div>
    </div>
  );
};

export default ServicePost;
