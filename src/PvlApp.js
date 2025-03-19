import React from 'react';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import PvlHome from './components/PvlHome';
import PvlListUser from './components/PvlListUsers';
import PvlCreateUser from './components/PvlCreateUser';
import PvlEditUser from './components/PvlEditUser';
import PvlNavBar from './components/PvlNavBar';


 export default function PvlApp() {
   return (
     <div>
       <div className="container border my-3">
         <h1>ReactJs - MockAPI - MinniProject - [Phạm Văn Lực - K23CNT3]</h1>
         <hr />
         <Router>
           <PvlNavBar /> 
           <Routes>
             <Route path="/" element={<PvlHome />} />
             <Route path="/list-user" element={<PvlListUser />} /> 
             <Route path="/create-user" element={<PvlCreateUser />} />
             <Route path="/edit-user/:id" element={<PvlEditUser />} /> 
           </Routes>
         </Router>
       </div>
     </div>
   );
 }