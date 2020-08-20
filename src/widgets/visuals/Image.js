import React from 'react'

/**
 * For non-fill images, this constructor inserts an extra div around the image, so that the parent (e.g. flex box) cannot stretch it.
 * @param {props} props The properties.
 */
export function Image ({ alt, fill, source, width }) {
  return typeof fill === 'number'
    ? <img alt={alt} src={source} className={`visuals-image visuals-image-fill visuals-image-fill-${fill}`} />
    : <div><img alt={alt} src={source} className='visuals-image' width={width} /></div>
}
