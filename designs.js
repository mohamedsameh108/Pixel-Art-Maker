const grid = document.getElementById("pixelCanvas");
const size = document.getElementById("sizePicker");
//know the selectd height & width values for table
size.addEventListener("submit", function (event) {
    event.preventDefault();
    const height = document.querySelector("#inputHeight").value;
    const width = document.querySelector("#inputWidth").value;
    makeGrid(height, width);
});
//function to make the table
function makeGrid(x, z) {
    grid.innerHTML = "";
    for (i = 0; i < x; i++) {
        const row = document.createElement("tr");
        for (j = 0; j < z; j++) {
            const column = document.createElement("td");
            row.appendChild(column);
        };
        grid.appendChild(row);
    };
};
//color the cell by click on it
grid.addEventListener("click", changeColor);

function changeColor(event) {
    const color = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = color
};