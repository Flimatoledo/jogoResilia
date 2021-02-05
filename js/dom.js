function initButton() {
  let rb1 = document.getElementsByName("hero"); 
  if (rb1[0].checked) {
    startGame();
  } if (rb1[1].checked) {
    startGame();
  } if (rb1[2].checked) {
    startGame();
  } else {
    alert("Selecione um personagem")
  }
}

function startGame() {
  trocaImg();
  cleanPage();
  createText("Você esta tranquilamente brincando na fazenda quando observa que ao redor de todo o jardim existe um pequeno cercado.O que você faz?")
  removeBotao();
  createButton("Continuar brincando", "game1_1()")
  createButton("Ir alem do Cercado", "game1_2()")

}

function game1_1() {
  cleanText();
  createText("Você continua brincando tranquilamente com seus dois amigos sem ultrapassar o cercado! Anoitece e vocês vão para o jantar. Durante o jantar surge o questionamento sobre voltar a ir alem do cercado. O que você faz ?")
  cleanButton();
  cleanButton();
  createButton("Manter a decisão de não ir", "game2_11()");
  createButton("Mudar de ideia e ir até o cercado", "jantar()");
}

function game1_2() {
  cleanText();
  createText("Investigando o local, vocês descobrem que existe uma grande muralha que fecha todo o entorno do jardim de vocês! Porem, bem escondido, existe um corredor escuro! Não há nenhum tipo de luz nele, e vocês não conseguem ver aonde esse corredor vai dar! Devemos entrar no corredor?")
  cleanButton();
  cleanButton();
  createButton("Entrar no corredor", "derrotaCorredor()");
  createButton("Não entrar no corredor", "game2_111()");
}

function game2_111() {
  cleanText();
  createText("Vocês decidem não ir! Apos o jantar, vocês vão para a biblioteca, aonde nela existe um livro misterioso! Esse livro misterioso contém um mapa, e instruções para fugir de algo que parece uma fazenda. Vocês ficam abismados pois as ilustrações do livro são iguais ao que foi visto de manhã. Vocês ficam curiosos para saber mais sobre esse livro e logo surge a duvida sobre contar ou não para o Tutor. ");
  cleanButton();
  cleanButton();
  createButton("Contar para o Tutor", "derrotaTutor()");
  createButton("Não contar para o Tutor", "game3()");
}

function game2_11() {
  cleanText();
  createText("Vocês decidem não ir! Apos o jantar, vocês vão para a biblioteca, aonde nela existe um livro misterioso! Esse livro misterioso contém um mapa, e instruções para fugir de algo que parece uma fazenda. Vocês ficam curiosos para saber mais sobre esse livro e logo surge a duvida sobre contar ou não para o Tutor.");
  cleanButton();
  cleanButton();
  createButton("Contar para o Tutor", "derrotaTutor()");
  createButton("Não contar para o Tutor", "game3()");
}

function game2_1() {
  cleanText();
  createText("Vocês ficam abismados pois as informações do livro eram reais. O Tutor logo percebe algo estranho e pergunta a vocês o que tinha acontecido. Devemos contar ao Tutor?");
  cleanButton();
  cleanButton();
  createButton("Contar para o Tutor", "derrotaTutor()");
  createButton("Não contar para o Tutor", "game3()");
}

function jantar() {
  cleanText();
  createText("Vocês mudam de ideia e resolvem ir de manhã bem cedo! Apos o jantar, vocês vão para a biblioteca, aonde nela existe um livro misterioso! Esse livro misterioso contém um mapa, e instruções para fugir de algo que parece uma fazenda. Vocês ficam curiosos para saber mais sobre esse livro")
  cleanButton();
  cleanButton();
  createButton("Prosseguir", "game2_2()")
}

function game2_2() {
  cleanText();
  createText("Amanhece e vocês estão a caminho do cercado. Investigando o local, vocês descobrem que existe uma grande muralha que fecha todo o entorno do jardim de vocês! Porem, bem escondido, existe um corredor escuro! Não há nenhum tipo de luz nele, e vocês não conseguem ver aonde esse corredor vai dar! Devemos entrar no corredor?");
  cleanButton();
  createButton("Entrar no corredor", "derrotaCorredor()");
  createButton("Não entrar no corredor", "game2_1()");
}

function game3(){
  cleanText();
  createText("Percebendo que vocês estavam em panico, o funcionário Dom resolve perguntar o que havia acontecido. Contar toda a verdade ao Dom?");
  cleanButton();
  cleanButton();
  createButton("Contar para o Dom", "game4()");
  createButton("Não contar para o Dom", "derrotaDom()");
}

