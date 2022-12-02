<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Let's talk about  my job</em> (Hablemos de mi trabajo)

    .row.mb-lg-5
      .col-12.col-lg-7.order-2.order-lg-1
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
      .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/t3-1.png", alt="alt")
    
    p.text-bold.text-center <em>Job and profession</em> / Profesión y trabajo
    p.mb-5 Se muestra el vocabulario del trabajo que hacen algunas personas, dónde lo hacen y qué herramientas necesitan para realizarlo adecuadamente.
    
    .row.mb-5
      .col-12.col-lg-4.bgr_7.p-4(data-aos="flip-down")
        figure.d-flex.justify-content-center
          img.mb-3.img200(src="@/assets/curso/tema3/t3-2.svg", alt="alt")
        .tarjeta.bg-white.p-2.w-100
          div
            Audio.color-secundario.pst_1(
              :audio="require('@/assets/componentes/audios/24.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            .text-center
              p.mb-0.text-bold.colr_4 <em>I am a pilot.</em>
              p.mb-0.text-bold.colr_4 <em>I work in an airport.</em>
              p.mb-0.text-bold.colr_4 <em>I need a plane to fly passengers from one place to another.</em>
      .col-12.col-lg-4.bgr_8.p-4(data-aos="flip-up")
        figure.d-flex.justify-content-center
          img.mb-3.img200(src="@/assets/curso/tema3/t3-3.svg", alt="alt")
        .tarjeta.bg-white.p-2.w-100
          div
            Audio.color-secundario.pst_1(
              :audio="require('@/assets/componentes/audios/25.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            .text-center
              p.mb-0.text-bold.colr_4 <em>She is a nurse.</em>
              p.mb-0.text-bold.colr_4 <em>She works in a hospital.</em>
              p.mb-0.text-bold.colr_4 <em>She needs medicine to give to her patients.</em>
      .col-12.col-lg-4.bgr_7.p-4(data-aos="flip-down")
        figure.d-flex.justify-content-center
          img.mb-3.img200(src="@/assets/curso/tema3/t3-4.svg", alt="alt")
        .tarjeta.bg-white.p-2.w-100
          div
            Audio.color-secundario.pst_1(
              :audio="require('@/assets/componentes/audios/26.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            .text-center
              p.mb-0.text-bold.colr_4 <em>She is a teacher.</em>
              p.mb-0.text-bold.colr_4 <em>She works in a school.</em>
              p.mb-0.text-bold.colr_4 <em>She needs a board and some markers to teach.</em>
        
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 <em>How I got the job</em> (Cómo me dieron el empleo)
    
    .row.mb-lg-5
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/t3-5.png", alt="alt")
      .col-12.col-lg-7
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo2")(data-aos="flip-up")
    
    span.colr <em>Listen to the job interview to practice and improve your listening skills: </em>  
    span / Escuche la entrevista de trabajo, para practicar y mejorar sus habilidades auditivas:

    .bg_grad-08
      .row.justify-content-center.mt-5(data-aos="zoom-in")
        .col-12.col-lg-10
          figure
            img(src="@/assets/curso/tema3/t3-6.svg", alt="alt")
          .bgr_9.p-4
            p.colr <em><b>Interviewer:</b> Hello, Maria. Thanks for coming to the interview.</em>
            span.colr_4.text-bold Maria: 
            span.colr <em>No problem.</em>
            p.colr.mt-3 <em><b>Interviewer:</b> Well, as you know, the company needs someone to lead the company.</em>
            span.colr_4.text-bold Maria: 
            span.colr <em>Yes, that´s the reason I am here.</em>
            p.colr.mt-3 <em><b>Interviewer:</b> That sounds great. Please tell me what you've been doing over the past four years or so.</em> 
            span.colr_4.text-bold Maria: 
            span.colr <em>Well, in my first job, four years ago, I was working for a small HR services provider, but now I am looking for a little more stability.</em>
            p.colr.mt-3 <em><b>Interviewer:</b> Well, that all sounds good. Can you talk about your qualifications?</em>
            span.colr_4.text-bold Maria: 
            span.colr <em>Yes, I got a diploma two years ago. I am also currently working on a further diploma in psychology, with a specific focus on learning and performance management.</em>
            p.colr.mt-3 <em><b>Interviewer:</b> Very good. Well, it looks like you have the qualifications and experience we're looking for.</em> 
            .row.mt-3  
              .col-12.col-lg-9
                TarjetaAudio.color-secundario.mb-3(
                  :audio="require('@/assets/componentes/audios/28.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-12.col-lg-auto.d-flex.justify-content-center
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Ver traducción 
                  i.fas.fa-language
                  .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      p <b>Entrevistador:</b> Hola, María. Gracias por venir a la entrevista.
      span.colr_4.text-bold Maria: 
      span No hay problema
      p.mt-3 <b>Entrevistador:</b> Bueno, como sabes, la empresa necesita a alguien que dirija la empresa.
      span.colr_4.text-bold Maria: 
      span Sí, por eso estoy aquí.
      p.mt-3 <b>Entrevistador:</b> Eso suena genial. Por favor, dime qué has estado haciendo durante los últimos cuatro años más o menos.
      span.colr_4.text-bold Maria: 
      span Bueno, en mi primer trabajo, hace cuatro años, trabajaba para un pequeño proveedor de servicios de recursos humanos, pero ahora busco un poco más de estabilidad.
      p.mt-3 <b>Entrevistador:</b> Bueno, todo eso suena bien. ¿Puedes hablar de tus calificaciones?
      span.colr_4.text-bold Maria: 
      span.mt-3 Sí, me gradué hace dos años. Actualmente también estoy trabajando en un diplomado adicional en psicología, con un enfoque específico en el aprendizaje y la gestión del desempeño.
      p.mt-3 <b>Entrevistador:</b> Muy bien. Bueno, parece que tienes las calificaciones y la experiencia que estamos buscando.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 <em>My interview</em> (Mi entrevista)
    
    .row.mb-lg-5
      .col-12.col-lg-7.order-2.order-lg-1
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo3")(data-aos="flip-up")
      .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/t3-7.png", alt="alt")
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DBNVA2wv_iA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 <em>My social and family life</em> (Mi vida social y familiar)
    
    .row.mb-lg-5
      .col-12.col-lg-7.order-2.order-lg-1
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo4")(data-aos="flip-up")
      .col-12.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/t3-8.svg", alt="alt")
    
    .row.mb-5
      .col-12.col-lg-5(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema3/t3-9.svg", alt="alt")
      .col-12.col-lg-7.mt-5(data-aos="fade-left")
        .tarjeta.bgr_10.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="1991")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo5")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/37.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-10.svg', alt='Texto que describa la imagen')
            .row(titulo="1995")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo6")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/38.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-11.svg', alt='Texto que describa la imagen')
            .row(titulo="1996")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo7")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/39.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-12.svg', alt='Texto que describa la imagen')
            .row(titulo="2001")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo8")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/40.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-13.svg', alt='Texto que describa la imagen')
            .row(titulo="2006")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo9")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/41.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-14.svg', alt='Texto que describa la imagen')
            .row(titulo="2006")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo10")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/42.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-15.svg', alt='Texto que describa la imagen')
            .row(titulo="2008")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo11")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/43.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-16.svg', alt='Texto que describa la imagen')
            .row(titulo="2012")
              .col-md-8.mb-4.mb-md-0.d-flex.justify-content-center
                div
                  TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo12")(data-aos="flip-up")
                  TarjetaAudio.color-secundario.mb-3(
                    :audio="require('@/assets/componentes/audios/44.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-md-4
                figure.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/t3-17.svg', alt='Texto que describa la imagen')
          
    
    span.colr <em>Here is a conversation in which you will listen to Cesar’s life in the university. Listen and complete:</em> 
    span.colr_2 / Se presenta una conversación en la que escuchará la vida de César en la universidad. Escuche y complete:

    Dialogo.color-primario.mt-5(:dialogo="dialogo")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Life in the university</em> / La vida en la universidad
      template(#descripcion-actividad) Arrastra y suelta el cada una de las palabras en el orden correcto.



        




</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicadorAudio: true,
    modal1: false,
    dialogo1: [
      {
        textoIng:
          '<em>To be able to describe and talk about situations in the job, it is necessary to know not only tenses but also the grammar and vocabulary needed to be able to deliver the idea accurately. When asking for a job, your job will start with applying for the job through a CV and then going to an interview, and finally, signing a contract. <br><br>Bear in mind there are some useful tips you will be able to accomplish easily if you know what to say and how to say it. <br><br>Let’s look at the job some people do, where they do it and what tools they need to accomplish the task well:</em>',
        textoEsp:
          'Para poder describir y hablar sobre situaciones en el trabajo, es necesario conocer no solo los tiempos, sino también la gramática y el vocabulario necesarios para poder transmitir la idea con precisión. Al solicitar un trabajo, comenzará con la solicitud del trabajo a través de un currículum, luego, yendo a una entrevista, y finalmente, firmando un contrato.<br><br>Tenga en cuenta que hay algunos consejos útiles que podrá lograr fácilmente si sabe qué decir y cómo decirlo.<br><br>Veamos el trabajo que hacen algunas personas, dónde lo hacen y qué herramientas necesitan para realizar bien la tarea:',
        audio: require('@/assets/componentes/audios/23.mp3'),
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Most of the  jobs are the result of a big effort since studying the job well, reviewing information about the company, writing a great curriculum vitae, dressing up well and answering the questions accurately. Listen to this interview and identify the main topics. </em>',
        textoEsp:
          'La mayoría de los trabajos son el resultado de un gran esfuerzo, desde estudiar bien el puesto, revisar información de la empresa, redactar un buen currículum vitae, vestirse bien y contestar las preguntas con precisión. Escuche esta entrevista e identifique los temas principales.',
        audio: require('@/assets/componentes/audios/27.mp3'),
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>Following the previous  topics seen, we are going to see about some tips needed to present great interviews taking into account the vocabulary and the grammar seen. Please, check the unknown vocabulary and try to relate it to the complete sentences:</em>',
        textoEsp:
          'Siguiendo con los temas vistos anteriormente, vamos a ver algunos consejos necesarios para presentar buenas entrevistas, teniendo en cuenta el vocabulario y la gramática vistos. Por favor, revise el vocabulario desconocido e intente relacionarlo con las oraciones completas:',
        audio: require('@/assets/componentes/audios/29.mp3'),
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>To talk about  personal and social life, It is important to know and understand some events that are key during the life, example: getting married, having children, graduating, moving, starting a relationship, getting divorced, buying a property, etc.<br><br>Here is the vocabulary that you can work. Read and listen to some personal and social events along with the date:  </em>',
        textoEsp:
          'Para hablar de la vida personal y social, es importante conocer y comprender algunos eventos que son clave durante la vida, ejemplo: casarse, tener hijos, graduarse, mudarse, iniciar una relación, divorciarse, comprar una propiedad, etc.<br><br>Lea algunos ejemplos acerca de eventos sociales y/o familiares con su respectiva fecha:',
        audio: require('@/assets/componentes/audios/30.mp3'),
      },
    ],
    dialogo5: [
      {
        textoIng: '<em>I started to study in 1991.</em>',
        textoEsp: 'Empecé a estudiar en 1991.',
      },
    ],
    dialogo6: [
      {
        textoIng: '<em>I graduated from elementary school in 1995.</em>',
        textoEsp: 'Me gradué de la escuela primaria en 1995.',
      },
    ],
    dialogo7: [
      {
        textoIng: '<em>I went to high school in 1996.</em>',
        textoEsp: 'Fui a la escuela secundaria en 1996.',
      },
    ],
    dialogo8: [
      {
        textoIng: '<em>I graduated from high school in 2001.</em>',
        textoEsp: 'Me gradué de la escuela secundaria en 2001.',
      },
    ],
    dialogo9: [
      {
        textoIng: '<em>I studied my career in the university until 2006. </em>',
        textoEsp: 'Estudié mi carrera en la universidad hasta el 2006.',
      },
    ],
    dialogo10: [
      {
        textoIng: '<em>In 2006, I went to live on my own.</em>',
        textoEsp: 'En 2006, me fui a vivir solo.',
      },
    ],
    dialogo11: [
      {
        textoIng: '<em>In 2008, I got married.</em>',
        textoEsp: 'En 2008, me casé.',
      },
    ],
    dialogo12: [
      {
        textoIng: '<em>In 2012, I had my first baby</em>',
        textoEsp: 'En 2012, tuve mi primer bebé..',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'Karla',
          img: require('@/assets/curso/tema3/t3-18.svg'),
        },
        {
          nombre: 'Rob',
          img: require('@/assets/curso/tema3/t3-19.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Karla',
          textoIng:
            '<em>Do you remember when we</em> *** <em>in the university?</em>',
          textoEsp: '¿Recuerdas cuando nos conocimos en la universidad?',
          audio: require('@/assets/componentes/audios/32.mp3'),
          palabra: '<em>met</em>',
        },
        {
          personaje: 'Rob',
          textoIng: '<em>Yes, I do. I remember we met in German</em> ***.',
          textoEsp: 'Sí. Recuerdo que nos conocimos en la clase de alemán.',
          audio: require('@/assets/componentes/audios/33.mp3'),
          palabra: '<em>class</em>',
        },
        {
          personaje: 'Karla',
          textoIng: '*** <em>it in Lengua Materna?</em>',
          textoEsp: '¿No fue en Lengua Materna?',
          audio: require('@/assets/componentes/audios/34.mp3'),
          palabra: '<em>Wasn’t</em>',
        },
        {
          personaje: 'Rob',
          textoIng:
            '<em>No, It wasn’t. Do you remember we</em> *** <em>a friend studying German with us? Her name was Carolina.</em>',
          textoEsp:
            'No, no lo fue. ¿Recuerdas que teníamos una amiga que estudiaba alemán con nosotros? Su nombre era Carolina.',
          audio: require('@/assets/componentes/audios/35.mp3'),
          palabra: '<em>had</em>',
        },
        {
          personaje: 'Karla',
          textoIng: '<em>Yes, I</em> ***. <em>Carolina Acevedo!</em>',
          textoEsp: 'Sí. ¡Carolina Acevedo!',
          audio: require('@/assets/componentes/audios/36.mp3'),
          palabra: '<em>do</em>',
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
