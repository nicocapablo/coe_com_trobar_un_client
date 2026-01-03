// =======================
// PREGUNTAS (RELLENA TÚ)
// =======================

// --- SENTENCIAS (V / F) ---
const preguntasSentencias = [
  {
    texto: "Identificar els clients potencials és el primer pas per aconseguir nous clients.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El perfil del client ideal s’ha de definir una sola vegada i no cal actualitzar-lo.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "La recerca de mercat ajuda a conèixer millor les necessitats dels clients potencials.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Només l’equip comercial ha de conèixer el producte en profunditat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Conèixer bé el producte permet oferir una comunicació coherent al client.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Un CRM serveix per gestionar les relacions amb els clients i les interaccions comercials.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Crear un blog amb contingut útil pot ajudar a atraure clients potencials.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La newsletter és una eina pensada només per captar nous clients, no per mantenir relacions.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Treballar la imatge de marca ajuda que els clients associïn l’empresa amb confiança i qualitat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El contacte cara a cara amb el client pot afavorir la creació de relacions personals.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Una presentació comercial efectiva s’ha de centrar principalment en el producte i no en el client.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Focalitzar-se en les necessitats del client augmenta les possibilitats de venda.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El retargeting permet recordar la marca a clients potencials que ja han mostrat interès.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El social selling utilitza les xarxes socials per construir relacions comercials a llarg termini.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’experiència del client no influeix en la diferenciació respecte a la competència.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Un tracte personalitzat pot millorar la percepció de la marca.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els call to action serveixen per convertir visitants en clients.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Oferir proves gratuïtes o demostracions pot generar confiança en el client.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El networking permet ampliar la xarxa de contactes professionals.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Participar en esdeveniments del sector pot ajudar a captar nous clients.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Ser creatiu en les accions comercials pot ajudar a diferenciar-se de la competència.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els casos d’èxit i les ressenyes generen confiança en possibles compradors.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El seguiment de les accions comercials permet millorar els resultats.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Mesurar i analitzar els resultats ajuda a optimitzar l’estratègia de captació de clients.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La venda consultiva busca només una venda puntual i immediata.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "La venda consultiva es basa en l’assessorament personalitzat al client.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Invertir en tecnologia pot millorar l’eficiència i la productivitat comercial.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’ús d’eines digitals permet optimitzar els recursos comercials.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Captar clients és un procés puntual que no requereix millora contínua.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "El seguiment i l’anàlisi constant són claus per aconseguir clients de manera sostinguda.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  }
];


// --- MINITEST (3 OPCIONES) ---

