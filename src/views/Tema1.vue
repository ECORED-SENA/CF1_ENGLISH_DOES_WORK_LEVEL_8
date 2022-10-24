<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Verb tenses</em> (Presente, pasado simple, presente perfecto, presente perfecto continuo, pasado perfecto)
    
    .row.mb-5
      .col-12.col-lg-5
        figure
          img(src="@/assets/curso/tema1/t1-1.png", alt="alt")
      .col-12.col-lg-7
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
    
    .row.mb-3.justify-content-center  
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span <em>Function and structure of the types of present</em>
        
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead.bgr_1
              tr
                th(colspan='3')(style='width: 40%') <em>VERB TENSE</em>
                th <em>FUNCTION</em>
                th <em>STRUCTURE</em>
                th <em>GRAMMAR</em>
            tbody.bgr_2
              tr
                td(rowspan='4') 
                  Audio.color-secundario.mx-3(
                    :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                td(rowspan='4') <em>Present</em>
                td <em>SIMPLE</em>
                td <em>To express habits/routines.</em>
                td <em>Subject + verb</em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
              tr  
                td <em>CONTINUOUS</em>
                td <em>To express something that somebody is doing now.</em>
                td <em>Subject + am, is, are + verb in ing</em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
              tr  
                td <em>PERFECT</em>
                td <em>To express something somebody has done and can be done again.</em>
                td <em>Subject + have or has + verb of the third column</em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
              tr  
                td <em>PERFECT CONTINUOUS</em>
                td <em>To express something that somebody has been trying to do and it has been difficult or it has taken a long time.</em>
                td <em>Subject + have been or has been and verb in ing</em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Present simple</em>
          p Verbo + <em>(-s / -es)</em>
          p A menudo, se utilizan los adverbios: 
          p.mb-0.colr.text-bold <em>Always</em>
          p.mb-0.colr.text-bold <em>Every day</em>
          p.colr.text-bold <em>Never</em>
          p Utilizamos presente simple para describir acciones que ocurren en el momento presente. 
          p Pasado Presente Futuro
          p.colr.text-bold <em>Example:</em> 
          span.colr.text-bold <em>Marly wants to be here with me.</em> 
          p Marly desea estar aquí conmigo.
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-2.svg", alt="alt")
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Present continuos</em>
          p <em>To be (am/is/are) + ing form</em>
          p A menudo, se utilizan los adverbios: 
          p.mb-0.colr.text-bold <em>Always</em>
          p.colr.text-bold <em>Never</em>
          p Cosas que están ocurriendo en el momento de hablar. 
          p.colr.text-bold <em>Example:</em> 
          span.colr.text-bold <em>I am washing all the dishes.</em> 
          p Estoy lavando todos los platos.
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-3.svg", alt="alt")
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Present perfect</em>
          p <em>Have /has + past participle</em>
          p.mb-0.colr.text-bold <em>Past</em> 
          p.mb-0.colr.text-bold <em>Present</em>
          p.colr.text-bold <em>Future</em>
          p Este tiempo expresa un acontecimiento en el pasado con consecuencias en el presente.
          p A menudo, se utilizan los adverbios:
          .row
            .col-12.col-lg-2
              p.mb-0.colr.text-bold <em>Yet</em>
              p.mb-0.colr.text-bold <em>Still</em>
              p.mb-0.colr.text-bold <em>Already</em>
              p.colr.text-bold <em>Just</em>
            .col-12.col-lg-2
              p.mb-0.colr.text-bold.ms-3 <em>Since</em>
              p.mb-0.colr.text-bold.ms-3 <em>For</em>
              p.mb-0.colr.text-bold.ms-3 <em>Never</em>
              p.colr.text-bold.ms-3 <em>Ever</em>
          p.mb-0.colr.text-bold <em>Example:</em>
          p.mb-0.colr.text-bold <em>I have finished my homework.</em>  
          p Yo he terminado mi tarea.
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-4.svg", alt="alt")
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Present perfect continuos</em>
          p <em>Have / Has + been + ing form</em>
          p Describe acciones iniciadas en el pasado y continuadas hasta el presente. 
          p.colr.text-bold <em>Example:</em> 
          span.colr.text-bold <em>I have been doing my homework for 6 hours.</em> 
          p Yo he estado haciendo mi tarea por 6 horas.
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-5.svg", alt="alt")
    
    span.colr.text-bold The following table mentions the structure of the past simple tense, past continuous, past perfect, and past perfect continuous. 
    | / En la siguiente tabla, se menciona la estructura del tiempo pasado simple, pasado continuo, pasado perfecto y pasado perfecto continuo.

    .row.mt-5.mb-3.justify-content-center  
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span <em>Function and structure of the types of past</em>
        
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead.bgr_1
              tr
                th(colspan='3')(style='width: 40%') <em>VERB TENSE</em>
                th <em>FUNCTION</em>
                th <em>STRUCTURE</em>
                th <em>GRAMMAR</em>
            tbody.bgr_2
              tr
                td(rowspan='4') 
                  Audio.color-secundario.mx-3(
                    :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                td(rowspan='4') <em>Present</em>
                td <em>SIMPLE</em>
                td <em>To express situations that are done.</em>
                td <em>Subject + verb in past</em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
              tr  
                td <em>CONTINUOUS</em>
                td <em>To express something that somebody was doing when that action was interrupted by another one in past.</em>
                td <em>Subject + was, were + verb in ing </em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
              tr  
                td <em>PERFECT</em>
                td <em>To express something somebody had done before another thing</em>
                td <em>Subject + had + verb of the third column</em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
              tr  
                td <em>PERFECT CONTINUOUS</em>
                td <em>To express something that somebody had been trying to do and it was difficult or it has taken a long time.</em>
                td <em>Subject + had been and verb in ing.</em>
                td 
                  a.boton.color-acento-botones.indicador__container(@click="modal8 = true")
                    span Ver gramática
                    i.fas.fa-spell-check
                    .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Past simple</em>
          p Verbo + ed (o verbo irregular)
          p A menudo, se utilizan los adverbios: 
          p.mb-0.colr.text-bold <em>Often</em>
          p.mb-0.colr.text-bold <em>Usually</em>
          p.mb-0.colr.text-bold <em>Always</em>
          p.colr.text-bold <em>Never</em>
          p El pasado simple describe acciones sin especificar un tiempo que ya ha terminado.
          p Pasado Presente Futuro
          p.colr.text-bold <em>Example:</em> 
          span.colr.text-bold <em>I finished my work and went to the beach.</em> 
          p Yo terminé mi trabajo y fui a la playa. 
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-6.svg", alt="alt")
    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Past continuos</em>
          p <em>Was / Were + ing form</em>
          p A menudo, se utilizan el adverbio: 
          p.colr.text-bold <em>While</em>
          p Describe cosas que duraron algún tiempo. 
          p.colr.text-bold <em>Example:</em> 
          span.colr.text-bold <em>I was doing my homework. </em> 
          p Yo estaba haciendo mi tarea
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-7.svg", alt="alt")
    ModalA(:abrir-modal.sync="modal7")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Past perfect</em>
          p <em>Had + past participle</em>
          p.mb-0.colr.text-bold <em>Past</em> 
          p.mb-0.colr.text-bold <em>Present</em>
          p.colr.text-bold <em>Future</em>
          p Este tiempo describe acontecimientos que ocurrieron en medio de otro evento en el pasado o que sucedió en el pasado.
          p A menudo, se utilizan los adverbios:
          .row
            .col-12.col-lg-2
              p.mb-0.colr.text-bold <em>Already</em>
              p.mb-0.colr.text-bold <em>Just</em>
              p.colr.text-bold <em>Still</em>
            .col-12.col-lg-2
              p.mb-0.colr.text-bold.ms-3 <em>Ever</em>
              p.mb-0.colr.text-bold.ms-3 <em>Never</em>
          p.mb-0.colr.text-bold <em>Example:</em>
          p.mb-0.colr.text-bold <em>I had never seen something like that.</em>  
          p Yo nunca había visto algo así. 
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-8.svg", alt="alt")
    ModalA(:abrir-modal.sync="modal8")
      .row.align-items-center
        .col-12.col-lg-6.mb-4.mb-md-0
          p.colr.text-bold <em>Present perfect continuos</em>
          p <em>Had + been + ing form</em>
          p Describe acciones iniciadas en el pasado y que continuaron hasta otro punto en el pasado. 
          p.colr.text-bold <em>Example:</em> 
          span.colr.text-bold <em>I had been doing my homework.</em> 
          p Yo había estado haciendo mi tarea.
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema1/t1-9.svg", alt="alt")
    
    span.colr.text-bold Here we have a video class in which you will see three examples of each one of the tenses looking at the affirmative, negative, and interrogative forms. 
    | / Aquí tenemos una video clase en la que verá tres ejemplos de cada uno de los tiempos, con las formas afirmativa, negativa e interrogativa.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 <em>Reported speech</em> (Reporte de frases)
    
    .row.mb-5
      .col-12.col-lg-2
        figure
          img(src="@/assets/curso/tema1/t1-10.svg", alt="alt")
      .col-12.col-lg-10
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo2")(data-aos="flip-up")
    
    .bg_grad-02
      .titulo-sexto.color-primario
          h5 Tabla 3
          span <em>Changing the tense in reported speech</em>
      .row.mb-3
        .col-12.col-lg-7.position-relative
          figure
            img(src="@/assets/curso/tema1/t1-11.svg", alt="alt")
          Audio.color-secundario.mx-3.pst(
            :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorAudio")
          .tabla-a.color-acento-botones.mb-5 
            table.text-center
              thead.bgr_1
                tr
                  th(colspan='2') <em>Change of the tense in reported speech</em>
                tr
                  th <em>Original verb tense</em>
                  th <em>In reported speech</em>
              tbody.bgr_2
                tr
                  td <em>Simple past</em>
                  td <em>Past perfect</em>
                tr  
                  td <em>Past continuous</em>
                  td <em>Past perfect continuous</em>
                tr  
                  td <em>Past perfect</em>
                  td <em>Past perfect</em>
                tr  
                  td <em>Past perfect continuous</em>
                  td <em>Past perfect continuous</em>
                tr  
                  td <em>Present simple</em>
                  td <em>Past simple</em>
                tr  
                  td <em>Present continuous</em>
                  td <em>Past continuous</em>
                tr  
                  td <em>Present perfect</em>
                  td <em>Past perfect</em>
                tr  
                  td <em>Present perfect continuous</em>
                  td <em>Past perfect continuous</em>
                tr  
                  td <em>Future with will</em>
                  td <em>Would</em>
                tr  
                  td <em>Future with going to</em>
                  td <em>Was/were going to</em>
        .col-12.col-lg-5
          figure
            img(src="@/assets/curso/tema1/t1-12.svg", alt="alt")
      
      span.colr <em>Now, please read and listen the diary Eliana writes and identify the reported speech in it.</em> 
      span / Ahora, lea y escuche el diario que escribe Eliana e identifique el estilo indirecto en él .

      .bg_grad-03
        .row.mt-5
          .col-12.col-lg-5
            figure
              img(src="@/assets/curso/tema1/t1-13.png", alt="alt")
          .col-12.col-lg-5
            div.p-4
              p.mt-3.text-bold <em>Dear Diary,</em> 
              p.mb-5 <em>Today was the day of my life, to start with, my teacher’s daughter <b>told me she was doing great</b> in school; then, my husband <b>told me we would</b> go to Florida in December; and finally, <b>my trainer told me I had done</b> a great job! I am so happy I gave my best!</em>
              TarjetaAudio.color-secundario.mb-3(
                :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-2
            figure
              img(src="@/assets/curso/tema1/t1-14.svg", alt="alt")
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Verbos regulares e irregulares
    
    .row.mb-5
      .col-12.col-lg-6
        figure
          img(src="@/assets/curso/tema1/t1-15.svg", alt="alt")
      .col-12.col-lg-6
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo3")(data-aos="flip-up")
    .row.mb-5
      .col-12.col-lg-4.bgr_3
        div.p-4
          Audio.color-secundario.pst_1(
            :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorAudio")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo4")(data-aos="flip-up")
      .col-12.col-lg-4.bgr_4
        div.p-4
          Audio.color-secundario.pst_1(
            :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorAudio")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo5")(data-aos="flip-up")
      .col-12.col-lg-4.bgr_3
        div.p-4
          Audio.color-secundario.pst_1(
            :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorAudio")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo6")(data-aos="flip-up")
    
    .row.mb-5
      .col-12.col-lg-6
        figure
          img(src="@/assets/curso/tema1/t1-16.png", alt="alt")
      .col-12.col-lg-6
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo7")(data-aos="flip-up")
    
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 <em>Passive voice</em> (Voz pasiva) 

    .row.mb-5
      .col-12.col-lg-6
        TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo8")(data-aos="flip-up") 
      .col-12.col-lg-6
        figure
          img(src="@/assets/curso/tema1/t1-17.png", alt="alt")
    
    .row.mb-5
      .col-12.col-lg-4.bgr_3
        div.p-4
          Audio.color-secundario.pst_1(
            :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorAudio")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo9")(data-aos="flip-up")
      .col-12.col-lg-4.bgr_4
        div.p-4
          Audio.color-secundario.pst_1(
            :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorAudio")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo10")(data-aos="flip-up")
      .col-12.col-lg-4.bgr_3
        div.p-4
          Audio.color-secundario.pst_1(
            :audio="require('@/assets/componentes/audios/Audio_3.mp3')"
            @audio-hover="mostrarIndicadorAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorAudio")
        TraduccionT.color-acento-botones.mb-5(:dialogo="dialogo11")(data-aos="flip-up")

    .bg_grad-04
      .row.mt-5
        .col-12.col-lg-2
          figure.mt-4
            img(src="@/assets/curso/tema1/t1-18.svg", alt="alt")
        .col-12.col-lg-6
          div.p-4
            TraduccionT.color-acento-botones.bgr_5(:dialogo="dialogo12")(data-aos="flip-up")
            TarjetaAudio.color-secundario.mb-3(
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-12.col-lg-4
          figure
            img(src="@/assets/curso/tema1/t1-19.png", alt="alt")
    
    span.colr Now complete the sentences using the right verb form: 
    span / Ahora complete las oraciones usando la forma correcta del verbo:

                  

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicadorAudio: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    dialogo1: [
      {
        textoIng:
          '<em>In the English grammar , four types of present and four types of past are used. Each one of them will be explained in terms of function and structure. <br><br>The following table mentions the structure of the present simple tense, present continuous, present perfect and present perfect continuous.</em>',
        textoEsp:
          'En la gramática inglesa, se enseñan cuatro tipos de presente y cuatro tipos de pasado, por lo tanto, cada uno de ellos va a ser explicado en términos de funcionalidad y estructura. <br><br>En la siguiente tabla, se menciona la estructura de los tiempos presente simple, presente continuo, presente perfecto y presente perfecto continuo.',
        audio: require('@/assets/componentes/audios/Audio_1.mp3'),
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>The reported speech is used to report something somebody has said. The only thing that must be considered is changing the tense.<br><br>In the following image, you will see how you need to change the tense when creating a reported speech:</em>',
        textoEsp:
          'El reported speech se usa para informar algo que alguien ha dicho. Lo único que hay que tener en cuenta es el cambio de tiempo.<br><br>En la siguiente tabla, puede observar cómo se necesita cambiar el tiempo al crear un estilo indirecto:',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>The reg ular verbs are those that just need -ed to be formed in the second and third column. The irregular ones will not follow any pattern. Now, to be able to pronounce the verbs in -ed, we need to pay attention to the end:<br><br>Pronunciation of the regular verbs:</em>',
        textoEsp:
          'Los verbos regulares son aquellos que solo necesitan formar -ed en la segunda y tercera columna. Los irregulares no seguirán ningún patrón. Ahora, para poder pronunciar los verbos en -ed, debemos prestar atención al final.<br><br>Pronunciación de verbos regulares:',
        audio: require('@/assets/componentes/audios/audio-ej.mp3'),
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>First example: <br><br>I needed to get a break.<br>He visited grandma to tell her how much he loved her.<br>I painted the fence.<br><br>In those previous example,s the -ed sounds /Id/</em>',
        textoEsp:
          'Primer ejemplo:<br><br>Necesitaba tomar un descanso.<br>Visitó a la abuela para decirle cuánto la amaba.<br>Pinté la cerca.<br><br>En esos ejemplos anteriores, -ed suena /Id/',
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em>Second example:<br><br>I dreamed about her.<br>We catched a fish.<br><br>In those previous examples. the -ed sounds /d/</em>',
        textoEsp:
          'Segundo ejemplo:<br><br>Soñé con ella.<br>Pescamos un pez.<br><br>En esos ejemplos anteriores, la -ed suena /d/',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>Third example:<br><br>We cooked a meal.<br>He stopped to smoke.<br><br>In those previous examples, the -ed sounds /t/</em>',
        textoEsp:
          'Tercer ejemplo:<br><br>Cocinamos una comida.<br>He dejado de fumar.<br><br>En esos ejemplos anteriores, -ed suena /t/',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em>Let´s pronounce these 5 verbs: <br><br> 1.	Needed   2.	Visited  3.	Painted  4.	Learned  5.	Tended</em>',
        textoEsp:
          'Pronunciemos estos 5 verbos: <br><br> 1.Necesario  2. Visitado  3. Pintado  4. Aprendido  5. Tendido',
        audio: require('@/assets/componentes/audios/Audio_1.mp3'),
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em> It may  be that in previous courses we just worked with active voice, where the subject comes first, and it is really important now, in this passive voice, we will see it is no longer mentioned or relevant. <br><br>Let´s see the examples:</em>',
        textoEsp:
          'Posiblemente, en previos cursos, hemos venido trabajando solo la voz activa, donde nuestro sujeto es importante y se ubica en primer lugar en las oraciones; ahora veamos cómo, en la construcción de la forma pasiva, nuestro sujeto ya no es importante, es nombrado al final o se omite. <br><br>Veamos algunos ejemplos',
        audio: require('@/assets/componentes/audios/Audio_1.mp3'),
      },
    ],
    dialogo9: [
      {
        textoIng:
          '<em>Present<br><br>Gabriel writes Cien años de soledad.<br>Cien años de soledad is written by Gabriel.</em>',
        textoEsp:
          'Presente<br><br>Gabriel escribe Cien años de soledad.<br>Cien años de soledad está escrito por Gabriel.',
      },
    ],
    dialogo10: [
      {
        textoIng:
          '<em>Past<br><br>Gabriel wrote Cien años de soledad.<br>Cien años de soledad was written by Gabriel.</em>',
        textoEsp:
          'Pasado<br><br>Gabriel escribió Cien años de soledad.<br>Cien años de soledad fue escrito por Gabriel.',
      },
    ],
    dialogo11: [
      {
        textoIng:
          '<em>Future<br><br>Gabriel will write Cien años de soledad.<br>Cien años de soledad will be written by Gabriel.</em>',
        textoEsp:
          'Futuro<br><br>Gabriel escribirá Cien años de soledad.<br>Cien años de soledad Será escrita por Gabriel.',
      },
    ],
    dialogo12: [
      {
        textoIng:
          '<em>Cesar: Did you see what happened?<br>Edith: Man, It was crazy!<br>Cesar: I could not believe my eyes when Arturo reacted!<br>Edith: Yeah, but it was understandable, the boss told him he had not worked enough, and we know he has been working like crazy.<br>Cesar: That was nuts!<br>Edith: Yeap, we know the boss is not fair.</em>',
        textoEsp:
          'César: ¿Viste lo que pasó?<br>Edith: Hombre, ¡fue una locura!<br>Cesar: ¡No podía creer lo que veía cuando Arturo reaccionó!<br>Edith: Sí, pero era comprensible, el jefe le dijo que no había trabajado lo suficiente y sabemos que ha estado trabajando como un loco.<br>Cesar: Eso fue una locura!<br>Edith: Sí, sabemos que el jefe no es justo.',
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
