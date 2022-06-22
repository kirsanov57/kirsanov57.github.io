'use strict'
window.addEventListener('DOMContentLoaded', function () {

    // class Planet {
    //     constructor(name, image, weight, radius, remoteness) {

    //     }

    //     sizeOfPlanet(size) {
    //         return `планета ${this.name} весит ${size}`;
    //     }
    // }

    // let earthInfo = {
    //     name: 'Земля',
    //     image: 'image/Earth.png',
    //     weight: '5,9726e+24',
    //     radius: '6378,1',
    //     remoteness: '149 597 871',
    //     info: ''
    // }

    let arrayDescrPlanets = [document.querySelector('.description-planet-mercury'), document.querySelector('.description-planet-venus'),
    document.querySelector('.description-planet-earth'), document.querySelector('.description-planet-mars'),
    document.querySelector('.description-planet-jupiter'), document.querySelector('.description-planet-saturn'),
    document.querySelector('.description-planet-uran'), document.querySelector('.description-planet-neptune'),
    this.document.querySelector('.description-planet-sun')];

    

    let mercury = this.document.querySelector('.mercury'),
    venus = this.document.querySelector('.venus'),
    earth = document.querySelector('.earth'),
    mars = this.document.querySelector('.mars'),
    jupiter = this.document.querySelector('.jupiter'),
    saturn=this.document.querySelector('.saturn'),
    uran = this.document.querySelector('.uran'),
    neptune = this.document.querySelector('.neptune'),
    sun = this.document.querySelector('.sun'),
    close = document.querySelector('.close'),
    planetInfo = document.querySelector('.planet-info'),
    arrayPlanets = [mercury, venus, earth, mars, jupiter, saturn, uran, neptune,sun];

    // window.addEventListener('click', event => { 
    //     if (!event.target.closest('.planet-info') && planetInfo.classList.contains('active')) {
    //         let result; //выявляем какой дескр сейчас открыт
    //         arrayDescrPlanets.forEach(el => {
    //             if (!el.classList.contains('hidden')) result = el.className;
    //         });

    //         let finish; //выявляем кнопку соответствующую этому дескру
    //         arrayPlanets.forEach(el => {
    //             let reg = new RegExp(el.className)
    //             if(result.search(reg) != -1) {
    //                 finish = el;}
    //         })
    //         console.log(event.target, finish, arrayPlanets.includes(event.target));
    //         if(event.target != finish && arrayPlanets.includes(event.target)) {
                
    //             close.click()
    //             this.setTimeout(() => {
    //                 arrayPlanets.find((el) => event.target === el).click();
    //                 console.log(arrayPlanets.find((el) => event.target === el))
    //             }, 500)
    //         } else close.click()
    //     }
    // });

    this.window.addEventListener('mouseup', (event) => {
        if (!event.target.closest('.planet-info') && planetInfo.classList.contains('active') && (!arrayPlanets.includes(event.target))) 
            close.click();
    });

    function waitClosing (event) {
        if(planetInfo.classList.contains('active')) {
            let result; //выявляем какой дескр сейчас открыт
            arrayDescrPlanets.forEach(el => {
                if (!el.classList.contains('hidden')) result = el.className;
            });

            let finish; //выявляем кнопку соответствующую этому дескру
            arrayPlanets.forEach(el => {
                let reg = new RegExp(el.className)
                if(result.search(reg) != -1) {
                    finish = el;}
            })

            if (finish !== event.target) {
                close.click();
                setTimeout(() => {
                    event.target.click();
                },600)
            } else {
                close.click();
            }
        } else {
            planetInfo.classList.toggle('active');
            document.querySelector(`.description-planet-${event.target.className}`).classList.toggle('hidden');
            close.classList.toggle('close-active');
        }
    }

    sun.addEventListener('click', (e) => {
        waitClosing(e);
    });

    mercury.addEventListener('click', function (e) {
        console.log(document.querySelector(`.description-planet-${e.target.className}`));
        waitClosing(e);
    });

    venus.addEventListener('click', function (e) {
        waitClosing(e);
    })

    earth.addEventListener('click', function (e) {
        waitClosing(e);
    });

    mars.addEventListener('click', function (e) {
        waitClosing(e);
    });

    jupiter.addEventListener('click', function (e) {
        waitClosing(e);
    });

    saturn.addEventListener('click', function (e) {
        waitClosing(e);
    });

    uran.addEventListener('click', function (e) {
        waitClosing(e);
    });

    neptune.addEventListener('click', function (e) {
        waitClosing(e);
    });

    close.addEventListener('click', function() {
        planetInfo.classList.remove('active');
        close.classList.remove('close-active');
        planetHidden();
    });

    function planetHidden () {
        for (let i = 0; i < arrayPlanets.length; i++) {
            arrayDescrPlanets[i].classList.add('hidden');
        }
    }

    
});