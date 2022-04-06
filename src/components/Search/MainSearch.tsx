import React from 'react';
import { Formik } from 'formik';
import styles from 'styles/Search.module.css';

const MainSearch = () => {
  return (
    <div className={styles.container}>
      <h1>Search for Services</h1>
      <div>
        <input type="text" className="w-40 h-10 border-2" />
        <input type="text" className="" />
        <button type="button" className="w-22 bg-red-400">
          Search
        </button>
      </div>
    </div>
  );
};

export default MainSearch;
