import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const AmericanStandardLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='AmericanStandard logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M40.704 67.6168C46.5626 60.7076 47.9513 59.3434 50.0343 58.5952C52.0306 57.8911 52.8117 57.8031 53.5929 58.3312C54.0702 58.6392 53.9834 59.3874 53.0721 62.3799C51.6834 67.0447 49.34 76.2864 49.34 77.1225C49.34 77.6066 50.0343 77.7387 52.4646 77.7387H55.5457L54.7212 78.6628C53.6363 79.895 50.9457 81.2593 49.6004 81.2593C48.4287 81.2593 48.2117 82.0514 47.9079 87.5084C47.8211 88.9166 47.4739 90.3249 47.1702 90.677C46.4758 91.5571 42.2663 92.9214 41.355 92.5693C40.4436 92.2172 40.487 90.765 41.4852 85.9681C41.9191 83.8557 42.1361 82.0074 41.9191 81.8754C41.7456 81.7874 40.0097 81.7874 38.0568 81.9634L34.5417 82.2715L31.6775 86.6722C28.5963 91.3371 27.8586 91.9092 24.083 92.4813C22.3906 92.7453 22 92.7013 22 92.1292C22 90.985 31.6775 78.3108 40.704 67.6168ZM44.8604 71.7077L45.0003 71.2255C45.6513 69.0251 46.1286 67.1768 46.0418 67.1768C45.8682 67.1768 38.838 76.2424 38.3606 77.1225C38.0568 77.6066 38.4908 77.7387 40.6172 77.7387C43.1342 77.7387 43.2644 77.6946 43.5248 76.5064C43.6457 75.8935 44.2531 73.8006 44.8604 71.7077ZM119.122 69.9493C118.124 69.0251 118.124 68.277 119.252 66.6927C120.033 65.5925 120.424 65.3724 121.769 65.5045C123.245 65.6365 123.332 65.7245 123.462 67.2208C123.592 68.541 123.375 69.0251 122.42 69.7732C121.032 70.8734 120.207 70.9174 119.122 69.9493ZM92.867 72.2377C89.3519 73.7779 85.7499 78.5748 84.4914 83.4597C83.9272 85.7041 82.5386 87.4204 81.3668 87.4204C80.2819 87.4204 80.3687 85.8361 81.6706 81.3033C83.7103 74.174 83.5801 72.0176 81.0197 72.0176C79.1536 72.0176 76.68 74.218 73.6422 78.5308C72.1233 80.7312 70.778 82.4915 70.6912 82.4035C70.6044 82.3155 71.0384 80.5992 71.646 78.6188C73.295 73.3379 73.1214 72.0176 70.8214 72.0176C68.695 72.0176 66.3949 73.998 63.227 78.5308C61.7081 80.7312 60.4062 82.4915 60.3194 82.4035C60.7072 81.0861 61.1709 79.793 61.7081 78.5308C62.5326 76.4624 63.3572 74.174 63.4874 73.3819C63.7477 72.0176 63.7477 72.0176 62.0553 72.0176C61.1138 71.9894 60.1868 72.2578 59.4018 72.7858C58.6169 73.3138 58.0127 74.0756 57.6722 74.9662C56.5873 77.7827 54.157 86.1882 53.6363 88.6966C53.0721 91.7772 53.3325 92.3493 55.1986 92.3493C56.7608 92.3933 58.5835 90.4569 62.8798 84.3838C64.8327 81.6113 66.4817 79.543 66.5685 79.807C66.6553 80.0271 66.2214 82.1834 65.6138 84.5599C64.3119 89.7528 64.2251 91.6451 65.3534 92.2172C66.7421 93.0094 68.7818 91.117 72.9045 85.088C75.0309 82.0074 76.897 79.543 76.9838 79.675C77.114 79.763 76.8536 81.3473 76.463 83.1956C76.0527 85.0339 75.7914 86.9031 75.6819 88.7846C75.5951 90.677 75.7687 91.1611 76.6366 91.8652C77.9819 92.9654 79.5442 92.7013 82.4952 90.897L84.6216 89.5768L85.6631 90.677C87.9632 93.1854 92.7368 93.0974 96.7727 90.5009L98.769 89.2247L98.335 90.4129C97.5105 92.5253 99.6369 93.0534 102.631 91.4251C103.152 91.1611 103.803 89.9728 104.237 88.6526C104.671 87.3764 105.539 85.132 106.233 83.6357C107.362 81.2153 107.752 80.8192 110.139 79.499C112.135 78.4428 112.916 77.6946 113.394 76.5504C114.782 73.2499 112.786 72.3257 109.358 74.7461C107.405 76.1104 107.362 76.1104 107.665 75.0542L107.702 74.9344L107.702 74.9342C108.232 73.2063 108.461 72.4578 108.194 72.1705C107.99 71.9509 107.497 72.0005 106.625 72.0881L106.45 72.1056C103.846 72.4137 103.326 72.8978 102.501 75.8903C102.154 77.2986 101.633 79.1909 101.373 80.1151C100.809 82.1394 97.1633 86.2322 94.8199 87.4644C92.5198 88.6526 90.7405 88.5646 89.8726 87.2003C88.8311 85.6161 89.3519 84.9559 91.7821 84.6479C97.2935 83.9878 101.243 79.543 100.375 74.9222C99.8105 71.9296 96.3387 70.6974 92.867 72.2377ZM95.6878 76.9905C95.8614 78.4428 93.5613 81.0392 91.6953 81.5233C89.9594 81.9634 89.8292 81.4353 91.0009 79.2349C92.8236 75.7143 95.4274 74.4821 95.6878 76.9905ZM121.118 82.6235C122.507 77.8707 125.979 73.3819 129.19 72.0616C130.449 71.5776 133.139 71.4455 134.181 71.8416C135.222 72.2377 136.134 74.3941 136.134 76.3744C136.134 79.2789 133.313 81.7874 130.883 81.0392C129.884 80.6872 129.841 80.1151 130.709 78.4428C131.447 77.0785 131.577 75.5383 130.969 75.5383C130.275 75.5383 128.235 77.9587 127.237 79.939C124.373 85.7041 125.849 89.4447 130.232 87.5084C132.315 86.5402 134.137 84.3838 135.917 80.8192C138.954 74.7021 142.6 71.5776 146.766 71.5776C149.066 71.5776 150.889 72.4577 150.889 73.6019C150.889 73.954 151.322 74.218 151.973 74.218C152.581 74.218 153.058 74.4381 153.058 74.6581C153.058 74.9221 152.494 77.0345 151.8 79.411C151.106 81.7434 150.411 84.5159 150.238 85.528C149.977 87.2444 150.021 87.4204 150.845 87.4204C152.277 87.4204 153.97 84.6039 155.272 80.1151C156.877 74.7021 157.615 73.1178 158.96 72.5017C160.262 71.8856 162.475 71.8856 162.823 72.4577C162.953 72.6777 162.302 75.0102 161.304 77.5626C160.349 80.1591 159.568 82.4035 159.568 82.5355C159.568 82.6675 160.479 81.4793 161.564 79.939C165.383 74.5261 168.247 72.0176 170.591 72.0176C172.934 72.0176 173.064 74.5701 171.025 81.6994C170.46 83.7237 169.983 85.8361 169.983 86.4082C169.983 88.1685 171.502 87.5524 174.019 84.7799C175.364 83.3277 176.666 82.1394 176.883 82.1394C177.621 82.1394 177.881 84.0318 177.361 85.396C177.144 86.0561 175.842 87.6844 174.54 88.9607C171.762 91.7332 168.421 93.0974 166.425 92.3053C164.385 91.5131 164.385 89.5328 166.425 80.3791C166.642 79.3669 166.598 79.3229 165.904 79.895C165.513 80.2471 163.517 82.7556 161.477 85.484C157.658 90.5889 155.662 92.7013 154.534 92.7013C153.98 92.5871 153.477 92.2937 153.102 91.8652C152.451 91.2051 152.19 91.161 151.279 91.6451C150.429 92.021 149.542 92.3014 148.632 92.4813C147.2 92.7453 146.853 92.6133 145.768 91.5131L144.509 90.2369L143.077 91.2051C140.17 93.2294 136.264 92.7453 135.179 90.1929C135.069 89.9533 134.964 89.7137 134.871 89.5015L134.871 89.5007L134.871 89.5005C134.709 89.1284 134.583 88.8406 134.528 88.7846C134.485 88.6966 133.834 89.1367 133.052 89.7968C129.277 93.0534 123.852 93.2734 121.639 90.3249L120.815 89.2247L119.469 90.2809C117.777 91.6011 114.565 92.4813 113.003 92.0852C112.651 91.9953 112.324 91.8259 112.046 91.5896C111.768 91.3534 111.546 91.0564 111.397 90.721C110.269 87.7724 114.479 74.6141 117.126 72.7218C118.167 71.9736 120.728 71.7536 121.118 72.3697C121.249 72.5897 120.337 75.3182 119.122 78.3988C116.648 84.7359 116.084 87.4204 117.169 87.4204C118.601 87.4204 120.294 85.308 121.118 82.6235ZM141.081 88.3005C143.511 88.3005 147.981 80.1591 147.243 77.0785C146.809 75.4062 144.813 75.5823 143.337 77.3426C140.039 81.3033 138.607 88.3005 141.081 88.3005ZM44.169 98.7745C40.7996 99.9715 38.4056 101.745 36.8983 104.094C35.7013 105.956 35.5683 106.444 35.7013 109.104C35.8343 111.808 36.056 112.34 38.051 115.266C42.3513 121.473 43.1493 122.936 43.1493 124.621C43.1493 129.764 35.0363 131.182 30.6473 126.793C29.1399 125.33 28.9626 124.887 28.9626 122.936C28.9626 121.296 29.2286 120.365 30.071 119.257C30.484 118.741 30.8547 118.192 31.1793 117.616C31.1793 117.528 30.6916 117.483 30.071 117.483C28.7853 117.483 26.0809 119.744 25.1056 121.606C24.2189 123.335 24.2189 126.705 25.1499 128.478C26.6129 131.271 30.071 133 34.2383 133C42.2183 133 48.957 127.99 48.9127 122.138C48.8683 120.675 47.361 117.705 44.435 113.493C42.2183 110.257 41.642 109.104 41.4647 107.331C41.1987 104.582 42.307 102.853 44.9227 101.789C47.1837 100.902 48.8683 100.902 50.154 101.789C51.351 102.631 51.3953 103.296 50.2427 105.513C49.0457 107.907 49.09 108.173 51.0407 108.173C56.006 108.173 58.7104 101.922 54.9864 99.1291C53.213 97.7991 47.4053 97.6218 44.169 98.7745ZM120.29 99.6611C118.826 100.37 118.605 100.769 116.565 106.976L114.393 113.493L113.418 112.606C111.423 110.744 107.388 111.853 104.241 115.133C102.512 116.907 100.206 121.207 99.7188 123.468C99.0538 126.483 96.6598 128.788 95.7288 127.281C95.5958 127.059 96.0391 124.843 96.7485 122.316C98.4331 116.197 98.6548 114.69 98.1228 113.316C97.5464 111.764 95.7288 111.764 93.3348 113.36C91.3841 114.69 89.6551 116.641 86.5961 120.808C85.5764 122.271 84.8671 123.069 85.0444 122.582C89.0788 112.429 89.1231 112.163 86.7734 112.163C83.7144 112.163 82.6947 113.493 80.8327 119.922C79.2367 125.508 77.8624 127.68 75.9117 127.68C75.2024 127.68 75.6014 124.931 77.1087 119.922C77.4005 118.879 77.7021 117.857 77.9491 117.02C78.2273 116.076 78.4361 115.368 78.4831 115.133C78.6604 114.557 78.4387 114.38 77.5521 114.38C76.9314 114.38 76.3994 114.202 76.3994 113.936C76.222 113.425 75.9168 112.967 75.5127 112.606C74.4487 111.542 70.9464 111.409 68.7297 112.296C65.4047 113.715 62.0797 117.838 60.6167 122.404C60.1336 123.807 59.3805 125.103 58.4 126.217C57.07 127.591 55.4297 128.123 54.942 127.325C54.6317 126.838 55.7844 121.961 56.9814 118.503C57.868 115.887 58.0454 115.71 59.331 115.71C61.1044 115.71 64.6067 113.892 64.784 112.917C64.917 112.296 64.518 112.163 62.257 112.163C60.7497 112.163 59.5527 112.03 59.5527 111.808C59.7885 110.903 60.0848 110.014 60.4394 109.148C60.8064 108.257 61.1029 107.338 61.326 106.4C61.326 105.735 58.0897 105.868 57.07 106.621C56.538 106.976 55.6514 108.35 55.1194 109.725C54.1883 112.074 54.0553 112.163 52.4593 112.163C50.42 112.163 48.4693 113.582 48.4693 115.089C48.4693 116.064 48.6467 116.153 50.4643 116.153C51.5727 116.153 52.4593 116.242 52.4593 116.375C52.4593 116.508 51.883 118.636 51.1293 121.119C49.8437 125.463 49.356 130.34 50.154 131.493C51.3953 133.355 53.9667 133.266 57.6464 131.182L59.9074 129.941L60.6167 131.005C62.124 133.266 65.8037 133.355 68.5967 131.182L69.6607 130.34L71.0794 131.714C72.5424 133.222 73.7394 133.266 76.3551 131.98C77.3747 131.493 77.6407 131.493 78.6604 132.246C79.7687 133.044 79.9017 133.044 81.2317 132.379C81.9854 131.98 84.3351 129.365 86.6848 126.261C91.6944 119.7 92.3151 118.946 92.3594 119.345C92.3594 119.523 91.9604 121.385 91.4728 123.468C91.013 125.36 90.7164 127.289 90.5861 129.232C90.5861 133.488 93.8668 134.064 98.6548 130.65C99.3198 130.207 99.5415 130.296 100.118 131.094C101.226 132.645 103.31 133.133 105.97 132.335C107.211 131.98 108.452 131.404 108.718 131.049C109.162 130.562 109.472 130.65 110.536 131.759C111.644 132.867 112.088 133.044 113.329 132.778C114.558 132.414 115.736 131.892 116.831 131.227L118.915 129.985L119.58 131.005C120.167 131.731 120.953 132.27 121.841 132.557C123.216 133 123.792 132.956 125.388 132.379C126.452 131.936 127.56 131.315 127.826 130.961C128.58 130.118 129.023 130.163 129.378 131.182C129.821 132.645 131.816 133.133 134.033 132.379C135.718 131.803 135.984 131.803 136.604 132.424C137.048 132.867 137.713 133 138.644 132.823C140.993 132.335 141.836 131.448 143.121 127.813C145.072 122.36 146.092 120.853 148.574 119.789C151.057 118.725 151.633 118.148 152.21 116.153C153.052 113.183 151.456 112.695 148.042 114.823L147.919 114.901C146.001 116.11 145.965 116.133 146.269 115.178C146.934 113.138 146.712 112.385 145.471 112.252C144.598 112.223 143.731 112.405 142.944 112.784C141.57 113.493 141.348 114.114 139.575 121.03C138.466 125.33 136.959 127.68 135.23 127.68C134.476 127.68 134.388 127.458 134.609 125.774C134.979 123.795 135.467 121.841 136.072 119.922C137.535 114.867 137.58 114.646 136.383 114.468C135.806 114.38 135.363 114.114 135.363 113.892C135.181 113.395 134.876 112.953 134.476 112.606C133.235 111.365 129.644 111.409 127.073 112.651C123.969 114.158 120.644 118.769 119.004 123.779C118.294 125.951 116.876 127.68 115.812 127.68C114.127 127.68 114.482 126.439 120.955 108.528C122.595 103.961 123.836 99.9271 123.659 99.5281C123.348 98.6415 122.196 98.6858 120.29 99.6611ZM72.4537 117.173C73.3847 119.212 69.9267 126.66 67.4884 127.946C65.4934 128.966 64.6954 128.123 65.0057 125.463C65.715 119.523 70.9021 113.759 72.4537 117.173ZM111.822 116.951C112.886 118.991 109.25 126.926 106.723 128.079C104.285 129.187 103.709 127.059 105.26 122.493C106.856 117.705 110.58 114.601 111.822 116.951ZM131.373 117.04C132.481 119.124 128.846 126.882 126.23 128.079C123.792 129.187 123.215 127.059 124.767 122.493C126.408 117.66 130.087 114.601 131.373 117.04ZM169.544 100.415C170.111 99.9967 170.739 99.6678 171.406 99.4395C175.263 98.0651 175.263 98.6415 171.406 109.06C167.505 119.656 166.175 123.734 165.731 125.995C165.465 127.503 165.51 127.68 166.352 127.68C167.194 127.68 171.716 123.468 171.716 122.67C171.716 121.961 173.002 122.449 173.268 123.291C173.8 124.887 173.091 126.261 170.475 128.921C168.702 130.739 167.283 131.759 165.776 132.246C162.894 133.222 162.584 133.222 161.254 131.892L160.101 130.739L157.707 131.936C155.845 132.823 154.958 133.044 153.717 132.778C150.392 132.158 148.973 129.143 149.949 124.754C151.146 119.523 155.136 113.848 158.638 112.34C160.855 111.454 162.983 111.542 163.958 112.606L164.016 112.67C164.299 112.977 164.499 113.194 164.692 113.188C165.155 113.174 165.577 111.874 167.013 107.453L167.283 106.621C168.303 103.429 169.322 100.636 169.544 100.415ZM157.397 128.123C159.835 126.793 163.559 118.725 162.539 117.084C162.157 116.628 161.621 116.328 161.032 116.242C158.106 115.887 153.628 125.375 155.49 127.902C156.111 128.744 156.244 128.744 157.397 128.123Z'
        fill={monochrome ? '' : '#000000'}
      />
    </svg>
  )
}
