let data;
//class contato

class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

document.getElementById('telefone').addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, '');
    let telefoneFormatado = '';
    
    if (valor.length > 0) {
        telefoneFormatado = '(' + valor.substring(0, 2);
    }
    if (valor.length > 2) {
        telefoneFormatado += ') ' + valor.substring(2, 7);
    }
    if (valor.length > 7) {
        telefoneFormatado += '-' + valor.substring(7, 11);
    }
    
    e.target.value = telefoneFormatado;
});

function Post(form){
    data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("tipoContato").value, 
        form.elements.namedItem("mensagem").value
    );
    
    document.getElementById('popup-nome').textContent = data.nome;
    document.getElementById('popup-email').textContent = data.email;
    document.getElementById('popup-telefone').textContent = data.telefone;
    
    let tipoContatoText = '';
    switch(data.tipoContato) {
        case '1': tipoContatoText = 'Elogio'; break;
        case '2': tipoContatoText = 'Reclamação'; break;
        case '3': tipoContatoText = 'Solicitação'; break;
        default: tipoContatoText = data.tipoContato;
    }
    document.getElementById('popup-tipoContato').textContent = tipoContatoText;
    
    document.getElementById('popup-mensagem').textContent = data.mensagem;
    
    return data;
}

const button = document.getElementById('btnEnviar');
const popup = document.getElementById('pop-up');
const closePopup = document.getElementById('closePopup');

button.addEventListener("click", function(event) {
    event.preventDefault();
    
    const form = document.getElementById('meuForm');
    const termosCheckbox = document.getElementById('termos-condicoes');
    
    if(form.checkValidity()) {
        if(termosCheckbox.checked) {
            Post(form);
            popup.style.display = "flex";
        } else {
            alert('Por favor, aceite os Termos e Condições para continuar.');
        }
    } else {
        form.reportValidity();
    }
});

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

function Enviar() {
    console.log(data);
    if (data && data.nome) {
        alert('Obrigado sr(a) ' + data.nome + '! Seus dados foram encaminhados com sucesso.');
        popup.style.display = "none";
        document.getElementById('meuForm').reset();
    }
}