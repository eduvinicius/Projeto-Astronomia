import { inverteMesDia, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

const imprimeListaChuva = (listaChuvas) => {
    console.log('\nNOME DO METEORO             - INTENSIDADE - HEMISFÉRIO - PERÍODO');
  
    listaChuvas.forEach( imprimeChuva );
  }
  
  const imprimeChuva = (chuva) => {
    const nome = chuva.nome.padEnd(27,' ');
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisferio = retornaHemisferio(chuva.declinacao);
  
    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10,' ');
  
    const dataInicio = inverteMesDia(chuva.inicio);
    const dataFim = inverteMesDia(chuva.fim);
  
    console.log(`${ nome } - ${ intensidade } - ${ hemisferio } - ${ dataInicio } à ${ dataFim } `);
  }
  
  export default imprimeListaChuva;