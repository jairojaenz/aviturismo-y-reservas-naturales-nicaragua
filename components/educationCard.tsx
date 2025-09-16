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

        <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300  p-20 mt-4">
            <section>
            <h4 className="text-xl font-semibold mb-2 mt-6">Beneficios en la educación de las y los niños</h4>
            <ul>
                <li className="text-gray-700 mb-2">1- FORTALECE LA CONEXIÓN CON LA NATURALEZA</li>
                <p>
                    Los niños y niñas que desarrollan actividades en la naturaleza, poco a poco, se sienten más cómodos y aumentan su capacidad de concentración, al grado en que el sol, la arena, el viento, los insectos y demás elementos -que podrían ser molestos- ahora, dejan de serlo y pueden disfrutar de los entornos naturales con mayor templanza y confianza.
                </p>
                <li className="text-gray-700 mb-2 mt-4">2- ESTIMULA LA CURIOSIDAD y CAPACIDAD DE ASOMBRO</li>
                <p>
                    El asombro de los niños y niñas que ven con detenimiento las formas de picos y patas, el plumaje y sus comportamientos en diferentes hábitats promueve el interés por investigar los porqués y los paraqués de las adaptaciones, su distribución, su vuelo, su crianza, su comida, sus nidos.

                    Ver un águila pescadora, un pelicano o un Martín pescador en plena caza hace que, por un momento, los chicos se trasladen al mundo de la supervivencia, llenos de emoción y admiración por estas especies. Sin duda, son observaciones que los emocionan y comparten con familiares, como momentos de grandes hazañas de las aves en supervivencia.
                    </p>

                <li className="text-gray-700 mb-2 mt-4">3- APRENDIZAJE COLABORATIVO</li>
                <p>
                    Normalmente, se trabaja en grupos de tres niños o niñas para poder observar las aves con binoculares, buscar la especie en las guías y hacer el registro. Esto implica que aprendan a comunicarse y escucharse, compartir información, organizarse y confiar entre ellos y ellas para poder realizar la actividad en conjunto.
                </p>
                <li className="text-gray-700 mb-2 mt-4">4- Aprendizaje Autónomo</li>

                <p>El manejo de los equipos, muchas veces, implica que ellos desarrollen sus propias estrategias en la manera para manipularlos y adaptándolos a sus necesidades, de igual forma, tienen la oportunidad de seguir investigando por su cuenta aquello que les cause curiosidad, e inclusive, utilizar herramientas digitales por su cuenta.

                </p>
                <li className="text-gray-700 mb-2 mt-4">5- DESARROLLO DE HABILIDADES COGNITIVAS</li>
                <p>El desarrollo de habilidades cognitivas como la observación, la comparación, la clasificación, la deducción y el análisis se ve favorecido al realizar actividades de observación de aves. Estas habilidades son fundamentales para el aprendizaje en general y se potencian al interactuar con el entorno natural.</p>
                <li className="text-gray-700 mb-2 mt-4">6- FOMENTO DE LA CREATIVIDAD</li>
                <p>Las actividades relacionadas con la observación de aves pueden incluir elementos creativos como el dibujo, la escritura o la narración de historias sobre las aves observadas. Esto estimula la imaginación y la expresión artística de los niños y niñas.</p>
                <li className="text-gray-700 mb-2 mt-4">7- PROMOCIÓN DE LA SALUD FÍSICA Y MENTAL</li>
                <p>El tiempo al aire libre y la actividad física asociiada con la observación de aves contribuyen al bienestar físico y mental de los niños y niñas. El contacto con la naturaleza se ha relacionado con la reducción del estrés y la mejora del estado de ánimo.</p>
                <li className="text-gray-700 mb-2 mt-4">8- DESARROLLO DE HABILIDADES SOCIALES</li>
                <p>Las actividades en grupo fomentan la interacción social, el trabajo en equipo y la cooperación entre los niños y niñas. Aprenden a respetar las opiniones de los demás, a compartir sus descubrimientos y a colaborar para lograr objetivos comunes.</p>
                <li className="text-gray-700 mb-2 mt-4">9- CONCIENCIA AMBIENTAL Y RESPONSABILIDAD</li>
                <p>La observación de aves puede ser una puerta de entrada para que los niños y niñas desarrollen una mayor conciencia ambiental. Al aprender sobre las aves y sus hábitats, pueden comprender la importancia de conservar la biodiversidad y sentirse motivados a proteger el medio ambiente.</p>
                <li className="text-gray-700 mb-2 mt-4">10- MEJORA DE LA ATENCIÓN Y LA CONCENTRACIÓN</li>
                <p>La observación de aves requiere atención y concentración para identificar las especies y sus comportamientos. Estas habilidades pueden transferirse a otras áreas del aprendizaje, mejorando el rendimiento académico de los niños y niñas.</p>
            </ul>


        </section>

       
        </div>
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
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/qGcObdRXZxU"
                        title="Importancia de las áreas protegidas"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/zxbGy0Fu2WA"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/EBYGcbbaECE"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/_hdlBIj1Q1M"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/II99J0UlsRY"
                        title="Conservación de aves en Nicaragua"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                   <div className="aspect-video aspect-w-16 aspect-h-9 mt-6">
                    <iframe
                        className="w-full h-full"
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