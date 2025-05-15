<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Desafíos y barreras en la protección de derechos en entornos familiares y comunitarios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/3.png", data-aos="zoom-in")        
      .col-lg-8
        p(data-aos="fade-down") Imaginemos por un momento una infancia ideal: un entorno donde cada niño y niña crece en un espacio seguro, rodeado de amor y respeto, y con todos sus derechos plenamente garantizados. Sin embargo, la realidad dista mucho de esta imagen, para millones de niños y niñas que enfrentan a diario barreras estructurales como la desigualdad, la pobreza o la exclusión social.
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/4.svg")
            .col-lg
              p.mb-0 Este apartado aborda los principales desafíos que obstaculizan la protección de los derechos en los entornos familiares y comunitarios, examinando sus causas y consecuencias. Además, se presentan estrategias de transformación desde el ámbito educativo y comunitario, con especial énfasis en el rol de los futuros docentes.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Factores que limitan el acceso a derechos
    h3(data-aos="fade-down") ¿Por qué algunos niños acceden plenamente a sus derechos y otros no? 
    p(data-aos="fade-down") Aunque los derechos de la infancia están reconocidos en numerosas leyes y tratados internacionales, en la práctica muchos menores crecen en condiciones que limitan su desarrollo integral y su acceso a oportunidades fundamentales. Los principales factores que restringen el acceso a derechos son: 

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/53.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="2.9%" y="56.9%" numero="+")
                  h5 1. Desigualdad 
                  p La desigualdad social y económica, genera diferencias significativas en el acceso a salud, educación y bienestar. Algunos niños crecen con recursos que potencian su desarrollo, mientras otros enfrentan desventajas desde la primera infancia (Aldecoa, Forner y González, 2010). 
                .bg-color-white.box-shadow.p-3(x="79%" y="16.6%" numero="+")
                  h5 2. Pobreza 
                  p La falta de recursos económicos afecta directamente el cumplimiento de los derechos básicos. Los niños pueden sufrir desnutrición, enfermedades evitables, viviendas precarias, e incluso trabajo infantil, comprometiendo su derecho a la educación. 
                .bg-color-white.box-shadow.p-3(x="97.1%" y="57.1%" numero="+")
                  h5 3. Discriminación 
                  p La exclusión por género, etnia, discapacidad, religión o situación económica, reduce las oportunidades de participación y desarrollo. Por ejemplo, niñas excluidas del sistema educativo o niños con discapacidad, sin los apoyos necesarios para integrarse plenamente.

    h3(data-aos="fade-down") Consecuencias sociales y educativas

    .bg-full-width-2.bg-fondo-1.py-4
      .px-4.px-md-5 
        .row.mb-5
          .col-lg-8
            .bg-color-2.p-4.j1.mb-4(data-aos="fade-left")
              p.mb-0 Estos factores no solo impactan a nivel individual, sino que generan un efecto multiplicador en la sociedad; al limitar el desarrollo infantil, se perpetúa un ciclo de pobreza y exclusión difícil de romper. Un país que no protege a su niñez, mina sus posibilidades de desarrollo futuro.
            p(data-aos="fade-down") Desde la educación, es posible implementar estrategias para reducir estas brechas y promover entornos más justos. La escuela se convierte en un espacio clave para:                      
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src="@/assets/curso/temas/54.png", data-aos="zoom-in")   

        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-4
            .bg-color-6.p-3.br-1.shadow-soft(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/55.svg")
                .col-lg
                  h5.mb-2 Promover 
                  p.mb-0 Prácticas inclusivas en el aula.

          .col-lg-4
            .bg-color-6.p-3.br-1.shadow-soft(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/56.svg")
                .col-lg
                  h5.mb-2 Fomentar 
                  p.mb-0 El respeto por la diversidad y la equidad.
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4
            .bg-color-6.p-3.br-1.shadow-soft(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/57.svg")
                .col-lg
                  h5.mb-2 Generar 
                  p.mb-0 Espacios de diálogo y participación infantil.   

          .col-lg-4
            .bg-color-6.p-3.br-1.shadow-soft(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/58.svg")
                .col-lg
                  h5.mb-2 Articularse 
                  p.mb-0 Con la comunidad, para transformar los contextos sociales. 


    h3(data-aos="fade-down") Rol docente frente a estos desafíos
                                           
    p(data-aos="fade-down") La labor de los educadores es esencial en la construcción de entornos protectores. Como agentes de cambio, los docentes pueden influir no solo en la formación de los niños y niñas, sino también en la concientización de las familias y comunidades. 

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 2. 
      span Rol docente frente a estos desafíos

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Acciones educativas claves
            th Objetivos
        tbody
          tr
            td.text-bold Detectar situaciones de vulnerabilidad.
            td Activar redes de apoyo y derivar a servicios especializados. 

          tr
            td.text-bold Promover proyectos de inclusión y equidad.
            td Favorecer la integración de grupos históricamente excluidos. 

          tr
            td.text-bold Capacitarse en derechos de la infancia y diversidad.
            td Atender con sensibilidad y pertinencia diversas realidades. 

          tr
            td.text-bold Vincular escuela-familia-comunidad.
            td Crear una red solidaria que apoye al niño o niña.

    h3(data-aos="fade-down") Reflexión final

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/59.png", data-aos="zoom-in")        
      .col-lg-8
        .bg-color-3.p-4.j1.mb-4(data-aos="fade-left")
          p La pregunta es inevitable:

          h5 ¿Qué podemos hacer desde la docencia para minimizar el impacto de estos factores? 

          h5.mb-0 ¿Cómo se construyen entornos educativos que garanticen equidad e inclusión?

        p(data-aos="fade-down") La respuesta comienza con una mirada crítica y empática, y se concreta a través de acciones pedagógicas conscientes, compromiso social y alianzas comunitarias. La educación tiene el poder de romper ciclos de exclusión y de construir una sociedad donde cada niño y niña ejerza sus derechos, en igualdad de condiciones.


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Violencias en el entorno familiar y comunitario: estrategias de prevención y denuncia
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            h5(data-aos="fade-down") ¿Cómo impacta la violencia en la infancia?

            p.mb-0(data-aos="fade-up") A pesar de los avances normativos, la violencia sigue siendo una realidad alarmante en muchos hogares y comunidades, afectando profundamente el bienestar emocional, social y cognitivo de los niños y niñas. Este fenómeno vulnera derechos fundamentales y limita el acceso a una vida digna.
            
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/60.png', alt='')  


    h3(data-aos="fade-down") Formas de violencia infantil 
    p(data-aos="fade-down") La violencia no se reduce al maltrato físico. Existen múltiples manifestaciones: 
    .bg-full-width-4.bg-fondo-3(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img.img-a.img-t(src='@/assets/curso/temas/61.png', alt='')                        
          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/62.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Física
                p Agresiones que causan daño corporal.  

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/63.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Psicológica
                p Humillaciones, amenazas, desprecio o aislamiento emocional. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/64.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Sexual 
                p Cualquier forma de abuso o explotación sexual. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/65.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Negligencia 
                p Falta de atención a necesidades básicas de cuidado y protección. 

              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/66.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Explotación infantil
                p Trabajo forzado o uso del niño en actividades ilícitas.                                                                 

        .bg-full-width.bg-color-3
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img.img-a.img-t(src="@/assets/curso/temas/2.svg")
              .col-lg
                p.mb-0 Estas prácticas muchas veces se normalizan en el hogar o la comunidad, bajo la justificación de la "disciplina tradicional" o como parte de ciertas culturas, lo cual perpetúa el ciclo de violencia (Benavides y León, 2013).  

    h3(data-aos="fade-down") Consecuencias en la infancia
    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            p(data-aos="fade-right") El entorno que debería ofrecer seguridad, el hogar, se convierte en un espacio de miedo, inseguridad y sufrimiento emocional. La violencia tiene múltiples consecuencias:
            ul.lista-ul--color.mb-0(data-aos="fade-left")
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Baja autoestima.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Problemas de socialización.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Ansiedad y depresión.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Bajo rendimiento escolar.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Vulnerabilidad frente a la explotación o el reclutamiento forzado.           
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/67.png', alt='')  

    h3(data-aos="fade-down") Estrategias de prevención y denuncia
    p(data-aos="fade-down") Frente a esta problemática, la prevención y la denuncia efectiva, son esenciales. La educación y la comunidad cumplen un rol clave en ambos aspectos.


    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/68.png", alt="").mb-4.mb-lg-0     
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Educación en valores")
            p Fomentar el respeto, la empatía y la regulación emocional, desde edades tempranas.

          .div(titulo="Fortalecimiento de habilidades parentales")
            p Promover la crianza positiva basada en el buen trato y el diálogo.
          .div(titulo="Formación docente")
            p Capacitar en detección temprana de signos de violencia y rutas de atención.

          .div(titulo="Resolución pacífica de conflictos")
            p Incluir en el currículo escolar, prácticas de convivencia no violenta y comunicación asertiva.       


    .row.align-items-start.mb-5
      .col-lg-8.mb-4.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Acceso a canales seguros para expresar maltrato")
            p Garantizar confidencialidad y confianza en los niños y las niñas.

          .div(titulo="Espacios escolares protectores")
            p Establecer protocolos claros y personal capacitado para actuar ante situaciones de riesgo.

          .div(titulo="Fortalecimiento institucional")
            p Asegurar que las denuncias sean atendidas con prontitud y se brinde acompañamiento psicológico y legal.

          .div(titulo="Fomento comunitario de la cultura de la denuncia")
            p Sensibilizar a la población sobre su rol en la protección infantil.
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/69.png", alt="") 

    h3(data-aos="fade-down") Reflexión 
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/70.png', alt='')             
        .col-lg
          .p-4
            h5(data-aos="fade-down") ¿Cómo puede la educación contribuir a erradicar la violencia infantil?

            p.mb-0(data-aos="fade-up") La respuesta está en transformar los entornos educativos en espacios protectores. Docentes, familias y comunidades deben articularse, para crear una red de protección efectiva, que respete y garantice los derechos de cada niño y cada niña.


    h3(data-aos="fade-down") Programas de apoyo y acompañamiento, a familias en situación de vulnerabilidad             
    h5(data-aos="fade-down") ¿Cómo influyen las condiciones de vida familiar en el desarrollo infantil?           
    p(data-aos="fade-down") La infancia es una etapa crucial para el bienestar emocional, social y cognitivo, donde el entorno familiar desempeña un papel determinante. Sin embargo, múltiples factores pueden comprometer esta estabilidad, limitando las oportunidades de los niños y las niñas, para crecer en un ambiente seguro, afectuoso y estimulante. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p(data-aos="fade-left").mb-4 A continuación, se aborda cómo el estado emocional de los estudiantes influye directamente en su capacidad para concentrarse y aprender.
        
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Programas de apoyo familiar: fortaleciendo entornos protectores para la infancia"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )
      .col-lg-6.p-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/71.png", data-aos="zoom-in")


    h3(data-aos="fade-down") El papel de la comunidad educativa
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los docentes y profesionales de la educación, por su cercanía con la infancia, pueden identificar signos de vulnerabilidad y canalizar apoyos a través de instituciones de protección. Desde el aula, es posible fomentar valores de equidad, respeto e inclusión, y contribuir así a la construcción de una sociedad más justa y solidaria.
            
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/72.png', alt='') 

    h3(data-aos="fade-down") Reflexión final 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/73.png", data-aos="zoom-in")        
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/74.svg")
            .col-lg
              p.mb-0 La garantía de los derechos de niños y niñas, no puede recaer únicamente sobre las familias. Se requiere un esfuerzo conjunto del Estado, las instituciones educativas, las organizaciones sociales y la comunidad. La implementación de estos programas no solo mejora la calidad de vida infantil, sino que también sienta las bases para una sociedad más equitativa y con mayores oportunidades para todos.    

        h5(data-aos="fade-down") ¿Cómo se puede contribuir desde la educación y el rol docente, para fortalecer estas iniciativas y generar un impacto real en la vida de los niños y las niñas?

        p(data-aos="fade-down") La respuesta se encuentra en la sensibilización, el compromiso y la acción conjunta, para asegurar que cada niño y cada niña crezca en un entorno que le brinde bienestar, protección y un futuro mejor.                       

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Estrategias para fortalecer la educación en derechos en la comunidad
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Estrategias para fortalecer la educación en derechos en la comunidad, donde se aborda cómo la educación en derechos, puede convertirse en una experiencia transformadora para la infancia desde el hogar, la escuela y la comunidad. 
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong>Estrategias para fortalecer la educación en derechos en la comunidad
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/75.png', alt='') 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/196610 " target="_blank" rel="noopener noreferrer") Traver Martí, J. A. (Coord.) & Lozano, M. (Coord.). (2021). La escuela incluida: redes comunitarias para el cambio educativo. Editorial UOC. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/86696" target="_blank" rel="noopener noreferrer") Gaspar da Silva, F. D. S. (2015). La protección jurídica de los niños en conflicto con la Ley Penal en la República de Angola. Editorial Universitaria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?pid=S0121-86972023000100064&script=sci_arttext" target="_blank" rel="noopener noreferrer") Tobar Salazar, S. & Estrada Jaramillo, L. (2024). Derechos a la seguridad social reconocidos en la jurisprudencia a los hijos de crianza en Colombia. Revista de Derecho, (59), 64-80.     

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://colombia.iom.int/es/news/traves-de-las-iniciativas-saludables-las-redes-comunitarias-promueven-los-derechos-sexuales-y-reproductivos" target="_blank" rel="noopener noreferrer") OIM Colombia. (2022). A través de las Iniciativas Saludables las Redes Comunitarias promueven los derechos sexuales y reproductivos.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.savethechildren.es/actualidad/analisis-situacion-barreras-derecho-participacion" target="_blank" rel="noopener noreferrer") Save the Children. (s.f.). Análisis de la situación y las barreras para ejercer el derecho de participación de niños, niñas y adolescentes. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://redescuelas.es.amnesty.org/blog/historia/articulo/educacion-en-derechos-humanos-todo-lo-que-necesitas-saber-1/" target="_blank" rel="noopener noreferrer") Amnistía Internacional. (2022). Educación en derechos humanos: todo lo que necesitas saber. Red Educativa por los derechos humanos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4l7s8G1Q-XQ" target="_blank" rel="noopener noreferrer") Compartir Palabra Maestra. (2019). ¿Qué es el Derecho a la Educación? | #PalabraMaestra.    
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=TE9W0zqsmdU" target="_blank" rel="noopener noreferrer") INTEF. (2024). Educación en derechos de la infancia y ciudadanía global.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=J15opZdnxhk" target="_blank" rel="noopener noreferrer") ILCEtv. (2021). Educación inicial NN en migración: reducir desigualdades desde desarrollo infantil temprano.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema:
          'Fomento de los derechos del niño y la niña en la familia y las comunidades',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el papel fundamental de la familia en la promoción de los derechos de la infancia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Proveer únicamente las necesidades básicas de los niños y las niñas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Establecer normas estrictas sin permitir la participación infantil.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Fomentar un ambiente de respeto, participación y crianza con enfoque de derechos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Delegar la responsabilidad de la educación en derechos exclusivamente a la escuela.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes estrategias es clave para garantizar un enfoque de derechos en la escuela?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Priorizar la enseñanza de materias tradicionales sin incluir la educación en derechos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Implementar metodologías participativas y crear espacios de expresión infantil.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Aplicar disciplina autoritaria para mantener el orden en el aula.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Limitar la participación de las familias en el proceso educativo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cómo puede la comunidad contribuir a la promoción y garantía de los derechos de los niños y las niñas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Creando redes de apoyo, espacios seguros y fomentando la participación infantil.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Dejando que cada familia se encargue de la educación en derechos sin intervención comunitaria.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Ofreciendo actividades solo para adultos, sin considerar la inclusión infantil.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Manteniendo la infancia fuera de las decisiones comunitarias.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes principios es esencial en la crianza basada en derechos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El castigo físico para corregir la conducta infantil.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La imposición de reglas sin permitir el diálogo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La promoción de la autonomía, el respeto y la disciplina positiva.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'La restricción de la participación infantil en decisiones familiares.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué enfoque debe tener la educación en derechos dentro del currículo escolar?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Ser un tema aislado y tratado solo en asignaturas específicas.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Integrarse de manera transversal en todas las áreas del aprendizaje.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Abordarse únicamente cuando surjan conflictos o problemas de convivencia.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Limitarse a actividades extracurriculares sin impacto en el currículo formal. ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
