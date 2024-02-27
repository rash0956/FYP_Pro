import React from 'react';
import Sidenav from './Sidenav';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Batches from './pages/Batches';
import Subject from './pages/Subject';
import Session from './pages/Session';


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Dashboard />}></Route>
      <Route path='/batches' exact element={<Batches />}></Route>
      <Route path='/subject' exact element={<Subject />}></Route>
      <Route path='/session' exact element={<Session />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
