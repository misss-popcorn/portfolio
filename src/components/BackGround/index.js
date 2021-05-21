import React from "react";
import { getRandomColor } from "../../utils/utils.js";
const storedLines = [];
const BackGround = () => {
  const canvasRef = React.useRef(null);
  const strokeRef = React.useRef({
    y: 10,
    flag: false,
    dotFlag: false,
    prevX: 0,
    prevY: 0,
    currX: 0,
    currY: 0,
    imageObjShadow: {},
  });

  const glitchText = () => {
    window.addEventListener("load", windowLoaded, false);

    function windowLoaded() {
      var context = canvasRef.current.getContext("2d");

      var text = "IT IS NOT A BUG";
      var xPosition = canvasRef.current.width / 2;
      var yPosition = canvasRef.current.height / 2;

      strokeRef.current.imageObjShadow = new Image();
      //  var imageObj = new Image();
      strokeRef.current.imageObjWithShadow = new Image();
      // imageData = canvasRef.current.toDataURL("image/png", 1.0);
      (function loop() {
        var rand = Math.round(Math.random() * (3000 - 500)) + 500;
        setTimeout(function () {
          glitch();
          loop();
        }, rand);
      })();
      // setInterval(() => {
      //   glitch();
      // }, 1000);
      canvasRef.current.addEventListener(
        "mouseover",
        () => {
          text = "IT IS A FEATURE";
        },
        false
      );
      canvasRef.current.addEventListener("mouseout", () => {
        text = "IT IS NOT A BUG";
      });
      canvasRef.current.addEventListener("mouseup", () => {
        text = "IT IS NOT A BUG";
      });

      function glitch() {
        strokeRef.current.imageObjShadow.onload = function () {
          context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          var arr = lineShadowsHeight();
          var sy = 0;
          // console.log(arr);
          for (var i = 0; i < arr.length; i++) {
            context.drawImage(
              this,
              0,
              sy,
              canvasRef.current.width,
              arr[i],
              getRandomInt(-2 * offset(), 2 * offset()),
              sy,
              canvasRef.current.width,
              arr[i]
            );
            sy = sy + arr[i];
          }
          drawText();
          strokeRef.current.imageDataWithShadow = canvasRef.current.toDataURL(
            "image/png",
            1.0
          );

          strokeRef.current.imageObjWithShadow.onload = function () {
            context.clearRect(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            );
            context.drawImage(
              this,
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height / 3 + 5,
              1,
              0,
              canvasRef.current.width,
              canvasRef.current.height / 3 + 5
            );
            context.drawImage(
              this,
              0,
              canvasRef.current.height / 3 + 5,
              canvasRef.current.width,
              canvasRef.current.height / 3 - 5,
              0,
              canvasRef.current.height / 3 + 5,
              canvasRef.current.width,
              canvasRef.current.height / 3 - 5
            );
            context.drawImage(
              this,
              0,
              (canvasRef.current.height / 3) * 2,
              canvasRef.current.width,
              canvasRef.current.height / 3,
              0,
              (canvasRef.current.height / 3) * 2,
              canvasRef.current.width,
              canvasRef.current.height / 3
            );
          };
          strokeRef.current.imageObjWithShadow.src =
            strokeRef.current.imageDataWithShadow;
        };
        strokeRef.current.imageObjShadow.src =
          strokeRef.current.imageDataShadows;

        setTimeout(function () {
          strokeRef.current.imageObjWithShadow.onload = function () {
            context.clearRect(
              0,
              (canvasRef.current.height / 3) * 2,
              canvasRef.current.width,
              canvasRef.current.height / 3
            );
            var arr = lineShadowsHeight();
            //console.log(arr);
            var sy = 0;
            for (var i = 0; i < arr.length; i++) {
              context.drawImage(
                this,
                0,
                sy,
                canvasRef.current.width,
                arr[i],
                getRandomInt(-2 * offset(), 2 * offset()),
                sy,
                canvasRef.current.width,
                arr[i]
              );
              sy = sy + arr[i];
            }

            //context.drawImage(this, 0, (canvasRef.current.height/3)*2, canvasRef.current.width, canvasRef.current.height/3, 2.5, (canvasRef.current.height/3)*2, canvasRef.current.width, canvasRef.current.height/3);
          };
          strokeRef.current.imageObjWithShadow.src =
            strokeRef.current.imageDataWithShadow;
        }, 80);

        setTimeout(function () {
          context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          drawText();
        }, timeBack());
      }

      function drawText() {
        context.font = "normal 80px Roboto Condensed";
        context.fillStyle = "#FFFFFF";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(text, xPosition, yPosition);
      }

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      var lineShadows = function () {
        return Math.floor(Math.random() * (7 - 4 + 1) + 4);
      };

      var offset = function () {
        return Math.floor(Math.random() * (3 - 2 + 1) + 2) * 0.8;
      };

      var timeBack = function () {
        var max = 300;
        var min = 80;
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      var lineShadowsHeight = function () {
        var h = canvasRef.current.height;
        var count = lineShadows();
        var arr = [];
        var s = 0;

        for (var i = 0; i < count; i++) {
          arr[i] = Math.floor(Math.random() * (h / (count - 1) - 2 + 1) + 2);
          h = h - arr[i];
          s = s + arr[i];
          arr[count] = canvasRef.current.height - s;
        }
        return arr;
      };

      function getShadowsImg() {
        context.save();
        context.font = "bold 80px Roboto Condensed";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.globalCompositeOperation = "destination-over";
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
        context.fillStyle = "#a3004a";
        context.fillText(text, xPosition - 2, yPosition);
        context.fillStyle = "#09c4de";
        context.fillText(text, xPosition + 2, yPosition);
        context.restore();

        strokeRef.current.imageDataShadows = canvasRef.current.toDataURL(
          "image/png",
          1.0
        );
      }

      getShadowsImg();
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      drawText();

      //lineShadowsHeight();
    }
  };

  // const drawText = () => {
  //   const ctx = canvasRef.current.getContext("2d");
  //   ctx.fillStyle = "black";
  //   ctx.font = "7rem Arial";
  //   ctx.shadowBlur = 20;
  //   ctx.shadowColor = "#0C04C0";
  //   ctx.fillText(
  //     "THIS IS NOT A BUG",
  //     window.innerWidth / 4.5,
  //     window.innerHeight / 2
  //   );
  // };

  // const clearStroke = () => {
  //   const ctx = canvasRef.current.getContext("2d");
  //   setTimeout(() => {
  //     ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //     // drawText();
  //   }, 3000);
  // };

  function findxy(res, e) {
    const ctx = canvasRef.current.getContext("2d");
    ctx.shadowBlur = 10;

    if (res == "down") {
      strokeRef.current.prevX = strokeRef.current.currX;
      strokeRef.current.prevY = strokeRef.current.currY;
      strokeRef.current.currX = e.clientX - canvasRef.current.offsetLeft;
      strokeRef.current.currY = e.clientY - canvasRef.current.offsetTop;
      strokeRef.current.flag = true;
      strokeRef.current.dotFlag = true;

      if (strokeRef.current.dotFlag) {
        ctx.shadowColor = strokeRef.current.strokeColor;
        ctx.beginPath();
        ctx.fillStyle = strokeRef.current.strokeColor;
        ctx.fillRect(strokeRef.current.currX, strokeRef.current.currY, 2, 2);
        ctx.closePath();
        strokeRef.current.dot_flag = false;
      }
    }

    if (res == "up" || res == "out") {
      strokeRef.current.flag = false;
      strokeRef.current.strokeColor = getRandomColor();
      // clearStroke();
    }

    if (res == "move") {
      if (strokeRef.current.flag) {
        strokeRef.current.prevX = strokeRef.current.currX;
        strokeRef.current.prevY = strokeRef.current.currY;
        strokeRef.current.currX = e.clientX - canvasRef.current.offsetLeft;
        strokeRef.current.currY = e.clientY - canvasRef.current.offsetTop;
        draw();
      }
    }
  }

  function draw() {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(strokeRef.current.prevX, strokeRef.current.prevY);
    ctx.lineTo(strokeRef.current.currX, strokeRef.current.currY);
    ctx.strokeStyle = strokeRef.current.strokeColor;
    ctx.lineWidth = strokeRef.current.y;
    ctx.stroke();
    ctx.closePath();

    storedLines.push({
      x1: strokeRef.current.prevX,
      y1: strokeRef.current.prevY,
      x2: strokeRef.current.currX,
      y2: strokeRef.current.currY,
    });
  }

  React.useEffect(() => {
    canvasRef.current.addEventListener("mousemove", (e) => findxy("move", e));
    canvasRef.current.addEventListener("mousedown", (e) => findxy("down", e));
    canvasRef.current.addEventListener("mouseup", (e) => findxy("up", e));
    canvasRef.current.addEventListener("mouseout", (e) => findxy("out", e));
    // drawText();
    glitchText();
    return () => {
      canvasRef.current.removeEventListener("mousemove", (e) =>
        findxy("move", e)
      );
      canvasRef.current.removeEventListener("mousedown", (e) =>
        findxy("down", e)
      );
      canvasRef.current.removeEventListener("mouseup", (e) => findxy("up", e));
      canvasRef.current.removeEventListener("mouseout", (e) =>
        findxy("out", e)
      );
    };
  });

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth / 2}
      height={"90px"}
      className="glow"
    ></canvas>
  );
};

export default BackGround;
