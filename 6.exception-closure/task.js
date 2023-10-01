function parseCount(stringForParsing) {
  let result = Number.parseFloat(stringForParsing);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
} 

function validateCount(string){
  try {
    return parseCount(string);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(...side) {
    side.sort((a, b) => a - b);
    if (side[2] >= side[0] + side[1]) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.side = side;  
  }

  get perimeter() {
    this._perimeter = this.side.reduce((acc, item) => acc + item, 0);
    return this._perimeter;
  }

  get area() {
    let p = this.perimeter / 2;
    this._area = Number(Math.sqrt(p * (p - this.side[0]) * (p - this.side[1]) * (p - this.side[2])).toFixed(3));
    return this._area;
  }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3);
  } catch {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}