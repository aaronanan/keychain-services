import React from 'react';

//components
import Service from './ServicePost';

const ServiceList: React.FC = () => {
  return (
    <div style={{ padding: '1em 20%' }}>
      <Service />
      <Service />
      <Service />
      <Service />
    </div>
  );
};

export default ServiceList;
