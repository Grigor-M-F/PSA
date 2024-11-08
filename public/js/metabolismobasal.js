function calcular() {
    var fem = iptSexo_F.value;
    var atividade = Number(sltAtividade.value);
    var altura = Number(iptAltura.value);
    var peso = Number(iptPeso.value);
    var idade = Number(iptIdade.value);

    if (atividade == "#") {
        erro.innerHTML = `<span style="color: red;"> Selecione um nível de atividade </span>`;
    }

    var calculo = 0;

    if (fem == 0) {
        calculo = atividade * (88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade));
    } else {
        calculo = atividade * (447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade));
    }

    resposta.innerHTML = calculo;

    console.log(calculo);

}