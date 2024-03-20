import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const WyzeLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Wyze logo'
      {...rest}
    >
      <g clipPath='url(#clip0_1_613)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M34.6892 82.4921H41.263L53.5888 107.578L65.9148 82.4921H72.4886L55.6432 116.789H51.5345L44.5499 102.678L37.5653 116.789H33.4567L16.6113 82.4921H23.1851L35.5108 107.382L41.263 95.8189L34.6892 82.4921ZM92.4151 99.7385L103.714 82.4921H110.698L95.4967 105.814V116.593H89.539V105.814L74.1318 82.4921H81.1165L92.4151 99.7385ZM147.471 116.789H178.696V110.91H147.471V116.789ZM178.696 88.3716H147.471V82.4921H178.696V88.3716ZM147.471 102.483H178.696V96.6034H147.471V102.483ZM112.548 88.1756V82.4921H145.623L122.409 111.106H143.568V116.789H110.083L133.091 88.1756H112.548Z'
          fill={monochrome ? '' : '#000000'}
        />
      </g>
    </svg>
  )
}
