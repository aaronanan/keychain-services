import React from 'react';
import type { NextPage } from 'next';

//components
import Header from 'components/Header/Header';
import Navbar from 'components/Header/Navbar';
import ServiceList from 'components/ServiceList/ServiceList';

export const Services: NextPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ServiceList />
    </div>
  );
};
export default Services;
