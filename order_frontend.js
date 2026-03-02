var url_data_69a581873b49b = "https://kvs.uptaxi.ru/uptaxi/order2/order_backend.php?key=10a5ab2db37feedfdeaab192";
var address_tochka1_69a581873b49b = {};var address_tochka2_69a581873b49b = {};var width_mobile_69a581873b49b = false;
var address_title_69a581873b49b = {};
address_title_69a581873b49b.fromstreet='Откуда?';
address_title_69a581873b49b.fromdom='Дом...';
address_title_69a581873b49b.frompod='Подъезд...';
address_title_69a581873b49b.tostreet='Куда?';
address_title_69a581873b49b.todom='Дом...';
address_pod_69a581873b49b=['Частный дом', 'Офис', 'Одноподъездный дом', '1-й подъезд', '2-й подъезд', '3-й подъезд', '4-й подъезд', '5-й подъезд', '7-й подъезд', '8-й подъезд', '9-й подъезд', '10-й подъезд', '11-й подъезд', '12-й подъезд', '13-й подъезд', '14-й подъезд', '15-й подъезд', '16-й подъезд', '17-й подъезд', '18-й подъезд', '19-й подъезд', '20-й подъезд', '21-й подъезд'];
settings_admphone_69a581873b49b='Контактный номер телефона...';
settings_month_69a581873b49b=['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
settings_weekday_69a581873b49b=['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
info_alert_69a581873b49b=['У вас еще нет бонусов. Совершите больше поездок для накопления бонусов', 'Не указан номер телефона', 'Вы ввели неверный логин или пароль', 'Не указана улица', 'Не удалось рассчитать стоимость заказа', 'Доступны авторизованным клиентам', 'Время заказа не может быть меньше чем текущее', 'Не указан номер дома', 'Не указан подъезд', 'Служба в данный момент недоступна, пожалуйста выберите другую службу или повторите попытку позже, в противном случае вы не сможете оформить заказ', 'Превышен суточный лимит на отправку смс. Попробуйте через сутки.', 'Формат введенного номера не верен', 'Пароль отправлен на указанный номер', 'Не указан пароль', 'Авторизация...', 'Вы исчерпали попытки авторизации попробуйте через несколько минут', 'Меняем пароль...', 'Не указано откуда Вас забрать', 'Не указано куда Вы поедете', 'Загрузка...'];
settings_pred_prefix_69a581873b49b='Дата и время подачи машины - ';
settings_pred_day_val069a581873b49b='Сегодня';
settings_pred_day_val169a581873b49b='Завтра';
settings_phone_prefix_left_69a581873b49b='Номер телефона ';
settings_phone_prefix_right_69a581873b49b='...';
settings_cancel_order_69a581873b49b='Отменяем заказ';
settings_tab0err0_69a581873b49b='Текущие заказы не найдены';
setting_captionbonus_69a581873b49b='Бонусы';
settings_bonusof_69a581873b49b=' из ';
settings_bonusofcaption_69a581873b49b=' бонусов';
settings_regulator1_69a581873b49b='Повысить срочность, увеличив стоимость';
settings_regulator2_69a581873b49b='Желаемая стоимость поездки';
settings_calcprice_69a581873b49b='Предварительная стоимость поездки ~ ';
settings_button_ok_69a581873b49b='Ok';
get_param_69a581873b49b=[];
get_param_69a581873b49b['firm']='Такси-Красногвардейское';get_param_69a581873b49b['group']='';get_param_69a581873b49b['service']='';function create_form_uptaxi_69a581873b49b(){
	width_mobile_69a581873b49b = jQuery("div#order-form-uptaxi").attr('data-width-mobile');
	jQuery("div#order-form-uptaxi").replaceWith('<div id="order-uptaxi-form-69a581873b49b" style="width:100%;"></div>');
	width_form = jQuery("div#order-uptaxi-form-69a581873b49b")[0].offsetWidth;
	jQuery("div#order-uptaxi-form-69a581873b49b").hide();
	jQuery("div#order-uptaxi-form-69a581873b49b").append("<div id='form' class='loading' data-lang='RU'>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form").append("<div id='menu-order'></div>")
								.append("<div id='page-order'></div>")
								.append("<div id='current-order'></div>")
								.append("<div id='history-order'></div>")
								.append("<div class='cssload-loading'></div>")
								.append("<div style='clear: both;'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #menu-order").append("<div class='input big-buttom active' id='buttom-menu-order'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-order").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-order>.header").append("<input type='text' value='Заказ' readonly>");
	jQuery("div#order-uptaxi-form-69a581873b49b #menu-order").append("<div class='input big-buttom' id='buttom-menu-current-order'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-current-order").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-current-order>.header").append("<input type='text' value='Текущие заказы' readonly>");
	jQuery("div#order-uptaxi-form-69a581873b49b #menu-order").append("<div class='input big-buttom' id='buttom-menu-order-history'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-order-history").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-order-history>.header").append("<input type='text' value='История поездок' readonly>");
	jQuery("div#order-uptaxi-form-69a581873b49b #menu-order").append("<div class='input big-buttom' id='buttom-menu-logout'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-logout").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #buttom-menu-logout>.header").append("<input type='text' value='Выход' readonly>");
				
		jQuery("div#order-uptaxi-form-69a581873b49b #page-order").append("<form id='order-form'></form>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input text' id='city'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #city").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #city>.header").append("<input type='text' placeholder='Город...'>");
		jQuery("div#order-uptaxi-form-69a581873b49b #city>.header").append("<i></i>");
		jQuery("div#order-uptaxi-form-69a581873b49b #city").append("<div class='list'></div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #city .list").append("<div class='item' data-name='Джанкой'>Джанкой</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #city .list").append("<div class='item' data-name='посёлок городского типа Красногвардейское'>посёлок городского типа Красногвардейское</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #city .list").append("<div class='item' data-name='посёлок городского типа Октябрьское'>посёлок городского типа Октябрьское</div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input text' id='service'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #service").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #service>.header").append("<input type='text' placeholder='Служба...'>");
		jQuery("div#order-uptaxi-form-69a581873b49b #service>.header").append("<i></i>");
		jQuery("div#order-uptaxi-form-69a581873b49b #service").append("<div class='list'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div id='addresses'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input buttom' id='add-address'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #add-address").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #add-address>.header").append("<input type='text' value='Добавить адрес' readonly>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input text' id='comment'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #comment").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #comment>.header").append("<input type='text' placeholder='Коментарий для водителя...'>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input' id='select-pred' data-last-name='В ближайшее время' data-last-value='1'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #select-pred").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #select-pred>.header").append("<input type='text' value='В ближайшее время' placeholder='Дата и время подачи машины' readonly>");
		jQuery("div#order-uptaxi-form-69a581873b49b #select-pred>.header").append("<i></i>");
		jQuery("div#order-uptaxi-form-69a581873b49b #select-pred").append("<div class='list'></div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #select-pred .list").append("<div class='item' data-name='В ближайшее время' data-value='1'>В ближайшее время</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #select-pred .list").append("<div class='item' data-name='Через полчаса' data-value='3'>Через полчаса</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #select-pred .list").append("<div class='item' data-name='Через час' data-value='4'>Через час</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #select-pred .list").append("<div class='item' data-name='Другое время' data-value='2'>Другое время</div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input big-buttom' id='date-pred-open-modal'><div class='header'><input type='text' value='Изменить' readonly></div></div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='clear'></div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div id='date-pred-modal'></div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form #date-pred-modal").append("<div class='left-calendar'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #date-pred-modal>.left-calendar").append("<div class='input' id='date-pred'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #date-pred").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #date-pred>.header").append("<input type='text' placeholder='Дата' readonly>");
		jQuery("div#order-uptaxi-form-69a581873b49b #date-pred>.header").append("<i></i>");
jQuery("div#order-uptaxi-form-69a581873b49b #date-pred").append("<div class='calendar'></div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form #date-pred-modal").append("<div class='right-time'></div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form #date-pred-modal>.right-time").append("<div class='label-time'>Часы</div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #date-pred-modal>.right-time").append("<div class='input text' id='hour-pred'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred>.header").append("<input type='text' placeholder='Часы'>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred>.header").append("<i></i>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred").append("<div class='list'></div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='00'>00</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='01'>01</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='02'>02</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='03'>03</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='04'>04</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='05'>05</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='06'>06</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='07'>07</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='08'>08</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='09'>09</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='10'>10</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='11'>11</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='12'>12</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='13'>13</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='14'>14</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='15'>15</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='16'>16</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='17'>17</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='18'>18</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='19'>19</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='20'>20</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='21'>21</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='22'>22</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #hour-pred .list").append("<div class='item' data-name='23'>23</div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form #date-pred-modal>.right-time").append("<div class='label-time'>Минуты</div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #date-pred-modal>.right-time").append("<div class='input text' id='minute-pred'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred>.header").append("<input type='text' placeholder='Минуты'>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred>.header").append("<i></i>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred").append("<div class='list'></div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='00'>00</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='05'>05</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='10'>10</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='15'>15</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='20'>20</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='25'>25</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='30'>30</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='35'>35</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='40'>40</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='45'>45</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='50'>50</div>");
		jQuery("div#order-uptaxi-form-69a581873b49b #minute-pred .list").append("<div class='item' data-name='55'>55</div>");
jQuery("div#order-uptaxi-form-69a581873b49b #order-form #date-pred-modal>.right-time").append("<div id='label-pred-order'><div>Пред. заказ на</div><div id='time-label-pred-order'></div></div>");
jQuery("div#order-uptaxi-form-69a581873b49b #date-pred-modal").append("<div class='input big-buttom' id='pred-order-cancel'><div class='header'><input type='text' value='Отмена' readonly></div></div>");
jQuery("div#order-uptaxi-form-69a581873b49b #date-pred-modal").append("<div class='input big-buttom' id='pred-order-ok'><div class='header'><input type='text' value='Ok' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input buttom' id='dop-settings'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings").append("<div class='header'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings>.header").append("<input type='text' value='Дополнительные настройки' readonly>");
		jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings>.header").append("<i></i>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div id='dop-settings-content'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content").append("<div class='input text' id='admphone'><div class='header'><input type='tel'></div></div>");

	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content").append("<div class='input text' id='options-order'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content #options-order").append("<div class='header'><input type='text' placeholder='Опции заказа...' readonly><i></i></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content #options-order").append("<div class='list checkbox'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content #options-order").append("<div class='input buttom' id='add-options-order'><div class='header'><input type='text' value='Ok' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content").append("<div class='input buttom' id='add-bonus'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content").append("<div class='input buttom' id='add-regulator'>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content #add-regulator").append("<div class='input buttom' id='remove-count-regulator'><div class='header'><input type='text' value='-' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content #add-regulator").append("<div class='input buttom' id='count-regulator'><div class='header'><input type='text' value='0' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content #add-regulator").append("<div class='input buttom' id='add-count-regulator'><div class='header'><input type='text' value='+' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #dop-settings-content").append("<div class='clear'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input buttom' id='error-create-order'><div class='header'><input type='text' value='' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input transparent' id='price-order' data-valute=''></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #price-order").append("<div class='header'><input type='text' value='' readonly></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #price-order").append("<div class='wait-price'><input type='text' value='Расчет стоимости...' readonly></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input big-buttom' id='to-order'><div class='header'><input type='text' value='Заказать' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<div class='input big-buttom' id='button-auth'><div class='header'><input type='text' value='Авторизация' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #order-form").append("<form id='form-auth'><div></div></form>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form-auth>div").append("<div class='form-auth-title'>Авторизация</div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form-auth>div").append("<div class='input text login'><div class='header'><input type='tel' name='phone' placeholder='' autocomplete='mobile tel'></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form-auth>div").append("<div class='input text password'><div class='header'><input type='password' name='password' placeholder='Пароль' autocomplete='password'></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form-auth>div").append("<div class='input error'><div class='header'><input type='text' value='' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form-auth>div").append("<div class='input big-buttom' id='auth-button-cancel'><div class='header'><input type='text' value='Отмена' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form-auth>div").append("<div class='input big-buttom' id='auth-button-pass'><div class='header'><input type='text' value='Получить новый пароль' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form-auth>div").append("<div class='input big-buttom' id='auth-button-come-in'><div class='header'><input type='text' value='Войти' readonly></div></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row1 cssload-loading-col3'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row2 cssload-loading-col2'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row2 cssload-loading-col3'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row2 cssload-loading-col4'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row3 cssload-loading-col1'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row3 cssload-loading-col2'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row3 cssload-loading-col3'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row3 cssload-loading-col4'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row3 cssload-loading-col5'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row4 cssload-loading-col2'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row4 cssload-loading-col3'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row4 cssload-loading-col4'></div>");
	jQuery("div#order-uptaxi-form-69a581873b49b #form>.cssload-loading").append("<div class='cssload-loading-circle cssload-loading-row5 cssload-loading-col3'></div>");	
	return width_form;
}
function loadcss_69a581873b49b(width){
	head  = document.getElementsByTagName('head')[0];
	link  = document.createElement('link');
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://kvs.uptaxi.ru/uptaxi/order2/order.css?randkey=69a581873b49b&key=10a5ab2db37feedfdeaab192&width='+width;
	link.media = 'all';
	link.onload = function () {
		jQuery("div#order-uptaxi-form-69a581873b49b").show();
		if(typeof width_mobile_69a581873b49b != 'undefined'){
			if(width_mobile_69a581873b49b != false){
				var head_69a581873b49b  = document.getElementsByTagName('head')[0];
				var link1_69a581873b49b  = document.createElement('link');
				link1_69a581873b49b.rel  = 'stylesheet';
				link1_69a581873b49b.type = 'text/css';
				link1_69a581873b49b.href = 'https://kvs.uptaxi.ru/uptaxi/order2/order-mobile830.css?randkey=69a581873b49b';
				link1_69a581873b49b.media = 'screen and (max-width: '+width_mobile_69a581873b49b+'px), screen and (max-device-width: '+width_mobile_69a581873b49b+'px)';
				head_69a581873b49b.appendChild(link1_69a581873b49b);
				var link2_69a581873b49b  = document.createElement('link');
				link2_69a581873b49b.rel  = 'stylesheet';
				link2_69a581873b49b.type = 'text/css';
				link2_69a581873b49b.href = 'https://kvs.uptaxi.ru/uptaxi/order2/order-mobile490.css?randkey=69a581873b49b';
				link2_69a581873b49b.media = 'screen and (max-width: 600px), screen and (max-device-width: 600px)';
				head_69a581873b49b.appendChild(link2_69a581873b49b);
			}
		}
	}
	head.appendChild(link);
}
function loadjs_69a581873b49b(){	
	head  = document.getElementsByTagName('head')[0];
	script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://kvs.uptaxi.ru/uptaxi/order2/functions.js?randkey=69a581873b49b';
	head.appendChild(script);
}
//window.onload = function() {
window.addEventListener('load', function() {
	if(!window.jQuery){
		var head_69a581873b49b  = document.getElementsByTagName('head')[0];
		script1_69a581873b49b = document.createElement('script');
		script1_69a581873b49b.type = 'text/javascript';
		script1_69a581873b49b.src = 'https://kvs.uptaxi.ru/uptaxi/clientsite/v32/jquery.js';
		script1_69a581873b49b.onload = function () {
			var width_69a581873b49b = create_form_uptaxi_69a581873b49b();
			loadjs_69a581873b49b();
			loadcss_69a581873b49b(width_69a581873b49b);
		}
		head_69a581873b49b.appendChild(script1_69a581873b49b);
	}else{
		var width_69a581873b49b = create_form_uptaxi_69a581873b49b();
		loadjs_69a581873b49b();
		loadcss_69a581873b49b(width_69a581873b49b);
	}
})