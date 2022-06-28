import chuvasDeMeteoros from "./data/chuvas-de-meteoros.js";
import imprimeListaChuva from "./funcoes/funcoesInterface.js";
import { verificaChuvaOcorrendo, verificaProximaChuva } from "./funcoes/funcoesLogicas.js";

const dataAtual = new Date();

const chuvasVisiveis = chuvasDeMeteoros.filter((chuva) => verificaChuvaOcorrendo(chuva, dataAtual));
const proximasChuva = chuvasDeMeteoros.filter((chuva) => verificaProximaChuva(chuva, dataAtual));


console.log("Chuva de Meteoros");

if (chuvasVisiveis.length > 0){
    let msg = '\nEncontramos '
    msg += chuvasVisiveis.length == 1 ? "1 chuva de meteoros" : chuvasVisiveis.length + " Chuvas de Meteoros";

    console.log(msg);
    imprimeListaChuva(chuvasVisiveis);

} else {
    console.log("\n Nenhuma chuva de meteoros passando no momento");
}

console.log('\n\n Não perca as próximas chuvas de meteoro')

imprimeListaChuva(proximasChuva)