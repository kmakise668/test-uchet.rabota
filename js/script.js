let tablinks = document.querySelectorAll(".tab-link");
if (tablinks.length) {

    for (let tablink of tablinks) {
        let tab_id = tablink.dataset.tablink,
            parent = tablink.closest('.tabs-wrapper'),
            tabcontents = parent.querySelectorAll('.tab-content');

        tablink.addEventListener('click', function(e) {

            tablinks.forEach(function(el) {
                el.classList.remove("active");
            });
            tabcontents.forEach(function(el) {
                el.classList.remove("active");
            });
            this.classList.add('active');
            document.querySelector("#" + tab_id).classList.add("active");
        });

    }

}

let selectYears = document.querySelectorAll(".years-select");

if (selectYears) {
    for (let count of selectYears) {
        for (let i = 1960; i <= 2006; i++) {
            let x = "<li>" + i + "</li>";
            count.innerHTML += x;
        }
    }
}

let selectDay = document.querySelectorAll(".day-select");

if (selectDay) {
    for (let count of selectDay) {
        for (let i = 1; i <= 31; i++) {
            let x = "<li>" + i + "</li>";
            count.innerHTML += x;
        }
    }
}


let country = ['Абхазия', 'Австралия', 'Австрия', 'Азербайджан', 'Албания', 'Алжир', 'Ангола', 'Андорра', 'Аргентина', 'Армения', 'Афганистан', 'Багамские Острова', 'Бангладеш', 'Барбадос', 'Бахрейн', 'Беларусь', 'Белиз', 'Бельгия', 'Болгария', 'Боливия', 'Босния и Герцеговина', 'Бразилия', 'Бруней Даруссалам', 'Буркина Фасо', 'Великобритания', 'Венгрия', 'Венесуэла', 'Вьетнам', 'Габон', 'Гвинея', 'Германия', 'Государство Палестина', 'Греция', 'Грузия', 'Дания', 'Демократическая Республика Конго', 'Джибути', 'Доминиканская Республика', 'Египет', 'Замбия', 'Израиль', 'Индия', 'Индонезия', 'Иордания', 'Ирак', 'Иран', 'Ирландия', 'Исландия', 'Испания', 'Италия', 'Йемен', 'Казахстан', 'Камбоджа', 'Канада', 'Катар', 'Кипр', 'Китай', 'Колумбия', 'Кооперативная Республика Гайана', 'Королевство Саудовская Аравия', 'Кувейт', 'Кыргызстан', 'Лаос', 'Латвия', 'Ливан', 'Ливия', 'Литва', 'Лихтенштейн', 'Люксембург', 'Македония', 'Малайзия', 'Мали', 'Мальдивская Республика', 'Мальта', 'Марокко', 'Мексика', 'Молдавия', 'Монако', 'Монголия', 'Мьянма', 'Намибия', 'Непал', 'Нигерия', 'Нидерланды', 'Новая Зеландия', 'Норвегия', 'ОАЭ', 'Объединенная Республика Танзания', 'Оман', 'Острова Кайман', 'Пакистан', 'Панама', 'Парагвай', 'Перу', 'Польша', 'Португалия', 'Республика Бенин', 'Республика Гаити', 'Республика Гана', 'Республика Гватемала', 'Республика Зимбабве', 'Республика Камерун', 'Республика Кения', 'Республика Конго', 'Республика Коста-Рика', 'Республика Кот-д’Ивуар', 'Республика Куба', 'Республика Либерия', 'Республика Маврикий', 'Республика Мадагаскар', 'Республика Малави', 'Республика Нигер', 'Республика Никарагуа', 'Республика Северный Судан', 'Республика Сейшельские острова', 'Республика Сенегал', 'Республика Сьерра-Леоне', 'Республика Чад', 'Республика Эль-Сальвадор', 'Реюньон', 'Россия', 'Румыния', 'Сент-Винсент и Гренадины', 'Сербия', 'Сингапур', 'Сирия', 'Словакия', 'Словения', 'США', 'Таджикистан', 'Таиланд', 'Тайвань', 'Тоголезская Республика', 'Тунис', 'Туркменистан', 'Турция', 'Уганда', 'Узбекистан', 'Украина', 'Уругвай', 'Филиппины', 'Финляндия', 'Франция', 'Хорватия', 'Центральноафриканская Республика', 'Черногория', 'Чехия', 'Чили', 'Швейцария', 'Швеция', 'Шотландия', 'Шри-Ланка', 'Эквадор', 'Эритрея', 'Эстония', 'Эфиопия', 'ЮАР', 'Южная Корея', 'Южная Осетия', 'Ямайка', 'Япония'];
let city = ['Абай', 'Агадырь', 'Айтеке-Би', 'Аккистау', 'Акколь', 'Акку', 'Акмол', 'Аксай', 'Аксу', 'Аксу-Аюлы', 'Аксукент', 'Актау', 'Актобе', 'Актогай', 'Алга', 'Алматы', 'Алтай (Зыряновск)', 'Амангельды', 'Арал', 'Аркалык', 'Аршалы', 'Арыс', 'Аса', 'Астраханка', 'Атасу', 'Атбасар', 'Атырау', 'Аулиеколь', 'Аягоз', 'Бадамша', 'Байконыр', 'Баканас', 'Балкашино', 'Балпык-Би', 'Балхаш', 'Баянаул', 'Бейнеу', 'Бескарагай', 'Бишкуль', 'Большенарымское', 'Боровской', 'Бородулиха', 'Ботакара', 'Булаево', 'Вахтовый поселок Тенгиз', 'Ганюшкино', 'Глубокое', 'Денисовка', 'Державинск', 'Егиндыколь', 'Ерейментау', 'Есик', 'Есиль', 'Жаксы', 'Жалагаш', 'Жанакорган', 'Жанаозен', 'Жанатас', 'Жангала', 'Жанибек', 'Жансугуров', 'Жаркент', 'Жаркент (Жамбыльская обл)', 'Жезказган', 'Железинка', 'Жем', 'Жетысай', 'Житикара', 'Жосалы', 'Жымпиты', 'Зайсан', 'Затобольск', 'Зеренда', 'Индерборский', 'Иргиз', 'Иртышск', 'Казалинск', 'Казталовка', 'Казыгурт', 'Калбатау', 'Камысты', 'Кандыагаш', 'Капшагай', 'Карабалык', 'Карабулак', 'Караганда', 'Каражал', 'Караменды', 'Карасу', 'Каратау', 'Каратобе', 'Караул', 'Карауылкелды', 'Каркаралинск', 'Каскелен', 'КасымаКайсенова', 'Качиры', 'Кеген', 'Кентау', 'Киевка', 'Кишкенеколь', 'Кобда', 'Кокпекты', 'Коктобе', 'Кокшетау', 'Коргалжын', 'Кордай', 'Костанай', 'Кулан', 'Кульсары', 'Курчатов', 'Курчум', 'Курык', 'Кызыл-Сай', 'Кызылорда', 'Ленгер', 'Лисаковск', 'Макат', 'Макинск', 'Мамлютка', 'Мангистау', 'Мартук', 'Махамбет', 'Мерке', 'Миялы', 'Мойынкум', 'Момышулы', 'Новоишимское', 'Астана', 'Осакаровка', 'Отеген-Батыр', 'Павлодар', 'Переметное', 'Петропавловск', 'Пресновка', 'Приозёрск', 'Риддер', 'Рудный', 'Сайхин', 'Сарань', 'Сарканд', 'Сарыагаш', 'Сарыкемер', 'Сарыколь', 'Сарыозек', 'Сатпаев', 'Саумалколь', 'Семей', 'Сергеевка', 'Серебрянск', 'Смирново', 'Степногорск', 'Степняк', 'Тайынша', 'Талгар', 'Талдыкорган', 'Талшик', 'Тараз', 'Тарановское', 'Таскала', 'Текели', 'Темир', 'Темирлановка', 'Темиртау', 'Теректы', 'Теренозек', 'Тимирязево', 'ТурараРыскулова', 'Тургай', 'Туркестан', 'Узунколь', 'Узынагаш', 'Уил', 'Улытау', 'Уральск', 'Урджар', 'Успенка', 'Усть-Каменогорск', 'Ушарал', 'Уштобе', 'Федоровка', 'Федоровка(Коснатайскаяобл', ')', 'Форт-Шевченко', 'Хромтау', 'Чапаев', 'Чингирлау', 'Чунджа', 'Шалкар', 'Шар', 'Шардара', 'Шаульдер', 'Шахтинск', 'Шемонаиха', 'Шетпе', 'Шиели', 'Шолаккорган', 'Шортанды', 'Шу', 'Шубаркудук', 'Шымкент', 'Щербакты', 'Щучинск', 'Экибастуз', 'Эмба', 'Явленка'];


