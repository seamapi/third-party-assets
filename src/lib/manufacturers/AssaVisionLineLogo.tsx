import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const AssaVisionLineLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='AssaVisionLine logo'
      {...rest}
    >
      <rect
        x='30'
        y='30'
        width='140'
        height='140'
        fill={monochrome ? '' : '#3894C6'}
      />
      <path
        d='M81.5708 63L99.653 119.223H100.347L118.466 63H136L110.21 137H89.8265L64 63H81.5708Z'
        fill='white'
      />
    </svg>
  )
}
