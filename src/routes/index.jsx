import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Header from '../components/Shared/Header';
import ReceiptsList from '../pages/Pharmacy';
import ReceiptDetails from '../pages/Recipts';
import Home from '../pages/Home';
import Dispensacao from '../pages/Dispense';
import CreateReceipt from '../pages/CreateRecipt';
import Error from '../pages/Error';
import MedicoLogin from '../pages/MedicoLogin';
import FarmaciaLogin from '../pages/FarmaciaLogin';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<ReceiptsList />} />
        <Route path="/receipts/:id" element={<ReceiptDetails />} />
        <Route path="/dispense" element={<Dispensacao />} />
        <Route path="/doctor" element={<CreateReceipt />} />
        <Route path="/medico-login" element={<MedicoLogin />} />
        <Route path="/farmacia-login" element={<FarmaciaLogin />} />
        <Route path="*" element={<Error />} />
        </Routes>
        <Footer /> 
    </BrowserRouter>
  );
};
export default RouterApp;