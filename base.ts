const helloWorld = () => {
	console.log("Hello, world!");
}

const sumArray = (numbers : number[]) : number => {
	let sum = 0;
	numbers.forEach((x) => sum += x);
	return sum; 
}

helloWorld();
sumArray([1,2,3]);