function searchInput(place, dropdown) {

    placeItems = document.getElementsByClassName(dropdown);

    for (let placeItem of placeItems) {
        let formElement = placeItem.closest('.select-wrapper') || [];
        let inputElement = placeItem.previousElementSibling || [];

        window.addEventListener("load", init);

        function init() {
            bindEvents();
        }

        function bindEvents() {

            inputElement.addEventListener(
                "keyup",
                searchElem.bind(event, inputElement),
                placeItem.classList.remove('show')
            );
        }

        function searchElem(inputElement) {
            let searchedTerm = inputElement.value && inputElement.value.toLowerCase();

            let listElements = place.filter((title) => {
                let listTitle = title || "";
                return listTitle.toLowerCase().indexOf(searchedTerm) > -1;
            });

            addElemDropdown(listElements);
        }


        function addElemDropdown(listElements = []) {
            placeItem.innerHTML = '';

            listElements.forEach((title) => {
                let x = `<li>${title}</li>`;
                placeItem.innerHTML += x;
            });


            if (listElements.length === 0) {
                placeItem.innerHTML = `<li class="grey-text disabled">Ничего не найдено</li>`;
            }

            selectDropdown = formElement.querySelectorAll('li');

            for (let dropdownItem of selectDropdown) {
                dropdownItem.addEventListener('click', function(e) {
                    e.preventDefault()
                    let data = this.innerHTML;
                    inputElement.value = data;
                    placeItem.classList.remove('show')
                });
            }
        }
    }
}


