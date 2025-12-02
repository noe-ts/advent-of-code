import { describe, it, expect } from 'vitest';
import { part1, part2 } from './index';

describe('Day 2', () => {
  const exampleInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

  describe('Part 1', () => {
    it('should find all invalid IDs and sum them', () => {
      // Explanation test exemple 
      expect(part1(exampleInput)).toBe(1227775554);
    });

    it('should handle single range with one invalid ID', () => {
      expect(part1('11-11')).toBe(11);
    });

    it('should handle single range with no invalid IDs', () => {
      expect(part1('10-10')).toBe(0);
    });

    it('should handle range with multiple invalid IDs', () => {
      expect(part1('11-22')).toBe(33);
    });
  });

  describe('Part 2', () => {
    it('should find all invalid IDs with new rules and sum them', () => {
      // Explanation part 2 test exemple
      expect(part2(exampleInput)).toBe(4174379265);
    });

    it('should handle single range with one invalid ID', () => {
      expect(part2('11-11')).toBe(11);
    });

    it('should handle single range with no invalid IDs', () => {
      expect(part2('10-10')).toBe(0);
    });

    it('should handle range with multiple invalid IDs', () => {
      // 11-22 contains 11 and 22
      expect(part2('11-22')).toBe(33);
    });

    it('should detect triple repetition', () => {
      // 111 is "1" repeated three times
      expect(part2('111-111')).toBe(111);
    });

    it('should detect pattern repeated multiple times', () => {
      // 121212 is "12" repeated three times
      expect(part2('121212-121212')).toBe(121212);
    });
  });
});

