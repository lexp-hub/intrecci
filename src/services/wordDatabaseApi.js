
export const ITALIAN_CATEGORY_REGISTRY = {
  yellow: [
    {
      name: "TIPI DI AGRUMI",
      wikiCat: "Categoria:Agrumi",
      emoji: "sun",
      seeds: ["LIMONE", "ARANCIA", "MANDARINO", "POMPELMO", "CEDRO", "BERGAMOTTO", "LIME", "CLEMENTINA"]
    },
    {
      name: "FORMATI DI PASTA",
      wikiCat: "Categoria:Tipi_di_pasta",
      emoji: "pasta",
      seeds: ["PENNE", "FUSILLI", "SPAGHETTI", "RIGATONI", "FARFALLE", "TAGLIATELLE", "GNOCCHI", "PACCHERI", "ORICCHIETTE", "TORTIGLIONI"]
    },
    {
      name: "SPORT CON LA PALLA",
      wikiCat: "Categoria:Sport_con_la_palla",
      emoji: "trophy",
      seeds: ["CALCIO", "BASKET", "TENNIS", "PALLAVOLO", "RUGBY", "GOLF", "PALLANUOTO", "BASEBALL"]
    },
    {
      name: "CAPI D'ABBIGLIAMENTO",
      wikiCat: "Categoria:Indumenti",
      emoji: "sparkle",
      seeds: ["CAPPOTTO", "CAMICIA", "MAGLIONE", "PANTALONI", "GIACCA", "GONNA", "SCIARPA", "GIUBBOTTO"]
    },
    {
      name: "FORMAGGI ITALIANI",
      wikiCat: "Categoria:Formaggi_italiani",
      emoji: "pasta",
      seeds: ["PARMIGIANO", "GORGONZOLA", "PECORINO", "FONTINA", "MOZZARELLA", "BURRATA", "ASIAGO", "TALEGGIO", "PROVOLONE"]
    }
  ],

  green: [
    {
      name: "STRUMENTI MUSICALI",
      wikiCat: "Categoria:Strumenti_musicali",
      emoji: "music",
      seeds: ["CHITARRA", "PIANOFORTE", "VIOLINO", "FLAUTO", "BATTERIA", "TROMBA", "ARPA", "CLARINETTO", "OBOE", "SASSOFONO"]
    },
    {
      name: "COSTELLAZIONI VISIBILI",
      wikiCat: "Categoria:Costellazioni",
      emoji: "moon",
      seeds: ["ORIONE", "CASSIOPEA", "ANDROMEDA", "AQUILA", "BALENA", "AURIGA", "PEGASO", "CIGNO", "LIRA", "TORO"]
    },
    {
      name: "DISCIPLINE OLIMPICHE",
      wikiCat: "Categoria:Discipline_olimpiche",
      emoji: "trophy",
      seeds: ["NUOTO", "SCHERMA", "ATLETICA", "CANOTTAGGIO", "TUFFI", "JUDO", "TIRO", "VELA", "PUGILATO"]
    },
    {
      name: "CREATURE DEL MARE",
      wikiCat: "Categoria:Animali_marini",
      emoji: "compass",
      seeds: ["DELFINO", "SQUALO", "POLPO", "TARTARUGA", "BALENA", "MEDUSA", "ORCA", "MANTA", "GRANCHIO"]
    },
    {
      name: "ALBERI DELLA FORESTA",
      wikiCat: "Categoria:Alberi",
      emoji: "tree",
      seeds: ["QUERCIA", "FAGGIO", "PINO", "BETULLA", "CASTAGNO", "PIOPPO", "ABETE", "OLMO", "TIGLIO"]
    }
  ],

  blue: [
    {
      name: "PIETRE PREZIOSE E GEMME",
      wikiCat: "Categoria:Gemme",
      emoji: "sparkle",
      seeds: ["DIAMANTE", "SMERALDO", "RUBINO", "ZAFFIRO", "AMETISTA", "TOPAZIO", "QUARZO", "GIADA", "AMBRA"]
    },
    {
      name: "ERBE E SPEZIE IN CUCINA",
      wikiCat: "Categoria:Spezie",
      emoji: "coffee",
      seeds: ["CANNELLA", "ORIGANO", "BASILICO", "ROSMARINO", "PEPE", "TIMO", "ZAFFERANO", "CHIODI", "MENTA"]
    },
    {
      name: "FIUMI CHE SCORRONO IN ITALIA",
      wikiCat: "Categoria:Fiumi_d'Italia",
      emoji: "compass",
      seeds: ["TEVERE", "ARNO", "ADIGE", "PO", "TICINO", "VOLTURNO", "BRENTA", "TAGLIAMENTO", "PIAVE"]
    },
    {
      name: "ELEMENTI DI UN LIBRO",
      wikiCat: "Categoria:Parti_del_libro",
      emoji: "book",
      seeds: ["CAPITOLO", "INDICE", "COPERTINA", "PREFAZIONE", "DEDICA", "GLOSSARIO", "DORSO", "PAGINA"]
    },
    {
      name: "OGGETTI DA SCRIVANIA",
      wikiCat: "Categoria:Cancelleria",
      emoji: "lightbulb",
      seeds: ["GRAFFETTA", "FORBICI", "RIGHELLO", "PINZATRICE", "EVIDENZIATORE", "GOMMA", "BLOCCO", "CALCOLATRICE"]
    }
  ],

  purple: [
    {
      name: "PAROLE CHE TERMINANO CON 'TECA'",
      wikiCat: null,
      emoji: "puzzle",
      seeds: ["BIBLIO", "DISCO", "PINACO", "ENO", "FUMETTO", "GIPSO", "VIDEO", "FONO"]
    },
    {
      name: "TIPI DI 'CARTA'",
      wikiCat: null,
      emoji: "sparkle",
      seeds: ["IDENTITÀ", "CREDITO", "BOLLATA", "FORNO", "REGALO", "VETRATA", "IGIENICA", "CARBONE"]
    },
    {
      name: "POSSONO ESSERE SEGUITI DA 'NOTTE'",
      wikiCat: null,
      emoji: "moon",
      seeds: ["BUONA", "MEZZA", "PRIMA", "TAVOLINO", "OCCHIALI", "NOTTOLA", "FATA", "GUARDIA"]
    },
    {
      name: "SI POSSONO 'DARE'",
      wikiCat: null,
      emoji: "key",
      seeds: ["MANO", "RETTA", "SPAGO", "CORDA", "BUCA", "FUOCO", "NUMERI", "TEMPO"]
    },
    {
      name: "PAROLE CON LA DOPPIA 'ZZ'",
      wikiCat: null,
      emoji: "puzzle",
      seeds: ["PIAZZA", "TAZZA", "COZZA", "RAZZO", "PEZZO", "POZZO", "MEZZO", "CORAZZA"]
    },
    {
      name: "POSSONO ESSERE 'SALATI'",
      wikiCat: null,
      emoji: "pasta",
      seeds: ["CONTO", "PREZZO", "POPOLETTI", "SNACK", "PIATTO", "MARE", "LAGO", "BURRO"]
    }
  ]
};

