function submit() {
    var G = parseInt(document.getElementById('G').value);
    var D = parseInt(document.getElementById('D').value);
    if (isNaN(G) || isNaN(D)) {
        draw();
    } else {
        draw(G, D);
    }
}

function draw(G=48, D=116) {
    var scale = 4;
    var startX = 200;
    var startY = 30;
    var A = 30 * scale, B = 34 * scale, C = 36 * scale, E = 161 * scale,
        F = 257 * scale, H = 52 * scale, I = 36 * scale, J = 84 * scale,
        K = 91 * scale, L = 30 * scale, M = 10 * scale, N = 43 * scale,
        O = 25 * scale, P = 2 * scale, D_deffault = 116 * scale;

    G *= scale;
    D *= scale;

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    drawTrapez(ctx, startX, startY, A, P, 0);
    drawBox(ctx, startX, startY, A, B);
    drawBox(ctx, startX - ((C - A) / 2), startY + B, C, D - B);
    drawBox(ctx, startX - ((G - A) / 2), startY + D, G, E - D_deffault);
    drawBox(ctx, startX - ((N - A) / 2), startY + ((E - D_deffault) + D), N,
            F - (D + (E - D_deffault) + K));
    drawBox(ctx, startX - ((H - A) / 2), startY + (F - K), H, K - (J + P));
    drawTrapez(ctx, startX - ((H - A) / 2), startY + (F - (J + P)), H, P);
    drawBox(ctx, startX - ((I - A) / 2), startY + (F - J), I, J - (M + 2 * P));
    drawBox(ctx, startX - ((O - A) / 2), startY + (F - (M + 2 * P)), O, P);
    drawBox(ctx, startX - ((L - A) / 2), startY + (F - (M + P)), L, M);
    drawTrapez(ctx, startX - ((L - A) / 2), startY + (F - P), L, P);
}

function drawBox(ctx, startX, startY, h, w) {
    ctx.moveTo(startY, startX);
    ctx.lineTo(startY, startX + h);
    ctx.lineTo(startY + w, startX + h);
    ctx.lineTo(startY + w, startX);
    ctx.lineTo(startY, startX);
    ctx.stroke();
}

function drawTrapez(ctx, startX, startY, h, w, pos=1) {
    var up = startY + w;
    if (!pos) {
        up = startY - w;
    }

    ctx.moveTo(startY, startX);
    ctx.lineTo(startY, startX + h);
    ctx.lineTo(up, startX + (h - w));
    ctx.lineTo(up, startX + w);
    ctx.lineTo(startY, startX);
    ctx.stroke();
}
