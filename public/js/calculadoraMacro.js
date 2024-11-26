var calculo = 0;
var tdee = 0;
var consumo_diario = 0;

function calcular() {
    var altura = iptAltura.value;
    var peso = iptPeso.value;
    var idade = iptIdade.value;
    var sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    var bioSelecionado = document.querySelector('input[name="biotipo"]:checked');
    var biotipo = 1.1;

    if (bioSelecionado == iptEctomorfo) {
        biotipo = 1.3;
    } else if (bioSelecionado == iptMesomorfo) {
        biotipo = 1.2;
    }

    if (sexoSelecionado == iptFeminino) {
        calculo = biotipo * (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade));
    } else {
        calculo = biotipo * (447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade));
    }

    const input = document.getElementById('iptTmb');

    input.value = `${parseInt(calculo)} kcal`;
    input.disabled = true

}

function nivelAtividade() {
    var nivelAtividade = iptNivel_atividade.value;

    var valor = 1.9;

    if (nivelAtividade == 1) {
        valor = 1.2;
    } else if (nivelAtividade == 2) {
        valor = 1.375;
    } else if (nivelAtividade == 3) {
        valor = 1.55;
    } else if (nivelAtividade == 4) {
        valor = 1.725;
    }

    tdee = calculo * valor;

    const input = document.getElementById('tdee');
    const range = document.getElementById('iptNivel_atividade').value;

    spValor.innerHTML = range;

    input.value = `${parseInt(tdee)} kcal`;
}


function objetivo() {
    var objetivo = sltObjetivo.value;
    var defict = 0;
    var peso = iptPeso.value;
    var proteina = (1.6 * peso);

    if (objetivo == "emagrecer") {
        defict = - 500;
    } else if (objetivo == "ganhos_secos") {
        defict = 150;
        proteina = (2 * peso);

    }

    consumo_diario = tdee + defict;

    const input = document.getElementById('consumo-diario');

    input.value = parseInt(consumo_diario);

    var gordura = 0.20 * consumo_diario / 9;
    var carboidrato = (consumo_diario - ((proteina * 4) + (gordura * 9))) / 4;

    console.log(proteina);
    console.log(gordura);
    console.log(carboidrato);

    const iptProteina = document.getElementById('iptProteina');
    iptProteina.value = `${parseInt(proteina)} g`;

    const iptGordura = document.getElementById('iptGordura');
    iptGordura.value = `${parseInt(gordura)} g`;

    const iptCarboidrato = document.getElementById('iptCarboidrato');
    iptCarboidrato.value = `${parseInt(carboidrato)} g`;


    // fetch("/usuarios/info", {
    //     method: "POST",
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({

    //     }), 
    // }).then(function(response) {
    //     response.json().then(response => {
    //         console.log(response)
    //     })
    // })

}

