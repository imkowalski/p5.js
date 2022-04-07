// Made by Michal K.

/*
sæt variabler som bruges i programet

*/
let h, m, s;
let hc, mc, sc;


function setup() {
    createCanvas(400, 400);
    hc = createVector(50, height * (1 / 4))
    mc = createVector(50, height * (2 / 4))
    sc = createVector(50, height * (3 / 4))
}

function draw() {
    background(0);
    h = tbt(hour());
    m = tbt(minute());
    s = tbt(second());
    console.log(h)
    noStroke()
    for (let i = 0; i < h.length; i++) {
        if (h[i] == 1) {
            fill(0, 255, 0)
        } else {
            fill(255, 255, 255)
        }
        square(hc.x + (i * 30), hc.y, 20)
    }
    for (let i = 0; i < m.length; i++) {
        if (m[i] == 1) {
            fill(0, 255, 0)
        } else {
            fill(255, 255, 255)
        }
        square(mc.x + (i * 30), mc.y, 20)
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 1) {
            fill(0, 255, 0)
        } else {
            fill(255, 255, 255)
        }
        square(sc.x + (i * 30), sc.y, 20)
    }

}


function tbt(int) {
    return String(int.toString(2))
}