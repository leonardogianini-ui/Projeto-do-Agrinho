// ===========================
// RELATÓRIO DA PROPRIEDADE
// ===========================

function gerarRelatorio() {

    let alqueires = Number(document.getElementById("alqueires").value);
    let solo = document.getElementById("solo").value;
    let arvores = document.getElementById("arvores").value;
    let nascente = document.getElementById("nascente").value;
    let quimicos = document.getElementById("quimicos").value;
    let cultura = document.getElementById("cultura").value;

    if (alqueires <= 0) {

        document.getElementById("resultado").innerHTML =
        "<p>⚠️ Digite uma quantidade válida de alqueires.</p>";

        return;
    }

    let classificacao = "";

    if (alqueires <= 20) {

        classificacao = "🌱 Pequena Propriedade";

    } else if (alqueires <= 100) {

        classificacao = "🚜 Média Propriedade";

    } else {

        classificacao = "🏭 Grande Propriedade";

    }

    let indice = 50;

    if (solo === "Boa") indice += 15;
    if (solo === "Regular") indice += 5;
    if (arvores === "Sim") indice += 15;
    if (nascente === "Sim") indice += 10;
    if (quimicos === "Não") indice += 10;

    if (indice > 100) indice = 100;

    let nivel = "";

    if (indice >= 80) {

        nivel = "🟢 Excelente";

    } else if (indice >= 60) {

        nivel = "🟡 Bom";

    } else {

        nivel = "🔴 Precisa Melhorar";

    }

    let recomendacoes = "";

    if (solo !== "Boa") {
        recomendacoes += "<li>🌱 Melhorar a qualidade do solo.</li>";
    }

    if (arvores === "Não") {
        recomendacoes += "<li>🌳 Plantar ou preservar árvores.</li>";
    }

    if (nascente === "Não") {
        recomendacoes += "<li>💧 Preservar recursos hídricos.</li>";
    }

    if (quimicos === "Sim") {
        recomendacoes += "<li>♻️ Reduzir produtos químicos.</li>";
    }

    recomendacoes += "<li>🚜 Fazer rotação de culturas.</li>";
    recomendacoes += "<li>🌿 Utilizar biofertilizantes.</li>";

    document.getElementById("resultado").innerHTML = `

        <h3>📋 Resultado do Diagnóstico</h3>

        <p><strong>Cultura:</strong> ${cultura}</p>

        <p><strong>Tamanho:</strong> ${classificacao}</p>

        <p><strong>Índice de Sustentabilidade:</strong> ${indice}/100</p>

        <p><strong>Nível:</strong> ${nivel}</p>

        <h4>✅ Recomendações</h4>

        <ul>
            ${recomendacoes}
        </ul>

    `;
}


// ===========================
// CALCULADORA DE LUCRO
// ===========================

function calcularLucro() {

    let preco =
    Number(document.getElementById("produto").value);

    let quantidade =
    Number(document.getElementById("sacas").value);

    if (quantidade <= 0) {

        document.getElementById("lucro").innerHTML =
        "<p>⚠️ Digite uma quantidade válida.</p>";

        return;
    }

    let produto =
    document.getElementById("produto");

    let nomeProduto =
    produto.options[produto.selectedIndex].text;

    let total = preco * quantidade;

    document.getElementById("lucro").innerHTML = `

        <h3>💰 Resultado da Venda</h3>

        <p>
            <strong>Produto:</strong>
            ${nomeProduto}
        </p>

        <p>
            <strong>Quantidade:</strong>
            ${quantidade}
        </p>

        <p>
            <strong>Valor estimado de venda:</strong>
            R$ ${total.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}
        </p>

    `;
}


// ===========================
// CURIOSIDADES
// ===========================

const curiosidades = [

    "🌱 A rotação de culturas melhora a fertilidade do solo.",

    "💧 Preservar nascentes ajuda a garantir água para o futuro.",

    "🌳 Árvores absorvem gás carbônico da atmosfera.",

    "♻️ Biofertilizantes ajudam a reduzir impactos ambientais.",

    "🚜 O plantio direto reduz a erosão do solo.",

    "🌾 A cobertura vegetal protege o solo contra o desgaste.",

    "☀️ A energia solar pode reduzir custos na propriedade.",

    "🌎 Agricultura sustentável aumenta a produtividade a longo prazo."

];


// ===========================
// MOSTRAR CURIOSIDADE
// ===========================

function mostrarCuriosidade() {

    let numero =
    Math.floor(Math.random() * curiosidades.length);

    document.getElementById("curiosidade").innerHTML =
    `<p>${curiosidades[numero]}</p>`;
}
