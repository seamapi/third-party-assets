import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const LevelLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Level logo'
      {...rest}
    >
      <path
        d='M51.6461 79.0589H19.6897V86.6704H43.9564V110.691H51.6461V79.0589Z'
        fill={monochrome ? '' : '#000000'}
      />
      <path
        d='M19.6897 86.6704L12 86.6704V118.301H43.9564V110.69H19.6897L19.6897 86.6704ZM188 118.247H180.796V79H188V118.247ZM107.224 109.929C106.05 111.62 104.118 112.98 100.964 113.005C95.6532 113.05 93.0604 109.36 92.556 105.295H114.614V103.482C114.614 94.3419 109.942 87.775 100.334 87.775C91.9264 87.775 85.5408 93.9066 85.5408 103.105C85.5408 112.744 91.6063 119 100.53 119C108.864 119 112.476 114.831 114.02 109.93L107.224 109.929ZM100.334 93.4655C104.382 93.4655 107.224 96.096 107.414 99.9735H92.745C92.9399 96.4089 96.2225 93.4655 100.334 93.4655ZM167.536 109.929C166.361 111.62 164.422 112.98 161.269 113.005C155.963 113.05 153.371 109.36 152.866 105.295H174.925V103.482C174.925 94.3419 170.258 87.775 160.646 87.775C152.237 87.775 145.851 93.9066 145.851 103.105C145.851 112.744 151.921 119 160.84 119C169.179 119 172.791 114.831 174.355 109.93L167.536 109.929ZM160.64 93.4655C164.688 93.4655 167.53 96.096 167.72 99.9735H153.056C153.245 96.4089 156.534 93.4655 160.64 93.4655ZM137.442 88.5244L130.493 108.293L130.283 109.149L130.063 108.264L123.182 88.5256H115.743L126.941 118.356H133.68L144.882 88.5256H137.442V88.5244ZM79.7541 118.247H72.5452V79H79.7553L79.7541 118.247Z'
        fill={monochrome ? '' : '#000000'}
      />
    </svg>
  )
}