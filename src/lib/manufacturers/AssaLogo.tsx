import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const AssaLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  const fillColor = monochrome ? '' : '#003686'

  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Assa logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M163.042 76.4497H151.423L137.999 114.084C138.325 112.823 138.468 111.453 138.468 109.937C138.468 101.853 132.442 98.8944 125.874 97.2708L114.651 94.3845C112.666 93.9162 109.888 92.8317 109.888 89.0808C109.888 84.7142 114.435 83.3064 118.26 83.3064C127.066 83.3064 127.86 88.3946 128.111 90.5592L137.782 89.9086C137.566 84.6401 133.019 74.8618 119.019 75.0049C103.394 75.1501 100.508 84.4596 100.508 89.7987C100.508 100.408 108.77 102.14 115.482 103.945L120.099 105.171C125.223 106.361 128.833 107.373 128.833 111.126C128.833 116.212 123.527 117.369 118.764 117.369C111.151 117.369 109.274 112.245 109.202 109.575L100.433 110.008C100.433 109.971 100.433 109.971 100.433 109.934C100.433 101.274 93.6121 98.6031 87.0455 96.9796L75.7144 94.0914C73.7301 93.6231 70.987 92.8287 70.987 89.0759C70.987 84.7093 75.0281 83.3014 78.8535 83.3014C87.6592 83.3014 88.4532 88.3896 88.7042 90.5542L98.3746 89.7955C98.1589 84.5269 93.9002 74.8565 79.6123 75.0016C63.9872 75.1113 61.6068 84.4564 61.6068 89.7955C61.6068 100.405 70.7361 102.207 77.5202 104.05L81.4888 105.095C86.5769 106.285 90.6905 107.37 90.6905 111.122C90.6905 116.209 85.4945 117.365 80.7299 117.365C71.5655 117.365 70.0851 112.203 70.0125 109.534L60.703 110.112C60.703 110.186 60.703 110.292 60.703 110.398L48.7602 76.4089H37.1408L20 124.508H30.5723L33.9291 114.585H51.6816L54.7855 124.508H65.7205L63.1226 117.147C65.9362 121.478 71.5655 125.665 81.4535 125.665C85.1338 125.665 96.753 124.692 99.7118 114.945C101.949 119.888 107.686 125.665 119.523 125.665C122.913 125.665 133.089 124.833 136.987 117.006L134.246 124.58H144.856L148.211 114.657H165.963L169.067 124.58H180L163.042 76.4497ZM36.6039 106.29L42.7743 87.2377H42.9196L48.8723 106.29H36.6039ZM150.881 106.364L157.052 87.3118H157.197L163.152 106.364H150.881Z'
        fill={fillColor}
      />
    </svg>
  )
}