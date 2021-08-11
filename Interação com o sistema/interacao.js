function info(){
    let agora = new Date;
    let saida = document.getElementById('saida');
    saida.innerHTML = `<p>O que eu recebi foi: <mark>${agora}</mark> </p>`
}