function figureArea(width, height, Width, Height) {
    let w = Number(width);
    let h = Number(height);
    let W = Number(Width);
    let H = Number(Height);

    let s1 = W * H;
    let s2 = w * h;
    let s3 = Math.min(w, W) * Math.min(h, H);

    console.log(s1 + s2 - s3);

}
figureArea(2, 4, 5, 3);