function gerarRelatorio(){

    let solo = document.getElementById("solo").value;
    let preservacao = document.getElementById("preservacao").value;

    let indice = 60;

    if(solo === "Boa"){
        indice += 20;
    }

    if(preservacao === "Sim"){
        indice += 20;
    }

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado</h3>
        <p>Índice de Sustentabilidade: <strong>${indice}/100</strong></p>

        <h4>Recomendações:</h4>
        <ul>
            <li>Rotação de culturas</li>
            <li>Uso de biofertilizantes</li>
            <li>Plantio direto</li>
            <li>Recuperação de áreas degradadas</li>
        </ul>
    `;
}

function calcularCarbono(){

    let hectares =
        Number(document.getElementById("hectares").value);

    let carbono = hectares * 2;
    let economia = hectares * 150;

    document.getElementById("carbono").innerHTML = `
        <p>🌳 Árvores equivalentes: ${carbono * 5}</p>
        <p>♻️ Redução estimada de carbono: ${carbono} toneladas</p>
        <p>💰 Economia anual estimada: R$ ${economia}</p>
    `;
}
