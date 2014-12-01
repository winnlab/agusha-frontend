import 'can/'

export default can.Control({}, {
    init: function (el, opts) {
        this.element.html(can.view('/js/app/admin/modules/tmpRemoveUser/index.stache'));
    },

    'form submit': function (el, ev) {
        ev.preventDefault();

        var data = el.serialize();

        can.ajax({
            url: '/admin/tmpUserRemove',
            method: 'POST',
            data: data
        }).done(function (response) {
            if (response === true) {
                return saSuccess('Удалено!');
            }

            saError(response);
        })
    },

    '.tmpUserRemove click': function (el, ev) {
        saConfirm(
            'УДАЛЕНИЕ',
            "Все пользователи в БД будут удалены БЕЗ ВОЗМОЖНОСТИ ВОССТАНОВЛЕНИЯ. Продолжить?",
            {},
            function (isConfirm) {
                if (! isConfirm) {
                    return;
                }

                can.ajax({
                    url: '/admin/tmpUserRemove',
                    method: 'DELETE'
                }).done(function (response) {
                    if (response === true) {
                        return saSuccess('Все пользователи удалены');
                    }

                    saError(response);
                });
            }
        );
    }
});