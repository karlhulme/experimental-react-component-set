const baseGapSize = 0.5

/**
 * Calculates the size of the padding.  If no values are supplied then the result will be 0 gaps.
 * @param {Number} scaler A value to be multipled into the result, typically
 * based on the size of the screen.
 * @param {Number|Boolean} [side] The number of gaps to apply.  A value of true means 1 gap.
 * @param {Number|Boolean} [all] A value that indicates the number of gaps
 * to apply if the side parameter is not supplied.  A value of true means 1 gap.
 */
function calculatePadSize (scaler, side, all) {
  if (side === true) {
    return baseGapSize * scaler
  } else if (side === false) {
    return 0
  } else if (typeof side === 'number') {
    return side * baseGapSize * scaler
  } else if (all === true) {
    return baseGapSize * scaler
  } else if (typeof all === 'number') {
    return all * baseGapSize * scaler
  } else {
    return 0
  }
}

/**
 * Calculates the size of a spacer.  If no values are supplied then the result will be 1 gap.
 * @param {Number} scaler A value to be multipled into the result, typically
 * based on the size of the screen.
 * @param {Number|Boolean} [size] The number of gaps to apply.
 */
function calculateSpaceSize (scaler, size) {
  if (typeof size === 'number') {
    return size * baseGapSize * scaler
  } else {
    return baseGapSize * scaler
  }
}

/**
 * Returns a CSS padding value (in REMS) based on the given scaler, side and all properties.
 * @param {Number} scaler A value to be multipled into the result, typically
 * based on the size of the screen.
 * @param {Number|Boolean} [side] The number of gaps to apply.  A value of true means 1 gap.
 * @param {Number|Boolean} [all] A value that indicates the number of gaps
 * to apply if the side parameter is not supplied.  A value of true means 1 gap.
 */
export function calculatePadValue (scaler, side, all) {
  const padSize = calculatePadSize(scaler, side, all)
  return `${padSize.toFixed(2)}rem`
}

/**
 * Returns a CSS width/height value (in rems) based on the given scaler and size properties..
 * @param {Number} scaler A value to be multipled into the result, typically
 * based on the size of the screen.
 * @param {Number|Boolean} [size] The number of gaps to apply.
 */
export function calculateSpaceValue (scaler, size) {
  const padSize = calculateSpaceSize(scaler, size)
  return `${padSize.toFixed(2)}rem`
}
