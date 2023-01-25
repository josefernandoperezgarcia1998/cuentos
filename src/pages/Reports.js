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
import duende1 from '../components/img/duende1.jpg';
import mala_mujer from '../components/img/la_mala_mujer.png';
import sombreron from '../components/img/sombreron.jpg';




class Reports extends React.Component{

    state={
      divcontainer:false,
      divcontainer2:false,
      divcontainer3:false,
      divcontainer4:false,
      divcontainer5:false,
      divcontainer6:false,
      divcontainer7:false,
      divcontainer8:false,
      divcontainer9:false,
      divcontainer10:false,
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
      var Handlechange9 = e => {
        this.setState({divcontainer9:!this.state.divcontainer9});
      }
      var Handlechange10 = e => {
        this.setState({divcontainer10:!this.state.divcontainer10});
      }

      const cuento1=this.state.divcontainer;
      const cuento2=this.state.divcontainer2;
      const cuento3=this.state.divcontainer3;
      const cuento4=this.state.divcontainer4;
      const cuento5=this.state.divcontainer5;
      const cuento6=this.state.divcontainer6;
      const cuento7=this.state.divcontainer7;
      const cuento8=this.state.divcontainer8;
      const cuento9=this.state.divcontainer9;
      const cuento10=this.state.divcontainer10;
      
      return(
          
        <div>{/* DIV PADRE DE TODO EL ELEMENTO */}

            <div className="test ">
                <div className="w3-container w3-green tituloprincipal cardColor">
                    <h1>¡Las narrativas más espeluznante!</h1>
                    <p>En esta sección encontrarás los cuentos que han nacido en el municipio de Copainala</p>
                </div>

               {/* Contenedor de todas las cards de los cuentos */}
                <div className="w3-row-padding contenedorCuentosNav">
                    {/* Inicia primer cuento */}
                    <div class="w3-third cardsCuentos derecha espacioCards" id="weyaID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards" src={weyaCard} alt="ImagenDelWeyaWeya"/>
                        <br></br>
                        <small>© Israel Vázquez</small>
                        </div>
                        <h2 className="tituloCuentoCard">El Weya-Weya</h2>
                        <p><strong>Categoria:</strong> NARRATIVA.</p>
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
                                        <br></br>
                                        <small>© Israel Vázquez</small>
                                        <p>Foto de la familia del Weya-Weya</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya" src={fotoweya1} alt="Foto observa trabajo de cigarro"/>
                                        <br></br>
                                        <small>© Israel Vázquez</small>
                                        <p>El Weya-Weya observa el trabajo final del elaborado de cigarro de una de sus hijas.</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya fotoWeyatres" src={fotoweya2} alt="Foto concentración"/>
                                        <br></br>
                                        <small>© Israel Vázquez</small>
                                        <p>El Weya-Weya pone a prueba la concentración y valentía de uno de los novios de sus hijas</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya fotoWeyatres" src={fotoweya3} alt="Foto segundo novio"/>
                                        <br></br>
                                        <small>© Israel Vázquez</small>
                                        <p>El Weya-Weya poniendo a prueba al segundo novio por medio de fuerza bruta</p>
                                        <br/>
                                        <br/>
                                        <img className="fotoWeya fotoWeyatres" src={fotoweya4} alt="Foto permiso novios"/>
                                        <br></br>
                                        <small>© Israel Vázquez</small>
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
                        <br></br>
                        <small>© José Ignacio López López</small>
                        </div>
                        <h2 className="tituloCuentoCard">La Encamisada</h2>
                        <p><strong>Categoria:</strong> NARRATIVA.</p>
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
                                        <br></br>
                                        <small>© Israel Vázquez</small>
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
                        <br></br>
                                        <small>© Chiapas Paralelo</small>
                        </div>
                        <h2 className="tituloCuentoCard">La Copaczoca</h2>
                        <p><strong>Categoria:</strong> NARRATIVA.</p>
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
                        <br></br>
                        <small>© Magdalena Morales</small>
                        </div>
                        <h2 className="tituloCuentoCard">La Copaczoca: Sucesos y Apariciones</h2>
                        <p><strong>Categoria:</strong> NARRATIVA.</p>
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
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav2" src={mala_mujer} alt="ImagenDeduende1"/>
                        <br></br>
                        <small>© EsChiapas</small>
                        </div>
                        <h2 className="tituloCuentoCard">Aparecidos</h2>
                        <p><strong>Categoria:</strong> NARRATIVA.</p>
                        <p className="descripciónCuento">Dentro del municipio y comunidades aledañas, se conocen historias sobre las apariciones de este ser...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange5}>{cuento5?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento5 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia sobre la mala mujer</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>A inicios de los años 90, mi hermano Julio y yo realizábamos recorridos a pie o en bicicleta en el tramo carretero de Copainalá a la Ribera Tierra Blanca. Estábamos más jóvenes y nos gustaba hacer deporte, sobre todo para mantener una buena condición cardiovascular, el camino nos ayudaba mucho, en ese entonces ya se encontraba pavimentado, tenía subidas, bajadas, y muy poca gente manejaba, así que era perfecta para nuestra rutina completa. Además de esto, contábamos con familiares que vivían a línea carretera, y cuando regresábamos a Copainalá, casi siempre pasábamos a refrescarnos en casa de alguno de ellos.</p>
                                    <p>Dentro del municipio y comunidades aledañas, se conocen historias sobre las apariciones de este ser, todas coinciden que sus intenciones no son de las más buenas, y dentro de ellas se destacan ciertas características muy interesantes, como, por ejemplo, el que se diga que este personaje solo se muestra ante personas de sexo masculino. </p>
                                    <p>Hace muchos años atrás, era muy recurrente escuchar que las personas del pueblo mencionaran en forma de advertencia a todos aquellos varones, sobre todo a los que por alguna u otra circunstancia vagaran por la noche solos, el tratar de evitar eso exactamente, ya que no fuera por su desdicha el encontrase con este ente. </p>
                                    <p>La figura que se describe de este ser, es el de una mujer muy hermosa, con los cabellos largos que en ocasiones le cubren el rostro. Cuando se topa con un hombre, la mala mujer, trata de seducirlo para que posteriormente la siga, con la promesa generalmente de tener un encuentro sexual. </p>
                                    <p>Aquellos varones que han logrado escapar de esta aparición, han contado haber visto que este ser no utiliza los pies para desplazarse, si no que flota, al igual que este par de miembros de su cuerpo los tiene al revés. Los que se han aventurado a seguirla hasta el final, han terminado enredados entre matorrales llenos de espinas, pero lo más fantástico por no mencionar terrorífico es que algunos cuentan que llegando al final del recorrido con la mala mujer, este ser se transforma en una enorme serpiente que intenta devorarlos. </p>
                                    <br/>
                                    <br/>
                                    {/* <span className="sucesosFuente">Suceso relatado por el Profesor Mario Armando Núñez Aragón, entrevista personal, marzo del 2018, Copainalá Chiapas.</span> */}
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

                    {/* Inicia sexto cuento */}
                    <div class="w3-third cardsCuentos izquierda" id="sombreronID">
                        <div className="imgsCardsContenedor">
                        <img className="imgsCards encamisadaimgCard fotoCopaczocav2" src={sombreron} alt="ImagenDeduende1"/>
                        <br></br>
                        <small>© Joaquín Miguel Gutierrez</small>
                        </div>
                        <h2 className="tituloCuentoCard">El sombreron</h2>
                        <p><strong>Categoria:</strong> NARRATIVA.</p>
                        <p className="descripciónCuento">En el municipio, mucha gente dice tener alguna historia (suceso), que podría ser tanto personal...</p>
                        <div className="contenedorBoton">
                            <button className="w3-button w3-round-large w3-black boton" onClick={Handlechange6}>{cuento6?'Ocultar':'Ver'}</button>
                        </div>
                        {
                            cuento6 &&( 
                                /* Contenedor padrePadre */
                                <div className="contenidoCuentos">
                                    {/* ContenedorHijos */}
                                    <h2 className="tituloCuentos">Historia sobre el sombrerón</h2>
                                    <div className='audios'>
                                        <audio src={audioweya} controls></audio>
                                    </div>
                                    <p>En el municipio, mucha gente dice tener alguna historia (suceso), que podría ser tanto personal o de tercera persona acerca de un encuentro con este ente. 
                                    Se dice, que el Sombrerón normalmente se le presenta a la gente que desea tener mucho dinero o bien que lo necesita urgentemente. La gente dice que es una figura masculina, a veces se aparece a pie o a caballo, pero siempre se distingue por traer ese gran sombrero que le ha dado su nombre. 
                                    </p>
                                    <p>Aquellos a quienes se les ha manifestado, han contado haber estado solos, ya sea caminando por lugares solitarios o bien en el monte. El Sombrerón es atraído por personas avaras o con urgencia de dinero. Al aparecer en escena, este ser empieza a formar una plática muy amena con la persona, pareciendo al principio tener muy buenas intenciones y que sin ninguna complicación les brindaría su ayuda. </p>
                                    <p>Se dice que, quienes acceden a un trato y posteriormente quedan en un acuerdo con esta aparición, son engañados, ya que a pesar de todo el dinero y abundancia que ciertamente tendrán, nunca podrán gastarlo, ya que, un vacío en su persona además de incrementar su codicia, al final de todos los días se los impedirá. Agregado a este problema oculto, el Sombrerón lanza antes de sellar el trato una advertencia a sus víctimas, la cual dice, que al final de sus días de vida, el alma de la persona pasara por la eternidad como sirviente a este ser. Hay quienes dicen que las almas esclavas son transformadas en bestias de carga, donde el Sombrerón transporta todo el oro buscado a su siguiente victima</p>
                                    <br/>
                                    <br/>
                                    {/* <span className="sucesosFuente">Suceso relatado por el Profesor Mario Armando Núñez Aragón, entrevista personal, marzo del 2018, Copainalá Chiapas.</span> */}
                                    <div className="contenedorImg">
                                        <a href="#sombreronID" className="w3-button w3-round-large w3-black boton">Inicio</a>
                                    </div>
                                </div>
                            )
                        }  
                    <br/>
                    <br/>   
                    </div>
                    {/* Termina sexto cuento */}
                </div>
            </div>
            <footer className="containerFooter test2">
                <p>Hecho con ♥️ por JFPG</p>
            </footer>
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

export default Reports;