searchInput(country, 'country');
searchInput(city, 'city');




let selectBtns = document.querySelectorAll('.select-input');

if (selectBtns.length) {

    for (let selectBtn of selectBtns) {
        selectBtn.addEventListener('click', function(e) {
            this.nextElementSibling.classList.toggle('show');
        })
        let select = selectBtn.nextElementSibling;
        if (select.closest('.select-dropdown')) {
            selectDropdown = select.closest('.select-dropdown').querySelectorAll('li');

            for (let dropdownItem of selectDropdown) {
                dropdownItem.addEventListener('click', function(e) {
                    e.preventDefault()
                    let data = this.innerHTML;
                    selectBtn.value = data;
                    selectBtn.nextElementSibling.classList.remove('show')
                });

                document.addEventListener('click', function(e) {
                    var target = e.target;
                    var itsDropdown = target == select.closest('.select-dropdown') || select.closest('.select-dropdown').contains(target);
                    var itsBtn = target == selectBtn;
                    var dropdownActive = select.closest('.select-dropdown').classList.contains('show');

                    if (!itsDropdown && !itsBtn && dropdownActive) {
                        selectBtn.nextElementSibling.classList.remove('show')
                    }
                });

            }
        }
    }
}



let citySelect = document.querySelector('.city-btn');

if (citySelect) {
    citySelect.addEventListener('click', function(e) {
        document.querySelector('.city-dropdown').classList.add('active')
        cityItems = citySelect.nextElementSibling.querySelectorAll('li');
        for (let cityItem of cityItems) {
            cityItem.addEventListener('click', function(e) {
                let current = this.innerHTML;
                citySelect.querySelector('.current').innerHTML = current;
                document.querySelector('.city-dropdown').classList.remove('active')
            })

        }
    })

}



let showPasswordBtns = document.querySelectorAll('.show-password')

if (showPasswordBtns.length) {

    for (let btn of showPasswordBtns) {
        btn.addEventListener('click', () => {
            let parent = btn.parentNode
            let input = parent.querySelector('input')
            let type = input.type
            btn.classList.toggle('show')

            if (type == 'password') {
                input.type = 'text'
            } else {
                input.type = 'password'
            }
        })
    }

}


let showResumeBtns = document.querySelectorAll('.show-resume')

if (showResumeBtns.length) {

    for (let btn of showResumeBtns) {
        btn.addEventListener('click', () => {
            let parent = btn.parentNode
            let resume = parent.previousElementSibling
            btn.classList.toggle('show')

            if (btn.classList.contains('show')) {
                resume.innerHTML = 'Видно всем';
            } else {
                resume.innerHTML = 'Скрыто'
            }

        })
    }

}


let addFavBtns = document.querySelectorAll('.fav-add-btn');

