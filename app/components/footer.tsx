Footer: 'use client'
import { BiCurrentLocation, BiLocationPlus, BiSolidEditLocation } from "react-icons/bi";
import { CiLocationArrow1, CiLocationOff, CiLocationOn } from "react-icons/ci";
import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Footer() {
    return (
        <>
            <div className="flex bg-[#434343] text-white p-[10px]">
                <div className="flex flex-1 pr-[10px]">
                    <div>
                        <p className="text-[15px] font-bold">Acerca de TecnoMega:</p>
                        <p className="text-[14px] text-[#D8D8D8] pt-[10px]">TecnoMega es una empresa fundada en el año 1999, con la directriz de suministrar al mercado
                            ecuatoriano productos de calidad con tecnología de punta a nivel nacional.</p>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div>
                        <p className="text-[15px] font-bold">Informacion de compra</p>
                        <ul className="text-[14px] text-[#D8D8D8] pt-[10px]">
                            <li><a href="#">Envios y Entregas</a></li>
                            <li><a href="#">Formas de pago</a></li>
                            <li><a href="#">Envios y Entregas</a></li>
                            <li><a href="#">Garantias</a></li>
                            <li><a href="#">Privacidad y Seguridad</a></li>
                            <li><a href="#">Envios y Entregas</a></li>
                            <li><a href="#">Terminos y condiciones</a></li>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-1 flex-col">
                    <p className="text-[15px] font-bold">
                        Contacto Quito</p>
                    <div className="text-[14px] text-[#D8D8D8] pt-[10px]">
                        <div className="flex items-center pt-[3px] pb-[3px]">
                            <FaLocationPin />
                            <p className="pl-[5px]">Ruiz de Castilla S/N entre Murgeón y San Gabriel</p>
                        </div>
                        <div className="flex items-center pt-[2px] pb-[3px]">
                            <BsFillTelephoneFill />
                            <p className="pl-[5px]">(02) 2 228218 / 2502209</p>
                        </div>
                        <div className="flex items-center">
                            <CgMail className="text-[15px]"></CgMail>
                            <p className="pl-[5px]">soportetienda@tecnomega.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col"><p className="text-[15px] font-bold">
                    Contacto Guayaquil</p>
                    <div className="text-[14px] text-[#D8D8D8] pt-[10px]">
                        <div className="flex items-center pt-[3px] pb-[3px]">
                            <FaLocationPin />
                            <p className="pl-[5px]">Calle CH entre la Onceava y Septima Nro. 111 ciudadela ADACE</p>
                        </div>
                        <div className="flex items-center pt-[2px] pb-[3px]">
                            <BsFillTelephoneFill />
                            <p className="pl-[5px]">(04) 2 293755</p>
                        </div>
                        <div className="flex items-center">
                            <CgMail className="text-[15px]"></CgMail>
                            <p className="pl-[5px]">soportetienda@tecnomega.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#434343] text-white text-[14px] p-[7px]">
                © Copyright TecnoMega C.A. ® Todos los derechos reservados 2022
            </div>

        </>
    )
}