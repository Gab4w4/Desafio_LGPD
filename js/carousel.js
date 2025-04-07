let carouselArr = [];

class Carousel {
    constructor(img, descricao, link) {
        this.img = img;
        this.descricao = descricao;
        this.link = link;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;  
                Carousel._size = arr.length; 
                Carousel.Next();  
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000); 
            }
        } else {
            throw "Method Start needs an Array Variable."; 
        }
    }

    static Next() {
        const img = document.getElementById('img');
        const descricao = document.getElementById('descricao');
        const link = document.getElementById('link');

        img.src = carouselArr[Carousel._sequence].img;
        descricao.innerText = carouselArr[Carousel._sequence].descricao;
        link.href = carouselArr[Carousel._sequence].link;

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }

    static Prev() {
        const img = document.getElementById('img');
        const descricao = document.getElementById('descricao');
        const link = document.getElementById('link');

        img.src = carouselArr[Carousel._sequence].img;
        descricao.innerText = carouselArr[Carousel._sequence].descricao;
        link.href = carouselArr[Carousel._sequence].link;

        Carousel._sequence--;

        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
    }
}