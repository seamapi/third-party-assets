import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const LocklyLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Lockly logo'
      {...rest}
    >
      <g clip-path='url(#clip0_1_593)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M77.7278 97.4019C77.7535 97.6183 77.779 97.8319 77.8024 98.0338H77.8704L77.8782 98.1265V98.1266V98.1266C77.932 98.7699 77.9812 99.3569 77.9271 100.006C77.9271 100.618 77.9271 101.173 77.8704 101.729C77.8704 102.043 77.8223 102.398 77.7732 102.76L77.7732 102.76L77.7595 102.861L77.7458 102.964H67.2284C66.7297 104.369 65.9363 105.605 64.9503 106.647C64.3383 107.259 63.6017 107.815 62.797 108.245L61.879 106.647L60.7683 104.675C61.505 104.301 62.185 103.689 62.6723 102.953C62.9103 102.579 63.1597 102.148 63.2843 101.717C63.4657 101.162 63.5903 100.606 63.5903 99.9945C63.5903 99.2465 63.4657 98.6345 63.2163 98.0225C62.967 97.4671 62.661 96.9118 62.287 96.4811C61.981 96.0505 61.5503 95.7445 61.1197 95.4385C60.315 94.9511 59.3403 94.6451 58.2863 94.6451C57.2323 94.6451 56.2576 94.9511 55.4529 95.4385C55.0223 95.7445 54.6483 96.1071 54.2856 96.4811C53.9229 96.9118 53.6169 97.4671 53.3676 98.0225C53.1183 98.6458 52.9936 99.3145 52.9936 99.9945C52.9936 100.606 53.1183 101.162 53.2996 101.717C53.4243 102.148 53.6623 102.579 53.9116 102.953C54.3989 103.689 55.0109 104.245 55.8156 104.675L54.7049 106.647L53.7869 108.245C52.9823 107.815 52.2456 107.259 51.6336 106.647C50.5909 105.605 49.8542 104.381 49.3556 102.964C49.2309 102.59 49.1176 102.159 49.0496 101.729C48.9816 101.173 48.9249 100.618 48.9249 100.006C48.9249 99.3258 48.9816 98.6458 49.1062 98.0338C49.2121 97.5152 49.3871 97.046 49.5575 96.5892L49.5936 96.4925C50.1489 95.0078 51.0102 93.7838 52.1776 92.7978C52.5403 92.4351 52.9709 92.1291 53.4016 91.8798C54.8183 91.0184 56.473 90.5311 58.2636 90.5311C60.0543 90.5311 61.709 91.0184 63.1257 91.8798C63.6243 92.1178 64.055 92.4238 64.4177 92.7978C65.5284 93.8404 66.4464 95.0758 67.0017 96.4925C67.2115 96.9322 67.3333 97.4159 67.4446 97.8583C67.4595 97.9176 67.4743 97.9762 67.489 98.0338H70.4357C70.311 97.4785 70.1864 96.9798 70.0617 96.4925C69.699 95.1325 69.087 93.9084 68.2824 92.7978C67.3077 91.4491 66.0724 90.2818 64.599 89.4204C62.7517 88.3097 60.5983 87.6977 58.2636 87.6977C55.9289 87.6977 53.7756 88.3097 51.9283 89.4204C50.4436 90.2818 49.2196 91.4491 48.2336 92.7978H39.9375C41.5355 88.6724 44.4822 85.2271 48.2336 83.017C51.1802 81.2944 54.5689 80.3083 58.2523 80.3083C61.9357 80.3083 65.3243 81.2944 68.271 83.017C72.0337 85.2384 74.9804 88.6837 76.5784 92.7978C77.0658 94.0331 77.3718 95.2005 77.6211 96.4925C77.6543 96.7845 77.6914 97.096 77.7278 97.4019ZM81.7471 100.176C81.7471 88.6156 90.4738 80.7502 101.728 80.7502C110.035 80.7502 114.829 85.2383 117.47 89.9076L110.579 93.2963C108.981 90.225 105.593 87.8223 101.728 87.8223C94.9052 87.8223 89.9185 93.047 89.9185 100.187C89.9185 107.327 94.8938 112.552 101.728 112.552C105.604 112.552 108.981 110.217 110.579 107.078L117.47 110.398C114.761 115.068 110.035 119.624 101.728 119.624C90.4738 119.624 81.7471 111.747 81.7471 100.187V100.176ZM125.222 99.0084L140.103 81.3623H130.266L128.974 82.9603L116.983 98.1471L116.246 99.0764L127.863 114.445L131.308 118.933H141.146L125.222 99.0084ZM200 81.3623L185.606 103.564V118.933H177.616V103.564L163.098 81.3623H172.267L181.606 96.4244L190.831 81.3623H200ZM68.578 106.636C67.4674 108.358 65.994 109.775 64.2147 110.761C62.4353 111.747 60.4066 112.303 58.2533 112.303C56.0999 112.303 54.0713 111.747 52.2919 110.761C50.5126 109.775 49.0279 108.358 47.9286 106.636C47.1919 105.525 46.6932 104.301 46.3305 102.941C46.2108 102.527 46.1538 102.166 46.0892 101.756C46.0891 101.756 46.0891 101.756 46.0891 101.756L46.0812 101.706C46.0132 101.15 45.9565 100.595 45.9565 99.9831C45.9565 99.3031 46.0132 98.6911 46.0812 98.0111C46.1379 97.5237 46.2625 96.9684 46.4552 96.4697H38.9525C38.9326 96.641 38.9113 96.8137 38.8895 96.9898C38.8494 97.3146 38.8079 97.6509 38.7712 98.0111C38.7673 98.053 38.7633 98.0952 38.7594 98.1377C38.7055 98.7162 38.6465 99.3496 38.6465 99.9831C38.6465 100.538 38.6465 101.15 38.7032 101.706C38.7032 102.136 38.7598 102.567 38.8278 102.941C39.0092 104.233 39.3152 105.457 39.7458 106.636C41.3438 111.124 44.5399 114.819 48.5972 117.153C51.4192 118.751 54.7399 119.681 58.2533 119.681C61.7666 119.681 65.076 118.751 67.9094 117.153C71.9667 114.875 75.1627 111.124 76.7608 106.636H68.578ZM144.84 118.933V81.3623H152.83V111.929H168.697V118.933H144.84ZM12.5 118.819V81.1812H20.4901V111.747H36.3568V118.819H12.5Z'
          fill={monochrome ? '' : '#494E54'}
        />
        <path
          d='M77.8024 98.0338C77.7458 97.5465 77.6778 96.9911 77.6211 96.4925C77.3718 95.2005 77.0658 94.0331 76.5784 92.7978C74.9804 88.6837 72.0337 85.2384 68.271 83.017C65.3243 81.2944 61.9357 80.3083 58.2523 80.3083C54.5689 80.3083 51.1802 81.2944 48.2336 83.017C44.4822 85.2271 41.5355 88.6724 39.9375 92.7978H48.2336C49.2196 91.4491 50.4436 90.2818 51.9283 89.4204C53.7756 88.3097 55.9289 87.6977 58.2636 87.6977C60.5983 87.6977 62.7517 88.3097 64.599 89.4204C66.0724 90.2818 67.3077 91.4491 68.2824 92.7978C69.087 93.9084 69.699 95.1325 70.0617 96.4925C70.1864 96.9798 70.311 97.4785 70.4357 98.0338H67.489C67.3644 97.5465 67.2397 96.9911 67.0017 96.4925C66.4464 95.0758 65.5283 93.8404 64.4177 92.7978C64.055 92.4238 63.6243 92.1178 63.1257 91.8798C61.709 91.0184 60.0543 90.5311 58.2636 90.5311C56.473 90.5311 54.8183 91.0184 53.4016 91.8798C52.9709 92.1291 52.5403 92.4351 52.1776 92.7978C51.0102 93.7838 50.1489 95.0078 49.5936 96.4925C49.4122 96.9798 49.2196 97.4785 49.1062 98.0338C48.9816 98.6458 48.9249 99.3258 48.9249 100.006C48.9249 100.618 48.9816 101.173 49.0496 101.729C49.1176 102.159 49.2309 102.59 49.3556 102.964C49.8542 104.381 50.5909 105.605 51.6336 106.647C52.2456 107.259 52.9823 107.815 53.7869 108.245L54.7049 106.647L55.8156 104.675C55.0109 104.245 54.3989 103.689 53.9116 102.953C53.6623 102.579 53.4243 102.148 53.2996 101.717C53.1183 101.162 52.9936 100.606 52.9936 99.9945C52.9936 99.3145 53.1183 98.6458 53.3676 98.0225C53.6169 97.4671 53.9229 96.9118 54.2856 96.4811C54.6483 96.1071 55.0223 95.7445 55.4529 95.4385C56.2576 94.9511 57.2323 94.6451 58.2863 94.6451C59.3403 94.6451 60.315 94.9511 61.1197 95.4385C61.5503 95.7445 61.981 96.0505 62.287 96.4811C62.661 96.9118 62.967 97.4671 63.2163 98.0225C63.4657 98.6345 63.5903 99.2465 63.5903 99.9945C63.5903 100.606 63.4657 101.162 63.2843 101.717C63.1597 102.148 62.9103 102.579 62.6723 102.953C62.185 103.689 61.505 104.301 60.7683 104.675L61.879 106.647L62.797 108.245C63.6017 107.815 64.3383 107.259 64.9503 106.647C65.9363 105.605 66.7297 104.369 67.2284 102.964H77.7458C77.8024 102.533 77.8704 102.103 77.8704 101.729C77.9271 101.173 77.9271 100.618 77.9271 100.006C77.9838 99.3258 77.9271 98.7138 77.8704 98.0338'
          fill={monochrome ? '' : '#5EAAD7'}
        />
      </g>
      <defs>
        <clipPath id='clip0_1_593'>
          <rect
            width='187.5'
            height='39.3609'
            fill={monochrome ? '' : '#ffffff'}
            transform='translate(12.5 80.3196)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}