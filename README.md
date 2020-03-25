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

![Video Emmet](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/emmet.gif)

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
* Quedarían organizados de esta forma en sus carpetas:

![Directorios src](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/tree.png)

## Configurando git y NPM

### git

* Lo siguiente que haremos será configurar git en nuestra máquina. Para ello debemos en primer lugar inicializar el repositorio git:

![git init](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/gitinit.png)

* A continuación creamos el archivo .gitignore e introducimos los archivos que queremos omitir bajo el control de versiones, entre ellos node_modules:

![.gitignore](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/gitignore.png)

* Despúes de esto comprobamos que tenemos todo configurado correctamente:

![git log](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/gitlog.png)

* Por último añadimos una rama remota para github y comprobamos que funciona:

![github](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/github.png)

### npm

* Inicializamos npm y editamos los campos del package.json, como el autor:

![npm init](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/npminit.png)

### gh-pages
* Para las siguientes prácticas estaremos desplegandolas en gh-pages. Lo instalamos como paquete de proyecto de la siguiente manera:
```
npm install -D gh-pages
```
![Instalando gh-pages](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/instalandoghpages.png)

## Instalación de Parcel

* Instalamos parcel con npm, en mi caso lo instalaré de forma global ya que los utilizaremos en el resto de los proyectos y para no tener que instalarlo en todos:

![Instalando Parcel](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/parcelinstall.png)
* Si lo hubieramos instalado como paquete de proyecto tendríamos que tener en cuenta que para utilizarlo tendriamos que hacerlo con npx:
```
npx parcel src/index.html
```
* Comprobamos la versión de parcel para ver si todo ha ido correctamente:

![Versión de parcel](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/versionparcel.png)

* A continuación  haremos una prueba de parcel: 

![Usando parcel](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/parcelport1234.png)

* Como no estoy trabajando en mi máquina local si no en la del iaas, al abrir el enlace nos da error:

![Error Localhost](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/errorlocalhost.png)

* Para solucionarlo debemos lanzar el servidor con un puerto abierto en la máquina del iaas como el 8080 de la siguiente manera:
```
parcel src/index.html --port 8080
```
![Parcel en puerto 8080](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/parcelport8080.png)

* Para abrirlo en el navegador debemos introducir la ip de nuestra máquina y a continuación el puerto que hemos abierto:
```
http://10.6.128.65:8080/
```
![Prueba ](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/prueba.gif)

* Una vez que hemos hecho eso podemos ver que se nos ha creado una carpeta nueva *dist* que contendrá los archivos que se envían al navegador.

![Dist ](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/treedist.png)


## Scripts de npm

* Para facilitar las cosas podemos usar los scripts de npm, de manera que no tengamos que escribir los comandos cada vez:

![Scripts](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/scripts.png)

* El primero que he añadido es start, que contendrá lo necesario para lanzar un servidor local:
    ```
    parcel src/index.html --port 8080
    ```
![Start](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/start.png)

* Después tenemos el de build, que nos hará los archivos finales, que subiremos al gh-pages:
    ```
    parcel build src/index.html -d build --public-url /dsi-p1-parcel-alu0100944723/ 
    ```
    * Las opciones --public-url y -d son para cambiar la url y prepararla para gh-pages de manera que la url sea la del repositorio y la de -d para cambiar el directorio a build, que será nuestro directorio de producción.

![Build](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/build.png)

* También tenemos el deploy, que nos desplegará la página en gh-pages:
    ```
    npx gh-pages -d build
    ```

![Deploy](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/deploy.png)

* Podemos ver que se ha desplegado correctamente haciendo click en enviroment dentro de nuestro repositorio en github:

![enviroment](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/enviroment.png)
![ghpages](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/ghpages.png)
![Página](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/pagina.png)
Podemos verlo también en el siguiente [link](https://ull-esit-dsi-1920.github.io/dsi-p1-parcel-alu0100944723/).

* Por último, hemos añadido un clean que limpiará el proyecto.
    ```
    rm -rf dist package-lock.json node_modules
    ```

## Configuración de ESLint y Prettier

*  Empezamos instalando ESLint en este caso como paquete de proyecto:

![Instalando ESLint](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/eslintinstall.png)

* Lo inicializamos:

![Inicialización](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/eslintinit.png)

* A continuación lo probamos sobre nuestro código:

![Prueba de ESLint](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/eslint.png)

* Vemos que tenemos varios errores de estilo, podemos corregirlos fácilmente con la opción --fix:

![Arreglando los errores](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/fix.png)

* A continuación instalaremos el formateador de código Prettier:

![Instalando Prettier](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/prettier.png)

* Para evitar incompatibilidades con ESLint instalamos también los siguientes plugins:


![Instalando plugins de Prettier](https://github.com/ULL-ESIT-DSI-1920/dsi-p1-parcel-alu0100944723/blob/master/src/assets/Capturas_Readme/pluginsprettier.png)

## Retos
### Reto 1: Vinilo
### Reto 2: Assets con Parcel