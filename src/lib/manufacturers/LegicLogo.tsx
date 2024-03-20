import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const LegicLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Legic logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M123.108 98.3241H106.063C105.857 98.3241 105.687 98.4971 105.687 98.707V103.77C105.687 103.98 105.857 104.153 106.063 104.153H115.887V107.463C116.005 109.4 115.614 110.829 114.69 111.834C112.952 113.73 109.55 113.73 106.549 113.73H105.827H105.827C105.675 113.73 105.293 113.73 104.903 113.734C104.505 113.738 104.097 113.738 103.931 113.738C100.363 113.738 96.8281 113.31 96.2757 108.214C96.0254 100.6 96.2463 91.9356 96.2757 90.9598C96.5114 87.2224 98.6397 85.4844 102.977 85.4844L103.331 85.4881L107.716 85.4439H108.872C112.006 85.4439 115.909 85.4439 115.927 90.9561C115.927 91.1697 116.093 91.3391 116.303 91.3391H122.997C123.203 91.3391 123.373 91.1697 123.373 90.9561C123.391 86.5154 122.566 83.5808 120.777 81.725C118.151 79.0002 113.563 78.7866 107.366 78.7866H105.061C96.0327 78.8345 89.0882 79.8765 88.5985 92.5358C88.384 99.1921 88.5726 105.839 88.5961 106.67L88.5981 106.74L88.5985 106.756C88.9741 118.134 94.4568 120.358 103.802 120.358C104.281 120.358 104.763 120.354 105.253 120.347H106.917C115.806 120.347 123.483 120.347 123.483 107.386V98.707C123.483 98.4971 123.314 98.3241 123.108 98.3241ZM188.229 106.096V106.836C188.417 111.962 187.629 115.309 185.744 117.36C183.089 120.25 178.358 120.372 172.367 120.523L171.811 120.538H171.803H171.233C170.813 120.527 170.397 120.519 169.973 120.512L169.723 120.508C162.911 120.394 155.186 120.261 154.615 108.287C154.611 108.195 154.427 99.6009 154.615 92.6122C155.252 80.0266 161.648 79.0251 170.614 78.9883H170.886C171.457 78.9883 172.028 78.9809 172.591 78.9736L172.982 78.9699C173.663 78.9588 174.333 78.9515 174.999 78.9515C179.433 78.9515 182.621 79.408 184.831 81.6873C186.86 83.7788 187.821 87.3026 187.769 92.4539C187.765 92.6638 187.6 92.8737 187.394 92.8737H180.508C180.302 92.8737 180.132 92.7043 180.132 92.4907V90.9221C180.195 89.0516 179.852 87.7481 179.083 86.9159C177.939 85.6838 175.979 85.642 173.909 85.5979L173.902 85.5977C173.497 85.5904 173.096 85.5793 172.694 85.5646L169.009 85.5204C164.818 85.5204 162.58 87.3504 162.174 91.1099C162.171 91.1578 161.792 98.1539 162.252 107.742C162.204 109.532 162.672 110.938 163.644 111.966C164.881 113.265 166.917 113.924 169.69 113.924H173.346C175.629 113.924 177.971 113.799 179.319 112.33C180.283 111.27 180.677 109.613 180.519 107.263L180.515 106.133C180.515 105.919 180.685 105.746 180.891 105.746L187.85 105.71C187.946 105.717 188.049 105.75 188.119 105.824C188.189 105.894 188.229 105.993 188.229 106.096ZM135.561 79.3041H142.369C142.575 79.3041 142.745 79.4771 142.745 79.687V119.73C142.745 119.94 142.575 120.113 142.369 120.113H135.561C135.355 120.113 135.185 119.94 135.185 119.73V79.687C135.185 79.4771 135.355 79.3041 135.561 79.3041ZM19.4415 113.533H37.9627C38.1689 113.533 38.3382 113.706 38.3382 113.916V119.73C38.3382 119.94 38.1689 120.113 37.9627 120.113H12.1766C11.9704 120.113 11.801 119.94 11.801 119.73V79.6097C11.801 79.3961 11.9704 79.2267 12.1766 79.2267H19.0659C19.2721 79.2267 19.4415 79.3961 19.4415 79.6097V113.533ZM76.3665 95.8668H69.5988C69.3889 95.8668 69.2232 96.0361 69.2232 96.2423V103.01C69.2232 103.216 69.3889 103.386 69.5988 103.386H76.3665C76.5727 103.386 76.7421 103.216 76.7421 103.01V96.2423C76.7421 96.0361 76.5727 95.8668 76.3665 95.8668ZM49.5446 79.3041H76.3654C76.5716 79.3041 76.7409 79.4771 76.7409 79.687V85.2213C76.7409 85.4348 76.5716 85.6042 76.3654 85.6042H56.7653V113.533H76.3654C76.5716 113.533 76.7409 113.706 76.7409 113.916V119.73C76.7409 119.94 76.5716 120.113 76.3654 120.113H49.5446C49.3384 120.113 49.169 119.94 49.169 119.73V79.687C49.169 79.4771 49.3384 79.3041 49.5446 79.3041Z'
        fill={monochrome ? '' : '#003D6F'}
      />
    </svg>
  )
}
