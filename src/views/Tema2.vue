<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Phrasal verbs</em> (Verbos frase)

    .bg_grad-05
      .row.mb-5
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema2/t2-1.png", alt="alt")
        .col-12.col-lg-6
          TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo1")(data-aos="flip-up")
    
      .row.bgr_6.p-4
        p.text-center.colr <em>Phrasal verbs</em> 
        p.mb-5 <em>Phrasal verbs</em> son la combinación de un verbo ya conocido con una o más palabras que eventualmente cambian su significado.
        SlyderF.slyder-arrows.mb-5.justify-content-center(columnas="col-lg-4")(data-aos="fade-left")
          .p-2.d-flex.align-items-end.pst_8.pst_4(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-2.png')})`}" style='height: 347px')
            .tarjeta.bg-white.p-2.w-100
              div
                Audio.color-secundario.pst_1(
                  :audio="require('@/assets/componentes/audios/17.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.mb-0.text-bold.text-center.colr <em>come in</em>
                p.mb-0.colr_2.text-center (Entrar)
                p.mb-0.text-center.text-bold.colr_4 <em>The man came in when the woman told him to.</em>
          .p-2.d-flex.align-items-end.pst_8.pst_4(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-3.png')})`}" style='height: 347px')
            .tarjeta.bg-white.p-2.w-100
              div
                Audio.color-secundario.pst_1(
                  :audio="require('@/assets/componentes/audios/18.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.mb-0.text-bold.text-center.colr <em>get in</em>
                p.mb-0.colr_2.text-center (Ingresar)
                p.mb-0.text-center.text-bold.colr_4 <em>The man got in with no problem.</em>
          .p-2.d-flex.align-items-end.pst_8.pst_4(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-4.png')})`}" style='height: 347px')
            .tarjeta.bg-white.p-2.w-100
              div
                Audio.color-secundario.pst_1(
                  :audio="require('@/assets/componentes/audios/19.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.mb-0.text-bold.text-center.colr <em>get out</em>
                p.mb-0.colr_2.text-center (Salir)
                p.mb-0.text-center.text-bold.colr_4 <em>He got out to think.</em>
          .p-2.d-flex.align-items-end.pst_8.pst_4(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-5.png')})`}" style='height: 347px')
            .tarjeta.bg-white.p-2.w-100
              div
                Audio.color-secundario.pst_1(
                  :audio="require('@/assets/componentes/audios/20.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.mb-0.text-bold.text-center.colr <em>pick up</em>
                p.mb-0.colr_2.text-center (Levantar)
                p.mb-0.text-center.text-bold.colr_4 <em>He picks up the trash.</em>
          .p-2.d-flex.align-items-end.pst_8.pst_4(:style="{'background-image': `url(${require('@/assets/curso/tema2/t2-6.png')})`}" style='height: 347px')
            .tarjeta.bg-white.p-2.w-100
              div
                Audio.color-secundario.pst_1(
                  :audio="require('@/assets/componentes/audios/21.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.mb-0.text-bold.text-center.colr <em>put down</em>
                p.mb-0.colr_2.text-center (Soltar)
                p.mb-0.text-center.text-bold.colr_4 <em>She puts down the sand.</em>
    
    .bg_grad-06
      .row.mb-5
        .col-12.col-lg-6
          TraduccionAudio.color-secundario.mb-5(:dialogo="dialogo2")(data-aos="flip-up")
        .col-12.col-lg-6
          figure
            img(src="@/assets/curso/tema2/t2-7.png", alt="alt")
      
      .bg_grad-07
        .row.d-flex.justify-content-center
          .col-12.col-lg-3
            figure
              img(src="@/assets/curso/tema2/t2-8.png", alt="alt")
          .col-12.col-lg-6
            TraduccionT.color-acento-botones.mt-5(:dialogo="dialogo3")(data-aos="flip-up")

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionAudio,
    TraduccionT,
  },
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicadorAudio: true,
    dialogo1: [
      {
        textoIng:
          '<em>Phrasal  verbs are the combination of an already known verb with one or more words that eventually change its meaning. For instance, using them makes the speech a little bit more elegant and it shows the learner or speaker knows the language well. Let´s see some examples of phrasal verbs along with their pictures. To be able to learn them well, make sure you use them in context in your real life:</em>',
        textoEsp:
          'Phrasal verbs son la combinación de un verbo ya conocido con una o más palabras que eventualmente cambian su significado. Por ejemplo, usarlos hace que el discurso sea un poco más elegante y demuestra que el alumno o hablante conoce bien el idioma. Veamos algunos ejemplos de phrasal verbs junto con sus imágenes. Para poder aprenderlos bien, asegúrese de usarlos en contexto en su vida real:',
        audio: require('@/assets/componentes/audios/16.mp3'),
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em><b>Pronunciation:</b> now let’s read and pronounce / Pronunciación: ahora leamos y pronunciemos<br><br>The idea is having a coffee before you leave, please come in.<br>We are driving towards Melgar and we are running late, please get in.<br>I am mopping the floor, so you and your dog need to get out.<br>He is picking up his trash on his own! I am so proud of him!<br>The cat is not happy with you holding him.</em>',
        textoEsp:
          'La idea es tomar un café antes de irte, pasa por favor.<br><br>Estamos conduciendo hacia Melgar y estamos retrasados, por favor súbanse<br>Estoy trapeando el piso, así que usted y su perro necesitan salir.<br>¡Él está recogiendo su basura por su cuenta! ¡Estoy muy orgulloso de él!<br>El gato no está contento contigo sosteniéndolo.',
        audio: require('@/assets/componentes/audios/22.mp3'),
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>For practicing "speaking", remember to use digital tools from your phone or by web, like: <br><br>Record voice <br>Voice to text<br><br><a href="https://vocaroo.com/"> https://vocaroo.com/  <a href="https://online-voice-recorder.com/es/">or  https://online-voice-recorder.com/es/<br><a href="https://dictation.io/speech">https://dictation.io/speech <a href="https://speechnotes.co/es/"> or https://speechnotes.co/es/</em>',
        textoEsp:
          'Para practicar "hablar inglés", recuerde usar herramientas digitales desde su celular o por web, como:<br><br>Grabador de voz<br>Texto a voz<br><br><a href="https://vocaroo.com/"> https://vocaroo.com/  <a href="https://online-voice-recorder.com/es/">ó  https://online-voice-recorder.com/es/<br><a href="https://dictation.io/speech">https://dictation.io/speech <a href="https://speechnotes.co/es/"> ó https://speechnotes.co/es/',
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
