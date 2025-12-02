/**
 * Advent of Code 2025 - Day 2
 * https://adventofcode.com/2025/day/2
 */

function isInvalidIdPart1(id: number): boolean {
  const str = id.toString()
  const len = str.length
  
  // Must have even number of digits
  if (len % 2 !== 0) {
    return false
  }
  
  const halfLen = len / 2
  const firstHalf = str.slice(0, halfLen)
  const secondHalf = str.slice(halfLen)
  
  return firstHalf === secondHalf
}

function isInvalidIdPart2(id: number): boolean {
  const str = id.toString()
  const len = str.length
  
  // Try all possible pattern lengths from 1 to len/2
  // Pattern must be repeated at least twice
  for (let patternLen = 1; patternLen <= Math.floor(len / 2); patternLen++) {
    // Check if length is divisible by pattern length
    if (len % patternLen !== 0) {
      continue
    }
    
    const numRepetitions = len / patternLen
    if (numRepetitions < 2) {
      continue
    }
    
    const pattern = str.slice(0, patternLen)
    let isValidPattern = true
    
    // Check if all repetitions match the pattern
    for (let i = 1; i < numRepetitions; i++) {
      const start = i * patternLen
      const segment = str.slice(start, start + patternLen)
      if (segment !== pattern) {
        isValidPattern = false
        break
      }
    }
    
    if (isValidPattern) {
      return true
    }
  }
  
  return false
}

export function part1(input: string): number {
  const ranges = input.trim().split(',')
  let sum = 0
  
  for (const range of ranges) {
    const [startStr, endStr] = range.split('-')
    const start = parseInt(startStr)
    const end = parseInt(endStr)
    
    for (let id = start; id <= end; id++) {
      if (isInvalidIdPart1(id)) {
        sum += id
      }
    }
  }
  
  return sum
}

export function part2(input: string): number {
  const ranges = input.trim().split(',')
  let sum = 0
  
  for (const range of ranges) {
    const [startStr, endStr] = range.split('-')
    const start = parseInt(startStr)
    const end = parseInt(endStr)
    
    for (let id = start; id <= end; id++) {
      if (isInvalidIdPart2(id)) {
        sum += id
      }
    }
  }
  
  return sum
}

// Run solution
if (import.meta.main) {
  const input = await Bun.file('src/2025/day-02/input.txt').text();

  console.log('Part 1:', part1(input));
  console.log('Part 2:', part2(input));
}

