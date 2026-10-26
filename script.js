// Base de datos cronológica automatizada. Arranca el martes 27 de Octubre de 2026.
const capitulosAmor = [
    {
        numero: 5,
        unlockDate: new Date('2026-10-27T00:00:00+01:00'), // Martes 27 Octubre
        titulo: "Capítulo 5: El inicio de nuestra saga",
        texto: "¡Hola, mi amor hermoso! Qué ilusión me hace que por fin le des a este botoncito y veas esto. Quería empezar este cuaderno digital con el capítulo cinco porque, para mí, marca una etapa preciosa donde lo nuestro ya no es coincidencia, es nuestra historia elegida. Me pongo a pensar en la cantidad de detalles tuyos que me alegran el día entero y no terminaría nunca. Me fascina cómo me miras, la complicidad tan bonita que tenemos y la calma que me transmites cuando el mundo va demasiado rápido. Este es solo el primer paso de un rincón secreto que se abrirá para ti semana tras semana. Quédate cerquita, amor, que la aventura se pone cada vez mejor."
    },
    {
        numero: 6,
        unlockDate: new Date('2026-11-03T00:00:00+01:00'), // Martes 3 Noviembre
        titulo: "Capítulo 6: Mis paisajes favoritos",
        texto: "Feliz nueva semana, mi amor. Hoy me desperté pensando en cuál es mi lugar favorito en el mundo entero, y la respuesta siempre termina siendo el mismo sitio: a tu lado. Me da igual si estamos caminando por ahí sin rumbo o tirados en el sofá hablando de cualquier tontería, lo valioso es que eres tú quien está ahí. Tienes esa magia tan tuya de convertir un día cualquiera en un recuerdo que me guardo para siempre. Gracias por ser mi refugio, por reírte de mis chistes malos y por darme los abrazos más sinceros del planeta. Eres mi momento preferido de la semana."
    },
    {
        numero: 7,
        unlockDate: new Date('2026-11-10T00:00:00+01:00'), // Martes 10 Noviembre
        titulo: "Capítulo 7: Esos pequeños detalles",
        texto: "Hola amor de mi vida. Hoy me apetecía recordarte lo mucho que me encantan esos pequeños gestos tuyos que a lo mejor tú ni notas. Tu forma de buscar mi mano cuando caminamos, cómo arrugas la nariz al reírte a carcajadas, o la manera tan bonita en la que me escuchas cuando te cuento mis cosas. Esas pequeñeces hacen que me vuelva a enamorar de ti cada mañana. No necesitas hacer nada extraordinario para ser la persona más increíble ante mis ojos, te basta con ser exactamente como eres. Te amo infinitamente."
    },
    {
        numero: 8,
        unlockDate: new Date('2026-11-17T00:00:00+01:00'), // Martes 17 Noviembre
        titulo: "Capítulo 8: Nuestro propio idioma",
        texto: "¡Feliz martes, amor! Es genial pensar en cómo hemos construido nuestro propio planeta pequeño en este tiempo. Tenemos bromas que solo nosotros dos entendemos, miradas que lo dicen todo sin necesidad de soltar una sola palabra y un lenguaje tan único que me hace sentir en casa al instante. Me encanta saber que comparto esa intimidad tan pura contigo. Nadie me conoce como tú, y nadie me hace sentir tan sumamente feliz y protegido. Eres mi cable a tierra y mi locura favorita."
    },
    {
        numero: 9,
        unlockDate: new Date('2026-11-24T00:00:00+01:00'), // Martes 24 Noviembre
        titulo: "Capítulo 9: El sonido de tu risa",
        texto: "Amor, si pudiera embotellar un sonido para escucharlo en bucle los días grises, elegiría sin dudarlo la melodía de tu risa. Es el sonido más alegre y curativo que conozco. Cuando estás feliz, todo a mi alrededor se ilumina un poquito más. Me encanta hacer el tonto solo por ver cómo se te achinan los ojos al sonreír. Gracias por regalarme tanta luz, por curar mis días malos con solo aparecer y por recordarme lo bonita que es la vida cuando se comparte con la persona adecuada."
    },
    {
        numero: 10,
        unlockDate: new Date('2026-12-01T00:00:00+01:00'), // Martes 1 Diciembre
        titulo: "Capítulo 10: Mirando hacia atrás",
        texto: "Llegamos al capítulo diez, amor mío, y qué viaje tan espectacular. Si miro atrás hacia el día en que empezamos a escribir esto, me doy cuenta de cuánto hemos crecido juntos. Hemos superado baches, aprendido el uno del otro y fortalecido esto que nos une de una manera preciosa. Me siento súper orgulloso de lo que somos y de cómo nos cuidamos mutuamente. No hay manual para el amor perfecto, pero estoy seguro de que lo que nosotros hacemos se le parece muchísimo."
    },
    {
        numero: 11,
        unlockDate: new Date('2026-12-08T00:00:00+01:00'), // Martes 8 Diciembre
        titulo: "Capítulo 11: Los días de frío",
        texto: "Hola amor. Ahora que los días se vuelven más fríos, me da un abrigo enorme saber que te tengo cerca. Eres mi calidez constante. Me encanta planear tardes enteros contigo bajo la manta, viendo pelis o simplemente estando abrazados mientras el tiempo pasa afuera. Contigo aprendí que el invierno no es tan frío si tienes a alguien tan especial llenándote el corazón de calor. Gracias por ser mi rincón seguro hoy y todos los días de mi vida."
    },
    {
        numero: 12,
        unlockDate: new Date('2026-12-15T00:00:00+01:00'), // Martes 15 Diciembre
        titulo: "Capítulo 12: Mi confidente y más",
        texto: "Amor, hoy quería darte las gracias por ser mucho más que mi pareja. Eres mi mejor amigo, mi confidente número uno y la primera persona a la que quiero contarle cuando me pasa algo bueno o algo malo. Saber que puedo desnudar mi alma contigo sin miedo a ser juzgado es el regalo más liberador del mundo. Confío en ti con los ojos cerrados y me encanta la complicidad tan transparente que nos define. Eres mi equipo de una sola persona."
    },
    {
        numero: 13,
        unlockDate: new Date('2026-12-22T00:00:00+01:00'), // Martes 22 Diciembre
        titulo: "Capítulo 13: La magia de fin de año",
        texto: "¡Feliz semana, mi amor lindo! Estamos en una época del año mágica, llena de luces y de balances, y mi mayor acierto siempre será haberte cuidado y elegido. Al hacer recuento de mis momentos favoritos de estos meses, tú apareces en cada rincón de mi memoria. Gracias por llenar este año de recuerdos imborrables, de risas compartidas y de un amor tan sano que me hace querer ser mejor persona cada día. Eres mi mejor regalo de navidad adelantado."
    },
    {
        numero: 14,
        unlockDate: new Date('2026-12-29T00:00:00+01:00'), // Martes 29 Diciembre
        titulo: "Capítulo 14: Brindando por nosotros",
        texto: "Hola amor. A puntito de cerrar un año y abrir otro, solo puedo pensar en la suerte tan inmensa que tengo de despedir los meses cogido de tu mano. Brindo por todo lo que hemos vivido, por las charlas nocturnas, los besos improvisados y los momentos en los que nos sostuvimos el uno al otro. No sé qué nos deparará el futuro, pero mientras sea contigo, sé que valdrá la pena vivir cada segundo. Te amo con locura absoluta."
    },
    {
        numero: 15,
        unlockDate: new Date('2027-01-05T00:00:00+01:00'), // Martes 5 Enero
        titulo: "Capítulo 15: Nuevas hojas en blanco",
        texto: "Feliz año nuevo, amor mío. Comenzamos un nuevo ciclo y no se me ocurre nadie mejor con quien rellenar estas hojas en blanco. Quiero que este año coleccionemos más escapadas, más risas compartidas a deshora, abrazos eternos de los que te reinician el cuerpo y planes improvisados. Prometo seguir cuidándote, escuchándote y recordándote todos los días lo increíble que eres. Gracias por iniciar otro año a mi lado."
    },
    {
        numero: 16,
        unlockDate: new Date('2027-01-12T00:00:00+01:00'), // Martes 12 Enero
        titulo: "Capítulo 16: Tu paz mental",
        texto: "Hola mi amor. A veces la rutina se vuelve un caos y el estrés intenta ganarme la partida, pero basta con escucharte o pasar un rato a tu lado para que todo vuelva a alinearse. Tienes un superpoder precioso: me transmites una paz mental que nadie más logra conseguir. Eres como ese café calentito por la mañana o una tarde de lluvia tranquila. Gracias por calmar mis tormentas internas con solo mirarme de esa forma tan tuya."
    },
    {
        numero: 17,
        unlockDate: new Date('2027-01-19T00:00:00+01:00'), // Martes 19 Enero
        titulo: "Capítulo 17: Tu sonrisa de lunes a domingo",
        texto: "¡Buen día, amor de mi vida! Estaba pensando en lo mucho que me gusta tu sonrisa, en serio. Es capaz de cambiarme el humor por completo, sin importar lo pesado que haya sido el día. Me fascina ver cómo te iluminas cuando hablas de algo que te apasiona o cuando te pones feliz por algo sencillo. Que nunca te falten motivos para sonreír, mi cielo, porque tu alegría es mi motor diario y mi paisaje favorito."
    },
    {
        numero: 18,
        unlockDate: new Date('2027-01-26T00:00:00+01:00'), // Martes 26 Enero
        titulo: "Capítulo 18: Un amor que cuida",
        texto: "Amor lindo, hoy quería recordarte lo mucho que valoro la forma tan bonita en la que nos cuidamos. El amor de verdad no es solo decir palabras bonitas, es estar atento a los detalles, es preguntar qué tal el día, es preparar un detalle cuando el otro está cansado. Y tú eres experta en dar un amor del bueno, de ese que abraza el alma. Me siento la persona más afortunada del mundo por recibir tu ternura y tus cuidados. Eres mi hogar."
    },
    {
        numero: 19,
        unlockDate: new Date('2027-02-02T00:00:00+01:00'), // Martes 2 Febrero
        titulo: "Capítulo 19: Cómplices en todo",
        texto: "Hola amor. Me encanta la palabra 'cómplices' porque siento que nos describe a la perfección. Somos compañeros de aventuras, cómplices de travesuras y confidentes de secretos. Adoro saber que puedo contarte cualquier tontería que se me pase por la cabeza y que tú siempre le vas a seguir el juego. Es hermoso tener una conexión tan profunda y divertida a la vez. No me canso de repetir lo feliz que me haces."
    },
    {
        numero: 20,
        unlockDate: new Date('2027-02-09T00:00:00+01:00'), // Martes 9 Febrero
        titulo: "Capítulo 20: El mes del amor",
