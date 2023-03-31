/**
 *
 *
 *
 * ```css
 * // Mini devices: mobile phones
 * @media only screen and(max - width: 600px) {... }
 *
 * // Small devices: vertical pad or large mobile phones
 * @media only screen and(min - width: 600px) {... }
 *
 * // Medium devices: horizontal pad
 * @media only screen and(min - width: 768px) {... }
 *
 * // Large devices: laptop
 * @media only screen and(min - width: 992px) {... }
 *
 * // Extra large devices: large laptop or PC
 * @media only screen and(min - width: 1200px) {... }
 * ```
 */
export enum ViewpoiontLimitation {
  SmallDevice = 600,
  MediumDevice = 768,
  LargeDevice = 992,
  ExtraLargeDevice = 1200,
}
