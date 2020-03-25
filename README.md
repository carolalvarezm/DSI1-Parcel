# Práctica 7 : Parcel + Scaffolding

## Estructura de carpetas

* En esta práctica haremos la base que utilizaremos para las siguientes semanas con las buenas prácticas que hemos aprendido en clase.

* Para comenzar comprobamos las versiones de node, npm y npx que tenemos instaladas en nuestra máquina.
```
node --version
npm --version
npx --version
```
![Versiones node](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/versionesnode.png)

* El siguiente paso a seguir es crear la estructura de la carpetas. Primero crearemos una carpeta que *src* que contendrá todo nuestro código fuente, dentro de esta crearemos las carpetas que contendrán el css(css), el javascript(js) y los recursos estáticos(imágenes, videos,...)(assets). Para ello realizamos:

```
mkdir -p dsi-p1-parcel/src/{css,js,assets}
```
![Directorios src](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/directoriosrc.png)

* Después de esto, creamos los archivos index.html, index.css y index.js con contenidos mínimos para comprobar que funcionan:

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
    <script defer src="./js/index.js"></script>
</head>
<body>
    <div class="container">
        <div class="box item1"></div>
        <div class="box item2"></div>
        <div class="box item3"></div>
    </div>
</body>
</html>
```
* Para hacer una estructura básica de html podemos en nuestro editor utilizar Emmet como podemos ver a continuación:

[!Video Emmet]({https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/emmet.mp4} "Video Emmet")

```css
 /*index.css*/
.box{
    background: rgb(22, 224, 231);
    width: 100px;
    height: 100px;
  }
  .container{
    width: 400px;
    margin: auto;
    background: rgb(0, 0, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .box2{
    background: rgb(90, 5, 90);
  }
```
```javascript
//index.js
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

item1.onclick = () => {
    item1.classList.toggle('box2');
};
item2.onclick = () => {
    item2.classList.toggle('box2');
};
item3.onclick = () => {
    item3.classList.toggle('box2');
};
```
* Quedarián organizados de esta forma en sus carpetas:
![Directorios src](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/tree.png)

