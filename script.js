/* =========================
   CONFIGURAÇÕES GERAIS
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:Arial, sans-serif;
    background:#f4f9f4;
    color:#333;
    line-height:1.6;
}

/* =========================
   CABEÇALHO
========================= */

.hero{
    min-height:100vh;

    background:linear-gradient(
        135deg,
        #1b5e20,
        #2e7d32,
        #43a047
    );

    color:white;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    text-align:center;

    padding:20px;
}

.hero h1{
    font-size:4rem;
    margin-bottom:20px;
}

.hero p{
    font-size:1.3rem;
    max-width:700px;
    margin-bottom:25px;
}

.hero button{
    width:auto;
    padding:15px 30px;
}

/* =========================
   CONTAINERS
========================= */

.container{
    width:90%;
    max-width:1100px;

    margin:30px auto;

    background:white;

    padding:25px;

    border-radius:15px;

    box-shadow:
    0 5px 15px rgba(0,0,0,0.1);

    animation:aparecer 0.7s ease;
}

.container h2{
    color:#2e7d32;
    margin-bottom:20px;

    border-left:6px solid #43a047;

    padding-left:10px;
}

/* =========================
   FORMULÁRIOS
========================= */

label{
    display:block;
    margin-top:15px;
    font-weight:bold;
}

input,
select{
    width:100%;

    padding:12px;

    margin-top:5px;

    border:1px solid #ccc;

    border-radius:8px;

    font-size:15px;
}

input:focus,
select:focus{
    outline:none;
    border-color:#43a047;
}

/* =========================
   BOTÕES
========================= */

button{

    width:100%;

    padding:14px;

    margin-top:20px;

    border:none;

    border-radius:8px;

    background:#43a047;

    color:white;

    font-size:16px;

    font-weight:bold;

    cursor:pointer;

    transition:0.3s;
}

button:hover{
    background:#2e7d32;
    transform:translateY(-2px);
}

/* =========================
   RESULTADOS
========================= */

#resultado,
#carbono,
#simulacao,
#curiosidade{

    margin-top:20px;

    padding:20px;

    border-radius:10px;

    background:#e8f5e9;

    border-left:6px solid #43a047;
}

/* =========================
   CARDS
========================= */

.cards{
    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));

    gap:15px;
}

.card{

    background:#e8f5e9;

    padding:20px;

    border-radius:10px;

    text-align:center;

    font-weight:bold;

    transition:0.3s;
}

.card:hover{
    transform:scale(1.05);
}

/* =========================
   CULTURAS
========================= */

.culturas{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(150px,1fr));

    gap:15px;
}

.culturas div{

    background:#c8e6c9;

    padding:15px;

    text-align:center;

    border-radius:10px;

    font-weight:bold;

    transition:0.3s;
}

.culturas div:hover{
    transform:scale(1.05);
}

/* =========================
   MAPA
========================= */

.mapa{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(200px,1fr));

    gap:15px;
}

.mapa div{

    background:#e8f5e9;

    padding:20px;

    border-radius:10px;

    text-align:center;

    font-weight:bold;
}

/* =========================
   CONQUISTAS
========================= */

.badges{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));

    gap:15px;
}

.badges div{

    background:#dcedc8;

    padding:20px;

    border-radius:10px;

    text-align:center;

    font-weight:bold;

    transition:0.3s;
}

.badges div:hover{
    transform:scale(1.05);
}

/* =========================
   BARRA DE SUSTENTABILIDADE
========================= */

.barra{

    width:100%;

    height:30px;

    background:#ddd;

    border-radius:20px;

    overflow:hidden;

    margin-top:15px;
}

.progresso{

    height:100%;

    background:linear-gradient(
        90deg,
        #66bb6a,
        #2e7d32
    );

    width:0%;

    transition:1s;
}

/* =========================
   TABELAS
========================= */

table{

    width:100%;

    border-collapse:collapse;

    margin-top:15px;
}

table th{

    background:#43a047;

    color:white;

    padding:10px;
}

table td{

    border:1px solid #ccc;

    padding:10px;

    text-align:center;
}

/* =========================
   RODAPÉ
========================= */

footer{

    background:#1b5e20;

    color:white;

    text-align:center;

    padding:30px;
}

footer p{
    margin-top:8px;
}

/* =========================
   ANIMAÇÃO
========================= */

@keyframes aparecer{

    from{
        opacity:0;
        transform:translateY(20px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

/* =========================
   RESPONSIVO
========================= */

@media(max-width:768px){

    .hero h1{
        font-size:2.5rem;
    }

    .hero p{
        font-size:1rem;
    }

    .container{
        width:95%;
    }

}
