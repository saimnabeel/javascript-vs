#!/usr/bin/env node
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const q = (p) => new Promise(r => rl.question(p, a => r(a.trim())));

(async ()=>{
	console.log('\nSimple Perimeter Calculator (4 shapes)\n');
	console.log('Shapes: square, rectangle, circle, triangle');
	const shape = (await q('Enter shape: ')).toLowerCase();
	let perim = NaN;
	if(shape === 'square'){
		const s = parseFloat(await q('Side: ')); perim = 4*s;
	} else if(shape === 'rectangle'){
		const w = parseFloat(await q('Width: ')); const h = parseFloat(await q('Height: ')); perim = 2*(w+h);
	} else if(shape === 'circle'){
		const r = parseFloat(await q('Radius: ')); perim = 2*Math.PI*r;
	} else if(shape === 'triangle'){
		const a = parseFloat(await q('Side a: ')); const b = parseFloat(await q('Side b: ')); const c = parseFloat(await q('Side c: ')); perim = a+b+c;
	} else {
		console.log('\nUnknown shape.'); rl.close(); return;
	}
	if(!Number.isFinite(perim)) console.log('\nInvalid input.');
	else console.log('\nPerimeter =', Math.round(perim*10000)/10000, 'units');
	rl.close();
})();