if (addFavBtns.length) {

    for (let btn of addFavBtns) {

        btn.addEventListener('click', () => {

            if (type == null) {
                var unregisteredWidget = btn.closest('.card-item__bottom').querySelector('.unregistered-widget');
                unregisteredWidget.classList.add('active');


                document.addEventListener('click', function(e) {
                    var target = e.target;
                    var itsDropdown = target == unregisteredWidget.closest('.card-item__bottom') || unregisteredWidget.closest('.card-item__bottom').contains(target);
                    var itsBtn = target == btn;
                    var dropdownActive = unregisteredWidget.classList.contains('active');


                    if (!itsDropdown && !itsBtn && dropdownActive) {
                        unregisteredWidget.classList.remove('active')
                    }
                });
            } else {
                btn.classList.toggle('active')
            }

        })
    }

}

let openSocialWidget = document.querySelectorAll('.open-social-btn');
if (openSocialWidget.length) {

    for (let social of openSocialWidget) {
        social.addEventListener('click', function(e) {
            if (type == null) {
                var unregisteredWidget = social.closest('.card-item__bottom').querySelector('.unregistered-widget');
                unregisteredWidget.classList.add('active');


                document.addEventListener('click', function(e) {
                    var target = e.target;
                    var itsDropdown = target == unregisteredWidget.closest('.card-item__bottom') || unregisteredWidget.closest('.card-item__bottom').contains(target);
                    var itsBtn = target == social;
                    var dropdownActive = unregisteredWidget.classList.contains('active');


                    if (!itsDropdown && !itsBtn && dropdownActive) {
                        unregisteredWidget.classList.remove('active')
                    }
                });
            } else {
                social.closest('.card-item__bottom').querySelector('.social-widget').classList.add('show')
                document.addEventListener('click', function(e) {
                    var target = e.target;
                    var itsDropdown = target == social.closest('.card-item__bottom').querySelector('.social-widget') || social.closest('.card-item__bottom').querySelector('.social-widget').contains(target);
                    var itsBtn = target == social;
                    var dropdownActive = social.closest('.card-item__bottom').querySelector('.social-widget').classList.contains('show');


                    if (!itsDropdown && !itsBtn && dropdownActive) {
                        social.closest('.card-item__bottom').querySelector('.social-widget').classList.remove('show')
                    }
                });
            }
        })
    }
}

let avatar = document.querySelector('.avatar'),
    editFile = document.querySelector('#avatar-file');

function editAvatar() {
    let file = editFile.files[0];
    imageSrc = avatar.dataset.src;
    if (file.length != 0) {
        imageSrc = URL.createObjectURL(file);
        localStorage.setItem('myImage', imageSrc);
    }
    avatar.dataset.src = localStorage.getItem('myImage')
    avatar.style.backgroundImage = "url('" + imageSrc + "')";
    document.querySelector('.delete-image').classList.remove('dn');
    document.querySelector('.no-image').classList.add('dn');
}


function removeAvatar() {
    avatar.style.backgroundImage = "url('')";
    document.querySelector('.delete-image').classList.add('dn');
    document.querySelector('.no-image').classList.remove('dn');
}



let openSocial = document.querySelector('.open-social');
if (openSocial) {

    openSocial.addEventListener('click', function(e) {
        document.querySelector('.social-widget').classList.toggle('show');
    })

    document.addEventListener('click', function(e) {
        var target = e.target;
        var itsDropdown = target == document.querySelector('.social-widget') || document.querySelector('.social-widget').contains(target);
        var itsBtn = target == openSocial;
        var dropdownActive = document.querySelector('.social-widget').classList.contains('show');


        if (!itsDropdown && !itsBtn && dropdownActive) {
            document.querySelector('.social-widget').classList.remove('show')
        }
    });
}


HTMLElement.prototype.check = function() {
    let parent = this.parentNode
    let error = parent.querySelector('.error-message')
    let val = String(this.value).trim()

    if (error) {
        error.remove()
    }

    let errors = 0
    let type = this.type

    if (type == 'checkbox') {
        if (this.checked) {
            this.classList.remove('error')
        } else {
            this.classList.add('error')
            errors++
        }
    } else {

        if (val) {
            this.classList.remove('error')
        } else {
            errors++
            this.classList.add('error')
        }


        this.addEventListener('input', () => {
            this.classList.remove('error')
        })
    }

    return errors
}


HTMLElement.prototype.disable = function(appendLoading = false) {
    this.setAttribute('disabled', 'disabled')

}



