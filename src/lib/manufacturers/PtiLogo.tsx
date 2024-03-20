import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const PtiLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Pti logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18 73H173V124.265H152.922V80.6965L146.698 75.0078V85.7828H127.089V124.265H107.145V85.7828H93.8269L82.3826 75.0078V107.868H46.4434V124.265H26.3657V80.6965L18 73ZM65.2496 85.9167H46.2427V95.1524H65.2496V85.9167Z'
        fill={monochrome ? '' : '#FEC748'}
      />
    </svg>
  )
}
