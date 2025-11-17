
// Função para aplicar máscara 
function mask(o, f) 
{ setTimeout(function() { 
var v = f(o.value); 
if (v != o.value){
o.value = v; 
} 
}, 1);
 }
// Máscara para CPF 
function mcpf(v) 
{ 
v = v.replace(/\D/g, "");   // Remove tudo que não é número
v = v.replace(/(\d{3})(\d)/, "$1.$2");
v = v.replace(/(\d{3})(\d)/, "$1.$2");
v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
return v; 
}

// Máscara para telefone 
function telMask(v) { 
v = v.replace(/\D/g, ""); 
v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); 
v = v.replace(/(\d{5})(\d)/, "$1-$2"); 
return v;
}

// Máscara para CEP
function cepMask(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    return v;
}
// Eventos de input
document.addEventListener("DOMContentLoaded", function() {
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var cep = document.getElementById("cep");
    cpf.addEventListener("input", function() { mask(cpf, cpfMask); });
    telefone.addEventListener("input", function() { mask(telefone, telMask); });
    cep.addEventListener("input", function() { mask(cep, cepMask); }); });
    
