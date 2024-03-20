import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const AkuvoxLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  const fillColor = monochrome ? '' : '#003686'

  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='August logo'
      {...rest}
    >
      <path
        d='M28.3902 88.3348L31.101 98.9271H23.9224L28.3902 88.3348ZM20.7598 87.7324L6.00098 116.949H16.9948C17.3462 115.644 17.798 114.338 18.3 113.134L21.061 106.507H32.9584L34.7656 114.037C35.0166 115.041 35.2174 115.995 35.3178 116.949H46.2113L36.4724 87.2304C36.0708 86.0256 35.8198 84.871 35.6692 83.7164H22.4666C21.7638 85.5236 21.2116 86.879 20.7598 87.7324Z'
        fill={fillColor}
      />
      <path
        d='M56.8678 102.993C59.679 107.863 62.0384 112.481 63.9962 116.949H74.99L67.0584 102.843L75.5422 91.3971H65.1006C62.5906 95.4131 59.8798 99.2785 56.8678 102.993ZM46.2254 116.949H56.1148L57.0686 93.9573C57.2192 90.0416 57.4702 86.628 57.8216 83.7164H47.9322C47.7314 99.8809 47.0286 110.975 46.2254 116.949Z'
        fill={fillColor}
      />
      <path
        d='M106.592 91.3971H96.7024C96.602 104.198 96.0498 110.222 90.9795 110.222C88.1181 110.222 87.4655 108.214 87.4655 103.847C87.4655 101.939 87.6161 97.7725 88.1181 91.3971H78.4797C78.2789 99.8809 77.7267 105.905 77.7267 109.419C77.7267 115.192 80.5881 117.702 87.3149 117.702C91.0799 117.702 93.59 116.598 95.9494 113.736V116.949H105.337C105.337 108.013 105.738 99.4793 106.592 91.3971Z'
        fill={fillColor}
      />
      <path
        d='M115.441 116.949H126.886C128.392 112.581 131.806 104.047 137.077 91.3971H127.589C126.686 94.5597 125.933 96.8689 125.431 98.2745L121.766 108.314L119.055 98.2745C118.202 95.2123 117.599 92.9031 117.248 91.3971H107.509C111.977 104.75 114.537 113.334 115.441 116.949Z'
        fill={fillColor}
      />
      <path
        d='M136.305 104.7C136.305 112.983 141.275 117.652 150.26 117.652C159.397 117.652 165.019 112.381 165.019 103.596C165.019 95.3629 160.049 90.6942 151.164 90.6942C141.877 90.6942 136.305 96.0657 136.305 104.7ZM150.813 97.5215C153.975 97.5215 155.13 99.5797 155.13 104.098C155.13 108.465 153.523 110.724 150.511 110.724C147.55 110.724 146.194 108.716 146.194 104.549C146.194 99.8809 147.7 97.5215 150.813 97.5215Z'
        fill={fillColor}
      />
      <path
        d='M177.734 91.3971H166.439C168.497 94.5597 169.652 96.3669 169.953 96.9191L173.567 103.094L170.204 108.616C168.748 111.025 166.891 113.786 164.732 116.949H175.927C176.981 114.389 177.583 112.883 177.784 112.431L178.939 109.419L180.244 112.481C180.545 113.184 181.148 114.64 182.051 116.949H193.848C191.84 113.887 190.234 111.377 189.029 109.369L185.716 103.847L189.28 98.3247C191.037 95.6641 192.593 93.3549 193.999 91.3971H183.005C182.553 92.8027 182.051 94.2083 181.399 95.6139L180.144 98.3749L179.24 95.8147C178.989 95.1119 178.487 93.6561 177.734 91.3971Z'
        fill={fillColor}
      />
    </svg>
  )
}