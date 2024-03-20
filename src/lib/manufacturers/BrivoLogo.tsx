import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const BrivoLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Brivo logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.3892 158.64V121.772H28.876V134.243C31.497 132.299 33.965 130.552 39.2288 130.552C48.0089 130.552 53.6221 136.34 53.6221 144.771C53.6221 153.9 47.1353 159.513 39.4035 159.513C33.2661 159.513 29.9244 156.346 28.7013 155.123V158.64H22.3892ZM47.4848 144.945C47.4848 138.808 42.7452 135.816 37.8309 135.816C33.3804 135.816 30.923 137.829 29.0215 139.388L28.876 139.507V150.034L29.1402 150.243C31.5093 152.113 33.7726 153.9 38.0057 153.9C43.0947 153.9 47.4848 151.083 47.4848 144.945ZM99.795 131.426H93.3081V158.64H99.795V131.426ZM109.448 131.426L122.094 158.64H128.231L141.227 131.426H134.369L125.414 151.607L116.109 131.426H109.448ZM162.458 130.552C151.755 130.552 147.365 137.738 147.365 144.946C147.365 155.648 155.097 159.514 162.458 159.514C169.818 159.514 177.55 155.648 177.55 144.946C177.55 137.76 173.16 130.552 162.458 130.552ZM162.283 135.991C167.022 135.991 171.063 138.633 171.063 144.946C171.238 150.733 167.896 154.25 162.283 154.25C156.67 154.25 153.503 150.733 153.503 144.946C153.503 138.633 157.369 135.991 162.283 135.991ZM70.3091 135.466C71.707 133.195 74.3498 130.552 79.7882 130.552V130.574H81.9068V137.236C81.8024 137.236 81.6022 137.204 81.3217 137.161C80.6637 137.058 79.5631 136.886 78.2156 136.886C70.1344 136.886 70.1344 142.15 70.1344 144.072V158.64H63.8223V131.601H70.1344V135.466H70.3091Z'
        fill={monochrome ? '' : '#76777A'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M103.403 28.5374H103.581C125.488 28.5374 143.071 46.3205 143.071 68.2057C143.071 75.8795 140.885 83.0489 137.102 89.1243C135.734 91.6522 133.951 93.9212 131.844 95.8411C124.633 103.26 114.55 107.874 103.403 107.874C81.518 107.874 63.7349 90.0908 63.7349 68.2057C63.7349 46.3205 81.518 28.5374 103.403 28.5374ZM133.04 59.3172C128.373 54.4613 121.823 51.4424 114.645 51.4424C100.521 51.4424 89.1235 62.8395 89.1235 76.964C89.1235 86.2872 94.0892 94.4221 101.527 98.8754C85.4123 97.8549 72.7816 84.5042 72.7816 68.2057C72.7816 51.243 86.4626 37.3846 103.514 37.3846C117.474 37.3846 129.234 46.6138 133.04 59.3172ZM131.142 76.964C131.142 67.8507 123.758 60.467 114.645 60.467C105.532 60.467 98.0594 67.8507 98.0594 76.964C98.0594 86.0773 105.532 93.4611 114.645 93.4611C123.758 93.4611 131.142 86.0773 131.142 76.964Z'
        fill={monochrome ? '' : '#6C9BD2'}
      />
    </svg>
  )
}