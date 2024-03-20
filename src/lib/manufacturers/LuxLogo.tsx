import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const LuxLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Lux logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M140.109 71.4862C141.916 70.2572 144.377 70.7255 145.606 72.5323L179.949 123.018C181.178 124.825 180.71 127.286 178.903 128.515C177.096 129.744 174.635 129.276 173.406 127.469L139.063 76.983C137.834 75.1763 138.303 72.7153 140.109 71.4862Z'
        fill={monochrome ? '' : '#3C3731'}
      />
      <path
        d='M74.9153 70.8007C77.1004 70.8007 78.8718 72.5721 78.8718 74.7572V107.25C78.8718 109.43 79.8186 112.924 82.4694 115.837C85.0049 118.624 89.3281 121.128 96.5972 121.128C103.866 121.128 108.19 118.624 110.725 115.837C113.376 112.924 114.323 109.43 114.323 107.25V74.7575C114.323 72.5724 116.094 70.8007 118.279 70.8007C120.464 70.8007 122.236 72.5724 122.236 74.7575V107.25C122.236 111.291 120.626 116.714 116.578 121.163C112.415 125.738 105.897 129.041 96.5972 129.041C87.2974 129.041 80.7797 125.738 76.6165 121.163C72.5685 116.714 70.9587 111.291 70.9587 107.25V74.7572C70.9587 72.5721 72.7301 70.8007 74.9153 70.8007Z'
        fill={monochrome ? '' : '#3C3731'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.3218 70.8007C25.5069 70.8007 27.2783 72.5721 27.2783 74.7572V121.128H56.2403C58.4255 121.128 60.1969 122.899 60.1969 125.085C60.1969 127.27 58.4255 129.041 56.2403 129.041H29.6523C23.6383 129.041 19.3652 125.876 19.3652 118.754V74.7572C19.3652 72.5721 21.1366 70.8007 23.3218 70.8007Z'
        fill={monochrome ? '' : '#3C3731'}
      />
      <path
        d='M139.064 123.018C137.835 124.825 138.303 127.286 140.11 128.515C141.916 129.744 144.377 129.275 145.606 127.469L158.106 109.094L153.328 102.129L139.064 123.018Z'
        fill={monochrome ? '' : '#37B4E3'}
      />
      <path
        d='M179.949 76.9824C181.178 75.1756 180.71 72.7146 178.903 71.4856C177.097 70.2566 174.636 70.7249 173.407 72.5316L160.907 90.906L165.684 97.8716L179.949 76.9824Z'
        fill={monochrome ? '' : '#E53E30'}
      />
    </svg>
  )
}
