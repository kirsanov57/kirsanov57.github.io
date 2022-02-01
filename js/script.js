document.addEventListener('DOMContentLoaded', function () {
    let radio = document.querySelectorAll('.radio_span'),
        checkbox = document.querySelectorAll('.checkbox_span'),
        resetBtn = document.querySelector('.test__post_reset'),
        postBtn = document.querySelectorAll('.test__post_post'),
        formSuccessfully = document.querySelector('.test__form');

    
    postBtn[1].addEventListener('click', function (e) {
        e.preventDefault();
        formSuccessfully.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    postBtn[0].addEventListener('click', () => {
        formSuccessfully.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetForm();
    });
    
    checkbox.forEach(function(value, key) {
        value.addEventListener('click', function(e) {
            value.classList.toggle('checkbox_span_clicked')
        });
    });

    radio.forEach(function(value, key) {
        value.addEventListener('click', function(e) {
            checkRadio(key);
            value.classList.add('radio_span_clicked')
        });
    });
    
    function resetForm () {
        checkbox.forEach(function(value) {
            value.classList.remove('checkbox_span_clicked');
        });
        radio.forEach(function(value) {
            value.classList.remove('radio_span_clicked');
        });
        document.querySelector('.name').value = '';
    }
    
    function checkRadio (key) {
        if (key >= 0 && key <=3) {
            for (let i = 0; i < 4; i++) {
                radio[i].classList.remove('radio_span_clicked');
            } 
        } else if (key >= 4 && key <=7) {
            for (let i = 4; i < 8; i++) {
            radio[i].classList.remove('radio_span_clicked');
            }
        } else if (key >= 8 && key <=11) {
            for (let i = 8; i < 12; i++) {
            radio[i].classList.remove('radio_span_clicked');
            }
        } else if (key >= 12 && key <=15) {
            for (let i = 12; i < 16; i++) {
            radio[i].classList.remove('radio_span_clicked');
            }
        }
    }
});