$(document).ready(function () {
    $('#btnSubmit').prop('disabled', true);
    $('#textEntry').keyup(function () {
        if ($(this).val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
    });

    $("body").append('<ul class="list"></ul>');

    $('#btnSubmit').click(function() {
        let textValue = $('#textEntry').val();
        $('.list').append(`<li class="listItem">${textValue}</li>`);
        $('#textEntry').val('');
    });

    function selectRandomColor() {
        let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randomColor;
    }

    $('.list').click(function (event) {
        let randomColor = selectRandomColor();
        $(event.target).css('color', randomColor);
    });

    $('.list').dblclick(function (event) {
        $(event.target).remove();
    });

});