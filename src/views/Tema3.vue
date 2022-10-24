<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Let's talk about  my job</em> (Hablemos de mi trabajo)

    .row.mb-5
      .col-12.col-lg-7
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
      .col-12.col-lg-5
        figure
          img(src="@/assets/curso/tema3/t3-1.png", alt="alt")
    
    p.text-bold.text-center <em>Job and profession</em> / Profesión y trabajo
    p.mb-5 Texto descriptivo	Se muestra el vocabulario del trabajo que hacen algunas personas, dónde lo hacen y qué herramientas necesitan para realizarlo adecuadamente.
    
    .row.mb-5
      .col-12.col-lg-4.bgr_7.p-4
        figure.d-flex.justify-content-center
          img.mb-3.img200(src="@/assets/curso/tema3/t3-2.svg", alt="alt")
        .tarjeta.bg-white.p-2.w-100
          div
            Audio.color-secundario.pst_1(
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            .text-center
              p.mb-0.text-bold.colr_4 <em>I am a pilot.</em>
              p.mb-0.text-bold.colr_4 <em>I work in an airport.</em>
              p.mb-0.text-bold.colr_4 <em>I need a plane to fly passengers from one place to another.</em>
      .col-12.col-lg-4.bgr_8.p-4
        figure.d-flex.justify-content-center
          img.mb-3.img200(src="@/assets/curso/tema3/t3-3.svg", alt="alt")
        .tarjeta.bg-white.p-2.w-100
          div
            Audio.color-secundario.pst_1(
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorAudio")
            .text-center
              p.mb-0.text-bold.colr_4 <em>She is a nurse.</em>
              p.mb-0.text-bold.colr_4 <em>She works in a hospital.</em>
              p.mb-0.text-bold.colr_4 <em>She needs medicine to give to her patients.</em>
      .col-12.col-lg-4.bgr_7.p-4
        figure.d-flex.justify-content-center
          img.mb-3.img200(src="@/assets/curso/tema3/t3-4.svg", alt="alt")
        .tarjeta.bg-white.p-2.w-100
          div
            Audio.color-secundario.pst_1(
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
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
    
    .row.mb-5
      .col-12.col-lg-5
        figure
          img(src="@/assets/curso/tema3/t3-5.png", alt="alt")
      .col-12.col-lg-7
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo2")(data-aos="flip-up")
    
    span.colr Listen to the job interview to practice and improve your listening skills: 
    span / Escuche la entrevista de trabajo, para practicar y mejorar sus habilidades auditivas:

    .bg_grad-08
      .row.justify-content-center
        .col-12.col-lg-10
          figure
            img(src="@/assets/curso/tema3/t3-6.svg", alt="alt")
          .bgr_9.p-4
            p.colr <em>Interviewer: Hello, Maria. Thanks for coming to the interview.</em>
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
            .row  
              .col-12.col-lg-9
                TarjetaAudio.color-secundario.mb-3(
                  :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-12.col-lg-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Ver traducción 
                  i.fas.fa-language
                  .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      p <b>Entrevistador:</b> Bueno, como sabes, la empresa necesita a alguien que dirija la empresa.
      span.colr_4.text-bold Maria: 
      span Sí, por eso estoy aquí.
      p.mt-3 <b>Entrevistador:</b> Eso suena genial. Por favor, dime qué has estado haciendo durante los últimos cuatro años más o menos.
      span.colr_4.text-bold Maria: 
      span Bueno, en mi primer trabajo, hace cuatro años, trabajaba para un pequeño proveedor de servicios de recursos humanos, pero ahora busco un poco más de estabilidad.
      p.mt-3 <b>Entrevistador:</b> Bueno, todo eso suena bien. ¿Puedes hablar de tus calificaciones?
      span.colr_4.text-bold Maria: 
      span.mt-3 Sí, me gradué hace dos años. Actualmente también estoy trabajando en un diplomado adicional en psicología, con un enfoque específico en el aprendizaje y la gestión del desempeño.
      p.mt-3 <b>Entrevistador:</b> Muy bien. Bueno, parece que tienes las calificaciones y la experiencia que estamos buscando.
        




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
          '<em>To be able to describe and talk about situations in the job, it is necessary to know not only tenses but also the grammar and vocabulary needed to be able to deliver the idea accurately. When asking for a job, your job will start with applying for the job through a CV and then going to an interview, and finally, signing a contract. <br><br>Bear in mind there are some useful tips you will be able to accomplish easily if you know what to say and how to say it. <br><br>Let´s look at the job some people do, where they do it and what tools they need to accomplish the task well:</em>',
        textoEsp:
          'Para poder describir y hablar sobre situaciones en el trabajo, es necesario conocer no solo los tiempos, sino también la gramática y el vocabulario necesarios para poder transmitir la idea con precisión. Al solicitar un trabajo, comenzará con la solicitud del trabajo a través de un currículum, luego, yendo a una entrevista, y finalmente, firmando un contrato.<br><br>Tenga en cuenta que hay algunos consejos útiles que podrá lograr fácilmente si sabe qué decir y cómo decirlo.<br><br>Veamos el trabajo que hacen algunas personas, dónde lo hacen y qué herramientas necesitan para realizar bien la tarea:',
        audio: require('@/assets/componentes/audios/audio-ej.mp3'),
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>Most of the  jobs are the result of a big effort since studying the job well, reviewing information about the company, writing a great curriculum vitae, dressing up well and answering the questions accurately. Listen to this interview and identify the main topics. </em>',
        textoEsp:
          'La mayoría de los trabajos son el resultado de un gran esfuerzo, desde estudiar bien el puesto, revisar información de la empresa, redactar un buen currículum vitae, vestirse bien y contestar las preguntas con precisión. Escuche esta entrevista e identifique los temas principales.',
        audio: require('@/assets/componentes/audios/audio-ej.mp3'),
      },
    ],
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
