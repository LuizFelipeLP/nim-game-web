let pecas = 15;
let jogadorAtual = "player";

function atualizarTabuleiro() {
    document.getElementById("board").innerText = `Peças restantes: ${pecas}`;
}

function verificarFim() {
    if (pecas <= 0) {
        let vencedor = jogadorAtual === "player" ? "Computador" : "Jogador";
        alert(`Fim de jogo! O vencedor é: ${vencedor}`);
        document.getElementById("restartButton").style.display = "block";
        return true;
    }
    return false;
}

function jogadorRemovePecas() {
    let input = document.getElementById("playerInput");
    let qtd = parseInt(input.value);

    if (qtd < 1 || qtd > 3 || qtd > pecas || isNaN(qtd)) {
        alert("Escolha um número válido (entre 1 e 3 e menor que as peças restantes)");
        return;
    }

    pecas -= qtd;
    atualizarTabuleiro();

    if (!verificarFim()) {
        jogadorAtual = "computer";
        setTimeout(jogadaComputador, 1000);
    }
}

function jogadaComputador() {
    let qtd = Math.min(3, pecas);
    pecas -= qtd;
    atualizarTabuleiro();

    alert(`Computador removeu ${qtd} peça(s).`);

    if (!verificarFim()) {
        jogadorAtual = "player";
    }
}

function reiniciarJogo() {
    pecas = 15;
    jogadorAtual = "player";
    atualizarTabuleiro();
    document.getElementById("restartButton").style.display = "none";
}

document.getElementById("playButton").addEventListener("click", jogadorRemovePecas);
document.getElementById("restartButton").addEventListener("click", reiniciarJogo);

atualizarTabuleiro();