let inputs = document.querySelectorAll('input, textarea')

if (inputs.length) {
    for (let input of inputs) {
        input.classList.remove('error')
    }
}



var type = localStorage.getItem('type')
document.querySelector('body').classList.add(type);

/* Авторизоваться как  соискатель  */
function applicantLogin(e) {

    let form = document.querySelector('.auth-form')
    let loginField = document.querySelector('#login_email')
    let passwordField = document.querySelector('#login_password')
    let btn = document.querySelector('#login_send')
    let errors = 0
    let checkFields = [loginField, passwordField]

    e.preventDefault()

    for (field of checkFields) {
        errors += field.check()
    }

    if (!errors) {
        btn.disable(true)
        localStorage.setItem('type', 'authorized')
        window.location.href = 'search-vacancy.html'
    }

}
let loginBtn = document.querySelector('#login_send')

if (loginBtn) {
    loginBtn.addEventListener('click', applicantLogin)
}




/* Авторизоваться как  работодатель  */
let loginEmployer = document.querySelector('.login-employer-btn');
if (loginEmployer) {

    loginEmployer.addEventListener('click', function(e) {

        let form = document.querySelector('.auth-form')
        let loginField = document.querySelector('#employer_email')
        let passwordField = document.querySelector('#employer_password')
        let errors = 0
        let checkFields = [loginField, passwordField]

        e.preventDefault()

        for (field of checkFields) {
            errors += field.check()
        }

        if (!errors) {
            loginEmployer.disable(true)
            localStorage.setItem('type', 'authorized-employer');
            window.location.href = 'search-resume.html'
        }
    })
}


let logoutBtns = document.querySelectorAll('.logout-btn');
if (logoutBtns.length) {
    for (let logoutBtn of logoutBtns) {
        logoutBtn.addEventListener('click', function(e) {
            localStorage.clear();
            window.location.href = 'login.html';
            e.preventDefault()
        })
    }
}

let registerApplicant = document.querySelector('#register-btn');
if (registerApplicant) {
    registerApplicant.addEventListener('click', function(e) {
        window.location.href = "register-success.html"
        e.preventDefault()
    })
}

let openPopup = document.querySelector('.open-order-popup');
if (openPopup) {
    openPopup.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.popup.order-popup').classList.add('show');
    });

}
let deleteResume = document.querySelectorAll('.delete-card');
if (deleteResume) {
    for (let deleteBtn of deleteResume) {
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.popup.delete-resume-popup').classList.add('show');
        });
    }
}



let responseBtn = document.querySelector('.response-btn');
if (responseBtn) {
    responseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.popup.order-popup').classList.remove('show');
        openPopup.innerHTML = "Отклик доставлен";
        document.querySelector('.notif.response-notif').classList.add('show');

    });

}

let closeNotif = document.querySelectorAll('.close-notif');
if (closeNotif.length) {
    for (let btn of closeNotif) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.notif').classList.remove('show');
        })
    }
}


let closePopup = document.querySelectorAll('.close-popup');
if (closePopup.length) {
    for (let btn of closePopup) {
        btn.addEventListener('click', function(e) {
            let popups = document.querySelectorAll('.popup')
            for (let popup of popups) {
                popup.classList.remove('show');
            }
            e.preventDefault();
        })
    }
}





HTMLElement.prototype.phoneMask = function() {
    let mask = new IMask(this, {
        mask: '+{7} (000) 000-00-00',
        lazy: this.classList.contains('hide-mask'),
        placeholderChar: '_'
    })

    mask.type = 'phone'
    this.mask = mask
}


let phoneInputs = document.querySelectorAll('.phone-mask')
if (phoneInputs.length) {
    for (let input of phoneInputs) {
        input.phoneMask()
    }
}