function derrotaDom() {
  cleanText();
  createText("Vocês não contam! O tempo passa e vocês não conseguem desvendar mais nenhuma pista. Então o Tutor chama vocês para uma conversa! Nem nos piores sonhos vocês suspeitariam de tudo que está acontecendo. É contada toda a verdade, que esta é uma fazenda de colheita e as crianças são entregues aos grandes monstros para serem servidos como banquetes. O Tutor então prende vocês e os enviam aos monstros. Voce perdeu! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function game4() {
  cleanText();
  createText("Vocês contam! Dom se mostra um amigo leal e explica todo o conteudo do livro! Ele informa que aquela fazenda era para fornecer carne humana como banquete para monstros de outro mundo! Dom explicou tambem, que só dava para fugir por duas maneiras: levando tochas de fogo tochas de fogo para iluminar o corredor e ... Dom não conseguiu explicar o restante pois o Tutor o chamou para um conversa.");
  cleanButton();
  cleanButton();
  createButton("Proximo", "game5()");
  
}

function game5() {
  cleanText();
  createText("Lembrando do que o Dom havia contado, vocês estão agora na sala de oficina da fazenda. Nessa sala existe uma grande quantidade de ferramentas, como madeira e querosene e algumas facas. O que devemos coletar?");
  cleanButton();
  createButton("Pegar madeiras e querosene", "game5_1()");
  createButton("Pegas as facas", "game5_2()");
}

function game5_2() {
  cleanText();
  createText("O Tutor e o Dom começam uma grande discussão!! Essa pode ser a grande chance de fugir. A briga entre o Tutor e o Dom foi motivada porque ele descobriu que o Dom nos ajudou. Durante a briga, o Tutor fica por um momento sozinho na sala dele. Lembra daquela faca que foi recolhida na oficina, pode ser uma boa hora para usa-lá. Devemos usar a faca para matar o Tutor? ");
  cleanButton();
  cleanButton();
  createButton("Não matar o Tutor", "derrotaPiedade()");
  createButton("Matar o Tutor", "vitoriaMorte()");
}

function derrotaPiedade() {
  cleanText();
  createText("Apesar de termos tido pena do Tutor, ele não teve o mesmo sentimento!!!!! O Tutor captura vocês e os envia para o banquete dos monstros. Voce perdeu! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function vitoriaMorte() {
  cleanText();
  createText("Lembra quando o Dom não consegiu completar as duas maneiras de fugir da fazenda?Matar o Tutor era a segunda forma, agora ele não consegue se comunicar com os monstros e vocês conseguem fugir com calma pelo corredor!! Parabéns. Você conseguiu fugir! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function game5_1() {
  cleanText();
  createText("Seguindo a dica do Dom, a escolha é de madeira e querosene para fazer tochas no dia da fuga para iluminar o corredor. O Tutor e o Dom começam uma grande discussão!! Essa pode ser a chance de fugir. Vamos aproveitar para fugir?");
  cleanButton();
  cleanButton();
  createButton("Não Fugir", "derrotaFuga()");
  createButton("Fugir", "vitoriaFuga()");
}

function derrotaFuga() {
  cleanText();
  createText("A decisão foi de não fugir! A briga entre o Tutor e o Dom foi motivada porque ele descobriu que o Dom tinha nos ajudado. O Tutor captura vocês e os envia para o banquete dos monstros. Voce perdeu! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function vitoriaFuga() {
  cleanText();
  createText("Vocês pegam o material que foi recolhido na oficina. Correm o mais rapido que podem em direção da muralha, chegam em frente ao corredo, acendem as tochas e conseguem atravessar esse obstáculo. Parabéns. Você conseguiu fugir! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function createText(conteudoTexto) {
  let divTexto = document.getElementById("intro");
  let p = document.createElement('p');
  p.setAttribute("class", "texts");
  p.setAttribute("id", "text1");
  let texto = document.createTextNode(conteudoTexto);
  p.appendChild(texto);
  divTexto.appendChild(p);
}

function cleanButton() {
  let elem = document.getElementById('btns1');
  elem.parentNode.removeChild(elem);
}

function cleanText() {
  let elem = document.getElementById('text1');
  elem.parentNode.removeChild(elem);
}

function createButton(textContentButton, proximaFase) {
  let divButtonGrid = document.getElementById("butt");
  let button = document.createElement('button');
  button.innerText = textContentButton;
  button.setAttribute("class", "btns");
  button.setAttribute("id", "btns1");
  button.setAttribute("onclick", proximaFase)
  divButtonGrid.appendChild(button);
}

function cleanPage() {
  let pageClean = document.getElementById("choose");
  let pageClean2 = document.getElementById("intro");
  pageClean.innerHTML= '';
  pageClean2.innerText= '';
}

function removeBotao() {
  let botao = document.getElementById("button1")
  botao.remove();
}

function restartGame() {
  cleanText();
  createText("Você esta tranquilamente brincando na fazenda quando observa que ao redor de todo o jardim existe um pequeno cercado.O que você faz?")
  cleanButton();
  cleanButton();
  createButton("Continuar brincando", "game1_1()")
  createButton("Ir alem do Cercado", "game1_2()")
}

function derrotaCorredor() {
  cleanText();
  createText("O corredor é muito escuro e bem maior do que vocês imaginavam!! Voces acabam se perdendo, e não conseguem mais voltar! Nunca mais ouviram falar sobre vocês!!! Voce perdeu! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function derrotaTutor() {
  cleanText();
  createText("Vocês decidem contar! Nem nos piores sonhos vocês suspeitariam de tudo que está acontecendo! O Tutor conta toda a verdade....! Esta é uma fazenda aonde vocês serão entregues a grandes monstros de outro mundo e serão servidos como banquetes. O Tutor então prende vocês e os envia para serem servidos aos monstros. Você perdeu! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function derrota() {
  cleanText();
  createText("Voce perdeu! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function vitoria() {
  cleanText();
  createText("Parabéns. Você conseguiu fugir! Deseja jogar novamente?");
  cleanButton();
  cleanButton();
  createButton("Sim", "restartGame()");
  createButton("Não", "window.location.reload()");
}

function refresh(){
  window.location.reload();
}

function padrao() {
  cleanText();
  createText();
  cleanButton();
  cleanButton();
  createButton();
  createButton();
}

function trocaImg() {
  let foto = document.getElementById("imagem")
  foto.classList.add("imagem2")
}