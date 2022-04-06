import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

// components
import Header from 'components/Header/Header';
import Navbar from 'components/Header/Navbar';
import Search from 'components/Search/MainSearch';

const Home: NextPage = () => (
  <div>
    <Header />
    <Navbar />
    <Search />
  </div>
);

export default Home;
