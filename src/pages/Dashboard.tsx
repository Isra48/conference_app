import { FaLink } from "react-icons/fa";

const Dashboard = () => {
  return (
        <div className="flex flex-col h-full w-full mx-auto  space-y-6">
            <div className="block text-gray-700 text-4xl font-semibold py-4 px-2">
                Administrador preguntas
            </div>
            <section className="flex flex-col mx-auto bg-white rounded-lg p-6 shadow-md space-y-6 w-full">
    
    
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0">
                    <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-6xl font-bold tracking-tight leading-none text-blue-500">21</div>
                            <div className="text-lg font-medium text-blue-500">Contestadas</div>
                        </div>
                    </div>
                    <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-6xl font-bold tracking-tight leading-none text-amber-500">17</div>
                            <div className="text-lg font-medium text-amber-600">Por contestar</div>
                        </div>
                    </div>

                    <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-6xl font-bold tracking-tight leading-none text-red-500">24</div>
                            <div className="text-lg font-medium text-red-600">Eliminadas</div>
                        </div>
                    </div>

                    <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="text-6xl font-bold tracking-tight leading-none text-primary-900">38</div>
                            <div className="text-lg font-medium text-primary-900">Pendientes</div>
                        </div>
                    </div>
                </div>
            </section>

                    <div className="w-full">
                        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                            <div className="flex items-center bg-gray-200 rounded-md">
                                <div className="pl-2">
                                    <svg className="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path className="heroicon-ui"
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </div>
                                <input
                                    className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                    id="search" type="text" placeholder="Search teams or members"/>
                            </div>
                            <div className="grid grid-cols-2 gap-10 mt-4">
                                <div className="py-3 text-sm bg-neutral-100 rounded-lg p-5">
                                    <div className="text-lg font-medium text-primary-900">Preguntas pendientes</div>
                                    <div className="flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <span className="bg-gray-950 h-2 w-2 m-2 rounded-full"></span>
                                        <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                        <button className="bg-green-500   hover:bg-green-600  ml-auto text-white font-bold py-2 px-4 rounded">
                                            Agregar a la lista
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <span className="bg-gray-950 h-2 w-2 m-2 rounded-full"></span>
                                        <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                        <button className="bg-green-500   hover:bg-green-600  ml-auto text-white font-bold py-2 px-4 rounded">
                                            Agregar a la lista
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <span className="bg-gray-950 h-2 w-2 m-2 rounded-full"></span>
                                        <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                        <button className="bg-green-500   hover:bg-green-600  ml-auto text-white font-bold py-2 px-4 rounded">
                                            Agregar a la lista
                                        </button>
                                    </div>
                                    
                                </div>
                                <div className="py-3 text-sm bg-neutral-100 rounded-lg p-5">
                                    <div className="text-lg font-medium text-black">Preguntas por contestar</div>
                                    <div className="flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <span className="bg-amber-500 h-2 w-2 m-2 rounded-full"></span>
                                        <div className=" text-amber-800 font-medium px-2">¿Por qué hicieron eso?</div>
                                        <button className="bg-red-500   hover:bg-red-600  ml-auto text-white font-bold py-2 px-4 rounded">
                                            Eliminar de la lista
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <span className="bg-amber-500 h-2 w-2 m-2 rounded-full"></span>
                                        <div className=" text-amber-800 font-medium px-2">¿Por qué hicieron eso?</div>
                                        <button className="bg-red-500   hover:bg-red-600  ml-auto text-white font-bold py-2 px-4 rounded">
                                            Eliminar de la lista
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                        <span className="bg-amber-500 h-2 w-2 m-2 rounded-full"></span>
                                        <div className=" text-amber-800 font-medium px-2">¿Por qué hicieron eso?</div>
                                        <button className="bg-red-500   hover:bg-red-600  ml-auto text-white font-bold py-2 px-4 rounded">
                                            Eliminar de la lista
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="py-3 my-4 text-sm bg-neutral-100 rounded-lg p-5">
                                <div className="text-lg font-medium ">Historial</div>
                                <div className="w-full flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-blue-500 h-2 w-2 m-2 rounded-full"></span>
                                    <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                    <span className="ml-auto">
                                        Oct/02 24:01:22
                                    </span>
                                </div>
                                <div className="w-full flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-blue-500 h-2 w-2 m-2 rounded-full"></span>
                                    <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                    <span className="ml-auto">
                                        Oct/02 24:01:22
                                    </span>
                                </div>
                                <div className="w-full flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-blue-500 h-2 w-2 m-2 rounded-full"></span>
                                    <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                    <span className="ml-auto">
                                        Oct/02 24:01:22
                                    </span>
                                </div>
                                <div className="w-full flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-blue-500 h-2 w-2 m-2 rounded-full"></span>
                                    <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                    <span className="ml-auto">
                                        Oct/02 24:01:22
                                    </span>
                                </div>
                                <div className="w-full flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-amber-500 h-2 w-2 m-2 rounded-full"></span>
                                    <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                    <span className="ml-auto">
                                        Oct/02 24:01:22
                                    </span>
                                </div>
                                <div className="w-full flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                                    <span className="bg-red-500 h-2 w-2 m-2 rounded-full"></span>
                                    <div className=" font-medium px-2">¿Por qué hicieron eso?</div>
                                    <span className="ml-auto">
                                        Oct/02 24:01:22
                                    </span>
                                </div>
                            </div>
                            <div className="underline flex items-center bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
                                <div className="flex-grow font-medium px-2">Compartir enlace de la encuesta</div>
                                <FaLink></FaLink>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Dashboard