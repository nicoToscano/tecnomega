import {
    ArrowLeftIcon,
    MinusCircleIcon,
    MinusIcon,
    PlusCircleIcon,
    PlusIcon,
    TrashIcon, XCircleIcon
} from "@heroicons/react/20/solid";
import { FaLess } from "react-icons/fa";
import { CgDetailsLess } from "react-icons/cg";
import { DiLess } from "react-icons/di";
import { MdExpandLess } from "react-icons/md";
import Estimacion from "@/app/components/estimacion";
import { useState } from "react";


export default function Car() {
    const [estClick, setEstClick] = useState(false)
    const [page2Style, setPage2Style] = useState("")
    const [page3Style, setPage3Style] = useState("hidden")


    function estClicked() {
        if (!estClick) {
            setPage2Style("pb-[50px]")
            setEstClick(true)
            setPage3Style("visible")
        } else {
            setPage2Style("")
            setPage3Style("hidden")
            setPage2Style("")
        }
    }
    function xClicked() {
        if (estClick) {
            setPage2Style("")
            setPage3Style("hidden")
            setPage2Style("")
            setEstClick(false)
        }
    }
    return (
        <>
            <div className={page2Style}>
                <div className="relative">
                    <div className="bg-[#EAEAEA] pt-[10px] pl-[100px] pr-[100px] pb-[30px]">
                        <p className="flex flex-grow justify-end">Usuario</p>
                        <div className="flex">
                            <div
                                className="flex flex-col flex-grow bg-white mr-[30px] border-[#AAAAAA] border-[2px] rounded-[5px]">
                                <div className="flex border-b-gray-400 border-b-[2px] text-[15px]  pt-[20px] pb-[20px]  ">
                                    <p className="flex flex-grow justify-center items-center">MI CARRITO</p>
                                    <button className="flex flex-2 flex-col items-end justify-end text-black px-2 py-1 rounded text-sm font-bold">
                                        <TrashIcon className=" flex items-center justify-center text-[15px] h-[20px] w-[20px] mr-[17px]"></TrashIcon>
                                        <p className="flex items-center justify-center text-[12px] pr-[7px]">Borrar</p>
                                    </button>
                                </div>
                                <div className="flex m-[20px] border-[#AAAAAA] border-[2px] rounded-[5px] pb-[10px]">
                                    <img src="img_15.png" alt="Imagen de la placa base Asrock B560E WIFI PG RIPTIDE" ></img>
                                    <div className="flex flex-col flex-grow justify-center">
                                        <div className="flex flex-grow items-center justify-center pt-[50px] pl-[20px]">
                                            <p className="flex justify-center items-center ml-[10px]"> MainBoard Asrock B560E
                                                WIFI PG RIPTIDE</p>
                                            <p className="flex justify-center items-center text-[#000000] ml-[40px] font-bold">$349.69</p>
                                        </div>
                                        <p className="flex flex-grow justify-end text-[#000000] pt-[50px] font-bold">
                                            Detalles del producto
                                        </p>
                                    </div>
                                    <div className="flex flex-col flex-grow text-black text-[50px] pt-[30px] pl-[15px]">
                                        <div className="flex flex-grow justify-center items-center">
                                            <div className="pl-[30px]">
                                                <button className="flex flex-grow flex-col justify-end">
                                                    <PlusCircleIcon className="h-[40px] text-amber-600"></PlusCircleIcon>
                                                    <p className="text-[10px]">Aumentar</p>
                                                </button>
                                                <button className="flex flex-grow flex-col justify-end pt-[10px]">
                                                    <MinusCircleIcon className="h-[40px] text-amber-600"></MinusCircleIcon>
                                                    <p className="text-[10px]">Disminuir</p>
                                                </button>
                                            </div>
                                            <div className="flex ml-[30px] border-[#AAAAAA] border-[2px] rounded-[5px] justify-end">
                                                <h2 className="flex pr-[10px] pl-[10px]">1</h2>
                                            </div>
                                        </div>
                                        <div className="flex flex-grow items-end justify-end pb-[5px] pr-[50px] pt-[10px]">
                                            <button className="flex flex-grow flex-col justify-center items-center text-black px-2 py-1 rounded text-sm font-bold">
                                                <TrashIcon className="h-[30px]"></TrashIcon>
                                                <p className="flex justify-center items-center text-[12px]">Borrar</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end pr-[20px] items-center pb-[10px]">
                                    <button className="flex items-center border-b border-dark  font-bold">
                                        <p>Seguir comprando</p>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col flex-grow">
                                <div className="flex flex-col h-min bg-white border-[#AAAAAA] border-[2px] mb-[5px] rounded-[5px]">
                                    <div className="flex border-b-[2px] border-b-gray-400">
                                        <p className="flex flex-grow justify-center">Resumen de compra</p>
                                    </div>
                                    <div className="flex p-[10px] border-b-[2px] border-b-gray-400">
                                        <div>
                                            <p>Subtotal 0 Articulos</p>
                                            <p>I.V.A</p>
                                        </div>
                                        <div className="flex flex-col flex-grow justify-end items-end ">
                                            <p>$0.00</p>
                                            <p>$0.00</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <p className="pl-[10px]">Total</p>
                                        <p className="flex flex-grow items-end justify-end text-[#000000] pr-[10px] font-bold">$0.00</p>
                                    </div>
                                </div>
                                <div className="flex bg-[#303030] text-white justify-center rounded-[5px] mb-[5px]">
                                    <button className="flex flex-grow items-center justify-center">Proceder con el pago</button>
                                </div>
                                <div className="flex bg-[#303030] text-white justify-center rounded-[5px]">
                                    <button onClick={estClicked} className="flex flex-grow items-center justify-center">Estimar cuotas con tarjeta de credito</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className={page3Style}>
                <div className="absolute top-[280px] left-[470px]">
                    <div className="flex flex-grow flex-col bg-white ml-[350px] mr-[350px] mt-[20px] pb-[20px] border-amber-600 border-[2px]">
                        <div className="bg-[#F9F9F9]">
                            <div className="flex flex-grow justify-center ">
                                <p className="flex flex-grow justify-end">Estimación de cuotas</p>
                                <div className="flex flex-grow justify-end pr-[5px]">
                                    <button onClick={xClicked}>
                                        <XCircleIcon className="h-[25px] text-amber-600"></XCircleIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#F9F9F9] pt-[10px]">
                            <div
                                className="flex justify-center pt-[3px] pb-[3px] rounded-[5px]">
                                <p>Total:</p>
                                <p className="text-blue-500">$399.69</p>
                            </div>
                        </div>
                        <div className="flex bg-[#F9F9F9]">
                            <div className="flex flex-grow pl-[20px] pr-[200px]">
                                <p>Seleccione el Banco</p>
                            </div>
                            <div className="flex flex-grow">
                                <select>
                                    <option value=""></option>
                                    <option value="opcion1">Diners</option>
                                    <option value="opcion2">Banco Pichincha</option>
                                    <option value="opcion3">Banco Manabi</option>
                                    <option value="opcion1">Banco de Loja</option>
                                    <option value="opcion2">Banco General Rumiñahui</option>
                                    <option value="opcion3">Banco Pacífico</option>
                                    <option value="opcion1">Banco Guayaquil</option>
                                    <option value="opcion2">Banco Bolivariano</option>
                                    <option value="opcion3">Banco Internacional</option>
                                    <option value="opcion1">Produbanco</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#F9F9F9] pl-[20px] pt-[10px]">
                            <div className="flex items-center pt-[5px] pb-[5px]">
                                <p className="pr-[30px]">Seleccione el tipo de tarjeta.</p>
                                <button className="mr-[30px] p-[5px] bg-amber-600 rounded-[5px]">Personal</button>
                                <button className="flex">Corporativo</button>
                            </div>
                        </div>
                        <div className="flex flex-col bg-[#F9F9F9] pl-[20px] pt-[10px]">
                            <p>Seleccione el plazo en meses.</p>
                            <div className="flex space-x-10 ml-[40px] mt-[10px]">
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">3</div>
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">6</div>
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">9</div>
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">12</div>
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">15</div>
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">18</div>
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">24</div>
                                <div className="border-b-gray-400 border-[2px] pl-[7px] pr-[7px]">36</div>
                            </div>

                        </div>
                        <div className="flex flex-col justify-center items-center bg-[#F9F9F9] pl-[20px] pt-[10px]">
                            <p>Cuota mensual estimada</p>
                            <p>$31.09</p>
                        </div>
                        <div className="flex text-white justify-center bg-[#F9F9F9]">
                            <button className="bg-[#878787] rounded">Proceder con el pago</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}