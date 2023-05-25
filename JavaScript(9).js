<input id="from" type="text">
В инпуте написано: <span></span>

<br>

<button class="messageBtn">Показать блок</button>
<div class="message">
  Привет :)
</div>

<br>

<form>
  <label>
    Первый инпут:
    <input class="form-control" type="text">
  </label>
  <br>
  <br>
  <label>
    Второй инпут:
    <select class="form-control">
      <option value=""></option>
      <option value="1">Один</option>
      <option value="2">Два</option>
    </select>
  </label>
  <br>
  <br>
  <button>Отправить</button>
</form>

<script>
  "use strict";


// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
        const inputEl = document.getElementById('from');
        const spanEl = document.querySelector('span');;

        inputEl.addEventListener('input', (event) => {
            spanEl.textContent = event.target.value;
        });

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
        const buttonEl = document.querySelector('.messageBtn');
        const messageEl = document.querySelector('.message');
        buttonEl.addEventListener('click', (event) => {
            messageEl.classList.add('animate_animated');
            messageEl.classList.add('animate_fadeInLeftBig');
            messageEl.style.visibility = 'visible';
        });

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля 
// (необходимо поставить класс error незаполненным полям).  Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
        const formEl = document.querySelector('form');
        const inputElOne = formEl.querySelector('input');
        const selectEl = formEl.querySelector('select');

        const checkValue = () => {
            if (inputElOne.value) inputElOne.classList.remove('error');
            else {
                inputElOne.classList.add('error');
                event.preventDefault();
            }
            if (selectEl.value) selectEl.classList.remove('error');
            else {
                selectEl.classList.add('error');
                event.preventDefault();
            }
        }

        formEl.addEventListener('submit', checkValue);
        formEl.addEventListener('change', checkValue);


  const task3 = document.querySelector('form');
    const forms_el = task3.querySelectorAll('input, select');
    task3.addEventListener('submit', event => {
      forms_el.forEach(forms_el => {
        if (forms_el.value === '') {
          forms_el.classList.add('error')
          event.preventDefault();
        }
      })
    })

    task3.addEventListener('input', event => {
      if (!event.target.classList.contains('form-control')) {
        return;
      }
      event.target.value === ''
        ? event.target.classList.add('error')
        : event.target.classList.remove('error')
    });
