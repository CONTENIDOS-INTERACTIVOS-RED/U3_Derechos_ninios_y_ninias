export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Fomento de los derechos del niño y la niña, en la familia y las comunidades',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Rol de la familia y la comunidad en la garantía de derechos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Perspectivas pedagógicas en la promoción de los derechos de la infancia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'La familia como primer espacio de protección y formación en derechos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Redes comunitarias y su papel en la promoción del bienestar infantil',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Participación de niñas y niños en la toma de decisiones, dentro del hogar y la comunidad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Desafíos y barreras en la protección de derechos en entornos familiares y comunitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Factores que limitan el acceso a derechos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Violencias en el entorno familiar y comunitario: estrategias de prevención y denuncia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Romero Vela, M. J. (2010). <i>Familia y escuela</i>. Wanceulen Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/63228',
    },
    {
      referencia:
        'Maldonado García, M. Á. (2018). <i>Pedagogías críticas: otras formas de pensar la educación</i>. Editorial UOC. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/59141',
    },
    {
      referencia:
        'Tovar Santana, A. (2001). <i>El constructivismo en el proceso enseñanza-aprendizaje</i>. Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/74043',
    },
    {
      referencia:
        'Sarmiento, D. F. (2011). <i>De la educación popular</i>. Editorial Nobuko. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/76814',
    },
    {
      referencia:
        'Gómez Gómez, F. (2016). <i>Redes comunitarias y avances de supervisión en trabajo social</i>. UNED - Universidad Nacional de Educación a Distancia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48844',
    },
    {
      referencia:
        'López-Jurado Puig, M. (2010). <i>La decisión correcta: el aprendizaje de valores morales en la toma de decisiones</i>. Editorial Desclée de Brouwer. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/47919',
    },
    {
      referencia:
        'Aldecoa Luzárraga, F. (Dir.), Forner Delaygua, J. (Dir.) & González Bou, E. (Dir.). (2010). <i>La protección de los niños en el derecho internacional y en las relaciones internacionales: Jornadas en conmemoración del 50 aniversario de la Declaración Universal de los Derechos del Niño y del 20 aniversario</i>. Marcial Pons Ediciones Jurídicas y Sociales. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/101858',
    },
    {
      referencia:
        'Aguilar Sahagún, L. A. (2008). <i>Educación, derechos de la infancia y derecho al desarrollo</i>. Plaza y Valdés. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75960',
    },
    {
      referencia:
        'Mosquera de la Hoz, L. M. (2014). <i>Caracterización del activismo Web en defensa de los derechos infantiles: OIT 2013 y Colombia 2010</i>. Comunicación, (31), 43-54. ',
      link:
        'https://revistas.upb.edu.co/index.php/comunicacion/article/view/2779',
    },
    {
      referencia:
        'Zapata Rendón, M. C. (2009). <i>El papel mediador del profesor en el proceso enseñanza aprendizaje</i>. Aprende en línea. ',
      link:
        'https://nuestroscursos.net/pluginfile.php/4126/mod_resource/content/1/Elpapelmediadordelprofesor_Julio29%202016.pdf',
    },
    {
      referencia:
        'Unicef. (2012). <i>Niñas y niños en un mundo urbano</i>. Estado mundial de la infancia 2012:resumen ejecutivo. Unicef. ',
      link:
        'https://www.unicef.org/costarica/media/781/file/Resumen%20Ejecutivo%20del%20Estado%20Mundial%20de%20la%20Infancia%202012.%20Ni%C3%B1as%20y%20ni%C3%B1os%20en%20un%20mundo%20urbano.pdf',
    },
    {
      referencia:
        'Benavides, M. & León, J. (2013). <i>Una mirada a la violencia física contra los niños y niñas en los hogares peruanos: magnitudes, factores asociados y transmisión de la violencia de madres a hijos e hijas</i>. SSOAR. ',
      link: 'https://www.ssoar.info/ssoar/handle/document/51563',
    },
    {
      referencia:
        'González Coto, M. & Sáenz Cubillo, N. (2020). Crianza Respetuosa: Hacia una parentalidad centrada en las niñas y los niños. <i>Revista Estudios, (41)</i>, 428-450. ',
      link: 'https://revistas.ucr.ac.cr/index.php/estudios/article/view/44887',
    },
  ],
  glosario: [
    {
      termino: 'Abuso infantil',
      significado:
        'Cualquier forma de maltrato físico, psicológico o sexual, que afecta el bienestar de niños y niñas.',
    },
    {
      termino: 'Bienestar infantil',
      significado:
        'Estado de satisfacción de las necesidades básicas de los niños y las niñas, incluyendo salud, educación y protección.',
    },
    {
      termino: 'Convención sobre los Derechos del Niño',
      significado:
        'Tratado internacional que establece los derechos fundamentales de la infancia y compromete a los Estados, a garantizarlos.',
    },
    {
      termino: 'Desigualdad social',
      significado:
        'Situación en la que ciertos grupos tienen acceso limitado a derechos y recursos básicos como educación y salud.',
    },
    {
      termino: 'Derechos de la infancia',
      significado:
        'Conjunto de principios y garantías que protegen el desarrollo, la dignidad y el bienestar de los niños y las niñas.',
    },
    {
      termino: 'Educación en derechos humanos',
      significado:
        'Proceso de enseñanza y aprendizaje que busca concienciar sobre los derechos y deberes de cada individuo, en la sociedad.',
    },
    {
      termino: 'Empoderamiento infantil',
      significado:
        'Proceso mediante el cual los niños y niñas adquieren conocimientos y herramientas para participar activamente en la defensa de sus derechos.',
    },
    {
      termino: 'Entorno protector',
      significado:
        'Espacio seguro donde los niños y las niñas pueden desarrollarse sin riesgo de violencia, explotación o discriminación.',
    },
    {
      termino: 'Explotación infantil',
      significado:
        'Uso indebido del trabajo infantil en condiciones que afectan el desarrollo y la dignidad de los niños y las niñas.',
    },
    {
      termino: 'Familia',
      significado:
        'Grupo fundamental de la sociedad, encargado de brindar protección, educación y afecto a los niños y las niñas.',
    },
    {
      termino: 'Inclusión social',
      significado:
        'Proceso que garantiza la participación y el acceso equitativo de todos los niños y las niñas, en diferentes ámbitos de la sociedad.',
    },
    {
      termino: 'Maltrato infantil',
      significado:
        'Cualquier acción u omisión que cause daño físico, psicológico o emocional a un niño o una niña.',
    },
    {
      termino: 'Participación infantil',
      significado:
        'Derecho de los niños y las niñas a expresar sus opiniones y ser escuchados en asuntos que les conciernen.',
    },
    {
      termino: 'Política pública',
      significado:
        'Conjunto de acciones y normativas diseñadas por el Estado para garantizar el bienestar de la infancia y la comunidad.',
    },
    {
      termino: 'Prevención del abuso',
      significado:
        'Estrategias y acciones dirigidas a evitar cualquier forma de maltrato o violencia, contra la infancia.',
    },
    {
      termino: 'Protección infantil',
      significado:
        'Conjunto de medidas y acciones que buscan garantizar la seguridad y bienestar de los niños y las niñas.',
    },
    {
      termino: 'Responsabilidad parental',
      significado:
        'Obligación de los padres y cuidadores de garantizar el desarrollo integral y la protección de sus hijos.',
    },
    {
      termino: 'Sistema de protección infantil',
      significado:
        'Conjunto de instituciones y mecanismos destinados a garantizar la seguridad y los derechos de la infancia.',
    },
    {
      termino: 'Trabajo infantil',
      significado:
        'Actividad económica realizada por niños y niñas y que afecta su desarrollo, educación y bienestar.',
    },
    {
      termino: 'Vulnerabilidad infantil',
      significado:
        'Condición en la que un niño o una niña se encuentra en riesgo de sufrir maltrato, exclusión o violación de sus derechos.',
    },
  ],
}
