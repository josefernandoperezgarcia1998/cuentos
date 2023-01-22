import React from 'react';
import './estilos/NavBar.css';
import fotoweya from './img/weyaweya.png';
import fotoweya1 from './img/weyaweya1.png';
import fotoweya2 from './img/weyaweya2.png';
import fotoweya3 from './img/weyaweya3.png';
import fotoweya4 from './img/weyaweya4.png';
import weyaCard from './img/weyaCard.jpg';
import audioweya from './multimedia/santo.mp3';
import encamisadaCard from './img/encamisadaCard.png';
import encamisada1 from './img/encamisada1.png';
import copaczoca1 from './img/copaczoca1.png';
import copaczoca2 from './img/copaczoca2.png';
import duende1 from './img/duende1.jpg';




class CuentosNav extends React.Component{

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

      const cuento1=this.state.divcontainer;
      const cuento2=this.state.divcontainer2;
      const cuento3=this.state.divcontainer3;
      const cuento4=this.state.divcontainer4;
      const cuento5=this.state.divcontainer5;
      
      return(
          
        <div>{/* DIV PADRE DE TODO EL ELEMENTO */}

            <div className="">
                <div className="w3-container w3-green tituloprincipal">
                    <h1>¡Los cuentos más espeluznante!</h1>
                    <p>En esta sección encontrarás los cuentos que han nacido en el municipio de Copainala</p>
                </div>

               {/* Contenedor de todas las cards de los cuentos */}
                <div className="w3-row-padding contenedorCuentosNav">
                    {/* Inicia primer cuento */}
                    <div class="w3-third cardsCuentos derecha espacioCards" id="weyaID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards" src={weyaCard} alt="ImagenDelWeyaWeya"/>
                        </div>
                        <h2 className="tituloCuentoCard">El Weya-Weya</h2>
                        <p><strong>Categoria:</strong> CUENTOS.</p>
                        <p className="descripciónCuento">Mujer ya regresé. Pero para ese entonces ya habían pasado varios años desde que se había ido...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange}>{cuento1?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento1 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia del weya weya</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>El <strong>“Weya-Weya”</strong> es un personaje místico, del cual se dice que vivió en algún lugar de las montañas de lo que se conoce ahora como la Ribera Miguel Hidalgo o Zacalapa.  Según se cuenta, este hombre se encontraba casado, pero un día al dirigirse al monte de las montañas donde él se dedicada a trabajar y a cazar, ya nunca regresó, dejando abandonada a su mujer, quien se encontraba embarazada.</p>
                                    <p>Se dice que durante el tiempo que este personaje se mantuvo en el monte, se alimentaba de miel y frutas del lugar, así mismo adquirió poderes sobrenaturales, tanto así que podía derribar arboles haciendo el uso único de la fuerza de sus brazos. Sucedió que transcurrido el tiempo y mientras dormía, se le reveló en los sueños que Jesucristo iba a ser aprendido y crucificado, por lo que se le fue encomendado a través de la revelación de su sueño que bajara del monte y que se dirigiese a los habitantes del pueblo para avisarles sobre la crucifixión del hijo de dios.</p>
                                    <p>Se cuenta entonces que, al bajar del monte, el Weya-Weya recorrió las calles del pueblo avisando a todos sobre aquel acontecimiento que se le había sido revelado 
                                    en uno de sus sueños y que lamentablemente tendría que ocurrir. No obstante, durante su recorrido se encontró con su antigua casa y mujer, que se entiende, tenían por lo menos ya varios años sin verse desde aquel día que salió de su casa y jamás volvió.</p>
                                    <p>Al reencontrarse, la esposa del Weya-Weya dijo:</p>
                                    <p>Viejo mañoso, has regresado porque tus hijas ya están grandes.</p>
                                    <p><strong>Y el Weya-Weya le respondió:</strong></p>
                                    <p>-No, no he regresado por esa razón. Regresé porque se me fue revelado que Jesucristo va a ser golpeado y crucificado, y eso es lo que vengo a avisar.
                                    Por cierto, ¿dónde están tus hijas?</p>
                                    <p>-Ah!!, en alguna parte con sus novios - <strong>*Dijo la esposa*</strong>.</p>
                                    <p>-¿Cómo es eso que ya tienen novios? - <strong>*Respondió el Weya-Weya con un tono bastante brusco*</strong>.</p>
                                    <p>-Ellas ya están grandes en edad, por eso tienen.</p>
                                    <p>Por cierto, tu que has regresado de la montaña, ¿Qué me has traído? - <strong>*Preguntó la esposa*</strong>.</p>
                                    <p><strong>A lo que el Weya-Weya dijo:</strong></p>
                                    <p>-Ah, aquí te traigo un pedazo de carne, y también mi escopeta para que me la limpies.</p>
                                    <p>Resultó entonces que mientras la esposa se dedicaba a limpiar la escopeta, el Weya-Weya realizó otra pregunta.</p>
                                    <p>-Mujer, mientras no me encontraba con ustedes, ¿Aprendieron a realizar el oficio que les dejé enseñado?</p>
                                    <p>-¿Cuál trabajo? - <strong>*Cuestionó su esposa*</strong>.</p>
                                    <p>-El del hacer los cigarros con hoja de tabaco - <strong>*Mencionó el Weya-Weya*</strong></p>
                                    <p>-Ah, ese, si mira, este es uno realizado por una de tus hijas.</p>
                                    <p>Sucedió entonces que el Weya-Weya empezó a inspeccionar el cigarro. Lo observó detalladamente, muy meticulosamente y por un buen tiempo; pero, al momento de reflejar aquel cigarro frente al sol, nuestro personaje se percató que efectivamente no estaba bien elaborado, al parecer la técnica del pegado no era la correcta. Fue en ese instante que empezó a mencionar lo erróneo que se encontraba el trabajo, y que tal técnica mal ejecutada nunca la había enseñado. Ocurrió que nuestro personaje estalló en ira, tomó en sus manos una cuarta , y con tal objeto empezó a reprender a su mujer a golpes, expresando así lo enojado que se encontraba con ella al no poder transmitir correctamente el oficio y técnicas que él le había enseñado.</p>
                                    <p>-Toma este entonces - <strong>*Dijo la mujer*</strong>.</p>
                                    <p>-Este es otro, y fue elaborado por otra de tus hijas.</p>
                                    <p>El Weya-Weya lo observó y de igual manera lo inspeccionó, muy detalladamente. Sin embargo, este cigarro si se encontraba elaborado con una buena técnica, y tal como el consentía, era la cual había dejado instruido.</p>
                                    <p>-Por cierto, mira, acaba de llegar una de tus hijas - <strong>*Mencionó la mujer*</strong>.</p>
                                    <p>-A ver, quiero ver quién es el novio de mi hija - <strong>*Habló nuestro protagonista*</strong>.</p>
                                    <p>Entonces, la joven junto a su novio se acercaron y lo saludaron.</p>
                                    <p>Ante tal gesto, el Weya-Weya habló con volumen retorico:</p>
                                    <p>-Así que, tu eres el novio de mi hija.</p>
                                    <p>Con lo que novio se limitó a decir:</p>
                                    <p>-Si.</p>
                                    <p>A partir de este encuentro, sucedió que el Weya-Weya empezó a poner a prueba a los novios de sus hijas, comenzando con una pregunta:</p>
                                    <p>-¿Será que eres tan fuerte y tan valiente como lo soy yo?</p>
                                    <p>Y el novio respondió:</p>
                                    <p>-¡Claro que sí, yo puedo recorrer las montañas dando grandes saltos!</p>
                                    <p>Y es por cierto que te digo, que ayer fui con tu hija a cortar flores a una montaña, y visitamos las 7 montañas más altas del mundo.</p>
                                    <p>-Muéstrame una mano - <strong>*Dijo el Weya-Weya*</strong>.</p>
                                    <p>Una vez extendida la mano del novio, el Weya-Weya colocó la escopeta sobre de ella, y mientras recurría a sus artimañas para poder sacar de concentración al joven, sin ningún aviso disparó el arma, cuya acción tenía como objetivo probar la valentía y concentración del muchacho, y vaya sorpresa que se lleva nuestro personaje al observar que ante tal estruendo explosivo el novio no se inmutó. Por lo que no le quedó más remedio que aceptar la valentía y fuerza de aquel joven, y dar su consentimiento para ser la pareja de su hija.</p>
                                    <p>De repente se acerca el otro novio:</p>
                                    <p>-¡Ahh!, con que tú eres el otro que quiere ser mi yerno, ¿A caso eres tan fuerte y valiente como yo? - <strong>*Cuestionó retóricamente el Weya-Weya*</strong>.</p>
                                    <p>-Así es - <strong>*Mencionó el joven*</strong>.</p>
                                    <p>-Entonces acércate, ven para acá, voy a probar si eres tan fuerte.
                                    Sucedió entonces que, empezó una serie de jaloneos bastante bruscos entre ellos, con el cual el Weya-Weya proponía espantarlo y hacer que este cayera al suelo, pero el joven resistió y de esta manera pudo salir victorioso de la prueba, por lo que nuevamente el Weya-Weya no le quedo de otra que entregar la mano de su hija y aceptar la valentía de su ahora yerno.
                                    Y de esta misma manera es en la que finaliza la historia, que a su vez es representada en una danza tradicional en el pueblo, finalizando en ella al igual que acá, con la entrega en matrimonio de las hijas del Weya-Weya, el cual celebran todos los personajes de la historia iniciando un baile acompañado con la música de tambor y flauta de carrizo.</p>
                                    <div className="contenedorImg">
                                        <img className="fotoWeya" src={fotoweya} alt="Foto de la familia del Weya-Weya"/>
                                        <p>Foto de la familia del Weya-Weya</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya" src={fotoweya1} alt="Foto observa trabajo de cigarro"/>
                                        <p>El Weya-Weya observa el trabajo final del elaborado de cigarro de una de sus hijas.</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya fotoWeyatres" src={fotoweya2} alt="Foto concentración"/>
                                        <p>El Weya-Weya pone a prueba la concentración y valentía de uno de los novios de sus hijas</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya fotoWeyatres" src={fotoweya3} alt="Foto segundo novio"/>
                                        <p>El Weya-Weya poniendo a prueba al segundo novio por medio de fuerza bruta</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya fotoWeyatres" src={fotoweya4} alt="Foto permiso novios"/>
                                        <p>El Weya-Weya otorga el permiso a los novios para que se casen con sus hijas, al fondo lado derecha, se observa a los músicos de tambor y flauta de carrizo, quienes empiezan tocar un son , para así festejar a las parejas.</p>
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
                    <div class="w3-third cardsCuentos izquierda" id="encamisadaID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoEncamisada1" src={encamisadaCard} alt="ImagenDeEncamisada"/>
                        </div>
                        <h2 className="tituloCuentoCard">La Encamisada</h2>
                        <p><strong>Categoria:</strong> CUENTOS.</p>
                        <p className="descripciónCuento">Es un baile con historia, con antecedentes históricos, porque la encamisada se llamaba “Matza”, que quiere decir estrella...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange2}>{cuento2?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento2 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia de la encamisada</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>La historia da inicio presentándonos a su personaje principal, una mujer, la cual los habitantes del pueblo sobre nombraron “la encamisada”, aunque originalmente ella era conocida por el nombre de “Matza” el cual significa “estrella”. De ella se nos menciona acerca de su gran atractivo físico, siendo descrita como una mujer muy bella y originaria de una ribera conocida como Miguel Hidalgo .
                                    Ahora bien, el relato nos dice que ella se encontraba casada con un hombre quien tenía como oficio ser comerciante , siendo este su trabajo demandante en tiempo, ya que le implicaba realizar viajes a caballo durante su ruta, la cual llegaba hasta Guatemala. Consumiéndole aproximadamente un tiempo lejos de casa y de su esposa de 30 a 40 días en total.</p>
                                    <p>Para no dejar a su esposa sola, este señor tenía a dos empleados, un joven y una señorita, quienes acompañaban y asistían a su esposa en todo lo que ella solicitaba y necesitaba. Ya que el esposo de “Matza” era un señor con bastante alcance económico y propietario de muchos terrenos y trabajadores.</p>
                                    <p>Aun y con todas las comodidades que podía tener “Matza”, ella aprovechaba la ausencia de su esposo para engañarlo con los hombres del pueblo, dichas acciones eran bastante regulares y muy bien enterados estaban los muchachos que acompañaban a “Matza”, pero cabe aclarar que se encontraban amenazados por ella, ya que si mencionaban algo sobre sus fechorías, ella se encargaría de dejarlos sin empleo; y así, aunque ellos en verdad deseaban revelar las terribles traiciones a su patrón, tenían que guardar el sucio secreto de su empleadora. De esta manera Matza continuó recorriendo las calles, portando un pañuelo color blanco en la mano, el cual utilizaba para señalar al hombre que el que deseaba estar.</p>
                                    <p>Transcurrido mucho tiempo, las mujeres del pueblo empezaron a percatarse que Matza era amante de sus esposos, por lo que decidieron esperar al regreso de su esposo el comerciante y por fin revelarle la terrible verdad.</p>
                                    <p>Al regresar, el esposo de Matza se entera de todo lo que acontece con su esposa en su ausencia. Aun así, él no quería creer del todo lo que las mujeres le decían. Por lo que ellas le aconsejan tenderle una trampa a “Matza” y así por fin corroborar todo lo que hasta ahora parecieran ser chismes para él.</p>
                                    <p>De esta manera, el morbo provocado por los comentarios de las mujeres del pueblo orillaron al comerciante a tender un engaño a Matza. Lo que aconteció a que el señor dijera a su mujer sobre un nuevo viaje que tendría que emprender, y que lamentablemente le llevaría el mismo rango de tiempo acostumbrado. Lo cual era totalmente una mentira.</p>
                                    <p>Puesta la trampa, el esposo de Matza inicia su viaje falso, por lo que, viendo la oportunidad, nuestra protagonista decide meter a uno de sus amantes a la casa de su esposo. Sin embargo, a los pocos instantes que esto ocurría, el comerciante emprende el regreso a casa, y descubre que los terribles chismes de las mujeres del pueblo resultan ser verdad.</p>
                                    <p>Desesperado y lleno de cólera, se apresuró a vengarse, fue entonces que se dirigió camino a Coapilla, a una localidad referida como “Huimanguillo” la cual en una de sus montañas vivía un brujo conocido como “Zahuaut”. Al llegar con el brujo, el señor empezó a relatarle toda su historia y las razones por las que deseaba vengarse. De esta manera el brujo le preparó un brebaje, el cual sería puesto en los alimentos de su esposa y de esta manera observaría como la venganza se consumaría.</p>
                                    <p>Sucedió entonces que el comerciante siguió todas las instrucciones que el brujo le indicó, y coloco el brebaje hechizado en los alimentos de “Matza”. A los pocos días, “Matza” comenzó a percatarse de un considerable abultamiento en su abdomen y el incremento de su peso corporal, siendo en los días posteriores imposible no notarlo. Así que decidió mandar a sus mozos al pueblo, para que se encargaran de comprarle camisas grandes, las más grandes que encontraran y así de esta forma, tratar de cubrir el sobrepeso que empezaba a deformar la figura hermosa de mujer que poseía.</p>
                                    <p>Desesperada por la concepción que ahora su figura representaba para sus amantes, como una mujer gorda y mal vestida, decidió ir en busca de un brujo para tratar de recuperar la antigua belleza que poseía. En aquel lugar, el brujo le dio instrucciones de dirigirse al rio y buscar en él, la poza de agua más bonita, la cual llamó “poza del amor”, y ahí se tendría que bañar por 7 días consecutivos por las mañanas y anocheciendo, de esta manera, ella recuperaría su antigua belleza.
                                    Matza realizó las instrucciones que el brujo le recomendó, y fue de esta manera que día con día, poco a poco, ella logró recuperar su belleza.</p>
                                    <p>Transcurrió un breve lapso de tiempo y aun siendo esposa del comerciante, ella empezó nuevamente a estar con sus amantes mientras el señor no se encontraba en casa, a lo que el comerciante volvió a enterarse. Así que por una segunda ocasión el esposo de Matza se dirigió con el brujo Zahuaut para conseguir ayuda en su venganza, a lo que el brujo otorgo un nuevo brebaje al comerciante con las mismas instrucciones de la primera vez, asegurando que en esta ocasión las consecuencias en su esposa serian peores.</p>
                                    <p>Nuevamente la historia se repitió, y Matza ingirió aquel brebaje sin notarlo, a lo que en consecuencia como lo fue en la primera vez, la hermosa figura esbelta que poseía fue hinchándose, incrementando de peso, y agregado a estos terribles acontecimientos, la piel de su cuerpo empezó a cubrirse de granos y sarna, por lo que ciertas zonas de su piel empezaron desprenderse. Viéndose en tal situación, intentaba cubrir sus brazos con las camisas de mangas largas más grandes que podía conseguir, pero todo le resultaba en vano.</p>
                                    <p>Finalmente, su desdichada suerte culminaría de peor manera, ya que la gente del lugar empezó a organizarse y a decidir cuál sería su destino, ya que por temor a contagiarse de sus extraños aquejamientos o simplemente por repudio a su figura, decidieron echarla fuera del pueblo no sin antes colocarle un sobrenombre, y fue de esa manera que empezaron a llamarla “la encamisada” haciendo referencia a las grandes camisas que ella portaba intentado cubrir su desgracia.</p>
                                    <div className="contenedorImg">
                                        <img className="fotoEncamisada" src={encamisada1} alt="Traje de la encamisada"/>
                                        <p>La Encamisada”, traje utilizado para ejecutar la danza del mismo nombre</p>
                                        <a href="#encamisadaID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>      
                    </div>
                    {/* Termina segundo cuento */}

                    {/* Inicia tercer cuento */}
                    <div class="w3-third cardsCuentos derecha" id="copaczocaID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav1" src={copaczoca1} alt="ImagenDeCopaczoca"/>
                        </div>
                        <h2 className="tituloCuentoCard">La Copaczoca</h2>
                        <p><strong>Categoria:</strong> CUENTO.</p>
                        <p className="descripciónCuento">Se cuenta entre los pobladores de mayor edad, que hace un tiempo existía una mujer en el poblado que se dedicaba...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange3}>{cuento3?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento3 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia de la Copaczoca</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                        <p>Se cuenta entre los pobladores de mayor edad, que hace un tiempo existía una mujer en el poblado que se dedicaba a la hechicería, sin embargo, nadie tenía conocimiento acerca de sus oscuras actividades, de esta manera sus fechorías pasaban desapercibidas.</p>
                                        <p>Se relata de este personaje cuyo nombre hasta ahora es desconocido, trabajaba como servidora domestica para una familia en el poblado. Se dice que esta era la estrategia que utilizaba para poder conocer y estar cerca de muchas personas, y así seleccionar a gusto a cada una de sus víctimas, de quienes su sangre por las noches mientras dormían ella aprovechaba como su alimento.</p>
                                        <p>Durante mucho tiempo la gente del pueblo, pero sobre todo la familia donde la Copaczoca trabajaba, sufrieron un extraño padecimiento; la mayoría de las mañanas cuando recién despertaban encontraban ciertas partes de su cuerpo como: las piernas, abdomen, bajo la espalda, hombros, cuello y brazos marcados con moretones, tal como si algo hubiera estado succionando esa zona de la piel.</p>
                                        <p>Sobre esto, la gente cuenta que la hechicera Copaczoca buscaba por las noches algún lugar seguro donde ella pudiera ocultar su cuerpo, ya que, para poder succionar la sangre de sus víctimas, tenía que separar la cabeza de su cuerpo, de esta manera usando solamente su cabeza, rodando y rebotando , se dirigía hasta donde la víctima se encontraría durmiendo, es ahí donde aprovecharía el tamaño de su extremidad, para lograr pasar por lugares angostos hasta llegar a los aposentos de la persona y así alimentarse de ella.</p>
                                        <p>Era así que transcurrió un periodo de tiempo y la familia era cada vez más afectada por los ataques de la Copaczoca, de tal manera que las repercusiones en la salud principalmente en uno de los integrantes de aquella familia empezaron a notarse, signo tales como cuando alguien se encuentra en un estado anímico. Por lo que, al desconocer la extraña situación, la familia consultaba con brujos, quienes mencionaban que lo que ocurría no tomaba parte dentro de las enfermedades naturales, talvez de esta forma dando a comprender que se trataba de los efectos del trabajo de alguna hechicería. </p>
                                        <p>Una noche, uno de los hermanos de las muchachas de aquella familia, regresaba a casa después de una cita con su novia, mientras se encontraba ingresando a los cuartos donde se disponía a dormir, se percató que en la cama donde una de sus hermanas dormía, se encontraba una cosa extraña, una sombra con forma de pelota que se movía sobre el cuerpo de su hermana. Al acercarse para descubrir de que se trataba, se le reveló una imagen aterradora, una cabeza humana que al haber sido descubierta estallaba en ira, y se lanzaba para tratar de morderlo. Ante tal ataque, el joven tomo lo único que tenía cerca de él; una escoba, y con ella empezó a defenderse, arremetiendo golpes contra aquella cabeza que no dejaba de atacarlo. Para esto, la familia entera ya se encontraba en aquel cuarto, viéndose el sueño truncado por el enfrentamiento entre el joven y la Copaczoca. </p>
                                        <p>La grotesca escena dio fin cuando el muchacho logró controlar a la cabeza sujetándola contra el suelo, con la ayuda de la palma de la escoba, he inmediatamente inmovilizada, la tomó de los cabellos y la colocó dentro de una bolsa.</p>
                                        <p>Fue entonces que entre los familiares se cuestionaban lo harían con ella, por lo que decidieron consultar a un brujo, quien les dijo que se trataba de “la Copaczoca” una hechicera que se dedicaba a alimentarse de sangre humana y que era la responsable de los aquejamientos que habían estado sufriendo; por lo que si deseaban acabar con ella, necesitarían  encontrar el cuerpo, que seguramente se encontraba escondido cerca del lugar donde ella atacaba, y que una vez descubierto, sobre la base del cuello donde debería ir la cabeza, tendrían que untar sal, de esta manera, cuando ellos liberaran la cabeza e intentara unirse nuevamente, no lo lograría.</p>
                                        <p>Fue así que la familia se dispuso a encontrar el cuerpo de la bruja, buscaron por un buen rato a los alrededores de su casa, entre los matorrales y el alto pasto, hasta que por fin lograron descubrirlo, de tal manera que lo primero que hicieron fue untarle sal en el cuello y posteriormente liberaron la cabeza de la hechicera, acto seguido que esta salió rodando en busca de su cuerpo, pero al tratar de incorporase a él, le fue casi imposible, y cuando por fin lo lograba, la cabeza se le incrusto al revés, por lo que su rostro quedó en dirección hacia su espalda, y  la parte posterior de su cabeza apuntando hacia enfrente.</p>
                                        <p>Se cuenta entre la gente del pueblo que, a causa de esto, la bruja empezó a sufrir amargamente ya que nunca pudo alimentarse de nuevo, por lo que se sabe, su muerte fue a causa de inanición.</p>
                                        <p>Sucedido esto, se menciona que los pobladores decidieron enterrar el cuerpo en un lugar lejano, del cual, hasta ahora no hay referencia. Se dice también, que a pesar de que aquella bruja murió, sus oscuras enseñanzas ya habían sido transmitidas a otras personas, por lo que nuevos ataques de Copaczocas no podrían descartarse.</p>
                                    <div className="contenedorImg">
                                        <a href="#copaczocaID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }
                    <br/>
                    <br/>     
                    </div>
                    {/* Termina tercer cuento */}

                    {/* Inicia cuarto cuento */}
                    <div class="w3-third cardsCuentos izquierda" id="copaczoca2ID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav2" src={copaczoca2} alt="ImagenDeCopaczoca2"/>
                        </div>
                        <h2 className="tituloCuentoCard">La Copaczoca: Sucesos y Apariciones</h2>
                        <p><strong>Categoria:</strong> SUCESOS.</p>
                        <p className="descripciónCuento">Mucho tiempo y diferentes sucesos han pasado desde la primera aparición de este personaje en el pueblo. Siendo el año 2016...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange4}>{cuento4?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento4 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Sucesos y Apariciones recientes</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>Mucho tiempo y diferentes sucesos han pasado desde la primera aparición de este personaje en el pueblo. Siendo el año 2016, es que nuevamente corrió entre los pobladores una historia, una nueva aparición de la Copaczoca. En entrevista, el profesor Mario Aragón nos relataba acerca un suceso (que veremos a continuación) ocurrido a un grupo de amigos cercanos a él, cuyo relato vivido y a través de sus testimonios recorrió el pueblo en aquel año, por lo que el enigma de la Copaczoca volvió a estar dentro de la oralidad de pueblo.</p>
                                    <br/>
                                    <br/>
                                    <strong>La narración: Profesor Mario Armando Núñez Aragón.</strong>
                                    <p>Resulta ser, que en ese año me encontraba trabajando para ayuntamiento del pueblo, y fue a través del testimonio oral de mis compañeros de trabajo, quienes vivieron y me pusieron al tanto de lo que les aconteció aquella noche.</p>
                                    <p>Eran alrededor de las 10 pm, y ellos se encontraban conversando en el área que ocupa el sitio de taxis, cuando de pronto vieron que un niño de aproximadamente 10 años bajaba por la calle que pasa frente al atrio del templo de San Vicente Ferrer, lo cual se les hizo muy extraño, ya que a tales altas horas de la noche ver a un niño sin compañía provoca cierta duda. A lo que mis compañeros decidieron preguntar.</p>
                                    <span className="manstyle">Señores: </span><span>¿con quién bajas?</span>
                                    <br/>
                                    <span className="kidStyle">Niño: </span><span>Solito</span>
                                    <br/>
                                    <span className="manstyle">Señores: </span><span>¿Del barrio de Santa Cecilia?</span>
                                    <br/>
                                    <span className="kidStyle">Niño: </span><span>Si, aquí cerca (como son chamacos pues lo ven cerca).</span>
                                    <br/>
                                    <span className="manstyle">Señores: </span><span>¿Donde vas?</span>
                                    <br/>
                                    <span className="kidStyle">Niño: </span><span>Bajé a comprar mi taco, es que me dio hambre.</span>
                                    <br/>
                                    <p>Según mis compañeros el niño había bajado desde el barrio santa Cecilia hasta el parque central, donde se encontraban ellos, solamente para comprar unos tacos para su cena, ya que ahí cerca del sitio de taxis, se ponía un puesto de cenaduría.</p>
                                    <p>Sucedió entonces que al chamaco le despacharon la orden para llevar y todo transcurría normal, con la excepción de que, al retornar a su casa, el niño opto por irse por un callejón que atraviesa la parte trasera de los templos de san miguel arcángel y san Vicente Ferrer, una zona con poca iluminación eléctrica. A lo que mis compañeros les pareció extraño que aquel niño hubiera optado por ese camino.</p>
                                    <p>Transcurrido un par de minutos, observaron que el niño regresaba corriendo hacia ellos, muy asustado, nervioso, temblando y como si el color de su piel lo hubiera abandonado. Ante tal escenario, mis compañeros empezaron a preguntarle si algo le había ocurrido, a lo que el niño empezó a relatarles que en cuanto él estaba atravesando aquel callejón, una figura oscura femenina se le apareció en medio de su caminar, y queriendo hacer caso omiso ante tal figura, trato de continuar con su paso, a lo que esta mujer comenzó a tratar de impedírselo colocándose un par de metros delante de él. Entonces el miedo y la confusión empezó a apoderarse de su cuerpo, y segundos después observo que, del cuello de aquella figura, la cabeza se le empezaba a desprender, e inmediatamente caía estrepitosamente al suelo comenzado a rodar hacia él. Mencionó también que, ante tal imagen, su cuerpo se sentía atado y que le fue difícil en un inicio emprender la huida, así que en cuanto las piernas le dieron respuesta, volvió por el mismo camino que apenas acaba de recorrer con la adrenalina hasta el tope y las esperanzas de que alguien le socorriera.</p>
                                    <p>Después de escuchar la historia del niño, en primera instancia dudaban de que algo fuese cierto, por lo que le bombardearon de cuestionamientos acerca de estar seguro de hablar con la verdad o simplemente la imaginación y sugestiones le habían jugado mal. A lo que el infante les respondía de lo muy seguro de la situación que acababa de vivir, agregando la descripción de la cabeza rodante, cuyos ojos eran rojos como la sangre, los cabellos eran largos y negros y la boca no paraba de abrirse y cerrarse como si intentase morder lo que se encontrara.</p>
                                    <p>Entre la duda y la posibilidad de que alguien en verdad necesitaba ayuda en aquel callejón oscuro, mis compañeros llamaron a los policías y explicaron la situación, a lo que decidieron ir junto al niño a lugar de los hechos, aunque el infante sobrepasado por su miedo y llanto se negaba rotundamente en un principio dirigirse de nuevo en aquel lugar, finalmente accedió, ya que, al ver que eran bastantes personas los que lo acompañaban se sintió ahora con más valor.</p>
                                    <p>Una vez arribados al sitio, el infante nuevamente relato a las personas los hechos que le acontecieron, y aunque todos buscaron algún indicio del sucedido no encontraron rastro alguno. Por ende, lo que precedió fue llevar escoltado al niño de vuelta a su casa, allá, la madre que ignoraba todo lo que estaba sucediendo, simplemente hizo caso omiso a todo lo relatado, quizá pensando que se trataba de una mala broma de su hijo, la cual se habría ido más allá de lo pensado.</p>
                                    <p>A los pocos días, bastante gente ya se había enterado de lo sucedido con el niño, y todos mencionaban que sin duda aquella figura aparecida en el callejón se trataba ni más ni menos que de la Copaczoca. Agregado a esto, aconteció también el decaimiento paulatino de la salud del infante, según cuentan, el niño dejo de comer, empezó a ponerse pálido y constantemente a permanecer dormido. Los vecinos le mencionaban a la madre que se trataba de los efectos provocados por el susto que le ocasiono el encuentro con la Copaczoca y que acudiera con un curandero para que “ensalmara” al niño y de esa forma la salud recobraría. Pero la madre se negaba a realizar lo aconsejado, ya que no compartía las creencias de sus vecinos, agregado a que su religión le prohibía acudir a tales remedios. Ante tales respuestas y la preocupación de los vecinos de que aquel inocente infante perdiera la vida, decidían sacarlo a escondidas mientras la madre no se encontraba en casa, de esta manera, los vecinos llevaban al niño a ensalmarse con un curandero, y por lo que según se cuenta, el niño a los pocos días de tratamiento, empezó a recobrar la salud.</p>
                                    <p>De esta manera, la gente del pueblo hasta hace apenas un par de años volvió a saber sobre la Copaczoca, y es así que cosas han pasado y nos parecen extrañas, cosas aparentemente inventadas que quisiéramos no creer, que quisiéramos no fueran verdad y que no nos sucedieran, pero la realidad es que todos estamos a un suceso de divagar entre lo que quisiésemos que fuese ficción y lo que se puede vivir en carne propia.</p>
                                    <div className="contenedorImg">
                                        <a href="#copaczoca2ID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }  
                    <br/>
                    <br/>   
                    </div>
                    {/* Termina cuarto cuento */}

                    {/* Inicia quinto cuento */}
                    <div class="w3-third cardsCuentos izquierda" id="duendeID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav2" src={duende1} alt="ImagenDeduende1"/>
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


                </div>
            </div>
        </div>
      );
    }
  }


/* function CuentosNav(){
    return (
        <div className="">
            <div class="w3-container w3-green">
                <h1>¡Los cuentos más espeluznante!</h1>
                <p>En esta sección encontrarás los cuentos que han nacido en el municipio de Copainala</p>
            </div>

            <div class="w3-row-padding">
                <div class="w3-third">
                    <h1>Historia del weya-weya</h1>
                    <p>Categoria: XXXXX.</p>
                    <p>-Mujer ya regresé. Pero para ese entonces ya habían pasado varios años desde que se había ido.</p>
                    <button className="w3-button w3-round-large w3-black"><Link to="/Weya">Leer más...</Link></button>     
                </div>
            </div>

            <a><Link to="/Momia">Momia</Link></a>
            <a><Link to="/Pantera">Pantera</Link></a>
        </div>
    );
} */

export default CuentosNav;