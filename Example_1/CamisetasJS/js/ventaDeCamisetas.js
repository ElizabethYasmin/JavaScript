window.onload=inicio;
let reyes=["atanagildo","ataulfo","ervigio","leogivildo","recesvinto","sisebuto","teodorico"];
let camisetas=["camisetaNegra.png","camisetaBlanca.png"];


let camisetaActual=0;
//let reyActual=0;
//Con Math.floor-> quitan los decimales
let reyActual=Math.floor(Math.random()*reyes.length);
let size=2;

function inicio(){
	// Eventos y acciones iniciales
	document.querySelector(".camiseta").insertAdjacentHTML("beforeend",`<img id="dibujo" src="img/${camisetas[camisetaActual]}">`)
	//Su identificador se l puede llamar con un #, al igual que el .css
	//("beforeend",`<img id="dibujo" src="img/camisetaNegra.png">`)
	
	//Colocando las imagenes de los reyes
	document.querySelector(".imagen").innerHTML=`<img id="rey" src="img/rey_${reyes[reyActual]}.png">`;

	actualizarRey();
	window.onkeydown=teclado;

	//Eventos
	document.querySelector("#rey").onclick=cambiarRey;

	document.querySelector("#dibujo").onclick=cambiarCamiseta;

	document.querySelector("#imprimir").onclick=imprimir;
}

function teclado(e){
	let longitud=document.querySelector(".texto").innerHTML.length;
	let excepciones=["Delete","Backspace","ArrowUp","ArrowDown","ArrowRoght","ArrowLeft"];
	if(longitud>15 && excepciones.indexOf(e.key==-1)){
		e.prevenDefault();
	}else{
		let codigo=e.key;
		if(codigo=="+"){
			if(size<3){
				size+=.1;
			}
			e.prevenDefault();
		}
		if(codigo=="-"){
			if(size>1){
				size-=.1;
			}
			e.prevenDefault();
		}
		document.querySelector(".texto").style.fontSize=size+"em";
	}
}

function actualizarRey(){
	let reyConMayusculas=reyes[reyActual].substr(0,1).toUpperCase()+reyes[reyActual].substr(1).toLowerCase();

	let inicios=document.querySelector(".texto").innerHTML.substr(0,3);
	if(inicios=="I ♡" || inicios==""){
		document.querySelector(".texto").innerHTML=`I ♡ ${reyConMayusculas}`;
	}

}

function cambiarRey(){
	//innerHTML elimina el elemento de la imagen
	reyActual++;
	if(reyActual>=reyes.length){
		reyActual=0;
	}
	document.querySelector("#rey").src=`img/rey_${reyes[reyActual]}.png`;
	actualizarRey();
}
function cambiarCamiseta(){
	let colores=["white","black"];
	camisetaActual=Number(!camisetaActual);
	//Hace el intercambio de las imagenes de las camisetas
/* 	if(camisetaActual==0){
		camisetaActual=1;
	}else{
		camisetaActual=0;
	} */
	document.querySelector("#dibujo").src=`img/${camisetas[camisetaActual]}`
	document.querySelector(".texto").style.color=colores[camisetaActual];
}

function evitarLaAccionPorDefecto(e){
	// Cuando queremos que no se ejecute una acción automática (como ir a una URL al hacer clic en un enlace <a> o escribir en un DIV o INPUT al pulsar una tecla)
	e.prevenDefault();
}

function evitarPropagacion(){
	// Al leer stopPropagation() se corta la ejecución de cualquier otra función que estuviese en cola esperando para ser ejecutada a continuación
	event.stopPropagation();
}

function imprimir(){
	// Imprime lo que haya en pantalla en ese momento. Si sólo se desea que imprima unos elementos y no otros o personalizar lo que se envía a la impresora, se debería utilizar en conjunción con mediaqueries (@media print) de CSS.
	window.print();
}