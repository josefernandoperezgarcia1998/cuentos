import React from 'react';
import fotoweya from  '../components/img/weyaweya.png';
import fotoweya1 from '../components/img/weyaweya1.png';
import fotoweya2 from '../components/img/weyaweya2.png';
import fotoweya3 from '../components/img/weyaweya3.png';
import fotoweya4 from '../components/img/weyaweya4.png';
import weyaCard from '../components/img/weyaCard.jpg';
import audioweya from '../components/multimedia/santo.mp3';
import encamisadaCard from '../components/img/encamisadaCard.png';
import encamisada1 from '../components/img/encamisada1.png';
import copaczoca1 from '../components/img/copaczoca1.png';
import copaczoca2 from '../components/img/copaczoca2.png';
import plantilla_suceso from '../components/img/PLANTILLA_suceso.png';
import duende1 from '../components/img/duende1.jpg';




class Sucesos extends React.Component{

    state={
      divcontainer:false,
      divcontainer2:false,
      divcontainer3:false,
      divcontainer4:false,
      divcontainer5:false,
      divcontainer6:false,
      divcontainer7:false,
      divcontainer8:false,
    }
  
    render()
    {
        /* Este es el evento para el botón del primer cuento */
      var Handlechange = e => {
        this.setState({divcontainer:!this.state.divcontainer});
      }
       /* Este es el evento para el botón del segundo cuento */
      var Handlechange2 = e => {
        this.setState({divcontainer2:!this.state.divcontainer2});
      }
       /* Este es el evento para el botón del tercer cuento */
      var Handlechange3 = e => {
        this.setState({divcontainer3:!this.state.divcontainer3});
      }
       /* Este es el evento para el botón del cuarto cuento */
      var Handlechange4 = e => {
        this.setState({divcontainer4:!this.state.divcontainer4});
      }
       /* Este es el evento para el botón del quinto cuento */
      var Handlechange5 = e => {
        this.setState({divcontainer5:!this.state.divcontainer5});
      }
      var Handlechange6 = e => {
        this.setState({divcontainer6:!this.state.divcontainer6});
      }
      var Handlechange7 = e => {
        this.setState({divcontainer7:!this.state.divcontainer7});
      }
      var Handlechange8 = e => {
        this.setState({divcontainer8:!this.state.divcontainer8});
      }

      const cuento1=this.state.divcontainer;
      const cuento2=this.state.divcontainer2;
      const cuento3=this.state.divcontainer3;
      const cuento4=this.state.divcontainer4;
      const cuento5=this.state.divcontainer5;
      const cuento6=this.state.divcontainer6;
      const cuento7=this.state.divcontainer7;
      const cuento8=this.state.divcontainer8;
      
      return(
          
        <div>{/* DIV PADRE DE TODO EL ELEMENTO */}

            <div className="test ">
                <div className="w3-container w3-green tituloprincipal cardColor">
                    <h1>¡Los sucesos más espeluznante!</h1>
                    <p>En esta sección encontrarás los sucesos que han nacido en el municipio de Copainala</p>
                </div>

               {/* Contenedor de todas las cards de los cuentos */}
                <div className="w3-row-padding contenedorCuentosNav">
                    {/* Inicia primer cuento */}
                    <div class="w3-third cardsCuentos derecha espacioCards" id="weyaID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards" src={plantilla_suceso} alt="ImagenDelWeyaWeya"/>
                        </div>
                        <h2 className="tituloCuentoCard">Rompe peña y rompe cadena</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Esta historia se trata sobre un muchacho y una muchacha, eran jóvenes y...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange}>{cuento1?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento1 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia del Rompe peña y rompe cadena</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>Esta historia se trata sobre un muchacho y una muchacha, eran jóvenes y se habían enamorado entonces decidieron irse a formar su familia. </p>
                                    <p>Ya cuando estaban casados se retiraron a vivir cerca de las montañas, entonces allá en un terrenito el muchacho construyó su casa, y los dos vivían felices, la mujer atendía la casa y los animalitos que tenían y el muchacho cazaba y trabajaba la tierra para poder comer.</p>
                                    <p>Aparte de todo esto, también tenían algo muy peculiar, la pareja tenía un par de perros que eran bastante grandes, muy grandes, uno se llamaba rompe peña y el otro rompe cadena, estos perros eran bravos y muy fuertes, y pues cuidaban a sus dueños.</p>
                                    <p>Un día el muchacho le dijo a su mujer que se iba a ir a cortar leña lejos en la montaña y que, pues iba a tardar, pero que no se preocupara. Así fue que el muchacho se fue al monte muy temprano y dejo solita a su esposa. No había pasado mucho rato cuando de uno de los cerros bajó un hombre muy grande, y que, pues les dicen gigantes, entonces este llegó a la casa y vio a la muchacha que estaba lavando. La muchacha al ver este gigante se metió y se quiso encerrar en su casa, pero el gigante con su fuerza levantó el techo de la casita y le empezó a decir que estaba muy bonita, y que él no tenía mujer, que andaba buscando una y que ella tenía que ser su mujer porque se había enamorado de ella. La muchacha le dijo, que ella ya estaba casada y que no iba a dejar a su marido, y que más valía que se fuera, porque su marido era muy celoso.</p>
                                    <p>El gigante se rio de lo que le decía la mujer, pues le dijo que el marido ni se iba a enterar, porque él la iba a robar quisiera o no, y que si miraba a su marido lo iba a matar, porque él era más grande. En eso que el gigante pasaba el rato tratando de enamorar a la mujer, el muchacho regresó de la montaña, y cuando vio que el gigante estaba destruyendo su casa y tratando de robar su mujer, les gritó a sus perros e hizo que se le echaran encima al gigante. Paso pues que los perros se pelearon con el gigante y lo mataron, y de esta manera salvó a su mujer gracias a rompe peña y rompe cadena.</p>
                                    <p>Se dice que estos perros eran buenos, pero también hay otra historia en la que no parecen tanto así. La gente decía que había una familia que tenía mucho dinero, pero que su casa estaba cerca del monte, entonces ellos tenían una hijita, apenas una niña de como 8 años, esta niña le gustaba salir a jugar con su muñeca ahí entre el monte más o menos lejos de su casa. Los papás le regañaban porque le decían que se la podían robar o la podía comer algún animal, pero la niña se las ingeniaba para escapar de casa. </p>
                                    <p>Pasó un día que la niña se escapó para jugar debajo de unas arboladas, y allá tardó mucho tiempo, entonces la familia la empezó a buscar porque ya era muy tarde y aun no regresaba. Tristemente dice la historia que la familia vio a estos perros, el rompe peña y el rompe cadena como se comían a la niña ahí entre los árboles, y pues la gente la quiso rescatar, pero ahí entre el monte nada más quedó los pedazos de su vestido y la muñeca manchada de sangre.
                                        Dicen que fueron los perros gigantes que se la comieron, y así es que podemos ver que eran buenos, pero también malos.
                                    </p>
                                    <div className="contenedorImg">
                                        <a href="#weyaID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>     
                    </div>
                    {/* Termina primer cuento */}

                    {/* Inicia segundo cuento */}
                    
                    {/* Termina segundo cuento */}

                    {/* Inicia tercer cuento */}
                    
                    {/* Termina tercer cuento */}

                    {/* Inicia cuarto cuento */}
                
                    {/* Termina cuarto cuento */}

                    {/* Inicia quinto cuento */}
                    <div class="w3-third cardsCuentos izquierda" id="duendeID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav2" src={duende1} alt="ImagenDeduende1"/>
                        <br></br>
                        <small>© Ricardo Sánchez</small>
                        </div>
                        <h2 className="tituloCuentoCard">Sucesos sobre duendes</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Cuentan varios sucesos que los duentes...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange5}>{cuento5?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento5 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia sobre duendes</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <strong>Suceso 1</strong>
                                    <p>A inicios de los años 90, mi hermano Julio y yo realizábamos recorridos a pie o en bicicleta en el tramo carretero de Copainalá a la Ribera Tierra Blanca. Estábamos más jóvenes y nos gustaba hacer deporte, sobre todo para mantener una buena condición cardiovascular, el camino nos ayudaba mucho, en ese entonces ya se encontraba pavimentado, tenía subidas, bajadas, y muy poca gente manejaba, así que era perfecta para nuestra rutina completa. Además de esto, contábamos con familiares que vivían a línea carretera, y cuando regresábamos a Copainalá, casi siempre pasábamos a refrescarnos en casa de alguno de ellos.</p>
                                    <p>Así transcurrió un buen tiempo, mi hermano y yo éramos constantes en el ejercicio y siempre por las tardes, digamos alrededor de las 5 pm subíamos a nuestro recorrido. Casi siempre de regreso al pueblo entrabamos con los últimos rayos del sol, la hora exacta en que la hilera de las montañas que rodean al pueblo proyectan una gran sombra sobre todas las casas de Copainalá, y solo las montañas rumbo a Coapilla quedan iluminadas con los últimos rayos.</p>
                                    <p>Resultó entonces, sin saber que sería la última caminata que realizaríamos por ese tramo carretero, en una buena tarde calurosa y con muy pocas nubes en el cielo, nos disponíamos a salir con mi hermano Julio. Como era de esperarse, el tramo de ida resulto normal como en días anteriores, llegamos a tierra blanca, nos detuvimos en casa de un familiar para tomar agua y de nuevo nos pusimos en marcha para el regreso. </p>
                                    <p>Quizá era un poco más tarde en esa ocasión, y apenas íbamos pasando “el jobo”, si, ese lugar donde ahora se encuentra un centro de reinserción social, claro, en aquellos años no había nada, apenas y estaba la carretera, lo demás era monte y tierra. Total, estábamos pasando por aquel lugar, mi hermano iba montado en bicicleta y yo iba trotando; de pronto le dije a mi hermano:</p> 
                                    <strong><span className="italicLetra">–Oye Julio, y esos niños que hacen ahí en ese montón de tierra jugando canicas, ¿Hijos de quienes serán?, si nadie vive a por acá cerca.</span></strong>
                                    <p>Y me dice mi hermano: </p>
                                    <strong><span className="italicLetra">-Ha de ser que son de las tres o cuatro casitas que apenas hay acá.</span></strong>
                                    <p>Le contesté:</p>
                                    <strong><span className="italicLetra">-No creo, están muy lejos y está ya muy oscuro como para que anden solitos.</span></strong>
                                    <p>En fin, Julio y yo continuamos con nuestro camino sin prestar demasiada atención a aquellos 4 infantes. Pero al llegar a la curva donde se encuentra el basurero, que son aproximadamente como 3 km después del jobo, nuevamente nos volvemos a topar con los mismos niños, fue entonces que ya toda la situación se me empezó a tornar muy fuera de lo común, y por mi mente pasaba; ¿cómo es posible que unos niñitos nos hayan ganado el paso, tanto como para volver a encontrarlos jugando plenamente en el polvo?</p>
                                    <p>La verdad era que, no sabíamos que pensar ante tales imágenes, pero la sensación de la intriga y el miedo se estaba haciendo presente, por lo que decidimos apartar la vista de ellos, y pasar lo más rápido posible por ese lugar. Fue así nuestra sorpresa, que, al estar entrando al pueblo, ahí en ese lugar donde ahora se encuentra la sub-estación de la CFE, ahí cerca del lienzo charro, justo cuando estábamos pasando es que nuevamente nos topamos a los 4 niños. Esta vez ya no lo podía creer, ¿cómo lo lograban?, ¿acaso tenían un atajo?</p>
                                    <p>Fue ahí que me arme de valor y me les acerque un poco, y les dije:</p>
                                    <strong><span className="italicLetra">-Hey niños…</span></strong>
                                    <br/>
                                    <strong><span className="italicLetra">¿Por dónde bajan?, ¿Cómo le hacen para ganarnos el paso?</span></strong>
                                    <p>Nunca me contestaron…</p>
                                    <p>Entonces mi hermano les empezó a hablar en un tono más agresivo: </p>
                                    <strong><span className="italicLetra">-¡¡Hey chamaquitos!!, Entonces, ¿Cómo le hacen para ganarnos?, Hablen pues.</span></strong>
                                    <p>En ese instante, yo, que era el que estaba más cerca de esos chamaquitos, vi como uno de ellos volteó la vista hacia mí, y ahí fue donde pude ver como sus ojos eran rojos, muy rojos como llenos de sangre, entonces abrió la boca y me mostraba los dientes picudos, así como cuando un animal te quisiera morder. Fue a partir de ese momento que decidimos no perder más tiempo y emprender la huida con mi hermano, fue tanta la impresión y la adrenalina que en un santiamén logramos llegar en el mero centro del pueblo, ni siquiera sentimos la fatiga, sino hasta mucho después, cuando las palpitaciones de nuestro corazón se habían calmado. No perdimos tiempo y nos fuimos directamente hasta nuestra casa, y allá después de contarles todo a nuestros familiares, sin duda alguna nos dijeron que nos habíamos topado con duendes, que son como personitas de baja estatura, y que de lejos los puedes confundir con chamaquitos, sobre todo porque les gusta hacer travesuras y andar espantando a la gente que pasa sola por lugares solitarios. Así nos sucedió, y sin querer esa fue la última vez que nos aventuramos tan tarde con Julio a subir por esa carretera.</p>
                                    <span className="sucesosFuente">Suceso relatado por el Profesor Mario Armando Núñez Aragón, entrevista personal, Marzo del 2018, Copainalá Chiapas.</span>
                                    <p>--------------------------------------------------------------------------</p>
                                    <strong>Suceso 2</strong>
                                    <p>En una ocasión mi mamá nos relató algo muy extraño que sucedía en el plantel “Jardín de niños Melchor Ocampo”, lugar donde ella laboraba como uno de los elementos encargados de la limpieza y orden del lugar. Le sucedía que, al ser la última en retirarse, ella pasaba por los salones y lugares donde había muebles para acomodarlos, de tal manera que al otro día se encontrara todo ordenado. Le ocurría que, a pesar de su esfuerzo diario en ordenar aquellos muebles, todos los días por las mañanas, cuando nuevamente ella era la primera persona en llegar al jardín de niños, para su sorpresa, encontraba a todos los muebles fuera lugar, tal y como si el jardín hubiera laborado por las noches. </p>
                                    <p>Era muy intrigante toda aquella situación, ya que el jardín de niños estaba rodeado por altas bardas, no había velador, pero era imposible que alguien más entrara, ya que las paredes que rodeaban el jardín era muy altas para escalarlas o tratar de saltarlas, además de que mi madre era la única con las llaves de la entrada.</p>
                                    <p>Resultó en un día de labores, mi madre nos contó, que una maestra tenía 19 niños a su cargo dentro de un salón. Tal día era también momento de actividades deportivas, por lo que la encargada de aquella materia se presentó ante la clase. </p>
                                    <p>Así que los niños y la maestra de educación física, se dirigieron al área de deportes, una vez ahí, la maestra formo cinco equipos de cuatro infantes, fue así que, dentro del transcurso de la clase, los niños desempeñaron actividades en equipo. Una vez terminada la clase deportiva, los niños se dirigieron al salón, pero al realizar el pase de lista, la maestra de deportes se sorprendió al solo contar diecinueve de ellos. </p>
                                    <strong><span className="italicLetra">- ¿Cómo es posible? - </span></strong><span>decía.</span>
                                    <p>Así que rápidamente empezó a buscar al infante extraviado, al no encontrarlo, pidió ayuda a la maestra tutora, pero ella ante tal comentario, le explicaba que no había de que preocuparse, ya que eran exactamente diecinueve niños los que originalmente tenía a cargo.</p>
                                    <strong><span className="italicLetra">-No es posible, si yo claramente conté los cinco equipos de cuatro niños. Yo misma desde la distancia estuve siempre atenta con ellos y claramente siempre fueron veinte-. Nuevamente afirmaba la maestra de deportes.</span></strong><span></span>
                                    <br/>
                                    <br/>
                                    <strong><span className="italicLetra">-Quizá se metió algún niño de otro salón- le mencionaba la tutora.</span></strong>
                                    <br/>
                                    <br/>
                                    <strong><span className="italicLetra">-No es posible, a esa hora no había ningún niño afuera de otros salones, yo misma verifiqué - </span></strong>
                                    <p>Argumentaba la otra maestra...</p>
                                    <p>No contenta ante su intriga, los niños y las maestras fueron al área de deportes donde anteriormente habían estado, y dieron a la búsqueda del infante numero veinte. Resultó ser que, al par de minutos de estar buscando, un niño de manera muy apresurada se le acercó a ambas maestras, y casi sin aliento les decía a ver visto a un niño muy chaparrito, salir corriendo de la nada y después trepar a un árbol que se encontraba cerca de la barda, e inmediatamente haberse parado en una de las ramas y posteriormente arrojarse detrás del muro. Ante tal escenario descrito, las maestras se apresuraron a ver lo que sucedía, quizá pensando encontrarse a algún niño lastimado por el suelo, por intentar subirse al árbol. Pero al llegar al lugar, solo encontraron un montón de hojas cayendo de aquella planta, junto a varias ramas que por alguna razón no dejaban de moverse. Extraña era la situación, ya que ese día no había nada de viento.</p>
                                    <p>Mi madre y las maestras compartieron sus experiencias mutuamente, y a la par con demás gente que tenía viviendas cerca del jardín de niños. </p>
                                    <p>Fue así que, a partir de la divulgación de estos sucesos, muchos empezaron a mencionar que sin duda eran duendes los que desacomodaban los muebles del lugar, y que en ocasiones trepaban del rio a la barda de la escuela, para jugar y hacer travesuras con los demás niños.</p>
                                    <span className="sucesosFuente">Suceso relatado por el Profesor Mario Armando Núñez Aragón, entrevista personal, marzo del 2018, Copainalá Chiapas.</span>
                                    <p>--------------------------------------------------------------------------</p>
                                    <strong>Suceso 3</strong>
                                    <p>Esto que me sucedió, no tiene mucho tiempo...</p>
                                    <p>Hace ya varios años que me casé y por lo consiguiente ya no vivo en casa de mi madre. Pero en esa ocasión mi esposa e hijos habían salido del pueblo y me había quedado solito, pero dije.</p>
                                    <strong><span className="italicLetra">-Mejor me voy a visitar a mi mamá y de paso allá me quedo a dormir, para no estar solito</span></strong>
                                    <br/>
                                    <p>De esta manera me dirigí para aquel lugar, y grata fue mi sorpresa al encontrar a mi hermano Julio y a uno de los hijos mi hermana también ahí. Así que, lo que restaba de las horas del día, platicamos, y nos pusimos al día etc.</p>
                                    <p>Ya entrada la noche, mi mamá y mi sobrino se quedaron viendo la tele, mientras mi hermano julio y yo nos retiramos a dormir a nuestros antiguos cuartos. Todo transcurría normal, mi sueño era tranquilo, cuando de repente:</p>
                                    <strong><span className="italicLetra">-Brum, brum, brom brrrr-</span></strong>
                                    <p>Empecé a percibir un sonido que provenía sobre el techo de mi cuarto, así como cuando alguien empuja una piedra muy pesada por el suelo, bueno, así trato de describirlo. Sucedió que los sonidos no cesaron, al contrario, ya escuchaba otros. Ahora sonaba tal y como si alguien estuviera arrastrando costales de piedra, luego se escuchaban pasos muy rápidos, incluso que bajaban y subían de manera muy aprisa por la escalera que da al techo.</p>
                                    <strong><span className="italicLetra">-Ese mi sobrino Mauricio, que tanto es que hace a estas horas, ya casi son la una de la mañana, no me deja dormir.</span></strong>
                                    <p>Entre dientes me lo decía a mí mismo...</p>
                                    <p>Total, empezó a pasar el tiempo, mi estado entre la vigilia y el sueño causada por los sonidos que por momentos se pausaban y luego volvían a empezar, me resultaba cada vez más molesto. Así que tome la decisión de salir del cuarto y dirigirme hacia la recamara de Mauricio, y ahí en el trayecto me decía a mí mismo:</p>
                                    <strong><span className="italicLetra">-Pobre mi sobrino, quizá tiene algún proyecto de su escuela y está utilizando algunos materiales pesados, y yo le voy a regañar.</span></strong>
                                    <p>Extraño me resultó, porque observé, y mi sobrino se encontraba durmiendo, así que no podría ser el causante, de aquellos ruidos. Pero dije, - tal vez sea su perro-y tampoco, el animal conciliaba el sueño felizmente que ni de mi presencia se logró percatar.</p>
                                    <p>Al no encontrar ninguna señal a la causa de mi desvelo, decidí volver a mi cuarto, quizá y ahora todo transcurriría de manera normal. Pero para mi sorpresa, apenas y empezaba a conciliar el sueño, y los ruidos iniciaron nuevamente. Pasaba por mi mente:</p>
                                    <strong><span className="italicLetra">-Seguramente son bandidos que nos quieren asaltar, pero, ¿cómo le habrán hecho para subir al techo?, no hay ni como trepar, ni arboles ni nada, solo con paracaídas se puede aterrizar.</span></strong>
                                    <p>La verdad es que mi desesperación ya había llegado a un límite, y con mucho coraje tomé un machete, a lo que salí decidido a enfrentarme con lo que estuviera ahí, subí los escalones maldiciendo y golpeando el machete contra la pared, para ver si de una vez por todas se ahuyentaba lo que sea que estuviera allí. Estaba a punto de llegar a los últimos escalones, cuando volví a escuchar los ruidos, fue ahí cuando un aire helado se me metió en el cuerpo, me quedé paralizado por un momento y dudaba si en verdad quería avanzar, a lo que me dije:</p>
                                    <strong><span className="italicLetra">–Si me quedo así, ya estuvo que me llevó- y con más coraje empuñe el machete llegando al techo lanzando golpes con él. Pero no vi nada, absolutamente nada. Lo único que logré fue despertar a todos en la casa, y muy sorprendidos me preguntaban qué era lo que estaba haciendo, a lo que les comencé a comentar todo lo que estaba escuchando y que no me dejaban dormir con tanto ruidero, - ¿ruidero?, ¿Cuál ruidero?.</span></strong>
                                    <p>Me decían...</p>
                                    <strong><span className="italicLetra">-Ese que se escuchaba en el techo, como si estuvieran trabajando los albañiles- les dije.</span></strong>
                                    <strong><span className="italicLetra">-No escuchamos nada- me decía mi hermano julio.</span></strong>
                                    <p>Entonces al ver que no llegaríamos a nada, decidí calmarme y mejor cambiarme de cuarto. Así al siguiente día, con más calma le conté a julio a detalle todo lo que me había pasado. Y me comentaba que, en ocasiones, cuando le tocaba dormir en mi antiguo cuarto había escuchado ruidos similares, pero nunca les hacía caso, lo único a lo que se limitaba, era a cambiarse de lugar para dormir, porque me decía:</p>
                                    <strong><span className="italicLetra">-Para que agarro coraje, si son los duendes los que lo hacen.</span></strong>
                                    <p>--------------------------------------------------------------------------</p>
                                    <strong>Suceso 4</strong>
                                    <p>Suceso narrado por el señor Ciro López en una entrevista personal, abril 2021.</p>
                                    <p>Cuando estaba yo más joven, como de veintitantos años, allá en los cerros que empiezan por la comunidad de división del norte, allá llegaba yo a trabajar junto con otras personas. Íbamos a unos terrenos que tenía en ese entonces un señor que le decían tío Isha, ahí en su solar que esta mero en las faldas de las montañotas, ahí hay unas cuevas, ahí cuando llueve mucho en la comunidad de división del norte toda el agua se filtra en el cerro y viene a salir a través de esas cuevas, así bien bonito.</p>
                                    <p>Recuerdo en esa ocasión estábamos descansando cerca de esas cuevas, ya después de nuestro jornal de trabajo, estábamos yo y otro compañero recostados, cuando de repente ahí en la planta de los pies de mi colega estaban unos como chamaquitos con unas orejotas bien puntiagudas y se reían mucho, pero su risa era muy aguda, el caso es que saltaban y se reían y le empezaron a hacer cosquillas en los pies a mi compañero, y él se empezó a reír mucho, pero bastante, no podía dejar de hacerlo. Fue hasta que reaccioné y traté de agarrar a uno de esas cosas, pero eran muy rápidas y luego luego se metían en la cueva. Los quisimos tantear para ver si volvían salir y eso pasó, y otra vez le quisieron hacer cosquillas a mi compañero y otra vez los quise agarrar, pero no se dejaban y solo se reían. </p>
                                    <p>Entonces ahí ya dijimos que mejor nos íbamos, no vaya a ser que nos agarraran dormidos esos duendes (porque pues pensamos que eso eran) y nos vayan a matar de la risa haciéndonos cosquillas. </p>
                                    <br/>
                                    <br/>
                                    <span className="sucesosFuente">Suceso relatado por el Profesor Mario Armando Núñez Aragón, entrevista personal, marzo del 2018, Copainalá Chiapas.</span>
                                    <div className="contenedorImg">
                                        <a href="#duendeID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }  
                    <br/>
                    <br/>   
                    </div>
                    {/* Termina quinto cuento */}

                    {/* Inicia quinto cuento */}
                     <div class="w3-third cardsCuentos izquierda" id="encamisadaID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoEncamisada1" src={plantilla_suceso} alt="ImagenDeEncamisada"/>
                        </div>
                        <h2 className="tituloCuentoCard">Los Duendes en el Río de Copainalá</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Cuando el rio de Copainalá estaba más limpio, la gente lavaba...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange2}>{cuento2?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento2 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Los Duendes en el Rio de Copainalá.</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>Cuando el rio de Copainalá estaba más limpio, la gente lavaba en el rio. Mi mamá en ese entonces ganaba su dinerito lavando ropa de otras personas. En ocasiones la acompañaba a ayudarla, recuerdo que en esos días las ropas blancas se lavaban con unas hojas de una planta que se le conoce como higuerilla, era un monte amargo, pero que hacia espuma y limpiaba bien, tanto como los jabones de hoy. </p>
                                    <p>Como bajábamos muy de madrugada a ayudar a lavar ropa, la gente nos decía que tuviéramos cuidado o bien era mejor ir más tarde al rio, ya que a las orillas se aprecian los duendecillos y nos podrían espantar o hacer travesuras. La verdad es que de esos sustos nos pudimos librar, nunca nos pasó nada, pero la gente estaba muy segura que a la orilla del rio se aparecían esos como chamaquitos. Lo que en verdad si pudo presenciar, por lo menos mi mamá, eran unos ruidos muy fuertes por las noches a la orilla del rio, eran ruidos como si alguien azotara contra las piedras un pedazo de cuero o ropa mojada. Pero la gente decía que eran los duendes que hacían eso para espantarte. </p>
                                    <div className="contenedorImg">
                                        <a href="#encamisadaID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>      
                    </div>
                    {/* Termina quinto cuento */}

                    {/* inicia sexto suceso */}
                    <div class="w3-third cardsCuentos derecha" id="melquiadesID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav1" src={plantilla_suceso} alt="ImagenDeCopaczoca"/>
                        </div>
                        <h2 className="tituloCuentoCard">Don Melquiades y el toro blanco</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Tenía ya unos años que vivía en la ribera el rosario, tenía mi trabajo de vaquero con la familia ...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange3}>{cuento3?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento3 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia de Don Melquiades y el toro blanco</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                        <p>Tenía ya unos años que vivía en la ribera el rosario, tenía mi trabajo de vaquero con la familia de los Salvatierra, pero también cuidaba un corral de toritos en venta con la familia Vázquez. Recuerdo que una noche me tocó pasar algo muy feo, resulta ser que ya de noche me dirigía para mi casa, iba caminando por el camino real, y justo cuando pasaba por un lugar donde hay bastantes arboles de mango, mire entre la oscuridad un torito blanco. Dije yo en mi pensamiento. –Ijoles ta’ raro que ande acá un animal, de quien se le habrá escapado. Ha de ser bien mañoso porque hasta los cuernotes bien largos los tiene, ni se deja que se los corten-. </p>
                                        <p>El caso es que el animal se quedó ahí parado cerca de mi senda, pasé, y ni se movió. Cosa que me sorprendió, porque si fuera arisco, ni espera a que te muevas para que salga huyendo. </p>
                                        <p>Pasó que agarré mi rumbo, pero me parecía que no llegaba, por más que quería avanzar me iba para otro lado, en vez que mis pasos terminaran en el camino a casa, terminé en el barranco entre el montarral que hay. No sé qué pasaba, que por más que quería salirme, más me enredaba, y lo peor es que quería hablar para pedir ayuda, pero parecía que no salía mi voz, se ahogaba mi palabra y no más lograba pujar. Entre tanto monte y esfuerzo terminé entre varias matas de espina y ahí amanecí. </p>
                                        <p>Cuando ya había amanecido logré salir del espinero y llegué a mi casa, allá mi mujer me regañó porque pesaba que estaba borracho. Ya luego vio que no era eso, y le conté lo del torito blanco y lo que me paso después. Ella me dijo que era el malo que me estaba jugando y que tuve suerte de librarla.</p>  
                                    <div className="contenedorImg">
                                        <a href="#melquiadesID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>     
                    </div>
                    {/* Termina sexto suceso */}

                     {/* inicia septimo suceso */}
                     <div class="w3-third cardsCuentos derecha" id="ciroID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav1" src={plantilla_suceso} alt="ImagenDeCopaczoca"/>
                        </div>
                        <h2 className="tituloCuentoCard">Don Ciro y el conejo</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Hace muchos años, acá en la comunidad de la ribera el rosario, vivía un señor que se llamaba  ...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange4}>{cuento4?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento4 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia de Don Ciro y el conejo</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>Hace muchos años, acá en la comunidad de la ribera el rosario, vivía un señor que se llamaba Ciro. Este señor era muy aficionado a la cacería, tenía su perro sabueso que le ayudaba, se llamaba “pinto”, cargaba con su arma de fuego que en esos años se les conocía como traga lazo, ósea una escopeta, lo curioso de esta arma era que para armarla tenían que meter a la recamara de explosión, la pólvora, las postas , y le metían un pedazo de cuerda (lazo), para que este hiciera presión en todos los materiales anteriores tenía que meterse apretado sin dejar huecos. Ya posteriormente se podía apretar el gatillo para que este empujara al martillo y la aguja golpeara al misto y se prendiera la pólvora, los gases de la pólvora empujaban a las postas y salían los tiros. Solo se podía hacer un tiro, pero como era escopeta y tenía varias postas casi siempre alguna de ellas llegaba al blanco, si en caso fallabas era muy complicado todo, porque tenías que volver hacer todo el proceso. </p>
                                    <p>Como decía, este señor era aficionado a lo que es la cacería animal. En esos años acá en la comunidad había mucho venado, tepezcuintle, armadillo, iguana, jabalí y codornices, así que la carne en la mesa no faltaba. Un día este señor don Ciro pasó por los terrenos de mi abuelo, rumbo para el cerro de Moekin, ahí iba don Ciro y su perro pinto. Allá en Moekin en la montaña, hay unas cuevas, que al parecer tienen camino, pero son muy reducidas para entrar. Lo que paso fue que, al llegar cerca de esas cuevas, el perro vio a un conejo y se le hecho a la carrera, pero el conejo le ganó el paso y se metió en la cueva, y don Ciro le gritaba al perro que se regresara, pues veía inútil cazarlo. Pero como el perro no regresaba, contaba él, que se metió a como pudo en la cueva. Allá en la cueva miro a su perro que seguía correteando al conejo, pero en unos metros le perdió la vista y ya solo escuchaba al perro ladrar, y por más que le gritaba y llamaba al pinto, nunca le obedeció, decía don Ciro que como ya estaba muy oscuro, solo le empezó a seguir los pasos a su perro guiándose de los ladridos. Ahora, decía él que ya adentro de la oscuridad así de la nada como parpadear los ojos, de repente se dio cuenta y estaba caminando en un parque, él se quedó muy sorprendido porque no sabía que pasaba y pues es bastante difícil de creer que estando en Chiapas terminaras en el parque central de villa hermosa tabasco, como ya después se vino a enterar él. </p>
                                    <p>Nos decía tío Ciro que, al aparecer ahí en el parque pues él estaba, así como muy sorprendido, y todavía alcanzó a ver a su perro tratando de agarrar al conejo, ya al final cuando el pinto se cansó y se acercó junto a él, el conejito se quedó comiendo pasto en una de las jardineras del parque, y todavía el ahí pensó en disparar, pero se arrepintió porque decía que capaz y lo agarraban los militares. </p>
                                    <p>Así fue que sin saber cómo había llegado hasta Villahermosa, paso varios días en ese lugar, ahora sí que, mendigando en tabasco sobrevivió. Decía que en esos días logró ver a un payasito que era un artista muy afamado en esa época en Tabasco, y que cuando pasaba hambre a veces los pescadores le invitaban su pescado. </p>
                                    <p>Quien sabe cómo le hizo y pues se logró comunicar con su familia, ya para eso había pasado unos varios días desde que se metió a la cueva y la familia nunca vio su regreso a casa, de hecho, acá en la comunidad, la gente se juntaba y pues lo buscaba en el monte y en otros lugares. Ya fue hasta que les avisaron, quien sabe por medio de que, fue que supieron hasta donde andaba, y pues la familia lo fueron a traer hasta tabasco y ya acá es que empezó a correr la fama de lo que le pasó, de que la cueva de Moekin lo trasportó para Villahermosa. </p>
                                    <div className="contenedorImg">
                                        <a href="#ciroID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>     
                    </div>
                    {/* Termina septimo suceso */}

                     {/* inicia octavo suceso */}
                     <div class="w3-third cardsCuentos derecha" id="burjeriaID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav1" src={plantilla_suceso} alt="ImagenDeCopaczoca"/>
                        </div>
                        <h2 className="tituloCuentoCard">Personajes del pueblo, de los que se cuenta practican brujería</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Allá por los años 1950 Copainalá aún no contaba con energía eléctrica, el parque central apenas contaba ...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange6}>{cuento6?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento6 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia de Personajes del pueblo, de los que se cuenta practican brujería</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <strong>El nahual Andrés</strong>
                                    <br></br>
                                    <strong>Suceso 1:</strong>
                                    <p>Allá por los años 1950 Copainalá aún no contaba con energía eléctrica, el parque central apenas contaba con algunas cuantas lámparas que funcionaban con unos motores, para que estas mismas proporcionaran luz. En esos años apenas era una niña, con mis hermanas y mamá solíamos bajar desde el barrio de Santa Cecilia donde teníamos nuestra casa, hasta algunos otros barrios. Bajábamos durante la tarde noche, ya que eran a esas horas cuando la gente hacia fiesta por diversos motivos, ya sea por festejar algún santo o alguna feria. </p>
                                    <p>Recuerdo que para trasladarse desde mi casa a otros barrios era bastante complicado y cansado, aún más que ahora, ya que, en esos años, nada estaba pavimentado y de las calles que tenemos ahora, antes eran caminos de tierra, piedras y monte, muy reducidos y por supuesto obscuros a esas horas del día. Pero el trayecto valía la pena, ya que los festejos que se hacían antes eran muy alegres, más que ahora, antes llegaba bastante gente, sobre todo por lo vistoso y alegre que era la quema de castillos  y la banda de música que acompañaba a los festejos de los santos (si ese era el caso). </p>
                                    <p>El regreso a nuestras casas era complicado, los caminos eran muy oscuros, apenas nos lográbamos ayudar a iluminar las veredas con mucha suerte con lámparas de mano y cuando no se podía pues con los quinqués . En esos años oscuros, la gente contaba muchas cosas de sustos y espantos, te decían que no salieras de noche porque te podían pasar cosas malas. Pero mi mamá y hermanas nos armábamos de valor y caminábamos juntas de regreso por esas veredas muy reducidas, casi siempre a media noche. Nunca faltó los espantos en aquellas ocasiones, sobre todo de un animal que nunca podíamos ver, pero que estábamos muy seguras de que era algo así como un cerdo grande, este animal nos acosó en varias ocasiones cuando de noche tomábamos el camino de vuelta a casa. </p>
                                    <p>Como era muy oscuro todo, lo único que percibíamos de él eran sus movimientos bruscos corriendo por los lados del camino, acompañados de sus extraños ruidos que hacía.</p>
                                    <p>-jom, jom ,jom, jom- nos hacía, así como un cerdo, pero grande.</p>
                                    <p>-hijo de la chingada, este es el viejo Andrés que nos anda espantando- nos decía toda enojada mi mamá. </p>
                                    <p>Para espantar al animal, mi mamá tomaba una piedra del suelo, y con su saliva le dibujaba una cruz y se la arrojaba a donde creía que estaba la cabeza del animal. Cuando le daba en la cabeza con la piedra, el animal se iba directo al barranco que estaba de a un lado del camino. Mi mamá nos decía que don Andrés tenía fama de brujo, y que la gente decía que se transformaba en animal para espantar a la gente. Pero que, si le dabas con alguna piedra en la cabeza, al día siguiente el viejito amanecería con dolor en esa parte de su cuerpo. Al día siguiente íbamos junto a mi mamá a casa del viejito a reclamarle por los sustos que nos hacía pasar, y siempre lo encontrábamos con la cabeza amarrada curándose el dolor.</p>
                                    <strong>Don Mariano</strong>
                                    <p>Don Mariano es una persona habitante de la Ribera Candelaria, un señor de la tercera edad, piel morena, y figura esbelta. A sus más de 80 años de edad, don Mariano posee una figura erguida, recta, lo acompañan su voz, mirada y presencia fuertes en esencia, tal y como sin los años no han hayan hecho merma en él.
                                        Don Mariano es un hombre dedicado al trabajo de campo como, agricultor y ganadero. Aunque además de estos oficios, las personas del pueblo le añaden a su vida otras actividades, ciertas personas buscan su ayuda cuando se encuentran enfermas, principalmente aquellas aquejadas por causa de algún susto muy fuerte. Acuden a él para que los santigüe y los ramee, ya que se cuenta, posee un espíritu y aliento muy fuertes, que hace que la persona enferma recupere su valor y salud.
                                        Por otro lado, hay personas que lo relacionan con el nahualismo y brujería, personas que cuentan que han sido atacadas en sus sueños por don Mariano, o como comúnmente se escucha decirlas: - es que don Mariano me jugó en los sueños anoche-.
                                    </p>
                                    <p>Estas personas relatan reconocer a la figura de don Mariano en sus sueños, para luego esta adquirir formas animales como la de un enorme perro o toro, los cuales tratan de atacarlos. Dicen que la única solución ante estas apariciones en los sueños, es armarte de valor, y tratar de matar al animal. De esta forma, mencionan que, don Mariano se dará cuenta que tu espíritu es fuerte y te dejara de molestar, por lo consiguiente, si buscas a don Mariano al día siguiente, este seguramente tendrá dolores de cabeza por la batalla que le diste, aunque se menciona, que, si fuiste cobarde y el nahual te gana la batalla, pronto enfermarás.</p>
                                    <p>La fama de don Mariano para adquirir formas animales y asustar a las personas en los sueños en muy conocida, incluso personas muy escépticas ante temas sobrenaturales se han convencido de sus habilidades. Sobre todo, cuando en el pueblo se empezó a divulgar algunos sucesos, en los cuales personas que no creían en este tipo de cosas, decían haber observado a don mariano realizando cosas extrañas en las noches. Decían haberle visto por los caminos reales  de la comunidad practicando rituales raros, haciendo ademanes con su cuerpo, que no está más que decir, eran extraños.</p>
                                    <strong>Don Clímaco (Tataquima)</strong>
                                    <p>Durante la primera mitad del siglo XX, en la comunidad de la ribera el rosario municipio de Copainalá, vivía un señor conocido por la mayoría como don Clímaco. Las personas de la comunidad tenían cierto temor ante su presencia, ya que se decía que era practicante de la brujería, y que, con solo una mirada o contacto físico con él, podría significar la muerte o enfermedades. La gente murmuraba que podía causar fiebre con tan solo verte, y que si no te curaba el mismo con sus santiguadas y rameadas podrías morirte.</p>
                                    <p>Su fama llego a ser muy negativa, incluso para él, ya que en varias ocasiones intentaron asesinarlo, escudándose ante las suposiciones de que él era el causante de enfermedades. Muchos otros lo torturaron amarrándolo y arrastrándolo hasta ante el enfermo, y obligándolo a que lo santiguara, cuando se creía que él era el causante de dichas desgracias.  
                                        Durante su vida, fue acusado de algunas muertes y enfermedades en la comunidad. A continuación, algunos sucesos relatados por habitantes de Copainalá a manera de testimonio, en una entrevista personal, marzo 2021.
                                    </p>
                                    <strong>Suceso 1:</strong>
                                    <p>El señor Israel Vázquez Reyes nos mencionó que allá por los años 1940, en la comunidad se reunió la gente para amarrar y golpear a don Clímaco.
                                        -Agarraron a don Clímaco y amarraron a un poste y le decían que curara a una muchacha, porque según la gente él la había enfermado con su mirada. La gente estaba muy segura que era el, el causante, le echaban la culpa porque lo habían visto observando aquella mujer. Yo creo que estaba enamorado de ella, pero pues la chava no le iba a hacer caso, pero como decían que él tenía mucho calor en la mirada, y quien sabe cuánto tiempo la observó, me imagino que la enfermó. El caso es que el señor decía que no tenía la culpa, que él no había hecho nada, y al final de cuentas creo que la trato de curar, pero ya no supe si se curó o se murió la chava.  
                                    </p>
                                    <strong>Suceso 2:</strong>
                                    <p>Por otro lado, tenemos el testimonio de la señora Adaceli Estrada Nangusé, quien nos relató lo siguiente:
                                    -Hace años, cuando las calles eran de polvo allá en las comunidades. Bueno te hablo hace décadas, mi tío que se llama Raquel, imagínate él ya tiene más de 90, y en ese entonces él estaba muy chamaco, y trabajaba de albañil allá en la ribera de tierra blanca, allá en su trabajo conoció a este señor que le decían que era brujo, don Clímaco. Pero mi tío no se creía de esas cosas, hasta que en una ocasión nos dijo mi tío que se había discutido con este señor, y que llegando a su casa se empezó a sentir mal de su salud. Decía que le empezaba a picar la garganta y ya después empezaba a ahogarse mucho. Como había contado con quien se había discutido, sus familiares se enojaron y le echaron la culpa a don Clímaco, que él le había puesto brujería, así que lo fueron a buscar a su casa y lo trajeron amarrado hasta la casa de mi tío Raquel, ahí lo obligaron a que lo rameara y santiguara. Después de varios días de curación, cuenta mi tío que se empezó a sentir mejor, pero es hasta el día de hoy que sigue pensando que don Clímaco fue quien lo enfermó.
                                    </p>
                                    <strong>Suceso 3:</strong>
                                    <p>Otro suceso interesante, es el que don Israel Vázquez Reyes nos relató nuevamente, nos narró:
                                    Cuando tenía la edad de 6 o 7 años recuerdo más o menos, tengo que ser sincero, lo soñé, la verdad, lo soñé. Ahí en mis sueños se veía a don Tataquima, pero yo me miraba en un monte, en un potrero. En el potrero, estaba yo y de repente se aparecía un animal que aquí le decimos gato de monte, pues el gato de monte no sé cómo le hizo, pero me subió en su lomo, y ahí en su lomo me llevó corriendo, y me dejó tirado enfrente de la casa de don Tataquima, ahí entre su monte me dejó tirado. Al momento del golpe del suelo me levanté del susto. 
                                    Al otro día le dije a mi mamá, y ella me dijo que era la culpa de don Tataquima, porque ese día el señor había ido a la casa a prestar 10 pesos, pero nada más le dieron 5, y se enojó, entonces seguramente me quería provocar enfermedad a través de los sustos del sueño.
                                    </p>
                                    <div className="contenedorImg">
                                        <a href="#burjeriaID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>     
                    </div>
                    {/* Termina octavo suceso */}

                     {/* inicia noveno suceso */}
                     <div class="w3-third cardsCuentos derecha" id="luzfuegoID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav1" src={plantilla_suceso} alt="ImagenDeCopaczoca"/>
                        </div>
                        <h2 className="tituloCuentoCard">Bolas de fuego y luz</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Acá como la mayoría de las personas de campo, se levantan muy de madrugada para empezar...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange7}>{cuento7?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento7 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia de Bolas de fuego y luz</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <strong>Suceso 1:</strong>
                                    <p>Acá como la mayoría de las personas de campo, se levantan muy de madrugada para empezar a trabajar, esto ya es una costumbre, para ahorrar tiempo y aprovechar al máximo la luz del día. Hace muchos años atrás, cuando acá en las comunidades aun no llegaba la luz eléctrica y apenas había unos cuantos caminitos de tierra, la gente desde muy temprano empezaba a trabajar. Mi papá no era la excepción, hasta creo que era de las personas que más temprano se levantaba, 1 o 2 de la mañana, ya él estaba caminando hacia su terreno para laborar. </p>
                                    <p>En esos días, estaba la temporada en que mi papá Ventura se iba por las madrugadas hacia su terreno a sacar el maíz, mi mamá Bertha le decía que no se fuera de tan madrugada porque le podría pasar algo. El caso es que mi papá no hacía caso a las recomendaciones y el durante muchos años continuó con su costumbre, incluso después de lo que le pasó.</p>
                                    <p>Sucedió pues que de muy madrugada salió de casa junto con su mula, para que le ayudara a cargar el maíz. Llegado al terreno, mi papá juntó el maíz y lo cargó al lomo de su animal, y una vez terminado su labor ahí se dispusieron a regresar a casa, siendo aún muy oscuro el camino, pero de la nada cuenta mi papá, que a pleno montarral la mula empezó a ponerse muy nerviosa, empezó a patalear y a ponerse en mucha aflicción. Mi papá ante esto, decidió agarrar a la mula y amarrarla a un árbol, ya que él no sabía lo que el animal presentía. A como pudo, porque el animal estaba muy nervioso, logro amarrarla. Casi no había pasado mucho tiempo después de eso, cuando vio que dos luces grandes y muy brillantes, como las luces de los carros, venían hacia ellos directamente, y en un parpadeo de ojos, pasaron a toda velocidad muy de cerca de donde estaban. La mula hizo tal arrebato que por poco reventaba el lazo con la que estaba amarrada, pero la imagen duro muy pocos segundos, pero la impresión persiste hasta hoy en día, ya que pues en esos tiempos, ni carreteras, ni energía eléctrica y muchos menos carros habían acá. Y menos que algo motorizado pudiera meterse y pasar por donde venía caminando mi papá y su mula en ese entonces. Al final de esos instantes, mi papá siguió con la vista la luces, y nos contaba que agarraron rumbo hacia los montes que estaban frente a ellos, para finalmente perderse en un cerro que se le conoce acá en la comunidad como “Moekin”. </p>
                                    <p>Nunca se supo que eran esas luces, y mi mamá le decía a mi papá que ya no fuera de tan madrugada porque lo podían seguir asustando, pero mi papá nunca obedeció, pero ya tampoco las volvió a ver.</p>
                                    <strong>Suceso 2:</strong>
                                    <p>Ahí por el 2003 recuerdo que mi familia y yo teníamos nuestra casita en el terreno del señor Israel de allá de Ribera el Rosario, el señor nos prestó un pedacito de terreno para vivir y casi una década estuvimos a por allá. En ese entonces trabajaba con la familia Salvatierra que tienen sus terrenos colindantes con el del señor Israel. Mis labores con la familia Salvatierra eran cuidar de sus animales, atenderlos etc., lo que pues hace un vaquero. El caso acá es que mi casita que había construido, quedó a las faldas de un cerro que se llama “Kekuy”, así le dice la gente. A lado de este cerro tiene su compañero, otro cerro, que se le conoce como “Moekin”, y de lo que se dice de este último es que es como encantando, porque pasan cosas inexplicables ahí. </p>
                                    <p>Me paso pues en una ocasión que regresaba para mi casa por el caminito real, ya iba ahí por el portón de los Salvatierra, porque primero pasa uno por sus terrenos para llegar en ese entonces para mi casa, pasaba yo, ya mero en la noche cuando alcazaba yo a mirar allá a lo lejos de Moekin en una parte donde tiene una cueva, unas bolas rojas grandes como de fuego, eran dos, que se alejaban de una de la otra para agarrar como vuelo para luego chocar entre ellas, y cuando se golpeaban, y sacaban chispas, se retiraban y se volvían a dar de golpes sacando chispas. La verdad me sorprendí mucho, y me fui corriendo a decirle a mi mujer para que las viera también, pero cuando la llevé a donde se podían ver, ya no estaban. </p>
                                    <div className="contenedorImg">
                                        <a href="#luzfuegoID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>     
                    </div>
                    {/* Termina octavo suceso */}

                     {/* inicia décimo suceso */}
                     <div class="w3-third cardsCuentos derecha" id="bultosID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav1" src={plantilla_suceso} alt="ImagenDeCopaczoca"/>
                        </div>
                        <h2 className="tituloCuentoCard">Bultos</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">La gente dice que en ocasiones son como sombras, cosas sin aparente forma a primera vista...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange8}>{cuento8?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento8 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia de Bultos</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <strong>Suceso 1:</strong>
                                    <p>La gente dice que en ocasiones son como sombras, cosas sin aparente forma a primera vista, pero que después de un rato pueden adquirirla. Tapan los caminos, te asustan, te dejan paralizado. Se aparecen por las noches a quien por desgracia esta solo caminando por caminos, o simplemente solo en algún lugar. </p>
                                    <p>Unos años antes de que naciera, me contaba mi papá que el cayó muy enfermo en esa época, le tocó una enfermedad que era muy común y muy grave en ese entonces. Sobre todo, porque los médicos no quedaban cerca y para comprar medicinas era casi imposible. Él estaba enfermo de disentería, una enfermedad que te suelta el estómago y en ocasiones lo deja muy lastimado internamente. </p>
                                    <p>Resultó ser que el dolor de intestinos era muy fuerte, y en ocasiones tenía que salir al monte para hacer sus necesidades. En una de esas ocasiones nos contó que cuando estaba acurrucado, de entre el monte vio una figura extraña como la forma de una pelota que venía hacia a él desde a unos metros, el caso que esta figura extraña sin forma aparente más que como un bulto, se acercó lo suficiente a mi papá para pasar a lado de él. Nos relataba mi papá que, a los dos metros cuando ya había pasado ese bulto a lado de él, la forma de bulto se tornó en un aspecto humano femenino como la de una mujer con vestido de novia, y finalmente la figura entre el monte desapareció.  </p>
                                    <strong>Suceso 2: . El bulto del corral de los Vázquez</strong>
                                    <p>Esto que me sucedió fue ahí por el 2006 según recuerdo, en esos años andaba trabajando para los Vázquez, habían puesto un corral bien grande donde estaban poniendo a los toritos que compraban para después revenderlos. El caso es que mi hora de salida era ya bien noche como a las 11 o poquito antes. </p>
                                    <p>Una de esas noches estaba yo terminando mis labores ahí en los encierros, ya andaba guardando las herramientas que se utilizan a diario ahí en una como casita de madera que tienen a lado de los corrales, cuando de repente volteé a ver en uno de los encierros algo bien raro. Ahí a plena oscuridad (bueno, solo alumbraba un poste de luz, pero no era mucho) en medio de los animales había una cosa, así como bulto, del tamaño de un becerro, y me quedé admirado pues porque no le encontraba forma, solo me acuerdo que era de color blanco. El caso es que ahí estaba sin moverse del medio del corral, y pues yo como que paralizado estaba, porque no sabía que hacer; ya fue que no pasó mucho tiempo entre el esfuerzo que yo hacía por querer hablar porque también no me salían las palabras, que esa cosa se empezó a mover, y entre eso que se movía se fue haciendo más grande y más grande, ya para cuando estaba cerca de los postes que dividen a cada corral, esta cosa se hizo así como forma de tepezcuintle pero ya bien grande, tanto se hizo grande que no mas alzaba los pies y pasaba encima de los postes de cada corral. 
                                        Y así se fue esa cosa, allá le fui a perder de rumbo con la vista por donde está el desvío de rosario, ahí arriba de la pesa de ganado, ahí mero en esos cerros se subió y ya no vi que pasó.
                                    </p>
                                    <div className="contenedorImg">
                                        <a href="#bultosID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>     
                    </div>
                    {/* Termina décimo suceso */}
                </div>
            </div>
            <footer className="containerFooter test2">
                <p>Hecho con ♥️ por JFPG</p>
            </footer>
        </div>
      );
    }
  }


export default Sucesos;