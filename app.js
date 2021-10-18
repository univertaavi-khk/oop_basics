class Shape {
	constructor(name, sides, sideLength) {
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}
	calcPerimeter(){
		return this.sides * this.sideLength;
	}
}

class Square extends Shape {
	calcPerimeter(){
		return this.sides * this.sideLength;
	}
	calcArea(){
		return this.sideLength * this.sideLength;
	}
}



const square = new Square("square", 4, 5);
console.log(square.calcPerimeter());
console.log(square.calcArea());