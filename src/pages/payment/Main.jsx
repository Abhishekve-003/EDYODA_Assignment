import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Main.css';
import LeftSection from '../../components/leftSide/LeftSide';
import RightSection from '../../components/rightSide/RightSide';
const Main = () => {
  return (
    <div className="PaymentPage">
      <Navbar />
      <header className="header">
        <LeftSection />
        <RightSection />
      </header>
    </div>
  );
};

export default Main;
