document.addEventListener('DOMContentLoaded', function () {
    let radio = document.querySelectorAll('.radio_span'),
        checkbox = document.querySelectorAll('.checkbox_span'),
        resetBtn = document.querySelector('.test__post_reset'),
        postBtn = document.querySelectorAll('.test__post_post'),
        formSuccessfully = document.querySelector('.test__form'),
        formPost = document.querySelector('.myform'),
        nameFill = document.querySelector('.name');

    postBtn[1].addEventListener('click', function (e) {
        // e.preventDefault();
        if (checkAlwaysFill()) {
            formPost.addEventListener('submit', function (event) {
                event.preventDefault();
                const formData = new FormData(this);
                const fetchResp = fetch('../php/form_post.php', {
                    method: 'POST',
                    body: formData
                });
                resetBtn.click();
            });
            formSuccessfully.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else console.log('no');     
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
            value.closest('div').classList.remove('noFilled');
            value.classList.toggle('checkbox_span_clicked')
        });
    });

    radio.forEach(function(value, key) {
        value.addEventListener('click', function(e) {
            value.closest('div').classList.remove('noFilled');
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

    function checkCheckboxFill () {
        let a = false;
        let b = false;
        for (let i = 0; i < 4; i++) {
            if(checkbox[i].classList.contains('checkbox_span_clicked')) {
                a = true;
            }
        } 
        for (let i = 4; i < 13; i++) {
            if(checkbox[i].classList.contains('checkbox_span_clicked')) {
                b = true;
            } 
        }
        if (!a)
            document.querySelector('.test__question4').classList.add('noFilled');
        if (!b) 
            document.querySelector('.test__question6').classList.add('noFilled');
        if (a && b) {
            return true
        } else {
            return false
        } 
    }

    function checkRadioFill () {
        let a = false,
            b = false,
            c = false,
            d = false;
        for (let i = 0; i < 4; i++) {
            if(radio[i].classList.contains('radio_span_clicked')) {
                a = true;
            }
        } 
        for (let i = 4; i < 8; i++) {
            if(radio[i].classList.contains('radio_span_clicked')) {
                b = true;
            }
        } 
        for (let i = 8; i < 12; i++) {
            if(radio[i].classList.contains('radio_span_clicked')) {
                c = true;
            }
        } 
        for (let i = 12; i < 16; i++) {
            if(radio[i].classList.contains('radio_span_clicked')) {
                d = true;
            }
        } 
        let arr = [a,b,c,d];
        if (!a)
            document.querySelector('.test__question1').classList.add('noFilled');
        if (!b) 
            document.querySelector('.test__question2').classList.add('noFilled');
        if (!c) 
            document.querySelector('.test__question3').classList.add('noFilled');
        if (!d) 
            document.querySelector('.test__question5').classList.add('noFilled');
        
        if (a && b && c && d) {
            return true
        } else return false;
        
    }
    nameFill.addEventListener('input', function () {
        if (nameFill.value == '') {
            document.querySelector('.test__personal').classList.add('noFilled');
        } else {
            document.querySelector('.test__personal').classList.remove('noFilled');
        }
    });
    function checkAlwaysFill() {
        let a = b = c = false;
        if (checkCheckboxFill()) a = true;  
        if(checkRadioFill()) b = true;  
        if (!nameFill.value == '') { c = true } else document.querySelector('.test__personal').classList.add('noFilled')
        if (a && b && c) { return true } else return false  
    }
});