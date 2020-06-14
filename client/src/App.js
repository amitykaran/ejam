/**
 * Root Component
 */
import React from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";


import DeploymentList from "./app/DeploymentList/DeploymentList";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

export default function App(props) {
  return (
      <div style={{ backgroundColor: '#fff', width: '100%', minHeight: '100vh', position: 'relative' }}>
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
      // <Router>
      //     <div>
      //         <div>
      //           <Header/>
      //         </div>
      //         <div>
      //             <Switch>
      //                 <Route exact path="/">
      //                     <DeploymentList/>
      //                 </Route>
      //             </Switch>
      //         </div>
      //     </div>
      //
      // </Router>
  );
}
