/**
 * Advent of Code 2025 - Day 1
 * https://adventofcode.com/2025/day/1
 */

export function part1(input: string): number {
  const lines = input.trim().split('\n')
  let position = 50
  let countZero = 0

  for (const line of lines) {
    const direction = line[0]
    const steps = parseInt(line.slice(1))

    if (direction === 'L') {
      position = (position - steps) % 100
      
      if (position < 0) {
        position += 100
      }

    } else {
      position = (position + steps) % 100
    }

    if (position === 0) {
      countZero++
    }
  }
  return countZero
}

export function part2(input: string): number {
  const lines = input.trim().split('\n')
  let position = 50
  let zeroCount = 0

  for (let line of lines) {
    const direction = line[0]
    const steps = parseInt(line.slice(1))
    if (isNaN(steps)) continue;

    let move = 0;
    if (direction === 'L') {
      move = -steps
    } else {
      move = steps
    }

    const dir = move > 0 ? 1 : -1;
    const absSteps = Math.abs(move);

    for (let i = 1; i <= absSteps; i++) {
      let current = (position + dir * i) % 100
      
      if (current < 0) { 
        current += 100
      }

      if (current === 0) {
        zeroCount++
      }
    }

    // Update the position after the rotation
    position = (position + move) % 100
    if (position < 0) {
      position += 100
    }
  }

  return zeroCount
}

// Run solution
if (import.meta.main) {
  const input = await Bun.file('src/2025/day-01/input.txt').text();

  console.log('Part 1:', part1(input));
  console.log('Part 2:', part2(input));
}

