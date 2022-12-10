const btnUp= {

    el: document.querySelector('.stendup'),
    show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('stendup_2');
    }

    ,
    hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('stendup_2');
    }

    ,
    addEventListener() {

        // при прокрутке содержимого страницы
        window.addEventListener('scroll', ()=> {
                // определяем величину прокрутки
                const scrollY=window.scrollY || document.documentElement.scrollTop;
                // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
                scrollY > 900 ? this.show() : this.hide();
            }

        );

        // при нажатии на кнопку .btn-up
        document.querySelector('.stendup').onclick=()=> {

            // переместим в начало страницы
            window.scrollTo( {
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                }

            );
        }
    }
}

btnUp.addEventListener();


console.log(btnUp)