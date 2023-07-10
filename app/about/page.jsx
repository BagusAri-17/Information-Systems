'use client'
import Catalogue from "@/components/Catalogue";
import Footer from "@/components/Footer";
import ListCatalogue from "@/components/ListCatalogue";
import Navbar from "@/components/Navbar";
import Image from 'next/image'
import AboutUs from "@/components/AboutUs";
import OurTeam from "@/components/OurTeam";

export default function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <OurTeam />
      <Footer />
    </>
  )
}
