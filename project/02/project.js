function submit() {
    var G = parseInt(document.getElementById('G').value);
    var D = parseInt(document.getElementById('D').value);
    draw(G, D);
    // draw();
}

function draw(G=48, D=116) {
    var startX = 200;
    var startY = 30;
    var A = 30, B = 34, C = 36, E = 161, F = 257, H = 52, I = 36, J = 84,
        K = 91, L = 30, M = 14, N = 43, O = 25, P = 2;

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    drawBox(ctx, startX, startY, A, B);
    drawBox(ctx, startX - ((C - A) / 2), startY + B, C, D - B);
    drawBox(ctx, startX - ((G - A) / 2), startY + D, G, E - 116);
    drawBox(ctx, startX - ((N - A) / 2), startY + ((E - 116) + D), N, F - (D + (E - 116) + K));
    drawBox(ctx, startX - ((H - A) / 2), startY + (F - K), H, K - (J + P));
    drawBox(ctx, startX - ((I - A) / 2), startY + (F - J), I, J - M);
    drawBox(ctx, startX - ((O - A) / 2), startY + (F - M), O, P);
    drawBox(ctx, startX - ((L - A) / 2), startY + (F - (M - P)), L, (M - P));
}

function drawBox(ctx, startX, startY, h, w) {
    ctx.moveTo(startY, startX);
    ctx.lineTo(startY, startX + h);
    ctx.lineTo(startY + w, startX + h);
    ctx.lineTo(startY + w, startX);
    ctx.lineTo(startY, startX);
    ctx.stroke();

}

function drawBox(ctx, startX, startY, h, w) {
    ctx.moveTo(startY, startX);
    ctx.lineTo(startY, startX + h);
    ctx.lineTo(startY + w, startX + h);
    ctx.lineTo(startY + w, startX);
    ctx.lineTo(startY, startX);
    ctx.stroke();

}
