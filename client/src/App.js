/**
 * Root Component
 */
import React from 'react';



import DeploymentList from "./app/DeploymentList/DeploymentList";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

export default function App(props) {
  return (
      <div style={{ backgroundColor: '#fff', width: '100%', position: 'relative' }}>
          <div>
              <Header/>
          </div>
          <div className="container">
              <DeploymentList/>
          </div>
          <div>
              <Footer/>
          </div>
      </div>
  );
}