const preguntasMinitest = [
  {
    texto: "Una empresa vol començar a captar clients, però no sap exactament a qui s’ha d’adreçar. Quina és la millor acció inicial?",
    opciones: [
      "a) Llençar una campanya massiva",
      "b) Identificar els clients potencials",
      "c) Reduir els preus"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa revisa periòdicament el perfil del seu client ideal segons els canvis del mercat. Quin concepte està aplicant?",
    opciones: [
      "a) Fidelització",
      "b) Recerca de mercat contínua",
      "c) Venda impulsiva"
    ],
    correcta: "b"
  },
  {
    texto: "Els treballadors d’una empresa no saben explicar bé el producte als clients. Què hauria de millorar l’empresa?",
    opciones: [
      "a) El coneixement del producte",
      "b) El retargeting",
      "c) El networking"
    ],
    correcta: "a"
  },
  {
    texto: "Una empresa centralitza totes les interaccions amb clients en una eina digital. Quina eina està utilitzant?",
    opciones: [
      "a) ERP",
      "b) CRM",
      "c) CMS"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa crea articles útils relacionats amb el seu sector per atraure clients. Quina acció està realitzant?",
    opciones: [
      "a) Retargeting",
      "b) Creació d’un blog",
      "c) Promoció de vendes"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa envia correus periòdics amb contingut rellevant als seus contactes. Quina eina està utilitzant?",
    opciones: [
      "a) Newsletter",
      "b) Publicitat exterior",
      "c) Telemarketing"
    ],
    correcta: "a"
  },
  {
    texto: "Una marca cuida el seu logotip, el to de comunicació i els valors que transmet. Quin aspecte està treballant?",
    opciones: [
      "a) La imatge de marca",
      "b) El cost d’adquisició",
      "c) La segmentació"
    ],
    correcta: "a"
  },
  {
    texto: "Un comercial realitza videotrucades per crear una relació més propera amb els clients. Quin tipus d’acció és?",
    opciones: [
      "a) Contacte cara a cara",
      "b) Retargeting",
      "c) Màrqueting de continguts"
    ],
    correcta: "a"
  },
  {
    texto: "Una presentació comercial se centra en els beneficis per al client i no en les característiques tècniques. Quin enfocament segueix?",
    opciones: [
      "a) Enfocament al producte",
      "b) Enfocament al client",
      "c) Enfocament al preu"
    ],
    correcta: "b"
  },
  {
    texto: "Un usuari visita una web però no compra, i posteriorment veu anuncis d’aquesta marca. Quina tècnica s’està aplicant?",
    opciones: [
      "a) Social selling",
      "b) Retargeting",
      "c) Networking"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa construeix relacions comercials a través de LinkedIn de manera constant. Quina estratègia utilitza?",
    opciones: [
      "a) Social selling",
      "b) Promoció de vendes",
      "c) Publicitat tradicional"
    ],
    correcta: "a"
  },
  {
    texto: "Una empresa destaca pel tracte personalitzat i la qualitat del servei. Quin factor està potenciant?",
    opciones: [
      "a) L’experiència del client",
      "b) El cost del producte",
      "c) El volum de vendes"
    ],
    correcta: "a"
  },
  {
    texto: "Una web inclou botons com “Demana pressupost” o “Contacta ara”. Quin element està activant?",
    opciones: [
      "a) Retargeting",
      "b) Call to action",
      "c) Branding"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa ofereix una demostració personalitzada abans de la compra. Quin objectiu persegueix?",
    opciones: [
      "a) Reduir costos",
      "b) Generar confiança",
      "c) Augmentar el preu"
    ],
    correcta: "b"
  },
  {
    texto: "Un professional assisteix a fires i esdeveniments del sector per conèixer nous contactes. Quina acció està realitzant?",
    opciones: [
      "a) Retargeting",
      "b) Networking",
      "c) Publicitat digital"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa prova noves tècniques comercials i millora les que funcionen millor. Quin principi aplica?",
    opciones: [
      "a) Creativitat i millora contínua",
      "b) Estandardització rígida",
      "c) Venda agressiva"
    ],
    correcta: "a"
  },
  {
    texto: "Una marca publica testimonis de clients satisfets al seu web. Quin objectiu té aquesta acció?",
    opciones: [
      "a) Augmentar el CAC",
      "b) Generar confiança",
      "c) Reduir la segmentació"
    ],
    correcta: "b"
  },
  {
    texto: "Un comercial contacta amb un client després d’una reunió per saber si té dubtes. Quin pas està fent?",
    opciones: [
      "a) Captació",
      "b) Seguiment",
      "c) Retargeting"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa analitza quines accions comercials han funcionat millor. Quin procés està aplicant?",
    opciones: [
      "a) Segmentació",
      "b) Mesura i anàlisi de resultats",
      "c) Venda impulsiva"
    ],
    correcta: "b"
  },
  {
    texto: "Un venedor ofereix assessorament personalitzat per crear una relació a llarg termini. Quin tipus de venda aplica?",
    opciones: [
      "a) Venda agressiva",
      "b) Venda consultiva",
      "c) Venda per impuls"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa inverteix en eines digitals per millorar l’eficiència comercial. Quin objectiu persegueix?",
    opciones: [
      "a) Augmentar costos",
      "b) Optimitzar recursos",
      "c) Reduir la qualitat"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa detecta que molts clients arriben gràcies al contingut que publica. Quina estratègia funciona?",
    opciones: [
      "a) Màrqueting de continguts",
      "b) Venda agressiva",
      "c) Publicitat exterior"
    ],
    correcta: "a"
  },
  {
    texto: "Una empresa utilitza diferents canals per contactar amb un client segons el moment. Quin principi aplica?",
    opciones: [
      "a) Comunicació multicanal",
      "b) Venda impulsiva",
      "c) Reducció de costos"
    ],
    correcta: "a"
  },
  {
    texto: "Un client recorda una marca per la seva coherència i confiança. Quin factor ha estat clau?",
    opciones: [
      "a) Imatge de marca",
      "b) Preu baix",
      "c) Publicitat exterior"
    ],
    correcta: "a"
  },
  {
    texto: "Una empresa ajusta el seu discurs comercial segons el tipus de client. Quin enfocament segueix?",
    opciones: [
      "a) Venda estandarditzada",
      "b) Orientació al client",
      "c) Orientació a la producció"
    ],
    correcta: "b"
  },
  {
    texto: "Un usuari es converteix en client després de diverses interaccions amb la marca. Quin procés s’ha produït?",
    opciones: [
      "a) Conversió",
      "b) Segmentació",
      "c) Retenció passiva"
    ],
    correcta: "a"
  },
  {
    texto: "Una empresa decideix invertir més en els canals que donen millors resultats. Quin criteri aplica?",
    opciones: [
      "a) Intuïció",
      "b) Anàlisi de dades",
      "c) Imitació de competidors"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa ofereix un servei excel·lent després de la venda per assegurar repetició. Quin objectiu busca?",
    opciones: [
      "a) Captació puntual",
      "b) Fidelització",
      "c) Reducció del CAC"
    ],
    correcta: "b"
  },
  {
    texto: "Una marca adapta les seves accions comercials segons els resultats obtinguts. Quin principi aplica?",
    opciones: [
      "a) Rigidesa comercial",
      "b) Millora contínua",
      "c) Venda impulsiva"
    ],
    correcta: "b"
  }
];


// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien!",
  "¡Correcto!",
  "¡Buen trabajo!",
  "¡Así se hace!",
  "¡Perfecto!"
];

// =======================
// VARIABLES
// =======================

let modo = "";
let preguntasParaEsteTest = [];
let i = 0;
let puntuacion = 0;

// =======================
// FUNCIONES
// =======================

function barajar(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
  }
}

function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarMenuInicial() {
  mostrarMensaje(
    "👋 Hola, bienvenido al Tema 1.\n\n¿Qué quieres practicar?",
    "bot"
  );
  mostrarMensaje(
    "A) Sentencias (Verdadero / Falso)\n      o \n B)Mini-test (3 opciones)",
    "bot"
  );

  configurarBoton("btnA", "A", iniciarSentencias);
  configurarBoton("btnB", "B", iniciarMinitest);
  ocultarBotones(["btnC", "btnD"]);
}

function iniciarSentencias() {
  modo = "sentencias";
  i = 0;
  puntuacion = 0;

  barajar(preguntasSentencias);
  preguntasParaEsteTest = preguntasSentencias.slice(0, 30);

  configurarBoton("btnA", "V", () => responder("v"));
  configurarBoton("btnB", "F", () => responder("f"));
  ocultarBotones(["btnC", "btnD"]);

  mostrarPregunta();
}

function iniciarMinitest() {
  modo = "minitest";
  i = 0;
  puntuacion = 0;

  barajar(preguntasMinitest);
  preguntasParaEsteTest = preguntasMinitest.slice(0, 30);

  configurarBoton("btnA", "A", () => responder("a"));
  configurarBoton("btnB", "B", () => responder("b"));
  configurarBoton("btnC", "C", () => responder("c"));
  ocultarBotones(["btnD"]);

  mostrarPregunta();
}

function mostrarPregunta() {
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  const texto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(texto, "bot");
}

function responder(opcion) {
  const p = preguntasParaEsteTest[i];
  mostrarMensaje(opcion.toUpperCase(), "user");

  if (opcion === p.correcta) {
    puntuacion++;
    mostrarMensaje(
      frases_animo[Math.floor(Math.random() * frases_animo.length)],
      "bot"
    );
  } else {
    mostrarMensaje(
      `❌ Incorrecte. La correcta era ${p.correcta.toUpperCase()}`,
      "bot"
    );
  }

  i++;

  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 600);
  } else {
    setTimeout(() => {
      mostrarMensaje(
        `🏁 Resultat final: ${puntuacion} / ${preguntasParaEsteTest.length}`,
        "bot"
      );
      desactivarBotones();
    }, 600);
  }
}

function configurarBoton(id, texto, accion) {
  const btn = document.getElementById(id);
  btn.style.display = "block";
  btn.textContent = texto;
  btn.onclick = accion;
}

function ocultarBotones(ids) {
  ids.forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function desactivarBotones() {
  document.querySelectorAll("button").forEach(b => b.disabled = true);
}

// =======================
// ARRANQUE
// =======================

document.addEventListener("DOMContentLoaded", mostrarMenuInicial);




