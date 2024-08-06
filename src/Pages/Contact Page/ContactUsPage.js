import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FileUpload } from 'primereact/fileupload';
import MuiPhoneNumber from 'material-ui-phone-number';
import Navbar from '../Home Page/Components/Navbar';
import Footer from '../Home Page/Components/Footer';
import emailjs from '@emailjs/browser';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import ContactForm from './Components/ContactForm';
import DataEngineeringHero from '../Data & AI/Data Engineering/Components/DataEngineeringHero'
import ContactHero from './Components/ContactHero';

export default function ContactUsPage() {

    return (
        <>
            <Navbar />
            <ContactHero />
            <ContactForm />
            <Footer />
        </>
    )
}
