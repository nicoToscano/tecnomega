import {XCircleIcon} from "@heroicons/react/20/solid";

export default function Estimacion() {
    return (
        <>
            <div className="flex flex-grow flex-col bg-white ml-[350px] mr-[350px] mt-[20px] mb-[20px]">
                <div className="bg-[#F9F9F9]">
                    <div className="flex flex-grow justify-center ">
                        <p className="flex flex-grow justify-end">Estimación de cuotas</p>
                        <div className="flex flex-grow justify-end pr-[5px]">
                            <button>
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
        </>
    )
}