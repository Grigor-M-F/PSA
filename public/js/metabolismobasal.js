function calcular() {
    var fem = iptSexo_F.value;
    var masc = iptSexo_M.value;
    var ecto = iptBiotipo_Ecto.value;
    var meso = iptBiotipo_Meso.value;
    var endo = iptBiotipo_Endo.value;
    var altura = Number(iptAltura.value);
    var peso = Number(iptPeso.value);
    var idade = Number(iptIdade.value);

    var calculo = 0;

    if (fem == 0) {
        calculo = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
    } else {
        calculo = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)
    }

    resposta.innerHTML = calculo;

    console.log(calculo)

}