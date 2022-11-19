<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.bgr_9.p-4
      .col-xl-4.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/sintesis/img1.png", alt="alt")
      .col-xl-8
        p <em>Up to this point , we have been able to review the eleven verb tenses, that are present, present simple, present continuous, present perfect, present perfect continuous, past simple, past continuous, past perfect and past perfect continuous, future with “will”, “going to” and “-ing”. We have also worked with reporting phrases, regular and irregular verbs, phrase verbs and passive voice. Let's remember the advice received to manage employment, social and family life, among others.</em>
        p.mb-o.colr_2 Hasta este punto, hemos podido repasar los once tiempos verbales, que son presente, presente simple, presente continuo, presente perfecto, presente perfecto continuo, pasado simple, pasado continuo, pasado perfecto y pasado perfecto continuo, futuro con “will”, “going to” e “-ing”. También hemos trabajado con reporte de frases, verbos regulares e irregulares, verbos frase y voz pasiva. Recordemos los consejos recibidos para manejar temas de empleo, vida social y familiar, entre otros.

    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
