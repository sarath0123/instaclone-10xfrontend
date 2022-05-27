import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing_page from './Landing_page';
import Postview from './../Postview';
import Form from '../Components/Form';

export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing_page/>}/>
                <Route path="postview" element={<Postview/>} />
                <Route path="/form" element={<Form/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
