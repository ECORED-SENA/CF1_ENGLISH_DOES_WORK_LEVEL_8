export default {
  global: {
    componenteFormativo:
      '<em>Once somebody told me</em> <br> Una vez alguien me dijo …',
    descripcionCurso:
      'Este componente va a ser una mezcla de los tiempos vistos anteriormente, por ejemplo, presente simple, presente continuo, presente perfecto, presente perfecto continuo, pasado simple, pasado continuo, pasado perfecto, pasado perfecto continuo, futuro con “will”, futuro con “going to” y futuro con “-ing”.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          '<em>Verb tenses</em> (presente, pasado simple, presente perfecto, presente perfecto continuo, pasado perfecto)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Reported speech</em> (Reporte de frases)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Verbos regulares e irregulares',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Passive voice (Voz pasiva)',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Phrasal verbs</em> (Verbos frase)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Let’s talk about my job</em> (Hablemos de mi trabajo)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>How I got the job</em> (Cómo me dieron el empleo)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>My interview</em> (Mi entrevista)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              '<em>My social and family life</em> (Mi vida social y familiar)',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        '<em>Verb tenses</em> (Presente, pasado simple, presente perfecto, presente perfecto continuo, pasado perfecto)',
      referencia:
        'Biber, D., Johansson, S., Leech, G., Conrad, S. y Finegan, E. (2001). <em>Longman grammar of spoken and written English. Pearson.</em>',
      tipo: 'Artículo',
      link: 'https://doi.org/10.1162/089120101300346831',
    },
    {
      tema:
        '<em>Verb tenses</em> (Presente, pasado simple, presente perfecto, presente perfecto continuo, pasado perfecto)',
      referencia:
        'Caplan, N. (2012). <em>Grammar choices for graduate and professional writers. University of Michigan Press.</em>',
      tipo: 'Artículo',
      link:
        'https://academicguides.waldenu.edu/writingcenter/grammar/verbtenses',
    },
    {
      tema:
        '<em>Verb tenses</em> (Presente, pasado simple, presente perfecto, presente perfecto continuo, pasado perfecto)',
      referencia: 'Michaelis, L. (2021). <em>Tense in English.</em>',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/publication/228045646_Tense_in_English',
    },
    {
      tema: '<em>Reported speech</em> (reporte de frases) ',
      referencia:
        'British Council. (s. f.). <em>Feelings. LearnEnglish Kids.</em>',
      tipo: 'Artículo',
      link:
        'https://learnenglishkids.britishcouncil.org/category/topics/feelings',
    },
    {
      tema: 'Verbos regulares e irregulares',
      referencia:
        '<em>Mind Blooming. (2020). Verbs Part 3: Simple Verb Tenses (Past, Present, and Future Tense) |English For Kids | Mind Blooming</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4Rm9l6y3-WY',
    },
    {
      tema: 'Let’s talk about my job (Hablemos de mi trabajo)',
      referencia:
        'Raynier, L. (2017). <em>How to Get a Job With No Experience</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OF8nx8Pt0tI',
    },
    {
      tema: 'My social and family life',
      referencia:
        '<em>Cambridge University Press. (s. f.). Stages of life. SMART Vocabulary: related words and phrases. Cambridge Dictionary.</em>',
      tipo: 'Artículo',
      link:
        'https://dictionary.cambridge.org/es-LA/topics/time/stages-of-life/',
    },
  ],
  glosario: [
    {
      termino: '<em>Past tense</em> / Tiempo pasado',
      significado:
        'tiempo verbal que hace referencia a acciones que se llevaron a cabo en un momento o tiempo previo al ahora.',
    },
    {
      termino: '<em>Time expressions</em>/ Expresiones de tiempo',
      significado:
        'son expresiones que dan información sobre el tiempo en que sucede algo, y se emplean para hablar del momento en que se realiza una acción.',
    },
    {
      termino: '<em>Verb tenses</em> / tiempos verbales',
      significado:
        'Los tiempos verbales en la escritura son conjuntos de formas verbales que se utilizan para transmitir el momento en que ocurre una acción: pasado, presente o futuro.',
    },
  ],
  referencias: [
    {
      referencia:
        'BarCharts. (2009). <em>English Grammar & Punctuation. QuickStudy Reference Guides.</em>',
    },
    {
      referencia:
        'Coordinación de Universidad Abierta y Educación a Distancia. (s. f.). <em>Past time expressions (yesterday, last week, last night, two years ago).</em> Ambiente Virtual de Idiomas.',
      link:
        'https://avi.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1987/mod_resource/content/17/contenido/index.html',
    },
    {
      referencia:
        'Givón, T. (1993). <em>English Grammar: A Function-based Introduction. John Benjamins Publishing Company.</em>',
    },
    {
      referencia:
        'Prasoon, S. (2015). <em>English Grammar and Usage: Read Swiftly, Speak Fluently and Write Correctly. V&S Publishers.</em>',
    },
    {
      referencia:
        'Rosset, E. (2003). <em>English Grammar:</em> Vol. 3a ed. Stanley Editorial.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edith Grande',
        cargo: 'Experta temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
