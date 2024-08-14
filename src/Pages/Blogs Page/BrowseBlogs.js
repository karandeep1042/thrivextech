import React from 'react'
import BrowseBlogsHero from './Components/BrowseBlogsHero'
import Navbar from '../Home Page/Navbar'
import Footer from '../Home Page/Components/Footer'
import BrowseBlogsCards from './Components/BrowseBlogsCards'

export default function BrowseBlogs() {
    return (
        <>
            <Navbar />
            <BrowseBlogsHero />
            <BrowseBlogsCards />
            <Footer />
        </>
    )
}
