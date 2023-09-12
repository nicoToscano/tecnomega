'use client'
import {ShoppingCartIcon} from "@heroicons/react/20/solid";

export default function Productos() {
    return (
        <>
            <div className="flex flex-col mb-[50px]">
            <div className="flex flex-col flex-grow mt-[20px] ml-[140px] mr-[140px]">
                <div className="bg-white  font-bold border-b-[1px] border-[#777777] ">
                    <h2 className="text-[#000000]">CATEGORÍAS MÁS BUSCADAS</h2>
                </div>
                <div className="flex flex-col border-solid border-b-gray-400 border-[2px]">
                    <div className="flex ml-[30px]">
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt ="Categoria tabletas y celulares" src="img_3.png"/></div>
                                <p className="text-[15px]">CELULARES & TABLETS</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt ="Categoria computadoras" src="img_4.png"/></div>
                                <p className="text-[15px] pt-[8px]">COMPUTADORES</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt ="Categoria impresoras"  src="img_5.png"/></div>
                                <p className="text-[15px] pt-[8px]">IMPRESORAS</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt = "Categoria monitores" src="img_6.png"/></div>
                                <p className="text-[15px] pt-[8px]">MONITORES</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt = "Categoria televisores" src="img_7.png"/></div>
                                <p className="text-[15px] pt-[8px]">TELEVISORES</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt = "Categoria discos" src="img_16.png"/></div>
                                <p className="text-[15px] pt-[8px]">DISCOS DUROS</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                    </div>
                    <div className="flex ml-[30px]">
                        <div className="flex flex-grow ml-[20px] ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt = "Categoria motherboards" src="img_8.png"/></div>
                                <p className="text-[15px] pt-[22px]">MOTHERBOARD</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt = "Categoria ram" src="img_9.png"/></div>
                                <p className="text-[15px] pt-[9px]">MEMORIAS RAM</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt = "Categoria tarjetas de video" src="img_10.png"/></div>
                                <p className="text-[15px] ">TARJETAS DE VIDEO</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow ">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt = "Categoria procesadores" src="img_11.png"/></div>
                                <p className="text-[15px] pt-[8px]">PROCESADORES</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt="categoria cases" src="img_12.png"/></div>
                                <p className="text-[15px] ">CASES</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        <div className="flex flex-grow">
                            <button className="group relative">
                                <div className="flex items-center justify-center"><img alt="Categoria fuentes de poder" src="img_13.png"/></div>
                                <p className="text-[15px] pt-[10px]">FUENTES DE PODER</p>
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-[20px] ml-[140px] mr-[140px]">
                <div className="bg-white  font-bold border-b-[1px] border-[#777777] ">
                    <h2 className="text-[#000000]">PRODUCTOS MAS COMPRADOS</h2>
                </div>
                <div className=" mt-[20px]">
                    <div className="flex">
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                                <div className="">
                                    <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "MotherBoard ASROCK" width="250" height="250" src="img_15.png" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>MBO ASROCK B650E WIFI</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                    </button>
                                    <div className="flex" >
                                        <button>
                                            <div
                                                className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center" >
                                                <p>Comprar</p>
                                                
                                            </div>
                                        </button>
                                        <div className="flex flex-grow justify-end items-center text-[20px]" >
                                            <p>$349.99</p>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Celular Samsung Z Flip" width="250" height="250" src="CelSamsungFlip.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>Samsung Galaxy Z Flip</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$989.33</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Impresora multifuncional Epson" width="250" height="250" src="EpsonMultifuncion.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>EPSON MULTIFUNCIONAL EcoTank L6270</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$571.20</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Laptop asus delgada" width="250" height="250" src="LaptopAsus1.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>ASUS Intel N4000 Ulta Delgada</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$431.73</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Laptop dell inspiron" width="250" height="250" src="LaptopDellInspiron.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>DELL INSPIRON 3520 I5-1135U</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$480.36</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                <div className=" mt-[20px]">
                    <div className="flex">
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Laptop dell latitude" width="250" height="250" src="LaptopDellLattitude.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>DELL LATITUDE 7430 I5-1235U</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$1334.55</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Laptop dynabook Satellite" width="250" height="250" src="LaptopDynabook satelite.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>DYNABOOK Satellite Pro C50-J I7-1165G7</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$1056.53</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Laptop Apple MacBook Pro M2" width="250" height="250" src="MacBookProM2.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>APPLE MacBook Pro M2 Pro</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$3439.64</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Motherboard Asrock" width="250" height="250" src="MotherboardAsrock.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>ASROCK A620M HDVM.2</p>
                                        <div className="flex justify-center">
                                        <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$129.43</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center justify-center pl-[40px] pr-[40px]">
                            <div className="">
                                <button className="group relative ">
                                    <div className="border-b-[2px] ">
                                        <img alt = "Celular Samsung S23 Plus" width="250" height="250" src="SamsungS23.webp" className="transition-transform duration-300 group-hover:scale-105"/>
                                        <p>Samsung Galaxy S23 Plus</p>
                                        <div className="flex justify-center">
                                            <p className="bg-whitetext-[15px] text-black items-end mb-[2px] font-bold">Precio
                                                incluye IVA*</p>
                                        </div>
                                    </div>
                                </button>
                                <div className="flex">
                                    <button>
                                        <div
                                            className="flex flex-grow bg-[#434343] text-white mt-[4px] p-[4px] rounded-[3px] text-[15px] justify-center items-center">
                                            <p>Comprar</p>
                                            
                                        </div>
                                    </button>
                                    <div className="flex flex-grow justify-end items-center text-[20px]">
                                        <p>$981.87</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            </div>
        </>
    )
}