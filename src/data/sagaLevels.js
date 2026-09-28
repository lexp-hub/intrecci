export const BIOMES = [
  {
    id: 1,
    name: 'Pianura delle Parole',
    subtitle: 'Primi passi nel regno del lessico',
    color: '#A0C35A',
    icon: 'tree',
    levelRange: [1, 5]
  },
  {
    id: 2,
    name: 'Borgo dei Sapori',
    subtitle: 'Intrecci culinari e tradizioni',
    color: '#F9DF6D',
    icon: 'pasta',
    levelRange: [6, 10]
  },
  {
    id: 3,
    name: 'Foresta degli Intrecci',
    subtitle: 'Collegamenti sottili e doppi sensi',
    color: '#9ECAE1',
    icon: 'compass',
    levelRange: [11, 15]
  },
  {
    id: 4,
    name: 'Vetta dei Misteri',
    subtitle: 'Enigmi d\'alta quota per veri maestri',
    color: '#D484E3',
    icon: 'trophy',
    levelRange: [16, 20]
  }
];

export const SAGA_LEVELS = [
  // --- BIOME 1: Pianura delle Parole (Livelli 1-5) ---
  {
    id: 1,
    biomeId: 1,
    title: 'Livello 1: Risveglio al Parco',
    subtitle: 'Natura e stagioni',
    difficulty: 'Facile',
    groups: [
      {
        category: 'Stagioni dell\'anno',
        color: 'yellow',
        level: 1,
        words: ['PRIMAVERA', 'ESTATE', 'AUTUNNO', 'INVERNO'],
        hint: 'Dividono i 12 mesi dell\'anno solare'
      },
      {
        category: 'Alberi da frutto',
        color: 'green',
        level: 2,
        words: ['MELO', 'PERO', 'PESCO', 'CILIEGIO'],
        hint: 'Danno frutti dolci e succosi'
      },
      {
        category: 'Piccoli insetti',
        color: 'blue',
        level: 3,
        words: ['FORMICA', 'APE', 'GRILLO', 'LUCIDOLA'],
        hint: 'Popolano l\'erba e i prati estivi'
      },
      {
        category: 'Parole simmetriche o doppie',
        color: 'purple',
        level: 4,
        words: ['OSSO', 'EGGE', 'OTTO', 'ANNA'],
        hint: 'Hanno particolarità ortografiche simmetriche'
      }
    ]
  },
  {
    id: 2,
    biomeId: 1,
    title: 'Livello 2: La Fattoria del Sole',
    subtitle: 'Animali e suoni campestri',
    difficulty: 'Facile',
    groups: [
      {
        category: 'Animali da stalla',
        color: 'yellow',
        level: 1,
        words: ['MUCCA', 'CAVALLO', 'ASINO', 'MAIALE'],
        hint: 'Abitano nei fienili o nei recinti'
      },
      {
        category: 'Strumenti agricoli',
        color: 'green',
        level: 2,
        words: ['VANGHE', 'RASTRELLO', 'FALCE', 'ZAPPA'],
        hint: 'Si usano per lavorare la terra a mano'
      },
      {
        category: 'Versi degli animali',
        color: 'blue',
        level: 3,
        words: ['MUGGITO', 'NITRITO', 'BARRITO', 'RUGGITO'],
        hint: 'I richiami vocali della fauna'
      },
      {
        category: 'Cose che hanno una coda',
        color: 'purple',
        level: 4,
        words: ['PIANOFORTE', 'COMETA', 'FILA', 'VOLPE'],
        hint: 'La parola "coda" si applica a ciascuno in modi diversi'
      }
    ]
  },
  {
    id: 3,
    biomeId: 1,
    title: 'Livello 3: Cielo e Meteo',
    subtitle: 'Fenomeni atmosferici',
    difficulty: 'Facile',
    groups: [
      {
        category: 'Fenomeni celesti',
        color: 'yellow',
        level: 1,
        words: ['PIOGGIA', 'NEVE', 'GRANDINE', 'FULMINE'],
        hint: 'Precipitazioni e manifestazioni del cielo'
      },
      {
        category: 'Tipi di nuvola',
        color: 'green',
        level: 2,
        words: ['CIRRO', 'CUMULO', 'STRATO', 'NEMBO'],
        hint: 'Classificazioni meteorologiche nel cielo'
      },
      {
        category: 'Strumenti del meteorologo',
        color: 'blue',
        level: 3,
        words: ['BAROMETRO', 'TERMOMETRO', 'ANEMOMETRO', 'PLUVIOMETRO'],
        hint: 'Dispositivi per misurare parametri meteo'
      },
      {
        category: 'Cose che "cadono"',
        color: 'purple',
        level: 4,
        words: ['BRACCIA', 'STELLE', 'FOGLIE', 'SILENZIO'],
        hint: 'Espressioni figurate con il verbo cadere'
      }
    ]
  },
  {
    id: 4,
    biomeId: 1,
    title: 'Livello 4: La Piazza del Mercato',
    subtitle: 'Artigianato e mestieri',
    difficulty: 'Medio',
    groups: [
      {
        category: 'Mestieri classici',
        color: 'yellow',
        level: 1,
        words: ['FORNAIO', 'FALEGNAME', 'SARTO', 'CALZOLAIO'],
        hint: 'Lavoratori manuali della bottega'
      },
      {
        category: 'Tessuti e stoffe',
        color: 'green',
        level: 2,
        words: ['SETA', 'LINO', 'VELLUTO', 'COTONE'],
        hint: 'Materiali usati per confezionare vestiti'
      },
      {
        category: 'Tipi di bottoni',
        color: 'blue',
        level: 3,
        words: ['AUTOMATICO', 'MADREPERLA', 'GEMELLO', 'ALAMARO'],
        hint: 'Chiusure sartoriali eleganti'
      },
      {
        category: 'Si possono "tagliare"',
        color: 'purple',
        level: 4,
        words: ['CORTO', 'CORDA', 'TRAGUARDO', 'TESTA'],
        hint: 'Verbo tagliare in espressioni idiomatiche'
      }
    ]
  },
  {
    id: 5,
    biomeId: 1,
    title: 'Livello 5: Il Mulino a Vento',
    subtitle: 'Farine e chicchi dorati',
    difficulty: 'Medio',
    groups: [
      {
        category: 'Cereali',
        color: 'yellow',
        level: 1,
        words: ['FRUMENTO', 'ORZO', 'SEGALE', 'AVENA'],
        hint: 'Graminacee da cui si ricavano farine'
      },
      {
        category: 'Elementi del mulino',
        color: 'green',
        level: 2,
        words: ['PALE', 'MACINA', 'TRAMOGGIA', 'INGRANAGGIO'],
        hint: 'Parti meccaniche per tritare i chicchi'
      },
      {
        category: 'Tipi di pane regionale',
        color: 'blue',
        level: 3,
        words: ['CARASAU', 'ROSETTA', 'CIABATTA', 'MICCA'],
        hint: 'Formati di pane tipici italiani'
      },
      {
        category: 'Hanno una crosta',
        color: 'purple',
        level: 4,
        words: ['PANE', 'TERRA', 'FORMAGGIO', 'FERITA'],
        hint: 'Superficie esterna indurita o protettiva'
      }
    ]
  },

  // --- BIOME 2: Borgo dei Sapori (Livelli 6-10) ---
  {
    id: 6,
    biomeId: 2,
    title: 'Livello 6: La Cucina della Nonna',
    subtitle: 'Primi piatti e tradizioni',
    difficulty: 'Medio',
    groups: [
      {
        category: 'Formati di pasta lunga',
        color: 'yellow',
        level: 1,
        words: ['SPAGHETTI', 'BUCATINI', 'TAGLIATELLE', 'FETTUCCINE'],
        hint: 'Si arrotolano intorno alla forchetta'
      },
      {
        category: 'Aromi freschi per il sugo',
        color: 'green',
        level: 2,
        words: ['BASILICO', 'ORIGANO', 'ROSMARINO', 'SALVIA'],
        hint: 'Erbe mediterranee profumate'
      },
      {
        category: 'Utensili da cucina tradizionali',
        color: 'blue',
        level: 3,
        words: ['MEZZALUNA', 'MATTARELLO', 'SCHIUMAROLA', 'MESTOLO'],
        hint: 'Strumenti manuali per cucinare'
      },
      {
        category: 'Parole che seguono "Cottura al..."',
        color: 'purple',
        level: 4,
        words: ['DENTE', 'FORNO', 'VAPORE', 'SALTO'],
        hint: 'Metodi o gradi di preparazione culinaria'
      }
    ]
  },
  {
    id: 7,
    biomeId: 2,
    title: 'Livello 7: La Pasticceria Fiorita',
    subtitle: 'Dolci e delizie',
    difficulty: 'Medio',
    groups: [
      {
        category: 'Dolci tipici al cucchiaio',
        color: 'yellow',
        level: 1,
        words: ['TIRAMISÙ', 'PANNACOTTA', 'ZABAGLIONE', 'BUDINO'],
        hint: 'Dessert morbidi e cremosi'
      },
      {
        category: 'Biscotti regionali',
        color: 'green',
        level: 2,
        words: ['CANTUCCI', 'AMARETTI', 'BACIO', 'SAVOIARDI'],
        hint: 'Pasticceria secca da intingere'
      },
      {
        category: 'Ingredienti della crema pasticcera',
        color: 'blue',
        level: 3,
        words: ['TUORLI', 'LATTE', 'ZUCCHERO', 'AMIDO'],
        hint: 'La base per farcire bignè e torte'
      },
      {
        category: 'Cose che "montano"',
        color: 'purple',
        level: 4,
        words: ['PANNA', 'RABBIA', 'GUARDIA', 'PALCO'],
        hint: 'Verbo montare in contesti culinari e non'
      }
    ]
  },
  {
    id: 8,
    biomeId: 2,
    title: 'Livello 8: La Cantina Antica',
    subtitle: 'Vini e profumi di botte',
    difficulty: 'Medio-Difficile',
    groups: [
      {
        category: 'Grandi vini rossi italiani',
        color: 'yellow',
        level: 1,
        words: ['BAROLO', 'CHIANTI', 'AMARONE', 'BRUNELLO'],
        hint: 'Pregiati vini rossi d.o.c.g.'
      },
      {
        category: 'Recipienti per liquidi',
        color: 'green',
        level: 2,
        words: ['BOTTE', 'CARAFFA', 'BOTTIGLIA', 'DAMIGIANA'],
        hint: 'Contenitori in vetro o legno'
      },
      {
        category: 'Termini dell\'assaggio del vino',
        color: 'blue',
        level: 3,
        words: ['PERLAGE', 'BOUQUET', 'TANNINO', 'RETROGUSTO'],
        hint: 'Vocabolario dei sommelier'
      },
      {
        category: 'Parole che possono essere "Secche"',
        color: 'purple',
        level: 4,
        words: ['FOGLIE', 'RISPOSTA', 'BOCCA', 'MANSIONE'],
        hint: 'Aggettivo che indica aridità o perentorietà'
      }
    ]
  },
  {
    id: 9,
    biomeId: 2,
    title: 'Livello 9: Il Caffè Letterario',
    subtitle: 'Espresso e chiacchiere',
    difficulty: 'Medio-Difficile',
    groups: [
      {
        category: 'Varianti dell\'espresso al bar',
        color: 'yellow',
        level: 1,
        words: ['RISTRETTO', 'MACCHIATO', 'CORRETTO', 'LUNGO'],
        hint: 'Come puoi ordinare una tazzina al bancone'
      },
      {
        category: 'Parti della moka',
        color: 'green',
        level: 2,
        words: ['CALDAIA', 'FILTRO', 'GUARNIZIONE', 'RACCOGLITORE'],
        hint: 'I componenti smontabili della caffettiera'
      },
      {
        category: 'Cose che si possono "sorseggiare"',
        color: 'blue',
        level: 3,
        words: ['TISANA', 'INFUSO', 'LIQUORE', 'BRODO'],
        hint: 'Bevande calde o alcoliche da bere a piccoli sorsi'
      },
      {
        category: 'Parole con "Fondo"',
        color: 'purple',
        level: 4,
        words: ['CAFFÈ', 'SCHIENA', 'SCALA', 'BOTTIGLIA'],
        hint: 'Espressioni con la parte più bassa o terminale'
      }
    ]
  },
  {
    id: 10,
    biomeId: 2,
    title: 'Livello 10: La Festa Patronale',
    subtitle: 'Suoni, bancarelle e fuochi',
    difficulty: 'Difficile',
    groups: [
      {
        category: 'Dolciumi da luna park',
        color: 'yellow',
        level: 1,
        words: ['CROCCANTE', 'ZUCCHERO', 'CREPES', 'FRITTELLE'],
        hint: 'Golositá da bancarella'
      },
      {
        category: 'Strumenti della banda paesana',
        color: 'green',
        level: 2,
        words: ['TROMBA', 'CLARINETTO', 'PIATTI', 'TAMBURO'],
        hint: 'Sfilano e suonano all\'aperto'
      },
      {
        category: 'Tipi di giochi pirotecnici',
        color: 'blue',
        level: 3,
        words: ['FONTANA', 'BENGALA', 'GIRANDOLA', 'PETARDO'],
        hint: 'Luci ed esplosioni nel cielo festivo'
      },
      {
        category: 'Cose che "scoppiano"',
        color: 'purple',
        level: 4,
        words: ['SALUTE', 'RITARDO', 'TEMPORALE', 'RISATA'],
        hint: 'Manifestazioni improvvise ed esuberanti'
      }
    ]
  },

  // --- BIOME 3: Foresta degli Intrecci (Livelli 11-15) ---
  {
    id: 11,
    biomeId: 3,
    title: 'Livello 11: Il Sentiero dei Tronchi',
    subtitle: 'Alberi e sottobosco',
    difficulty: 'Medio-Difficile',
    groups: [
      {
        category: 'Alberi da bosco montano',
        color: 'yellow',
        level: 1,
        words: ['FAGGIO', 'ABETE', 'PINO', 'LARICE'],
        hint: 'Giganti verdi che popolano le valli alpine'
      },
      {
        category: 'Parti di un albero',
        color: 'green',
        level: 2,
        words: ['RADICE', 'CORTECCIA', 'RAMO', 'CHIOMA'],
        hint: 'Dalla terra fino alla punta'
      },
      {
        category: 'Funghi commestibili pregiati',
        color: 'blue',
        level: 3,
        words: ['PORCINO', 'FINFERLO', 'OVULO', 'CHIODINO'],
        hint: 'Crescono nel muschio autunnale'
      },
      {
        category: 'Parole che iniziano per "CASA"',
        color: 'purple',
        level: 4,
        words: ['FORTE', 'RINGO', 'CASCATA', 'MATTA'],
        hint: 'Aggiungi "casa-" per formare parole composte'
      }
    ]
  },
  {
    id: 12,
    biomeId: 3,
    title: 'Livello 12: Il Rifugio del Gufo',
    subtitle: 'Nottetempo e saggezza',
    difficulty: 'Difficile',
    groups: [
      {
        category: 'Uccelli rapaci notturni',
        color: 'yellow',
        level: 1,
        words: ['GUFO', 'BARBAGIANNI', 'CIVETTA', 'ALLOCCO'],
        hint: 'Cacciano nel buio con occhi grandi'
      },
      {
        category: 'Fasi lunari',
        color: 'green',
        level: 2,
        words: ['NUOVA', 'CRESCENTE', 'PIENA', 'CALANTE'],
        hint: 'L\'aspetto del nostro satellite nel mese'
      },
      {
        category: 'Parole associate al sonno',
        color: 'blue',
        level: 3,
        words: ['PIGIAMA', 'CUSCINO', 'SOGNO', 'INSONNIA'],
        hint: 'Momento del riposo notturno'
      },
      {
        category: 'Si possono "svegliare"',
        color: 'purple',
        level: 4,
        words: ['VULCANO', 'CANE', 'SOSPETTO', 'RICORDO'],
        hint: 'Usi metaforici del risveglio'
      }
    ]
  },
  {
    id: 13,
    biomeId: 3,
    title: 'Livello 13: Il Ponte dei Sussurri',
    subtitle: 'Musica e risonanze',
    difficulty: 'Difficile',
    groups: [
      {
        category: 'Strumenti ad arco',
        color: 'yellow',
        level: 1,
        words: ['VIOLINO', 'VIOLA', 'VIOLONCELLO', 'CONTRABBASSO'],
        hint: 'Si suonano sfregando una bacchetta di crini'
      },
      {
        category: 'Termini di dinamica musicale',
        color: 'green',
        level: 2,
        words: ['PIANO', 'FORTE', 'CRESCENDO', 'ANDANTE'],
        hint: 'Indicazioni di volume e tempo sullo spartito'
      },
      {
        category: 'Tipi di chiave musicale',
        color: 'blue',
        level: 3,
        words: ['CHIAVI', 'BASSO', 'TENORE', 'SOPRANO'],
        hint: 'Segni all\'inizio del pentagramma'
      },
      {
        category: 'Cose che vibrano',
        color: 'purple',
        level: 4,
        words: ['CORDA', 'CELLULARE', 'TIMPANO', 'VOCE'],
        hint: 'Oscillano rapidamente generando onde'
      }
    ]
  },
  {
    id: 14,
    biomeId: 3,
    title: 'Livello 14: Lo Specchio d\'Acqua',
    subtitle: 'Riflessi e trasparenze',
    difficulty: 'Difficile',
    groups: [
      {
        category: 'Specchi d\'acqua naturali',
        color: 'yellow',
        level: 1,
        words: ['LAGO', 'STAGNO', 'PALUDE', 'POZZA'],
        hint: 'Bacini idrici superficiali'
      },
      {
        category: 'Grandi laghi d\'Italia',
        color: 'green',
        level: 2,
        words: ['GARDA', 'MAGGIORE', 'COMO', 'TRASIMENO'],
        hint: 'Famosi bacini geografici della penisola'
      },
      {
        category: 'Attività su acqua dolce',
        color: 'blue',
        level: 3,
        words: ['CANOA', 'PESCA', 'CANOTTAGGIO', 'PADDLE'],
        hint: 'Sport e svaghi lacustri'
      },
      {
        category: 'Parole che possono riflettere',
        color: 'purple',
        level: 4,
        words: ['SPECCHIO', 'MENTE', 'VETRO', 'ACQUA'],
        hint: 'In senso ottico o intellettivo'
      }
    ]
  },
  {
    id: 15,
    biomeId: 3,
    title: 'Livello 15: La Caverna di Cristallo',
    subtitle: 'Geminazioni e minerali',
    difficulty: 'Molto Difficile',
    groups: [
      {
        category: 'Pietre preziose',
        color: 'yellow',
        level: 1,
        words: ['DIAMANTE', 'RUBINO', 'SMERALDO', 'ZAFFIRO'],
        hint: 'Gemme rare e luccicanti'
      },
      {
        category: 'Metalli nobili o da conio',
        color: 'green',
        level: 2,
        words: ['ORO', 'ARGENTO', 'PLATINO', 'BRONZO'],
        hint: 'Materiali delle medaglie olimpiche'
      },
      {
        category: 'Formazioni carsiche',
        color: 'blue',
        level: 3,
        words: ['STALATTITE', 'STALAGMITE', 'COLONNA', 'INGHIOTTITOIO'],
        hint: 'Sculture millenarie di calcare nelle grotte'
      },
      {
        category: 'Cose definite "pure"',
        color: 'purple',
        level: 4,
        words: ['CASUALITÀ', 'POESIA', 'FOLLIA', 'RAZZA'],
        hint: 'Usano l\'aggettivo puro per enfatizzare l\'assolutezza'
      }
    ]
  },

  // --- BIOME 4: Vetta dei Misteri (Livelli 16-20) ---
  {
    id: 16,
    biomeId: 4,
    title: 'Livello 16: Il Colle dei Filosofi',
    subtitle: 'Pensieri e massime',
    difficulty: 'Difficile',
    groups: [
      {
        category: 'Branche della filosofia',
        color: 'yellow',
        level: 1,
        words: ['ETICA', 'LOGICA', 'ESTETICA', 'METAFISICA'],
        hint: 'Aree di indagine del pensiero umano'
      },
      {
        category: 'Figure retoriche comuni',
        color: 'green',
        level: 2,
        words: ['METAFORA', 'OSSIMORO', 'IPERBOLE', 'ANAFORA'],
        hint: 'Artifizi letterari ed espressivi'
      },
      {
        category: 'Grandi filosofi dell\'antichità',
        color: 'blue',
        level: 3,
        words: ['SOCRATE', 'PLATONE', 'ARISTOTELE', 'EPICURO'],
        hint: 'Pensatori della Grecia classica'
      },
      {
        category: 'Cose che si possono "perdere"',
        color: 'purple',
        level: 4,
        words: ['TEMPO', 'PAZIENZA', 'BUSSOLA', 'FILO'],
        hint: 'Espressioni idiomatiche con lo smarrimento'
      }
    ]
  },
  {
    id: 17,
    biomeId: 4,
    title: 'Livello 17: La Galleria degli Enigmi',
    subtitle: 'Doppi sensi e polisemie',
    difficulty: 'Molto Difficile',
    groups: [
      {
        category: 'Tipi di carte da gioco',
        color: 'yellow',
        level: 1,
        words: ['CUORI', 'QUADRI', 'FIORI', 'PICCHE'],
        hint: 'I quattro semi del mazzo francese'
      },
      {
        category: 'Significati della parola "PIANO"',
        color: 'green',
        level: 2,
        words: ['STRUMENTO', 'PROGETTO', 'LIVELLO', 'LENTO'],
        hint: 'Una sola parola dai molteplici usi'
      },
      {
        category: 'Cose che si "stendono"',
        color: 'blue',
        level: 3,
        words: ['PASTA', 'PANNI', 'TAPPO', 'VELO'],
        hint: 'Azioni domestiche o modi di dire'
      },
      {
        category: 'Anagrammi di AMOR',
        color: 'purple',
        level: 4,
        words: ['ROMA', 'RAMO', 'MORA', 'ARMO'],
        hint: 'Lettere A-M-O-R rimescolate'
      }
    ]
  },
  {
    id: 18,
    biomeId: 4,
    title: 'Livello 18: L\'Osservatorio Celeste',
    subtitle: 'Costellazioni e pianeti',
    difficulty: 'Molto Difficile',
    groups: [
      {
        category: 'Pianeti rocciosi del sistema solare',
        color: 'yellow',
        level: 1,
        words: ['MERCURIO', 'VENERE', 'TERRA', 'MARTE'],
        hint: 'I quattro mondi più vicini al Sole'
      },
      {
        category: 'Segni zodiacali di fuoco',
        color: 'green',
        level: 2,
        words: ['ARIETE', 'LEONE', 'SAGITTARIO', 'FUOCO'],
        hint: 'Trinità astrologica ardente'
      },
      {
        category: 'Strumenti astronomici',
        color: 'blue',
        level: 3,
        words: ['TELESCOPIO', 'ASTROLABIO', 'SATELLITE', 'SPETTROGRAFO'],
        hint: 'Apparecchiature per indagare lo spazio'
      },
      {
        category: 'Hanno a che fare con la luce',
        color: 'purple',
        level: 4,
        words: ['ANNO', 'BOLLETTA', 'AURORA', 'FARO'],
        hint: 'Significati letterali, scientifici o quotidiani'
      }
    ]
  },
  {
    id: 19,
    biomeId: 4,
    title: 'Livello 19: Il Labirinto di Dedalo',
    subtitle: 'Miti e labirinti mentali',
    difficulty: 'Esperto',
    groups: [
      {
        category: 'Mostri della mitologia greca',
        color: 'yellow',
        level: 1,
        words: ['MINOTAURO', 'MEDUSA', 'CHIMERA', 'SFINGE'],
        hint: 'Creature leggendarie affrontate da eroi'
      },
      {
        category: 'Elementi legati al filo di Arianna',
        color: 'green',
        level: 2,
        words: ['GOMITOLO', 'USCITA', 'TRACCIA', 'GUIDA'],
        hint: 'Come ritrovare la strada nel labirinto'
      },
      {
        category: 'Termini che indicano confusione',
        color: 'blue',
        level: 3,
        words: ['CAOS', 'BABELE', 'GUAZZABUGLIO', 'DISORDINE'],
        hint: 'Situazioni di disorientamento o scompiglio'
      },
      {
        category: 'Parole che possono essere "Senza via..."',
        color: 'purple',
        level: 4,
        words: ['USCITA', 'SCAMPO', 'RITORNO', 'MEZZO'],
        hint: 'Espressioni di vicolo cieco o perentorietà'
      }
    ]
  },
  {
    id: 20,
    biomeId: 4,
    title: 'Livello 20: La Vetta Suprema',
    subtitle: 'La sfida finale di Intrecci',
    difficulty: 'Maestro',
    groups: [
      {
        category: 'Campioni della letteratura italiana',
        color: 'yellow',
        level: 1,
        words: ['DANTE', 'PETRARCA', 'BOCCACCIO', 'ARIOSTO'],
        hint: 'I sommi padri della lingua e della poesia'
      },
      {
        category: 'Le quattro virtù cardinali',
        color: 'green',
        level: 2,
        words: ['PRUDENZA', 'GIUSTIZIA', 'FORTEZZA', 'TEMPERANZA'],
        hint: 'I pilastri etici morali della tradizione'
      },
      {
        category: 'Tipi di puzzle o rompicapo',
        color: 'blue',
        level: 3,
        words: ['CRUCIVERBA', 'REBUS', 'ANAGRAMMA', 'SUDOKU'],
        hint: 'I passatempi enigmistici per la mente'
      },
      {
        category: 'Parole formate dalle stesse 3 lettere',
        color: 'purple',
        level: 4,
        words: ['ALI', 'LIA', 'ILA', 'LAI'],
        hint: 'Permutazioni pure di 3 singoli caratteri'
      }
    ]
  }
];
