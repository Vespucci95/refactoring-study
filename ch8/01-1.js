const distance = (p1, p2) => Math.abs(p1 - p2);
const totalDistance = (points) => {
  let result = 0
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i])
  }
  return result
}

const trackSummary = points => {
  const calculateTime = () => 10000
  const totalTime = calculateTime()
  const pace = totalTime / 60 / totalDistance(points)

  return {
    time: totalTime,
    distance: totalDistance(points),
    pace,
  }
}

console.log(trackSummary([30, 250, 350, 550, 660]))
