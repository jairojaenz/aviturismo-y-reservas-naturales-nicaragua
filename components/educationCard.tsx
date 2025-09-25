import React from "react";


export function EducationCard() {
    return (
        <div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-4">Conservación de aves</h3>
        <p className="text-gray-700">
            Aprende sobre la importancia de conservar las aves y sus hábitats en Nicaragua. Descubre cómo puedes contribuir a la protección de estas especies a través de prácticas sostenibles y educación ambiental.
        </p>
        

        <section className="mt-6">
            <h4 className="text-xl font-semibold mb-2">Recursos educativos</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><a href="https://mlr.com.ni/wp-content/uploads/2021/06/Catalogo-de-Aves-MLR.pdf" target="_blank" className="text-blue-600 hover:underline" >Guía de aves de Nicaragua</a></li>
                <li><a href="https://repositorio.unan.edu.ni/id/eprint/7316/1/6714.pdf" target="_blank" className="text-blue-600 hover:underline">Programas de educación ambiental</a></li>
                <li><a href="https://www.ecologiaverde.com/la-importancia-de-las-reservas-naturales-y-areas-protegidas-1105.html" target="_blank" className="text-blue-600 hover:underline">Importancia de las reservas naturales</a></li>
            </ul>
        </section>
         </div>
         
          <div className="justify-center items-center text-center">
                <h4 className="text-2xl font-semibold mt-12 my-12 text-primary">BENEFICIOS EN LA EDUCACIÓN DE LAS Y LOS NIÑOS</h4>
        </div>
        
            <section>
            
                        {(() => {
                            const beneficios = [
                                {
                                    titulo: "1- FORTALECE LA CONEXIÓN CON LA NATURALEZA",
                                    descripcion:
                                        "Los niños y niñas que desarrollan actividades en la naturaleza, poco a poco, se sienten más cómodos y aumentan su capacidad de concentración, al grado en que el sol, la arena, el viento, los insectos y demás elementos que podrían ser molestos ahora, dejan de serlo y pueden disfrutar de los entornos naturales con mayor templanza y confianza.",
                                         image: "/istockphoto-2179436187-612x612.jpg"
                               
                                },
                                {
                                    titulo: "2- APRENDIZAJE COLABORATIVO",
                                    descripcion:
                                        "Normalmente, se trabaja en grupos de tres niños o niñas para poder observar las aves con binoculares, buscar la especie en las guías y hacer el registro. Esto implica que aprendan a comunicarse y escucharse, compartir información, organizarse y confiar entre ellos y ellas para poder realizar la actividad en conjunto.",
                                    image: "/colaborativo.jpg"
                             },
                                {
                                    titulo: "3- APRENDIZAJE AUTÓNOMO",
                                    descripcion:
                                        "El manejo de los equipos, muchas veces, implica que ellos desarrollen sus propias estrategias en la manera para manipularlos y adaptándolos a sus necesidades, de igual forma, tienen la oportunidad de seguir investigando por su cuenta aquello que les cause curiosidad, e inclusive, utilizar herramientas digitales por su cuenta.",
                                       image: "/istockphoto-2200428543-612x612.jpg" 
                                },
                                
                                {
                                    titulo: "4- FOMENTO DE LA CREATIVIDAD",
                                    descripcion:
                                        "Las actividades relacionadas con la observación de aves pueden incluir elementos creativos como el dibujo, la escritura o la narración de historias sobre las aves observadas. Esto estimula la imaginación y la expresión artística de los niños y niñas.",
                                       image: "/educacion.jpg" 
                                },
                                {
                                    titulo: "5- PROMOCIÓN DE LA SALUD FÍSICA Y MENTAL",
                                    descripcion:
                                        "El tiempo al aire libre y la actividad física asociada con la observación de aves contribuyen al bienestar físico y mental de los niños y niñas. El contacto con la naturaleza se ha relacionado con la reducción del estrés y la mejora del estado de ánimo.",
                                          image: "/istockphoto-1094443430-612x612.jpg" 
                                },
                                {
                                    titulo: "6- DESARROLLO DE HABILIDADES SOCIALES",
                                    descripcion:
                                        "Las actividades en grupo fomentan la interacción social, el trabajo en equipo y la cooperación entre los niños y niñas. Aprenden a respetar las opiniones de los demás, a compartir sus descubrimientos y a colaborar para lograr objetivos comunes.",
                                        image: "/istockphoto-2164052085-612x612.jpg" 
                                },
                                {
                                    titulo: "7- CONCIENCIA AMBIENTAL Y RESPONSABILIDAD",
                                    descripcion:
                                        "La observación de aves puede ser una puerta de entrada para que los niños y niñas desarrollen una mayor conciencia ambiental. Al aprender sobre las aves y sus hábitats, pueden comprender la importancia de conservar la biodiversidad y sentirse motivados a proteger el medio ambiente.",
                                        image: "/desarrollo.jpg" 
                                },
                                {
                                    titulo: "8- MEJORA DE LA ATENCIÓN Y LA CONCENTRACIÓN",
                                    descripcion:
                                        "La observación de aves requiere atención y concentración para identificar las especies y sus comportamientos. Estas habilidades pueden transferirse a otras áreas del aprendizaje, mejorando el rendimiento académico de los niños y niñas.",
                                        image: "/pajaro.jpg" 
                                },
                            ];
                            return (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {beneficios.map((beneficio, idx) => (
                                        <div key={idx} className="bg-white rounded-lg shadow-lg p-6 border-1">
                                            {beneficio.image && (
                                                <img
                                                    src={beneficio.image}
                                                    alt={beneficio.titulo}
                                                    className="w-full h-50 object-cover rounded-md mb-4 bg-white"
                                                />
                                            )}
                                            <h5 className="font-bold mb-2">{beneficio.titulo}</h5>
                                            <p className="text-gray-700  text-justify">{beneficio.descripcion}</p>
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}


        </section>

       
        
        <div className="justify-center items-center text-center">
                <h4 className="text-2xl font-semibold mb-2 mt-6">Videos educativos de aves y reservas</h4>
        </div>
         

        <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300  p-10 mt-4">
            <section>
           
            {/* seccion para videos de youtube
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-150 h-80 rounded-lg"
                        src="https://www.youtube.com/embed/qGcObdRXZxU"
                        title="Importancia de las áreas protegidas"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-150 h-80 rounded-lg"
                        src="https://www.youtube.com/embed/zxbGy0Fu2WA"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-150 h-80 rounded-lg"
                        src="https://www.youtube.com/embed/EBYGcbbaECE"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-150 h-80 rounded-lg"
                        src="https://www.youtube.com/embed/_hdlBIj1Q1M"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-150 h-80 rounded-lg"
                        src="https://www.youtube.com/embed/II99J0UlsRY"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-150 h-80 rounded-lg"
                        src="https://www.youtube.com/embed/foXv-2vjkBw"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            {/* Puedes agregar más videos aquí */}
                </section>

        </div>
        </div>
    );
    }