let skillItems = document.querySelectorAll('.select-dropdown.skill'),
    bottomSkills = document.querySelectorAll('.skills .line'),
    skill_1 = ["Первичная бухгалтерская документация", "Расчет заработной платы", "Основные средства", "Запасы", "Банк-клиент", "Статистическая отчетность", "Разноска выписок банка", "Сверка взаиморасчетов с поставщиками товаров и услуг", "Учёт подотчетных сумм", "Бухгалтерские программы (1С, ККМ, ПК, ИС ЭСФ)", "Работа в команде", "Внимательность"],
    skill_2 = ["Пользователь ПК", "Работа в команде", "Деловая переписка", "Выставление счетов", "Работа с большим объемом информации", "Внимательность"],
    skill_3 = ["Кассовые операции", "Банковские операции", "Кассовые и банковские документы", "Работа с кассой, банком", "Учёт подотчетных сумм", "Реализация товаров и услуг", "Бухгалтерские программы: Управление торговлей, Программы 1С", "Сверка взаиморасчетов с поставщиками товаров и услуг", "Дебиторская/кредиторская задолженность", "Контроль расчетов по реализации посредством POS-терминалов", "Учетная политика", "Правила деловой этики", "Работа в команде", "Внимательность", "Материальная ответственность"],
    skill_4 = ["Учет остатков (деньги, товары, ОС, материалы)", "Умение работать в команде", "Основные средства", "Запасы", "Кассовые и банковские операции", "Первичная бухгалтерская документация", "Правила деловой этики", "Работа в команде", "Внимательность"],
    skill_5 = ["Знание всех участков бухгалтерского учета", "Оформление операций по импорту и экспорту", "Бухгалтерские программы", "Проведение инвентаризаций", "Проведение инвентаризаций",
        "Сверка взаиморасчетов с поставщиками и покупателями товаров и услуг", "Начисление заработной платы", "Сдача налоговой отчетности (100.00, 101.04, 200.00, 300.00, 870.00, 910.00)", "Сдача отчетности в стат. управление и Нац. Банк",
        "Расчет и оплата налогов и отчислений", "Знание ЭСФ, СНТ", "Правила деловой этики", "Международное налогообложение", "Международные стандарты бухгалтерского учета", "Контроль работы сотрудников, постановка задач (умение делегировать)", "Умение работать в режиме многозадачности, ответственность и проактивностьОрганизация эффективной работы бух отдела",
        "Внимательность", "Учетная политика", "Материальная ответственность"
    ],
    skill_6 = ["Знание всех участков бухгалтерского учета", "Свободное владение ПК, 1С,", "Работа с поставщиками и покупателями, сверка с контрагентами",
        "Отчетность в налоговые органы", "Участие в инвентаризациях", "Материальная ответственность", "Правила деловой этики", "Международные стандарты бухгалтерского учета", "Умение работать в режиме многозадачности, ответственность и проактивность", "Внимательность"
    ],
    skill_7 = ["Работа с кассовым аппаратом, POS-терминалом", "Формирование и отправка ЭСФ", "Приходные и расходные операции", "Разноска выписок", "Формирование и отражение кассовых операций в учетной базе",
        "Составление кассовой отчетности", "Организация денежных переводов", "Оптово-розничное кассовое обслуживание", "Работа в команде", "Внимательность"
    ],
    skill_8 = ["Организация и полное ведение бухгалтерского, налогового учета", "Сдача налоговой и стат. отчётности", "Международные и национальный стандарты бухгалтерского учета",
        "Международное налогообложение", "Умение работать в режиме многозадачности, ответственность и проактивность", "Внимательность"
    ];

function addSkills(arr) {

    for (let bottomSkill of bottomSkills) {
        while (bottomSkill.firstChild) {
            bottomSkill.removeChild(bottomSkill.firstChild);
        }
    }

    for (let skillItem of skillItems) {

        while (skillItem.firstChild) {
            skillItem.removeChild(skillItem.firstChild);
        }

        for (i = 0; i < arr.length; ++i) {
            let title = "<li class='icon-add'>" + arr[i] + "</li>";
            skillItem.innerHTML += title;
        }

        let listItems = skillItem.querySelectorAll('li');

        for (let listItem of listItems) {
            listItem.addEventListener('click', function(e) {

                listItem.classList.add('add');
                let activeElem = skillItem.querySelectorAll('li.add');
                document.querySelector('.skills .line').innerHTML += "<div><span class='title'>" + this.innerHTML + "</span><span class='remove-skill icon-delete'></span></div>";

                let removeSkillBtns = document.querySelectorAll('.remove-skill');

                for (let removeSkill of removeSkillBtns) {
                    removeSkill.addEventListener('click', function(e) {

                        var parent = this.closest('div'),
                            title = this.previousElementSibling;

                        for (elem of activeElem) {
                            if (elem.innerHTML == title.innerHTML) {
                                elem.classList.remove('add')
                            }
                        }
                        parent.parentNode.removeChild(parent);
                    });
                }
                e.preventDefault()
            });
        }
    }
}
addSkills(skill_2);
