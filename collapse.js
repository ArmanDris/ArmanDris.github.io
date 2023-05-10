const collapseBoardColor = '#red';

// Make a 9x9 sqaure 
// Every 3rd line is bold both vertically and horizontally
function drawCollapseGrid() {
    // Vertixal lines
    for (let i = 1; i < 9; i++) {
        collapse_ctx.beginPath();
        if (i % 3 === 0) {
            collapse_ctx.rect(i * boxLength - lineThickness, 0, lineThickness + 2, canvasLength);
        } else {
            collapse_ctx.rect(i * boxLength - (lineThickness + 0), 0, lineThickness, canvasLength);
        }
        collapse_ctx.fillStyle = collapseBoardColor;
        collapse_ctx.fill();
        collapse_ctx.closePath();
    }

    // Horizontal lines
    for (let i = 1; i < 9; i++) {
        collapse_ctx.beginPath();
        if (i % 3 === 0) {
            collapse_ctx.rect(0, i * boxLength - lineThickness, canvasLength, lineThickness + 2);
        } else {
            collapse_ctx.rect(0, i * boxLength - (lineThickness + 0), canvasLength, lineThickness);
        }
        collapse_ctx.fillStyle = collapseBoardColor;
        collapse_ctx.fill();
        collapse_ctx.closePath();
    }
}