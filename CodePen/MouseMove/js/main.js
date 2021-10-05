window.addEventListener("load", function () {
    document.body.addEventListener("mousemove", (e) => {
        const xCoord = e.clientX;
        const yCoord = e.clientY;

        document.querySelector(".xValue").textContent = xCoord;
        document.querySelector(".yValue").textContent = yCoord;

        const offset = 25;
        const red = offset + (xCoord % 100);
        const green = offset + (yCoord % 100);
        const blue = offset + ((xCoord + yCoord) % 100);

        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    });
});