const EXCLUDED_SUFFIXES = ['LOGIA', 'METRIA', 'GRAFIA', 'ISMO', 'LISTA', 'PORTALE', 'CATEGORIA'];

function sanitizeWord(raw) {
  if (!raw) return null;
  let w = raw.replace(/\s*\(.*\)/g, '').trim();
  if (w.includes(':')) return null;

  const parts = w.split(/\s+/);
  if (parts.length > 1) {
    w = parts[0];
  }

  w = w.toUpperCase().replace(/[^A-ZÀÈÉÌÒÙ]/g, '');
  if (w.length < 3 || w.length > 12) return null;

  for (const suf of EXCLUDED_SUFFIXES) {
    if (w.endsWith(suf)) return null;
  }

  return w;
}

async function fetchWikiWords(wikiCat) {
  if (!wikiCat) return [];
  try {
    const url = `https://it.wikipedia.org/w/api.php?origin=*&action=query&list=categorymembers&cmtitle=${encodeURIComponent(wikiCat)}&format=json&cmlimit=30`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    const members = data?.query?.categorymembers || [];
    const words = members
      .map(m => sanitizeWord(m.title))
      .filter(Boolean);
    return [...new Set(words)];
  } catch (err) {
    console.warn(`Errore fetch API per ${wikiCat}:`, err);
    return [];
  }
}

export async function generatePuzzleFromDatabase(existingPuzzleCount = 5) {
  const tiers = ['yellow', 'green', 'blue', 'purple'];
  const chosenCategories = [];
  const usedWords = new Set();

  for (let i = 0; i < tiers.length; i++) {
    const tier = tiers[i];
    const catList = ITALIAN_CATEGORY_REGISTRY[tier];
    const cat = catList[Math.floor(Math.random() * catList.length)];

    let candidateWords = [];
    if (cat.wikiCat) {
      try {
        const apiWords = await fetchWikiWords(cat.wikiCat);
        candidateWords = [...apiWords.slice(0, 8), ...cat.seeds];
      } catch {
        candidateWords = [...cat.seeds];
      }
    } else {
      candidateWords = [...cat.seeds];
    }

    const shuffled = [...new Set(candidateWords)].sort(() => 0.5 - Math.random());
    const validWords = [];

    for (const w of shuffled) {
      if (!usedWords.has(w) && w.length >= 3 && w.length <= 11) {
        validWords.push(w);
        usedWords.add(w);
      }
      if (validWords.length === 4) break;
    }

    if (validWords.length < 4) {
      for (const sw of cat.seeds) {
        if (!usedWords.has(sw)) {
          validWords.push(sw);
          usedWords.add(sw);
        }
        if (validWords.length === 4) break;
      }
    }

    chosenCategories.push({
      level: i + 1,
      color: tier,
      category: cat.name,
      emoji: cat.emoji || 'sparkle',
      description: `Categoria generata da Database (${cat.name.toLowerCase()})`,
      words: validWords
    });
  }

  const newId = existingPuzzleCount + 1;
  const newPuzzle = {
    id: newId,
    title: `Puzzle #${newId} — Database Parole`,
    subtitle: "Generato dinamicamente con l'API lessicale italiana",
    difficulty: "Dinamico",
    groups: chosenCategories
  };

  return newPuzzle;
}
