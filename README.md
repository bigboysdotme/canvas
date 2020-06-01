# canvas-sketch
Simple web drawing app using HTML5 canvas （HTML 5 canvas 畫板）


## 學到的知識點：

### `<canvas>` 元素

`<canvas>` 是一個替換元素，需要結束標籤`</canvas>`。它只有兩個標籤：width 和 height，當沒有設置寬高，canvas 會默認為寬300px和高150px（使用CSS設置canvas 的寬高會導致畫布內容模糊）。



#### the rendering context

canvas 起初是空白的。`<canvas>` 需要通過腳本，它有一個叫`getContext()` 方法是用來獲得 rendering context or painting. 對於2D圖像而言，可以使用 CanvasRenderingContext2D。

```js
var canvas = document.getElementById("canvasCtx"); //為元素<canvas>得到DOM對象
var ctx = canvas.getContext("2d"); //使用2d來繪製上下文
```



#### 繪製形狀：方形 rectangular

```js
ctx.fillRect(x, y, width, height); //繪製一個實心方形
ctx.strokeRect(x, y, width, height); //繪製一個方形邊框
ctx.clearRect(x, y, width, height); //清除指定方形區域，變成透明
```



#### 繪製路徑

```js
ctx.beginPath(); //開始生成一條路徑
ctx.moveTo(x, y); //路徑移到指定位置
ctx.lineWidth; //設定路徑寬度
ctx.lineTo(x, y); //路徑連接指定位置
ctx.lineTo(x, y); //路徑連接另一指定位置
ctx.fill(); //填充各連接路徑內的區域
```



### JS HTML event

`onmousedown = "SomeJavaScriptCode"` 滑鼠按下會觸發的事件

`onmousemove = "SomeJavaScriptCode"` 滑鼠移動會觸發的事件

`onmouseup = "SomeJavaScriptCode"` 滑鼠鬆開會觸發的事件



`document.documentElement.clientWidth` 獲取頁面可見寬度

`document.documentElement.clientHeight` 獲取頁面可見高度

`window.onresize` 獲取當前窗口resize事件



`element.onclick` 返回當前元素的click 的事件
