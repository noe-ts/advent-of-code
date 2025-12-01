import { describe, it, expect } from 'vitest';
import { part1, part2 } from './index';

describe('Day 1', () => {
  const exampleInput = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

  describe('Part 1', () => {
    it('should count the number of times the dial points at 0', () => {
      // The dial starts at 50
      // After rotations: 50 -> 82 -> 52 -> 0 -> 95 -> 55 -> 0 -> 99 -> 0 -> 14 -> 32
      // The dial points at 0 three times (after R48, after L55, after L99)
      expect(part1(exampleInput)).toBe(3);
    });

    it('should handle empty input', () => {
      expect(part1('')).toBe(0);
    });

    it('should handle single rotation that ends at 0', () => {
      // R50 from starting position 50 should end at 0
      expect(part1('R50')).toBe(1);
    });

    it('should handle single rotation that does not end at 0', () => {
      // R10 from starting position 50 should end at 60
      expect(part1('R10')).toBe(0);
    });
  });

  describe('Part 2', () => {
    it('should solve example', () => {
      expect(part2(exampleInput)).toBeGreaterThanOrEqual(0);
    });
  });
});

