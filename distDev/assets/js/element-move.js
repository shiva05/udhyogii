$("#selectable-left").selectable();
$("#selectable-right").selectable();

function moveList(btn,list_origen,list_fin) {
        $(btn).click(function () {
            var $list_start = $(list_origen);
            var $list_finish = $(list_fin);
            var $elements_list_start = $list_start.find('li');
            var list_start = [];
            var list_finish = [];
            var last_index_list = parseInt($list_finish.find('li').last().attr('data-order'));
            var last_index = isNaN(last_index_list) ? 0 : last_index_list;
            console.log(last_index);
            $elements_list_start.each(function (index, element) {
                var el = $(element);
                if (el.hasClass("ui-selected")) {
                    list_finish.push(el);
                } else {
                    list_start.push(el);
                }
            });
            $list_start.empty();
            for (var i = 0; i < list_start.length; i++) {
                $list_start.append(list_start[i]);
            }
            for (var i = 0; i < list_finish.length; i++) {
                var $li = list_finish[i];
                $li.removeClass('ui-selected');
                $li.attr('data-order', parseInt(last_index) + (i + 1));
                $list_finish.append($li);
            }
        });
    }

    moveList('#btn-move-right', "#selectable-left", "#selectable-right");
    moveList('#btn-move-left', "#selectable-right", "#selectable-left");
    
    function moveListUp(btn,list_origen) {
        $(btn).click(function (e) {
            var $list_start = $(list_origen);
            var list = [];
            $list_start.find('li').each(function (index, element) {
                var el = $(element);
                if (el.hasClass("ui-selected")) {
                    list.push({ element: el, band: true });
                } else {
                    list.push({ element: el, band: false });
                }
            });
            for (var i = 0; i < list.length; i++) {
                var li = list[i];
                if (li.band && i != 0) {
                    var temp = list[i - 1];
                    if (!temp.band) {
                        list[i - 1] = li;
                        list[i] = temp;
                    }
                }
            }
            $list_start.empty();
            for (var i = 0; i < list.length; i++) {
                var li = list[i];
                li.element.removeClass('ui-selected');
                li.element.attr('data-order', (i + 1));
                $list_start.append(li.element);
            }
        });
    }

    moveListUp('#btn-move-up-left', '#selectable-left');
    moveListUp('#btn-move-up-right', '#selectable-right');

    function moveListDown(btn, list_origen) {
        $(btn).click(function (e) {
            var $list_start = $(list_origen);
            var list = [];
            $list_start.find('li').each(function (index, element) {
                var el = $(element);
                if (el.hasClass("ui-selected")) {
                    list.push({ element: el, band: true });
                } else {
                    list.push({ element: el, band: false });
                }
            });
            for (var i = parseInt(list.length - 1) ; i > 0 ; i--) {
                var li = list[i - 1];
                if (li.band && i != 0) {
                    var temp = list[i];
                    if (!temp.band) {
                        list[i] = li;
                        list[i - 1] = temp;
                    }
                }
            }
            $list_start.empty();
            for (var i = 0; i < list.length; i++) {
                var li = list[i];
                li.element.removeClass('ui-selected');
                li.element.attr('data-order', (i + 1));
                $list_start.append(li.element);
            }
        });
    }

    moveListDown('#btn-move-down-left', '#selectable-left');
    moveListDown('#btn-move-down-right', '#selectable-right');  