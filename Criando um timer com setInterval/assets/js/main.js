function timer() {
    const timer = document.querySelector('.timer');

    let seconds = 0;
    let interval;

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('init')) {
            timer.classList.remove('paused');
            clearInterval(interval);
            interval = setInterval(() => {
                seconds++;
                timer.innerHTML = new Date(seconds * 1000).toISOString().slice(11, 19);
            }, 1000);
        }

        if (el.classList.contains('pause')) {
            timer.classList.add('paused');
            clearInterval(interval);
        }

        if (el.classList.contains('reset')) {
            timer.classList.remove('paused');
            clearInterval(interval);
            seconds = 0;
            timer.innerHTML = '00:00:00';
        }
    })
}

timer();


