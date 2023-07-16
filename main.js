const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const fortuneCookie = document.querySelector("#fortuneCookie");
const tryAgain = document.querySelector("#tryAgain");
var asePhrases   = ['Desejo a você o calor do carinho de Oyá e a proteção de Xangô. Muito axé!','É a lei de Xangô: quem deve, paga; quem merece, recebe.','Enquanto o silêncio dos pretos velhos te emocionar, seu caminho é e sempre será a Umbanda.','Quem tem Exu pode até se dobrar, mas nunca se quebra.','Seja paciente, às vezes você tem que passar pelo pior para alcançar o melhor.','Exu matoum um pássaro ontem com uma pedra que só jogou hoje.','Aprenda a calar a boca dos outros sem ter que abrir a sua.','Malandro demais vira bicho.','Okê, caboclo! Que a luz que vem do seu coração ilumine as nossas vidas e salve a nossa casa chamada planeta Terra.','Que seus orixás te guiem e iluminem o seu caminho. Confie nos caboclos da umbanda para te guiar no caminho certo.','Tudo na nossa vida tem um propósito, nós estamos na Terra por alguma razão. De acordo com os caboclos da umbanda, todos tem um dever.',];
function whenClicked (event){
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
  let randomPhrase = Math.round(Math.random() *10);
  document.querySelector(".phrase").innerText= asePhrases[Number(randomPhrase)] ;



}
function resetCookie (event){
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}