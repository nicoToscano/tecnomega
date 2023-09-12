'use client'
import Image from 'next/image'
import {FaMagnifyingGlass} from "react-icons/fa6";
import Header from "@/app/components/header";
import Productos from "@/app/components/productos";
import React from "react";
import Footer from "@/app/components/footer";
import Car from "@/app/components/car";
import Estimacion from "@/app/components/estimacion";

export default function Home() {
    return (
        <main className="flex flex-col bg-white">
            <Header/>
            <Footer/>
        </main>
    )
}
