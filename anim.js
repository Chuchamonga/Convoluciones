// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hace mucho tiempo le hago caso al corazón", time: 10 },
  { text: "Y pasan los día', los mese' pensando en tu olor", time: 20 },
  { text: "Ha llegado el tiempo para usar la razón", time: 26.8 },
  { text: "Ante' que sea tarde y sin querer me parta en do'", time: 33 },
  { text: "Antes de que salga el sol y hunda el acelerador", time: 39 },
  { text: "Que vaya sin frenos y pierda el control", time: 41 },
  { text: "Nada más seremos do', tú y yo acariciándono'", time: 45 },
  { text: "En medio del tiempo, sin decir adiós", time: 48 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 50 },
  { text: "Que con eso yo estoy bien", time: 55 },
  { text: "Hoy he vuelto a nacer", time: 58 },
  { text: "Hace tiempo que no agarro a nadie de la mano", time: 62 },
  { text: "Hace tiempo que no envío: 'buenos días, te amo'", time: 69 },
  { text: "Pero tú me tiene' enredao, me envolví", time: 73 },
  { text: "Iba por mi camino y me perdí", time: 77 },
  { text: "Mi mirada cambió cuando tus ojos vi", time: 81 },
  { text: "Bye-bye a los culo', ni me despedí", time: 84 },
  { text: "Yo no te busqué, no", time: 87 },
  { text: "Chocamo' en el trayecto", time: 90 },
  { text: "Con tu alma es la que yo conecto", time: 92 },
  { text: "Tranquila, no tiene que ser perfecto, no", time: 95 },
  { text: "Aquí no existe el pecado", time: 98 },
  { text: "Y equivocarse es bonito", time:  102},
  { text: "Los errore' son placere'", time: 105 },
  { text: "Igual que to' tus besito'", time: 108 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 110 },
  { text: "Que con eso yo estoy bien", time: 115 },
  { text: "Hoy he vuelto a nacer", time: 118 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 122 },
  { text: "Que con eso yo estoy bien", time: 127 },
  { text: "Hoy he vuelto a nacer", time: 131 },
  { text: "Tú y yo, tú y yo, tú y yo (tú y yo, tú y yo)", time: 135 },
  { text: "Tú y yo, tú y yo (tú y yo, tú y yo), tú y yo", time: 142 },
  { text: "Tú y yo, tú y yo", time: 151 },
  { text: "Tú y yo, tú y yo", time: 156 },
  { text: "Yo no me dejo llevar de nadie", time: 158 },
  { text: "Yo solo me dejo llevar de tu sonrisa", time: 160 },
  { text: "Y del lunar cerquita de tu boca", time: 163 },
  { text: "Si yo estoy loco, tú estás loquita", time: 166 },
  { text: "Pero, baby, como tú no hay otra, no", time: 169 },
  { text: "Quiero regalarte girasole'", time: 173 },
  { text: "Ir pa la playa y buscarte caracole'", time: 176 },
  { text: "Cuando estoy contigo, yo no miro el Rolex", time: 180 },
  { text: "Vamo' a bailar 200 cancione'", time: 183 },
  { text: "Nadie me pone como tú me pone'", time: 186  },
  { text: "Mmm, mm-mm, mmm", time:  189 },
  { text: "Mmm, mm-mm, mmm", time: 192 },
  { text: "Yo le hablo a Dio' y tú ere' su respuesta", time: 200},
  { text: "Aprendí que los momento' lindo' nunca cuestan", time: 204},
  { text: "Como cuando me regalas tu mirada", time: 206 },
  { text: "Y el sol, su puesta (ey, ey), y el sol, su puesta", time: 209 },
  { text: "Cuando estoy encima de ti, de ti", time: 211 },
  { text: "Mami, yo me olvido de todo, de todo", time: 215 },
  { text: "No hace falta nadie aquí", time: 218 },
  { text: "Solamente tú y yo", time: 221 },
  { text: "Antes de que salga el sol y hunda el acelerador", time: 225 },
  { text: "Que vaya sin frenos y pierda el control", time: 227 },
  { text: "Nada más seremos do', tú y yo acariciándono'", time: 230 },
  { text: "En medio del tiempo, sin decir adiós", time: 233 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 236 },
  { text: "Que con eso yo estoy bien", time: 241 },
  { text: "Hoy he vuelto a nacer", time: 244 },
  { text: "Y solo mírame con esos ojito' lindo'", time: 248 },
  { text: "Que con eso yo estoy bien", time: 253 },
  { text: "Hoy he vuelto a nacer", time: 257 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time + 2) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 2000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
