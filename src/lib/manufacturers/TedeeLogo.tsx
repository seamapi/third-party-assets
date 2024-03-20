import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const TedeeLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Tedee logo'
      {...rest}
    >
      <path
        d='M39.5864 109.856C39.5844 110.483 39.4333 111.101 39.1452 111.66C38.3067 113.359 36.9214 114.737 35.2045 115.58C33.4615 116.451 31.3715 116.887 28.9344 116.887C25.2738 116.887 22.4165 115.829 20.3625 113.714C18.3084 111.598 17.2791 108.653 17.2744 104.878V79.7413C17.2744 78.5798 17.582 77.678 18.1971 77.036C18.8122 76.3939 19.6711 76.0721 20.7738 76.0704C21.8747 76.0704 22.7327 76.3923 23.3478 77.036C23.9629 77.6797 24.2704 78.5815 24.2704 79.7413V86.3366H34.7332C35.8257 86.3366 36.6769 86.6162 37.287 87.1753C37.8972 87.7344 38.2013 88.5125 38.1997 89.5096C38.2421 90.36 37.9096 91.1871 37.2873 91.7788C36.6773 92.3396 35.826 92.62 34.7335 92.62H24.2707V105.065C24.2707 106.849 24.7119 108.217 25.5944 109.171C26.4768 110.125 27.6955 110.603 29.2503 110.603C31.0791 110.653 32.792 109.724 33.7254 108.176C34.0045 107.736 34.3811 107.363 34.8273 107.086C35.2934 106.811 35.8293 106.671 36.3727 106.683C37.2166 106.655 38.0394 106.944 38.6746 107.492C39.2825 108.031 39.5864 108.819 39.5864 109.856Z'
        fill={monochrome ? '' : '#3BD5FD'}
      />
      <path
        d='M71.7612 111.738C70.3482 113.412 68.5412 114.721 66.4973 115.552C64.23 116.47 61.7963 116.924 59.3448 116.887C57.0336 116.915 54.7366 116.527 52.5678 115.74C50.6239 115.032 48.8447 113.945 47.3364 112.545C45.878 111.167 44.7386 109.496 43.9958 107.645C43.1979 105.63 42.8023 103.482 42.8312 101.319C42.8051 99.1464 43.2004 96.9883 43.9961 94.9612C44.7307 93.105 45.8592 91.4244 47.3063 90.0317C48.7818 88.6377 50.5285 87.5516 52.4414 86.8389C54.545 86.0537 56.7795 85.6641 59.0291 85.6901C61.118 85.6736 63.1917 86.0415 65.1432 86.7749C66.9528 87.4504 68.6197 88.4496 70.0595 89.7222C71.433 90.9456 72.5374 92.4331 73.3041 94.0927C74.0843 95.777 74.4827 97.608 74.4715 99.4589V99.7689C74.522 100.844 74.1103 101.891 73.337 102.652C72.5372 103.39 71.4701 103.782 70.3746 103.739H50.1432C50.5616 105.932 51.5911 107.659 53.2314 108.919C54.8719 110.179 56.9099 110.809 59.3452 110.81C60.832 110.842 62.307 110.545 63.6616 109.941C64.8045 109.434 65.8253 108.695 66.6566 107.772C67.278 106.989 68.2314 106.531 69.241 106.531C70.1266 106.486 70.9922 106.799 71.6361 107.4C72.2375 108.013 72.5566 108.843 72.5186 109.694C72.5161 110.442 72.2482 111.165 71.7612 111.738ZM59.0294 91.7672C56.9613 91.7175 54.9342 92.339 53.2611 93.5361C51.6625 94.6853 50.552 96.3754 50.1432 98.2816H67.7281C67.3277 96.3957 66.2546 94.7131 64.7029 93.5383C63.1475 92.3566 61.2564 91.7655 59.0294 91.7672Z'
        fill={monochrome ? '' : '#3BD5FD'}
      />
      <path
        d='M107.532 72.2252C108.634 72.2252 109.503 72.5569 110.139 73.2204C110.774 73.8839 111.093 74.7755 111.094 75.8953V112.844C111.094 114.005 110.776 114.906 110.139 115.548C109.502 116.19 108.633 116.512 107.532 116.514C106.59 116.559 105.673 116.208 105.01 115.548C104.389 114.905 104.082 114.003 104.09 112.844V112.533H103.971C102.789 113.947 101.274 115.057 99.559 115.767C97.6408 116.543 95.5817 116.924 93.5082 116.887C91.4354 116.916 89.3778 116.535 87.4574 115.767C85.691 115.049 84.1012 113.967 82.7943 112.595C81.4609 111.178 80.441 109.505 79.7991 107.681C79.0808 105.62 78.7295 103.452 78.7607 101.274C78.7312 99.0857 79.0825 96.9087 79.7994 94.8371C80.4359 93.0005 81.4562 91.3156 82.7946 89.8905C84.1016 88.5181 85.6919 87.4364 87.4585 86.7181C89.3789 85.9502 91.4365 85.5697 93.509 85.5993C95.5825 85.5623 97.6416 85.9434 99.5598 86.7189C101.275 87.4299 102.789 88.5398 103.972 89.9534H104.146L104.098 75.8955C104.098 74.7758 104.405 73.8842 105.019 73.2207C105.668 72.5423 106.586 72.1784 107.532 72.2252ZM94.8637 110.604C96.1409 110.619 97.4087 110.386 98.595 109.92C99.7019 109.487 100.704 108.83 101.537 107.992C102.369 107.146 103.014 106.141 103.433 105.038C103.888 103.834 104.113 102.558 104.099 101.274C104.111 99.98 103.885 98.6944 103.431 97.4797C102.612 95.2336 100.849 93.4432 98.5933 92.5656C97.4068 92.1006 96.1392 91.8681 94.862 91.8813C92.1728 91.8813 89.9802 92.7417 88.2844 94.4628C86.5885 96.1837 85.748 98.4539 85.7631 101.273C85.7631 104.052 86.6036 106.302 88.2844 108.024C89.9651 109.745 92.1583 110.606 94.8637 110.604Z'
        fill={monochrome ? '' : '#3BD5FD'}
      />
      <path
        d='M146.086 111.738C144.672 113.411 142.865 114.72 140.822 115.551C138.555 116.469 136.121 116.924 133.669 116.886C131.358 116.915 129.061 116.527 126.892 115.74C124.948 115.032 123.169 113.945 121.661 112.545C120.202 111.167 119.062 109.496 118.321 107.645C117.521 105.63 117.126 103.482 117.156 101.319C117.128 99.1455 117.524 96.9873 118.321 94.9604C119.054 93.1037 120.183 91.423 121.631 90.0309C123.106 88.6364 124.853 87.5502 126.766 86.8381C128.869 86.0528 131.104 85.6631 133.353 85.6894C135.443 85.6731 137.517 86.0414 139.469 86.7753C141.278 87.4507 142.945 88.4499 144.385 89.7225C145.757 90.947 146.861 92.4342 147.629 94.0932C148.408 95.7776 148.806 97.6085 148.797 99.4592V99.7692C148.847 100.845 148.435 101.891 147.662 102.653C146.862 103.391 145.795 103.782 144.7 103.74H124.466C124.885 105.933 125.914 107.659 127.554 108.919C129.195 110.18 131.233 110.81 133.668 110.81C135.155 110.842 136.63 110.545 137.985 109.942C139.127 109.434 140.148 108.695 140.98 107.772C141.601 106.989 142.554 106.531 143.564 106.532C144.45 106.486 145.315 106.8 145.959 107.4C146.56 108.013 146.88 108.843 146.842 109.695C146.84 110.443 146.573 111.167 146.085 111.741L146.086 111.738ZM133.354 91.7677C131.286 91.7178 129.259 92.3395 127.586 93.5364C125.986 94.6849 124.875 96.3754 124.467 98.2819H142.052C141.652 96.396 140.579 94.7135 139.027 93.5386C137.472 92.3569 135.581 91.7659 133.354 91.7677Z'
        fill={monochrome ? '' : '#3BD5FD'}
      />
      <path
        d='M182.013 111.738C180.599 113.412 178.793 114.72 176.751 115.552C174.482 116.47 172.048 116.924 169.595 116.886C167.285 116.915 164.989 116.527 162.821 115.74C160.877 115.032 159.097 113.945 157.59 112.545C156.13 111.167 154.991 109.496 154.249 107.645C153.449 105.63 153.052 103.482 153.082 101.319C153.055 99.1453 153.451 96.9871 154.249 94.9604C154.983 93.1044 156.11 91.4238 157.557 90.0309C159.033 88.6367 160.781 87.5509 162.695 86.8382C164.798 86.0525 167.033 85.6628 169.283 85.6894C171.372 85.673 173.446 86.0412 175.398 86.7753C177.206 87.451 178.871 88.4499 180.309 89.7217C181.683 90.9461 182.788 92.4336 183.556 94.0929C184.334 95.7776 184.732 97.6085 184.721 99.4589V99.769C184.772 100.844 184.361 101.891 183.587 102.653C182.788 103.39 181.722 103.782 180.627 103.739H160.394C160.815 105.932 161.844 107.658 163.481 108.919C165.118 110.179 167.156 110.809 169.595 110.809C171.082 110.841 172.558 110.544 173.914 109.941C175.055 109.433 176.075 108.694 176.906 107.771C177.527 106.988 178.481 106.53 179.49 106.531C180.376 106.485 181.242 106.799 181.885 107.399C182.488 108.012 182.808 108.842 182.767 109.694C182.766 110.442 182.499 111.166 182.011 111.741L182.013 111.738ZM169.283 91.7684C167.216 91.7189 165.19 92.3406 163.517 93.5373C161.918 94.686 160.806 96.3757 160.396 98.282H177.981C177.583 96.3952 176.509 94.7119 174.956 93.5387C173.401 92.3569 171.51 91.7669 169.283 91.7684Z'
        fill={monochrome ? '' : '#3BD5FD'}
      />
    </svg>
  )
}
