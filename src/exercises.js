// ========================================
// PAROLE IN GIOCO
// Database degli esercizi
// ========================================
//
// type:
//   "complete"    = completa la parola
//   "correctWord" = scegli la parola scritta correttamente
//
// category:
//   identifica l'abilità allenata
//
// prompt:
//   testo mostrato al bambino
//
// options:
//   alternative disponibili
//
// answer:
//   risposta corretta
//
// word:
//   parola completa corretta
//
// image:
//   immagine associata alla parola
//   null = nessuna immagine
// ========================================

export const exercises = [

  // ========================================
  // 1. CI / CHI
  // ========================================

  {
    id: "cichi-01",
    type: "complete",
    category: "CI_CHI",
    prompt: "_ave",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chiave",
    image: "/images/chiave.svg"
  },
  {
    id: "cichi-02",
    type: "complete",
    category: "CI_CHI",
    prompt: "_esa",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chiesa",
    image: "/images/chiesa.svg"
  },
  {
    id: "cichi-03",
    type: "complete",
    category: "CI_CHI",
    prompt: "_odo",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chiodo",
    image: "/images/chiodo.svg"
  },
  {
    id: "cichi-04",
    type: "complete",
    category: "CI_CHI",
    prompt: "_uso",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chiuso",
    image: "/images/chiuso.svg"
  },
  {
    id: "cichi-05",
    type: "complete",
    category: "CI_CHI",
    prompt: "_tarra",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chitarra",
    image: "/images/chitarra.svg"
  },
  {
    id: "cichi-06",
    type: "complete",
    category: "CI_CHI",
    prompt: "_bo",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cibo",
    image: "/images/cibo.svg"
  },
  {
    id: "cichi-07",
    type: "complete",
    category: "CI_CHI",
    prompt: "_ma",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cima",
    image: "/images/cima.svg"
  },
  {
    id: "cichi-08",
    type: "complete",
    category: "CI_CHI",
    prompt: "_nema",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cinema",
    image: "/images/cinema.svg"
  },
  {
    id: "cichi-09",
    type: "complete",
    category: "CI_CHI",
    prompt: "_vetta",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "civetta",
    image: "/images/civetta.svg"
  },
  {
    id: "cichi-10",
    type: "complete",
    category: "CI_CHI",
    prompt: "_polla",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cipolla",
    image: "/images/cipolla.svg"
  },


  // ========================================
  // 2. GI / GHI
  // ========================================

  {
    id: "gighi-01",
    type: "complete",
    category: "GI_GHI",
    prompt: "_anda",
    options: ["GI", "GHI"],
    answer: "GHI",
    word: "ghianda",
    image: "/images/ghianda.svg"
  },
  {
    id: "gighi-02",
    type: "complete",
    category: "GI_GHI",
    prompt: "_oco",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "gioco",
    image: "/images/gioco.svg"
  },
  {
    id: "gighi-03",
    type: "complete",
    category: "GI_GHI",
    prompt: "_ostra",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "giostra",
    image: "/images/giostra.svg"
  },
  {
    id: "gighi-04",
    type: "complete",
    category: "GI_GHI",
    prompt: "_rasole",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "girasole",
    image: "/images/girasole.svg"
  },
  {
    id: "gighi-05",
    type: "complete",
    category: "GI_GHI",
    prompt: "_nocchio",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "ginocchio",
    image: "/images/ginocchio.svg"
  },
  {
    id: "gighi-06",
    type: "complete",
    category: "GI_GHI",
    prompt: "_glio",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "giglio",
    image: "/images/giglio.svg"
  },
  {
    id: "gighi-07",
    type: "complete",
    category: "GI_GHI",
    prompt: "_ta",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "gita",
    image: null
  },


  // ========================================
  // 3. CA / CIA
  // ========================================

  {
    id: "cacia-01",
    type: "complete",
    category: "CA_CIA",
    prompt: "_ne",
    options: ["CA", "CIA"],
    answer: "CA",
    word: "cane",
    image: "/images/cane.svg"
  },
  {
    id: "cacia-02",
    type: "complete",
    category: "CA_CIA",
    prompt: "_sa",
    options: ["CA", "CIA"],
    answer: "CA",
    word: "casa",
    image: "/images/casa.svg"
  },
  {
    id: "cacia-03",
    type: "complete",
    category: "CA_CIA",
    prompt: "_micia",
    options: ["CA", "CIA"],
    answer: "CA",
    word: "camicia",
    image: "/images/camicia.svg"
  },
  {
    id: "cacia-04",
    type: "complete",
    category: "CA_CIA",
    prompt: "_pello",
    options: ["CA", "CIA"],
    answer: "CA",
    word: "capello",
    image: "/images/capello.svg"
  },
  {
    id: "cacia-05",
    type: "complete",
    category: "CA_CIA",
    prompt: "_o",
    options: ["CA", "CIA"],
    answer: "CIA",
    word: "ciao",
    image: null
  },
  {
    id: "cacia-06",
    type: "complete",
    category: "CA_CIA",
    prompt: "_batta",
    options: ["CA", "CIA"],
    answer: "CIA",
    word: "ciabatta",
    image: "/images/ciabatta.svg"
  },


  // ========================================
  // 4. CO / CIO
  // ========================================

  {
    id: "cocio-01",
    type: "complete",
    category: "CO_CIO",
    prompt: "_da",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "coda",
    image: "/images/coda.svg"
  },
  {
    id: "cocio-02",
    type: "complete",
    category: "CO_CIO",
    prompt: "_rona",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "corona",
    image: "/images/corona.svg"
  },
  {
    id: "cocio-03",
    type: "complete",
    category: "CO_CIO",
    prompt: "_lore",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "colore",
    image: "/images/colore.svg"
  },
  {
    id: "cocio-04",
    type: "complete",
    category: "CO_CIO",
    prompt: "_llina",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "collina",
    image: "/images/collina.svg"
  },
  {
    id: "cocio-05",
    type: "complete",
    category: "CO_CIO",
    prompt: "cioc__lato",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "cioccolato",
    image: "/images/cioccolato.svg"
  },
  {
    id: "cocio-06",
    type: "complete",
    category: "CO_CIO",
    prompt: "_tola",
    options: ["CO", "CIO"],
    answer: "CIO",
    word: "ciotola",
    image: "/images/ciotola.svg"
  },


  // ========================================
  // 5. CU / CIU
  // ========================================

  {
    id: "cuciu-01",
    type: "complete",
    category: "CU_CIU",
    prompt: "_bo",
    options: ["CU", "CIU"],
    answer: "CU",
    word: "cubo",
    image: "/images/cubo.svg"
  },
  {
    id: "cuciu-02",
    type: "complete",
    category: "CU_CIU",
    prompt: "_lla",
    options: ["CU", "CIU"],
    answer: "CU",
    word: "culla",
    image: "/images/culla.svg"
  },
  {
    id: "cuciu-03",
    type: "complete",
    category: "CU_CIU",
    prompt: "_cina",
    options: ["CU", "CIU"],
    answer: "CU",
    word: "cucina",
    image: "/images/cucina.svg"
  },
  {
    id: "cuciu-04",
    type: "complete",
    category: "CU_CIU",
    prompt: "_ffo",
    options: ["CU", "CIU"],
    answer: "CIU",
    word: "ciuffo",
    image: "/images/ciuffo.svg"
  },
  {
    id: "cuciu-05",
    type: "complete",
    category: "CU_CIU",
    prompt: "_ccio",
    options: ["CU", "CIU"],
    answer: "CIU",
    word: "ciuccio",
    image: "/images/ciuccio.svg"
  },


  // ========================================
  // 6. CE / CIE
  // ========================================

  {
    id: "cecie-01",
    type: "complete",
    category: "CE_CIE",
    prompt: "_ra",
    options: ["CE", "CIE"],
    answer: "CE",
    word: "cera",
    image: "/images/cera.svg"
  },
  {
    id: "cecie-02",
    type: "complete",
    category: "CE_CIE",
    prompt: "_na",
    options: ["CE", "CIE"],
    answer: "CE",
    word: "cena",
    image: "/images/cena.svg"
  },
  {
    id: "cecie-03",
    type: "complete",
    category: "CE_CIE",
    prompt: "_sto",
    options: ["CE", "CIE"],
    answer: "CE",
    word: "cesto",
    image: "/images/cesto.svg"
  },
  {
    id: "cecie-04",
    type: "complete",
    category: "CE_CIE",
    prompt: "_rchio",
    options: ["CE", "CIE"],
    answer: "CE",
    word: "cerchio",
    image: "/images/cerchio.svg"
  },
  {
    id: "cecie-05",
    type: "complete",
    category: "CE_CIE",
    prompt: "_lo",
    options: ["CE", "CIE"],
    answer: "CIE",
    word: "cielo",
    image: "/images/cielo.svg"
  },
  {
    id: "cecie-06",
    type: "complete",
    category: "CE_CIE",
    prompt: "_co",
    options: ["CE", "CIE"],
    answer: "CIE",
    word: "cieco",
    image: null
  },
    // ========================================
  // 7. SCEGLI LA PAROLA SCRITTA BENE
  // ========================================

  {
    id: "correct-01",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ciave", "chiave", "chiaave"],
    answer: "chiave",
    word: "chiave",
    image: "/images/chiave.svg"
  },
  {
    id: "correct-02",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ciesa", "chiesa", "chesa"],
    answer: "chiesa",
    word: "chiesa",
    image: "/images/chiesa.svg"
  },
  {
    id: "correct-03",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["giaccio", "ghiaccio", "ghiachio"],
    answer: "ghiaccio",
    word: "ghiaccio",
    image: "/images/ghiaccio.svg"
  },
  {
    id: "correct-04",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ghioco", "gioco", "giocco"],
    answer: "gioco",
    word: "gioco",
    image: "/images/gioco.svg"
  },
  {
    id: "correct-05",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ciocolato", "cioccolato", "cocciolato"],
    answer: "cioccolato",
    word: "cioccolato",
    image: "/images/cioccolato.svg"
  },
  {
    id: "correct-06",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["celo", "cielo", "ciello"],
    answer: "cielo",
    word: "cielo",
    image: "/images/cielo.svg"
  },
  {
    id: "correct-07",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["cuffo", "ciuffo", "ciufo"],
    answer: "ciuffo",
    word: "ciuffo",
    image: "/images/ciuffo.svg"
  },
  {
    id: "correct-08",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ciucina", "cucina", "cuchina"],
    answer: "cucina",
    word: "cucina",
    image: "/images/cucina.svg"
  },


  // ========================================
  // 8. LETTERE SIMILI: F / T / V
  // ========================================

  {
    id: "ftv-01",
    type: "complete",
    category: "F_T_V",
    prompt: "_iume",
    options: ["f", "t", "v"],
    answer: "f",
    word: "fiume",
    image: "/images/fiume.svg"
  },
  {
    id: "ftv-02",
    type: "complete",
    category: "F_T_V",
    prompt: "_ilo",
    options: ["f", "t", "v"],
    answer: "f",
    word: "filo",
    image: "/images/filo.svg"
  },
  {
    id: "ftv-03",
    type: "complete",
    category: "F_T_V",
    prompt: "_oca",
    options: ["f", "t", "v"],
    answer: "f",
    word: "foca",
    image: "/images/foca.svg"
  },
  {
    id: "ftv-04",
    type: "complete",
    category: "F_T_V",
    prompt: "_igre",
    options: ["f", "t", "v"],
    answer: "t",
    word: "tigre",
    image: "/images/tigre.svg"
  },
  {
    id: "ftv-05",
    type: "complete",
    category: "F_T_V",
    prompt: "_olpe",
    options: ["f", "t", "v"],
    answer: "v",
    word: "volpe",
    image: "/images/volpe.svg"
  },
  {
    id: "ftv-06",
    type: "complete",
    category: "F_T_V",
    prompt: "_aso",
    options: ["f", "t", "v"],
    answer: "v",
    word: "vaso",
    image: "/images/vaso.svg"
  },
  {
    id: "ftv-07",
    type: "complete",
    category: "F_T_V",
    prompt: "_opo",
    options: ["f", "t", "v"],
    answer: "t",
    word: "topo",
    image: "/images/topo.svg"
  },
  {
    id: "ftv-08",
    type: "complete",
    category: "F_T_V",
    prompt: "_arfalla",
    options: ["f", "t", "v"],
    answer: "f",
    word: "farfalla",
    image: "/images/farfalla.svg"
  },
  {
    id: "ftv-09",
    type: "complete",
    category: "F_T_V",
    prompt: "_etto",
    options: ["f", "t", "v"],
    answer: "t",
    word: "tetto",
    image: "/images/tetto.svg"
  },


  // ========================================
  // 9. LETTERE CHE SI CONFONDONO: P / Q / B / D
  // ========================================

  {
    id: "pqbd-01",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_iuma",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "piuma",
    image: "/images/piuma.svg"
  },
  {
    id: "pqbd-02",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ane",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "pane",
    image: "/images/pane.svg"
  },
  {
    id: "pqbd-03",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_era",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "pera",
    image: "/images/pera.svg"
  },
  {
    id: "pqbd-04",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_onte",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "ponte",
    image: "/images/ponte.svg"
  },
  {
    id: "pqbd-05",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_arco",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "parco",
    image: "/images/parco.svg"
  },
  {
    id: "pqbd-06",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_alena",
    options: ["p", "q", "b", "d"],
    answer: "b",
    word: "balena",
    image: "/images/balena.svg"
  },
  {
    id: "pqbd-07",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_orsa",
    options: ["p", "q", "b", "d"],
    answer: "b",
    word: "borsa",
    image: "/images/borsa.svg"
  },
  {
    id: "pqbd-08",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_uco",
    options: ["p", "q", "b", "d"],
    answer: "b",
    word: "buco",
    image: "/images/buco.svg"
  },
  {
    id: "pqbd-09",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ente",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "dente",
    image: "/images/dente.svg"
  },
  {
    id: "pqbd-10",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ado",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "dado",
    image: "/images/dado.svg"
  },
  {
    id: "pqbd-11",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ito",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "dito",
    image: "/images/dito.svg"
  },
  {
    id: "pqbd-12",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_elfino",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "delfino",
    image: "/images/delfino.svg"
  },
  {
    id: "pqbd-13",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_uadro",
    options: ["p", "q", "b", "d"],
    answer: "q",
    word: "quadro",
    image: "/images/quadro.svg"
  },
  {
    id: "pqbd-14",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_uasi",
    options: ["p", "q", "b", "d"],
    answer: "q",
    word: "quasi",
    image: null
  },


  // ========================================
  // 10. GN / NI
  // ========================================

  {
    id: "gnni-01",
    type: "complete",
    category: "GN_NI",
    prompt: "pi_a",
    options: ["gn", "ni"],
    answer: "gn",
    word: "pigna",
    image: "/images/pigna.svg"
  },
  {
    id: "gnni-02",
    type: "complete",
    category: "GN_NI",
    prompt: "spu_a",
    options: ["gn", "ni"],
    answer: "gn",
    word: "spugna",
    image: "/images/spugna.svg"
  },
  {
    id: "gnni-03",
    type: "complete",
    category: "GN_NI",
    prompt: "lava_a",
    options: ["gn", "ni"],
    answer: "gn",
    word: "lavagna",
    image: "/images/lavagna.svg"
  },
  {
    id: "gnni-04",
    type: "complete",
    category: "GN_NI",
    prompt: "pu_o",
    options: ["gn", "ni"],
    answer: "gn",
    word: "pugno",
    image: "/images/pugno.svg"
  },
  {
    id: "gnni-05",
    type: "complete",
    category: "GN_NI",
    prompt: "le_o",
    options: ["gn", "ni"],
    answer: "gn",
    word: "legno",
    image: "/images/legno.svg"
  },
  {
    id: "gnni-06",
    type: "complete",
    category: "GN_NI",
    prompt: "so_o",
    options: ["gn", "ni"],
    answer: "gn",
    word: "sogno",
    image: null
  },
  {
    id: "gnni-07",
    type: "complete",
    category: "GN_NI",
    prompt: "ba_o",
    options: ["gn", "ni"],
    answer: "gn",
    word: "bagno",
    image: "/images/bagno.svg"
  },
  {
    id: "gnni-08",
    type: "complete",
    category: "GN_NI",
    prompt: "ra_o",
    options: ["gn", "ni"],
    answer: "gn",
    word: "ragno",
    image: "/images/ragno.svg"
  },
  {
    id: "gnni-09",
    type: "complete",
    category: "GN_NI",
    prompt: "ge_o",
    options: ["gn", "ni"],
    answer: "ni",
    word: "genio",
    image: null
  },
  {
    id: "gnni-10",
    type: "complete",
    category: "GN_NI",
    prompt: "pa_ere",
    options: ["gn", "ni"],
    answer: "ni",
    word: "paniere",
    image: "/images/paniere.svg"
  }

];
