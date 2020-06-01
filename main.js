


        var canvas = document.getElementById("canvasCtx");//為元素<canvas>得到DOM對象
        var ctx = canvas.getContext("2d");//使用2d來繪製上下文

        autoSetCanvasArea("canvas");//function autoSetCanvasArea 設定畫板大小及改變窗口大小處理
        listenToUser("canvas"); //function listenToUser 設定畫板繪畫方式


        
        var eraserEnabled = false;
        pen.onclick = function () { //設定eraser
            eraserEnabled = false;
            document.getElementById('pencil').src="penactive.svg"
            document.getElementById('rubber').src="rubberinactive.svg"
        };
        eraser.onclick = function(){
            eraserEnabled =true
            document.getElementById('rubber').src="rubberactive.svg"
            document.getElementById('pencil').src="peninactive.svg"

        };


        del.onclick = function(){
            ctx.clearRect(0,0, canvas.width, canvas.height)
            bg()
        }

        save.onclick = function (){
            var url = canvas.toDataURL("image/png")
            var a = document.createElement('a')
            document.body.appendChild(a)
            a.href =url
            a.download = 'mysketch'
            a.target = '_blank'
            a.click()
        }


        black.onclick = function(){
            ctx.fillStyle = 'black'
            ctx.strokeStyle = 'black'
            black.classList.add('coloractive')
            yellow.classList.remove('coloractive')
            green.classList.remove('coloractive')
            red.classList.remove('coloractive')
            blue.classList.remove('coloractive')
        }

        yellow.onclick = function(){
            ctx.fillStyle = 'yellow'
            ctx.strokeStyle = 'yellow'
            yellow.classList.add('coloractive')
            black.classList.remove('coloractive')
            green.classList.remove('coloractive')
            red.classList.remove('coloractive')
            blue.classList.remove('coloractive')
        }

        green.onclick = function(){
            ctx.fillStyle = 'green'
            ctx.strokeStyle = 'green'
            green.classList.add('coloractive')
            yellow.classList.remove('coloractive')
            black.classList.remove('coloractive')
            red.classList.remove('coloractive')
            blue.classList.remove('coloractive')
        }

        red.onclick = function(){
            ctx.fillStyle = 'red'
            ctx.strokeStyle = 'red'
            red.classList.add('coloractive')
            yellow.classList.remove('coloractive')
            green.classList.remove('coloractive')
            black.classList.remove('coloractive')
            blue.classList.remove('coloractive')
        }

        blue.onclick = function(){
            ctx.fillStyle = 'blue'
            ctx.strokeStyle = 'blue'
            blue.classList.add('coloractive')
            yellow.classList.remove('coloractive')
            green.classList.remove('coloractive')
            red.classList.remove('coloractive')
            black.classList.remove('coloractive')
        }


        /***all functions***/

        function autoSetCanvasArea() {
            canvasArea();

            window.onresize = function () {
                canvasArea();
            };

            function canvasArea() {
                var pageWidth = document.documentElement.clientWidth;
                var pageHeight = document.documentElement.clientHeight;

                canvas.width = pageWidth;
                canvas.height = pageHeight;
            }
        }

        function drawLine(x1, y1, x2, y2) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineWidth = 2;
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
        }

        function bg(){
            ctx.fillStyle = "white";
            ctx.fillRect(0,0, canvas.width, canvas.height)

        }

        function listenToUser() {
            var using = false;
            var lastPoint = { x: undefined, y: undefined };
            bg()

            //檢測特性
            if (document.body.ontouchstart !== undefined) {
                //觸控設備
                canvasCtx.ontouchstart = function (painting) {
                    console.log('you touch me la')
                    var x = painting.touches[0].clientX;
                    var y = painting.touches[0].clientY;
                    
                    console.log(x,y)
                    using = true;
                    if (eraserEnabled) {
                        ctx.clearRect(x, y, 10, 10);
                    } else {
                        lastPoint = { x: x, y: y };
                    }
                }

                canvasCtx.ontouchmove = function (painting) {
                    var x = painting.touches[0].clientX;
                    var y = painting.touches[0].clientY;
                  
                    if (!using) { return }
                    if (eraserEnabled) {
                        ctx.clearRect(x, y, 10, 10);
                    } else {
                        var newPoint = { x: x, y: y };
                        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
                        lastPoint = newPoint;
                    }

                }

                canvasCtx.ontouchend = function (painting) {
                    using = false;
                }


            } else {
                //非觸控設備

                canvasCtx.onmousedown = function (painting) {
                    var x = painting.clientX;
                    var y = painting.clientY;
                    using = true;
                    if (eraserEnabled) {
                        ctx.clearRect(x, y, 10, 10);
                    } else {
                        lastPoint = { x: x, y: y };
                    }
                };

                canvasCtx.onmousemove = function (painting) {
                    var x = painting.clientX;
                    var y = painting.clientY;
                    if (!using) { return }
                    if (eraserEnabled) {
                        ctx.clearRect(x, y, 10, 10);
                    } else {
                        var newPoint = { x: x, y: y };
                        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
                        lastPoint = newPoint;
                    }
                };
                canvasCtx.onmouseup = function (painting) {
                    using = false;
                };
            }
        }












