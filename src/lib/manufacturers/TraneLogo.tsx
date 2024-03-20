import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const TraneLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Trane logo'
      {...rest}
    >
      <path
        d='M28.5572 99.5457L61.4103 99.2519V98.972C61.4103 98.1744 61.382 97.3908 61.3115 96.6072L29.7421 96.2714C29.601 96.2714 29.4741 96.1454 29.4741 96.0055C29.4741 95.8656 29.601 95.7396 29.7421 95.7396L61.1846 95.4458C61.0717 94.5502 60.9165 93.6687 60.7191 92.8011L30.9129 92.4653C30.7718 92.4653 30.6449 92.3393 30.6449 92.1994C30.6449 92.0595 30.7718 91.9335 30.9129 91.9335L60.4228 91.6397C60.1689 90.7301 59.8868 89.8626 59.5624 88.995L32.1119 88.6592C31.9708 88.6592 31.8439 88.5332 31.8439 88.3933C31.8439 88.2534 31.9708 88.1274 32.1119 88.1274L59.0969 87.8336C54.7804 77.9545 44.8215 71 33.2122 71C19.4023 71 7.90585 80.8371 5.47961 93.8506L45.9641 93.2909L45.4281 95.012L5.38086 94.3823C5.19619 95.4559 5.08309 96.5404 5.04232 97.6287L44.7792 97.069L44.2431 98.7901L5 98.1604V98.986C5 99.7976 5.02821 100.609 5.09874 101.407L43.5802 100.847L43.0441 102.568L5.15517 101.939C5.26802 103.03 5.45139 104.107 5.6912 105.157L42.4094 104.611L41.8733 106.332L5.83226 105.731C6.10028 106.836 6.43882 107.9 6.8479 108.949L41.2103 108.403L40.6743 110.124L7.05949 109.523C7.51088 110.628 8.03281 111.706 8.62527 112.741L40.0395 112.181L39.5035 113.903L8.96381 113.301C9.65501 114.434 10.4026 115.512 11.2349 116.533L38.6853 115.96L38.1493 117.681L11.6863 117.079C14.3313 120.189 17.6296 122.689 21.3502 124.403C25.0709 126.116 29.1241 127.003 33.2263 127C45.6255 127 56.1487 119.066 59.9291 108.039L26.1873 107.704C26.0463 107.704 25.9193 107.578 25.9193 107.438C25.9193 107.298 26.0463 107.172 26.1873 107.172L60.2959 106.878C60.5498 106.01 60.7614 105.129 60.9448 104.233L27.3864 103.898C27.2453 103.898 27.1183 103.772 27.1183 103.632C27.1183 103.492 27.2453 103.366 27.3864 103.366L61.1422 103.072C61.2692 102.204 61.3538 101.337 61.3961 100.441L28.5713 100.105C28.4302 100.105 28.3033 99.9795 28.3033 99.8396C28.3033 99.6996 28.4302 99.5737 28.5713 99.5737'
        fill={monochrome ? '' : '#FF2B00'}
      />
      <path
        d='M109.077 94.5387C108.682 95.752 107.892 96.0507 106.238 96.0693H104.019L105.072 92.672H107.14C108.569 92.672 109.415 93.4187 109.077 94.5387ZM117.896 93.624C118.497 90.8987 117.407 85.952 108.438 85.952H97.212L88.882 112.011H98.8855L102.157 101.52L105.485 112.011H115.696L110.807 101.259C115.432 99.84 116.993 97.4693 117.858 93.624M95.7453 85.952H71.4701L68.9316 93.96H76.6598L70.906 112.029H80.8342L86.588 93.96H93.2068L95.7453 85.952ZM189.612 93.4187L192 85.952H172.99L164.66 112.011H183.708L185.964 104.936H176.506L177.315 102.416H186.735L188.86 95.7893H179.439L180.191 93.4187H189.631H189.612ZM153.133 112.011H162.497L170.827 85.9333H160.899L157.421 97.488L154.487 85.9333H145.029L136.718 112.011H146.646L150.181 100.288L153.171 112.011H153.133Z'
        fill={monochrome ? '' : '#FF2B00'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M136.758 85.9519H125.551L110.038 112.011H120.587L122.994 107.307H129.538L129.82 112.011H138.92L136.758 85.9519ZM125.72 101.203L129.199 93.8105L129.368 101.203H125.72Z'
        fill={monochrome ? '' : '#FF2B00'}
      />
    </svg>
  )
}