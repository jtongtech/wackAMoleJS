const holes = document.querySelectorAll('.hole');
        const scoreBoard = document.querySelector('.score');
        const moles = document.querySelectorAll('.mole');

        function randTime(max, min) {
            return Math.round(Math.random() * (max - min) + min);
        }