interface Point {
  x: number,
  y: number
}

function getLine(start: Point, end: Point, percent: number): Point

function getQuadratic(start: Point, end: Point, control: Point, percent: number): Point

function getCubic(start: Point, end: Point, control1: Point, control2: Point, percent: number): Point

export {
  getLine,
  getQuadratic,
  getCubic
}