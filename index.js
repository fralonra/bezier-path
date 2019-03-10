function getLineXYatPercent (start, end, percent) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const X = start.x + dx * percent
  const Y = start.y + dy * percent
  return ({ x: X, y: Y })
}

function getQuadraticBezierXYatPercent (start, end, control, percent) {
  const x = Math.pow(1 - percent, 2) * start.x + 2 * (1 - percent) * percent * control.x + Math.pow(percent, 2) * end.x
  const y = Math.pow(1 - percent, 2) * start.y + 2 * (1 - percent) * percent * control.y + Math.pow(percent, 2) * end.y
  return ({ x: x, y: y })
}

function getCubicBezierXYatPercent (start, end, control1, control2, percent) {
  const x = cubicN(percent, start.x, control1.x, control2.x, end.x)
  const y = cubicN(percent, start.y, control1.y, control2.y, end.y)
  return ({ x: x, y: y })
}

function cubicN (pct, a, b, c, d) {
  const t2 = pct * pct
  const t3 = t2 * pct
  return a + (-a * 3 + pct * (3 * a - a * pct)) * pct +
  (3 * b + pct * (-6 * b + b * 3 * pct)) * pct +
  (c * 3 - c * 3 * pct) * t2 +
  d * t3
}

export default {
  getLine: getLineXYatPercent,
  getQuadratic: getQuadraticBezierXYatPercent,
  getCubic: getCubicBezierXYatPercent
}
