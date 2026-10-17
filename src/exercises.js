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
//   identifica l'abilità che stiamo allenando
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
    word: "chiave"
  },
  {
    id: "cichi-02",
    type: "complete",
    category: "CI_CHI",
    prompt: "_esa",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chiesa"
  },
  {
    id: "cichi-03",
    type: "complete",
    category: "CI_CHI",
    prompt: "_odo",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chiodo"
  },
  {
    id: "cichi-04",
    type: "complete",
    category: "CI_CHI",
    prompt: "_uso",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chiuso"
  },
  {
    id: "cichi-05",
    type: "complete",
    category: "CI_CHI",
    prompt: "_tarra",
    options: ["CI", "CHI"],
    answer: "CHI",
    word: "chitarra"
  },
  {
    id: "cichi-06",
    type: "complete",
    category: "CI_CHI",
    prompt: "_bo",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cibo"
  },
  {
    id: "cichi-07",
    type: "complete",
    category: "CI_CHI",
    prompt: "_ma",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cima"
  },
  {
    id: "cichi-08",
    type: "complete",
    category: "CI_CHI",
    prompt: "_nema",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cinema"
  },
  {
    id: "cichi-09",
    type: "complete",
    category: "CI_CHI",
    prompt: "_vetta",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "civetta"
  },
  {
    id: "cichi-10",
    type: "complete",
    category: "CI_CHI",
    prompt: "_polla",
    options: ["CI", "CHI"],
    answer: "CI",
    word: "cipolla"
  },


  // ========================================
  // 2. GI / GHI
  // ========================================

  {
    id: "gighi-01",
    type: "complete",
    category: "GI_GHI",
    prompt: "_accio",
    options: ["GI", "GHI"],
    answer: "GHI",
    word: "ghiaccio"
  },
  {
    id: "gighi-02",
    type: "complete",
    category: "GI_GHI",
    prompt: "_anda",
    options: ["GI", "GHI"],
    answer: "GHI",
    word: "ghianda"
  },
  {
    id: "gighi-03",
    type: "complete",
    category: "GI_GHI",
    prompt: "_otto",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "giotto"
  },
  {
    id: "gighi-04",
    type: "complete",
    category: "GI_GHI",
    prompt: "_oco",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "gioco"
  },
  {
    id: "gighi-05",
    type: "complete",
    category: "GI_GHI",
    prompt: "_ostra",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "giostra"
  },
  {
    id: "gighi-06",
    type: "complete",
    category: "GI_GHI",
    prompt: "_rasole",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "girasole"
  },
  {
    id: "gighi-07",
    type: "complete",
    category: "GI_GHI",
    prompt: "_nocchio",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "ginocchio"
  },
  {
    id: "gighi-08",
    type: "complete",
    category: "GI_GHI",
    prompt: "_glio",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "giglio"
  },
  {
    id: "gighi-09",
    type: "complete",
    category: "GI_GHI",
    prompt: "_ro",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "giro"
  },
  {
    id: "gighi-10",
    type: "complete",
    category: "GI_GHI",
    prompt: "_ta",
    options: ["GI", "GHI"],
    answer: "GI",
    word: "gita"
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
    word: "cane"
  },
  {
    id: "cacia-02",
    type: "complete",
    category: "CA_CIA",
    prompt: "_sa",
    options: ["CA", "CIA"],
    answer: "CA",
    word: "casa"
  },
  {
    id: "cacia-03",
    type: "complete",
    category: "CA_CIA",
    prompt: "_micia",
    options: ["CA", "CIA"],
    answer: "CA",
    word: "camicia"
  },
  {
    id: "cacia-04",
    type: "complete",
    category: "CA_CIA",
    prompt: "_pello",
    options: ["CA", "CIA"],
    answer: "CA",
    word: "capello"
  },
  {
    id: "cacia-05",
    type: "complete",
    category: "CA_CIA",
    prompt: "_o",
    options: ["CA", "CIA"],
    answer: "CIA",
    word: "ciao"
  },
  {
    id: "cacia-06",
    type: "complete",
    category: "CA_CIA",
    prompt: "_batta",
    options: ["CA", "CIA"],
    answer: "CIA",
    word: "ciabatta"
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
    word: "coda"
  },
  {
    id: "cocio-02",
    type: "complete",
    category: "CO_CIO",
    prompt: "_rona",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "corona"
  },
  {
    id: "cocio-03",
    type: "complete",
    category: "CO_CIO",
    prompt: "_lore",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "colore"
  },
  {
    id: "cocio-04",
    type: "complete",
    category: "CO_CIO",
    prompt: "_llina",
    options: ["CO", "CIO"],
    answer: "CO",
    word: "collina"
  },
  {
    id: "cocio-05",
    type: "complete",
    category: "CO_CIO",
    prompt: "_ccolato",
    options: ["CO", "CIO"],
    answer: "CIO",
    word: "cioccolato"
  },
  {
    id: "cocio-06",
    type: "complete",
    category: "CO_CIO",
    prompt: "_tola",
    options: ["CO", "CIO"],
    answer: "CIO",
    word: "ciotola"
  },
  {
    id: "cocio-07",
    type: "complete",
    category: "CO_CIO",
    prompt: "_uffo",
    options: ["CO", "CIO"],
    answer: "CIO",
    word: "ciuffo"
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
    word: "cubo"
  },
  {
    id: "cuciu-02",
    type: "complete",
    category: "CU_CIU",
    prompt: "_lla",
    options: ["CU", "CIU"],
    answer: "CU",
    word: "culla"
  },
  {
    id: "cuciu-03",
    type: "complete",
    category: "CU_CIU",
    prompt: "_cina",
    options: ["CU", "CIU"],
    answer: "CU",
    word: "cucina"
  },
  {
    id: "cuciu-04",
    type: "complete",
    category: "CU_CIU",
    prompt: "_ffo",
    options: ["CU", "CIU"],
    answer: "CIU",
    word: "ciuffo"
  },
  {
    id: "cuciu-05",
    type: "complete",
    category: "CU_CIU",
    prompt: "_ccio",
    options: ["CU", "CIU"],
    answer: "CIU",
    word: "ciuccio"
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
    word: "cera"
  },
  {
    id: "cecie-02",
    type: "complete",
    category: "CE_CIE",
    prompt: "_na",
    options: ["CE", "CIE"],
    answer: "CE",
    word: "cena"
  },
  {
    id: "cecie-03",
    type: "complete",
    category: "CE_CIE",
    prompt: "_sto",
    options: ["CE", "CIE"],
    answer: "CE",
    word: "cesto"
  },
  {
    id: "cecie-04",
    type: "complete",
    category: "CE_CIE",
    prompt: "_rchio",
    options: ["CE", "CIE"],
    answer: "CE",
    word: "cerchio"
  },
  {
    id: "cecie-05",
    type: "complete",
    category: "CE_CIE",
    prompt: "_lo",
    options: ["CE", "CIE"],
    answer: "CIE",
    word: "cielo"
  },
  {
    id: "cecie-06",
    type: "complete",
    category: "CE_CIE",
    prompt: "_co",
    options: ["CE", "CIE"],
    answer: "CIE",
    word: "cieco"
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
    word: "chiave"
  },
  {
    id: "correct-02",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ciesa", "chiesa", "chiesa"],
    answer: "chiesa",
    word: "chiesa"
  },
  {
    id: "correct-03",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["giaccio", "ghiaccio", "ghiachio"],
    answer: "ghiaccio",
    word: "ghiaccio"
  },
  {
    id: "correct-04",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ghioco", "gioco", "giocco"],
    answer: "gioco",
    word: "gioco"
  },
  {
    id: "correct-05",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ciocolato", "cioccolato", "coccolato"],
    answer: "cioccolato",
    word: "cioccolato"
  },
  {
    id: "correct-06",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["celo", "cielo", "ciello"],
    answer: "cielo",
    word: "cielo"
  },
  {
    id: "correct-07",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["cuffo", "ciuffo", "ciufo"],
    answer: "ciuffo",
    word: "ciuffo"
  },
  {
    id: "correct-08",
    type: "correctWord",
    category: "CORRECT_WORD",
    prompt: "Quale parola è scritta bene?",
    options: ["ciucina", "cucina", "cuchina"],
    answer: "cucina",
    word: "cucina"
  },


  // ========================================
  // 8. LETTERE SIMILI: F / T / V
  //
  // Qui NON usiamo sempre tutte e tre le lettere.
  // Le alternative sono scelte in modo da evitare
  // che ci siano due risposte corrette.
  // ========================================

  {
    id: "ftv-01",
    type: "complete",
    category: "F_T_V",
    prompt: "_ata",
    options: ["f", "t", "v"],
    answer: "f",
    word: "fata"
  },
  {
    id: "ftv-02",
    type: "complete",
    category: "F_T_V",
    prompt: "_ilo",
    options: ["f", "t", "v"],
    answer: "f",
    word: "filo"
  },
  {
    id: "ftv-03",
    type: "complete",
    category: "F_T_V",
    prompt: "_oca",
    options: ["f", "t", "v"],
    answer: "f",
    word: "foca"
  },
  {
    id: "ftv-04",
    type: "complete",
    category: "F_T_V",
    prompt: "_oto",
    options: ["f", "t", "v"],
    answer: "f",
    word: "foto"
  },
  {
    id: "ftv-05",
    type: "complete",
    category: "F_T_V",
    prompt: "_ela",
    options: ["f", "t", "v"],
    answer: "v",
    word: "vela"
  },
  {
    id: "ftv-06",
    type: "complete",
    category: "F_T_V",
    prompt: "_aso",
    options: ["f", "t", "v"],
    answer: "v",
    word: "vaso"
  },
  {
    id: "ftv-07",
    type: "complete",
    category: "F_T_V",
    prompt: "_opo",
    options: ["f", "t", "v"],
    answer: "t",
    word: "topo"
  },
  {
    id: "ftv-08",
    type: "complete",
    category: "F_T_V",
    prompt: "_oro",
    options: ["f", "t", "v"],
    answer: "t",
    word: "toro"
  },
  {
    id: "ftv-09",
    type: "complete",
    category: "F_T_V",
    prompt: "_etto",
    options: ["f", "t", "v"],
    answer: "t",
    word: "tetto"
  },


  // ========================================
  // 9. LETTERE CHE SI CONFONDONO: P / Q / B / D
  //
  // Le alternative sono definite esercizio per
  // esercizio per ridurre le ambiguità.
  // ========================================

  {
    id: "pqbd-01",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_alla",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "palla"
  },
  {
    id: "pqbd-02",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ane",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "pane"
  },
  {
    id: "pqbd-03",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_era",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "pera"
  },
  {
    id: "pqbd-04",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_onte",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "ponte"
  },
  {
    id: "pqbd-05",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_arco",
    options: ["p", "q", "b", "d"],
    answer: "p",
    word: "parco"
  },
  {
    id: "pqbd-06",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_arca",
    options: ["p", "q", "b", "d"],
    answer: "b",
    word: "barca"
  },
  {
    id: "pqbd-07",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_orsa",
    options: ["p", "q", "b", "d"],
    answer: "b",
    word: "borsa"
  },
  {
    id: "pqbd-08",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_uco",
    options: ["p", "q", "b", "d"],
    answer: "b",
    word: "buco"
  },
  {
    id: "pqbd-09",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ente",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "dente"
  },
  {
    id: "pqbd-10",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ado",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "dado"
  },
  {
    id: "pqbd-11",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_ito",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "dito"
  },
  {
    id: "pqbd-12",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_occia",
    options: ["p", "q", "b", "d"],
    answer: "d",
    word: "doccia"
  },
  {
    id: "pqbd-13",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_uadro",
    options: ["p", "q", "b", "d"],
    answer: "q",
    word: "quadro"
  },
  {
    id: "pqbd-14",
    type: "complete",
    category: "P_Q_B_D",
    prompt: "_uasi",
    options: ["p", "q", "b", "d"],
    answer: "q",
    word: "quasi"
  }

];
