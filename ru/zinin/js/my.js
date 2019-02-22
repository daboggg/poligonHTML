$(function () {


    $('#todo-list').on('click', '.done', function () {
        var $taskItem = $(this).parent('li');
        $taskItem.slideUp(250, function () {
            var $this = $(this);
            $this.detach();
            $('#completed-list').prepend($this);
            $this.slideDown();
        });
    });


    $('.sortlist').sortable({
        connectWith: '.sortlist',
        cursor: 'pointer',
        placeholder: 'ui-state-highlight',
        cancel: '.delete, .done',

    });

});