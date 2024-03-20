import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const MyQLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='MyQ logo'
      {...rest}
    >
      <g clipPath='url(#clip0_1_598)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M160.391 115.17L165.507 121.69C166.62 123.167 166.92 125.063 166.327 126.783C165.972 127.812 165.324 128.703 164.452 129.361C163.496 130.081 162.36 130.462 161.166 130.462C159.433 130.462 157.843 129.67 156.801 128.288L141.031 108.192C140.135 107.006 139.763 105.568 139.965 104.123C140.168 102.679 140.921 101.399 142.087 100.52C143.042 99.8 144.178 99.4191 145.372 99.4191C147.105 99.4191 148.696 100.212 149.738 101.593L153.443 106.315C153.943 105.353 154.361 104.343 154.681 103.293C155.415 100.887 155.653 98.2793 155.282 95.5941C154.066 86.7993 146.39 80.1411 137.513 80.1648C126.881 80.1934 118.631 89.3938 119.713 99.9293C120.699 109.538 129.334 116.527 138.975 115.949L140.025 115.886C142.954 115.71 145.473 117.943 145.648 120.873C145.824 123.803 143.591 126.321 140.661 126.497L139.8 126.548C124.281 127.48 110.144 115.595 109.058 100.085C107.922 83.8724 120.596 69.8868 136.959 69.5424C152.166 69.2217 165.116 81.1813 166.032 96.3648C166.138 98.1184 166.082 99.8464 165.878 101.532C165.432 105.206 164.281 108.684 162.557 111.814C161.912 112.984 161.188 114.105 160.391 115.17ZM69.5135 111.621V97.4898C69.5135 90.5829 65.3698 86.2793 59.4724 86.2793C55.1155 86.2793 52.0346 87.9263 49.6435 90.8484C47.8908 87.9263 44.8622 86.2793 41.2494 86.2793C37.531 86.2793 35.0343 87.6076 33.0152 89.8921V87.0767H29.4023V111.621H33.0152V94.0892C34.98 91.1138 37.6898 89.6267 40.6119 89.6267C44.9678 89.6267 47.6777 92.5487 47.6777 97.6487V111.62H51.2905V97.4888C51.2905 96.3737 51.1849 95.3109 50.9718 94.3546C52.9375 91.0615 55.8063 89.6267 58.8349 89.6267C63.2441 89.6267 65.9007 92.5487 65.9007 97.6487V111.621H69.5135ZM84.0726 124.797H80.1943L85.613 112.897L73.0752 87.0764H77.0068L87.5255 108.699L97.3545 87.0764H101.233L84.0726 124.797ZM172.948 118.993C176.033 118.993 178.597 116.645 178.597 113.488C178.597 110.356 176.034 107.982 172.948 107.982C169.886 107.982 167.3 110.356 167.3 113.488C167.3 116.645 169.886 118.993 172.948 118.993ZM172.949 108.979C175.393 108.979 177.506 110.949 177.506 113.488C177.506 116.027 175.393 117.997 172.949 117.997C170.505 117.997 168.393 116.027 168.393 113.488C168.393 110.949 170.504 108.979 172.949 108.979ZM175.393 116.027L173.874 114.177C174.681 113.962 175.227 113.369 175.226 112.515C175.226 111.447 174.372 110.735 173.256 110.735H171.05V116.027H171.856V114.247H172.901L174.349 116.027H175.393ZM173.234 113.488H171.857V111.494H173.234C173.899 111.494 174.373 111.898 174.373 112.491C174.373 113.108 173.899 113.488 173.234 113.488Z'
          fill={monochrome ? '' : '#009CDE'}
        />
      </g>
      <defs>
        <clipPath id='clip0_1_598'>
          <rect
            width='150'
            height='61.1842'
            fill={monochrome ? '' : '#ffffff'}
            transform='translate(29 69.408)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
