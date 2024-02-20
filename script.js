function draw() {
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");
    
    // Draw circle
    painter.strokeStyle = "blue";
    painter.arc(160, 160, 80, 0, 2 * Math.PI);  // x, y, radius, start, end
    painter.stroke();

    painter.beginPath();
    painter.strokeStyle = "red";
    painter.arc(160, 160, 100, 0, 2 * Math.PI);
    painter.stroke();

    painter.beginPath();
    painter.strokeStyle = "green"
    painter.arc(160, 160, 120, 0, 2 * Math.PI);
    painter.stroke();


    painter.beginPath();
    painter.strokeStyle = "blue";
    painter.rect(50,30,100,70)   // x, y, width, height
    painter.stroke();

    painter.fillStyle="red";
    // painter.beginPath();
    painter.fillRect(250,230,95,65);

    painter.fillStyle="yellow";
    painter.beginPath();
    painter.arc(300,200,40,0,2*Math.PI);
    painter.fill();



}