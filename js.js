let p = document.body,
    o = document.getElementById("i"),
    i = 0;
setInterval(function () {
    /* function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    i = getRndInteger(0, 1000000);
 */
    o.innerHTML = i;
    if (i < 10)
        p.style
        ['background-color'] = `#00000${i}`;
    if (10 < i < 100)
        p.style
        ['background-color'] = `#0000${i}`;

    if (100 < i < 1000)
        p.style
        ['background-color'] = `#000${i}`;

    if (1000 < i < 10000)
        p.style
        ['background-color'] = `#00${i}`;

    if (10000 < i < 100000)
        p.style
        ['background-color'] = `#0${i}`;

    if (100000 < i < 1000000)
        p.style
        ['background-color'] = `#${i}`;
    i++
}, 1);