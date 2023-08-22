$(document).ready(function() {

    /*
    Eventos de comportamento do header
    */

    $('header button').click(function() {
        $('form').slideToggle();
    })

    $('#button-cancel').click(function() {
        $('form').slideUp();
    })

    /*
    Eventos de adição de nova foto
    */

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#url-new-pic').val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-image-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#url-new-pic').val('');
    })
})