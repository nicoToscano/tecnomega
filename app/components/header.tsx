'use client'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BiLaptop, BiMoney, BiUser } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import React, { useState } from "react";
import { ArrowDownOnSquareIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { AiOutlineForm } from "react-icons/ai";
import Car from "@/app/components/car";
import Estimacion from "@/app/components/estimacion";
import Productos from "@/app/components/productos";

export default function Header() {
    const [car, setCar] = useState(false)
    const [page1Style, setPage1Style] = useState("visible")
    const [page2Style, setPage2Style] = useState("hidden")
    function carClicked() {
        if (!car) {
            setCar(true)
            setPage1Style("hidden")
            setPage2Style("visible")
        }
    }
    function logoClicked() {
        if (car) {
            setPage1Style("visible")
            setPage2Style("hidden")
            setCar(false)
        }
    }
    return (
        <>
            <div>
                <div className="bg-[#303030]">
                    <div className="flex pl-[140px] pr-[120px]">
                        <button onClick={logoClicked}>
                            <img src="/logo.png" className="flex w-25 h-20" alt="Tecnomegastore" />
                        </button>
                        <div className="flex flex-1 items-center mr-[30px]">
                            <input id="input" className="flex flex-grow text-[15px] h-[30px]"
                                placeholder=" Qué estás buscando?" alt="ingresar busqueda" aria-label="ingresar busqueda"/>
                            <div className="flex justify-center items-center w-[46px] p-[3px] h-[34px] bg-black">
                                <button id="buscar" className="flex flex-col text-white text-[12px] justify-center items-center">
                                    <FaMagnifyingGlass></FaMagnifyingGlass>
                                    <p className="text-[12px]">Buscar</p>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center rounded-[5px]">
                            <button
                                className="w-[206px] h-[30px] bg-amber-300 border-r-2 text-[#835300] font-bold rounded-[5px]">
                                <div className="flex items-center justify-center">
                                    <p className="pr-[5px]">ARMAR UNA PC</p>
                                    <div className="text-[20px]">
                                        <BiLaptop></BiLaptop>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="flex items-center ">
                            <div
                                className="ml-[10px] mr-[10px] border-r-2 border-[#ACACAC] mt-[10px] text-[#ACACAC] pr-[10px] text-[30px]">
                                <button className="flex flex-col justify-center items-center">
                                    <BiUser />
                                    <p className="text-[15px] flex justify-center">Usuario</p>
                                </button>
                            </div>
                            <div
                                className=" mr-[10px] border-r-2 border-[#ACACAC] mt-[10px] text-[#ACACAC] pr-[10px] text-[30px]">
                                <button onClick={carClicked} className="flex flex-col justify-center items-center">
                                    <CgShoppingCart />
                                    <p className="text-[15px] flex justify-center">Carrito</p>
                                </button>
                            </div>
                            <button className="rounded bg-[#1D1D1D] mr-[10px] text-[12px] ml-[0px] w-[115px] h-[55px]">
                                <div className="flex text-[#FFBE4E]">
                                    <div className="flex justify-center text-[30px] items-center pl-[10px]">
                                        <AiOutlineForm />
                                    </div>
                                    <p className="text-white">Hazte nuestro distribuidor</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex pl-[80px] border-t border-[#6D6D6D] text-white">
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] pt-[7px] pb-[7px] justify-center items-center hover:opacity-70">
                            <button>Quienes somos?</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Computacion</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Celulares & Tablets</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Impresión</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Tv & Proyectores</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Hogar</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Productos por Marca</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Productos Nuevos</button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button className="flex">
                                <div
                                    className="flex bg-gradient-conic rounded-full border-[3px] border-[#26FF00] mr-[4px] w-[20px] h-[20px] justify-center items-center">
                                    <p className="text-[#26FF00]">$</p>
                                </div>
                                <p> Ofertas</p></button>
                        </div>
                        <div
                            className="flex border border-[#6D6D6D] text-[12px] pl-[10px] pr-[10px] justify-center items-center hover:opacity-70">
                            <button>Centro de Servicio Técnico</button>
                        </div>
                    </div>
                </div>
                <div className={page1Style}>
                    <Productos />
                </div>
                <div className={page2Style}>
                    <Car></Car>
                </div>
            </div>
        </>
    )
}