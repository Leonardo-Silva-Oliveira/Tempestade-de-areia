const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');


let field = new  Deserto(ctx);
field.inicializa();
field.start();
