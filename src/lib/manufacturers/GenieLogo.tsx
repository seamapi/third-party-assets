import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const GenieLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Genie logo'
      {...rest}
    >
      <g clip-path='url(#clip0_1_600)'>
        <path
          d='M49.0363 73.0124C34.4434 73.0124 19.615 84.8477 15.9741 99.3915C14.0801 106.948 15.3657 114.083 19.5757 119.47C23.6386 124.671 29.8997 127.537 37.2207 127.537H151.138C165.976 127.537 180.5 115.947 184.2 101.158C184.769 98.8812 185.054 96.6339 185.054 94.465C185.054 89.4503 183.542 84.8378 180.608 81.0792C176.545 75.878 170.274 73.0124 162.963 73.0124H49.0363Z'
          fill={monochrome ? '' : '#CE202E'}
        />
        <path
          d='M37.2112 131.462C28.6537 131.462 21.2935 128.067 16.4749 121.884C11.4994 115.525 9.9685 107.193 12.1569 98.4395C16.21 82.2568 32.746 69.0869 49.0366 69.0869H162.954C171.511 69.0869 178.871 72.4923 183.7 78.665C187.154 83.091 188.979 88.5572 188.979 94.465C188.979 96.9675 188.655 99.5387 188.008 102.11C183.896 118.567 167.694 131.462 151.138 131.462H37.2112Z'
          stroke='#CE202E'
          stroke-width='1.96273'
          stroke-miterlimit='10'
        />
        <path
          d='M47.7222 91.6584C45.2688 91.6486 42.7074 92.5711 40.5288 94.2001C38.3404 95.8488 36.7898 98.0373 36.1715 100.373L34.6897 105.957C33.4237 110.736 36.5248 114.671 41.6181 114.671H60.6762L64.425 100.55H52.0108L50.6369 105.741H56.633L55.8675 108.607H43.3748L46.2502 97.7625H65.1513L66.7705 91.6584H47.7026H47.7222Z'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M140.01 91.6583L133.906 114.691H161.443L163.043 108.646H144.878L145.643 105.78H158.784L160.168 100.589H146.939L147.675 97.8017H165.928L167.547 91.6583H140.01Z'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M68.5565 91.6583L62.4033 114.681H89.9404L91.5401 108.646H73.375L74.1405 105.78H87.2907L88.6647 100.589H75.4359L76.1719 97.8017H94.4155L96.0445 91.6583H68.5565Z'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M132.227 114.671L138.322 91.6583H130.677L124.583 114.671H132.227Z'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M128.832 91.6583H97.526L91.4219 114.681H99.0667L103.13 99.3522L111.628 114.691H122.688L128.832 91.6583Z'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M45.7603 89.9705C43.3069 89.9607 40.7455 90.8831 38.5669 92.5122C36.3784 94.1609 34.8279 96.3493 34.2096 98.685L32.7278 104.269C31.4618 109.048 34.5629 112.983 39.6562 112.983H58.7143L62.4631 98.8616H50.0489L48.6749 104.053H54.6711L53.9056 106.919H41.4128L44.2882 96.0746H63.1893L64.8086 89.9705H45.7407H45.7603Z'
          fill={monochrome ? '' : '#ffffff'}
        />
        <path
          d='M138.048 89.9707L131.944 113.003H159.481L161.081 106.958H142.916L143.681 104.093H156.822L158.206 98.9011H144.977L145.713 96.114H163.966L165.586 89.9707H138.048Z'
          fill={monochrome ? '' : '#ffffff'}
        />
        <path
          d='M66.5946 89.9707L60.4414 112.994H87.9785L89.5781 106.958H71.4131L72.1785 104.093H85.3288L86.7027 98.9011H73.4739L74.21 96.1141H92.4535L94.0826 89.9707H66.5946Z'
          fill={monochrome ? '' : '#ffffff'}
        />
        <path
          d='M130.265 112.984L136.36 89.9707H128.715L122.621 112.984H130.265Z'
          fill={monochrome ? '' : '#ffffff'}
        />
        <path
          d='M169.864 92.8165C169.521 93.16 169.118 93.3268 168.637 93.3268C168.156 93.3268 167.754 93.16 167.411 92.8165C167.077 92.4731 166.91 92.0707 166.91 91.5898C166.91 91.109 167.077 90.7066 167.42 90.3729C167.754 90.0393 168.166 89.8724 168.637 89.8724C169.108 89.8724 169.53 90.0393 169.864 90.3729C170.198 90.7066 170.374 91.1188 170.374 91.5898C170.374 92.0609 170.208 92.4829 169.864 92.8165ZM167.587 90.5398C167.293 90.8342 167.146 91.1777 167.146 91.5898C167.146 92.002 167.293 92.3553 167.577 92.6497C167.872 92.9441 168.215 93.0913 168.637 93.0913C169.059 93.0913 169.403 92.9441 169.697 92.6497C169.992 92.3553 170.139 92.002 170.139 91.5898C170.139 91.1777 169.992 90.8244 169.697 90.5398C169.403 90.2454 169.05 90.0982 168.637 90.0982C168.225 90.0982 167.872 90.2454 167.577 90.5398M168.598 90.6379C168.834 90.6379 169.01 90.6575 169.118 90.7066C169.315 90.7851 169.413 90.9519 169.413 91.1875C169.413 91.3543 169.354 91.4819 169.226 91.5604C169.157 91.5996 169.069 91.6291 168.951 91.6487C169.099 91.6683 169.207 91.737 169.285 91.8352C169.354 91.9333 169.393 92.0314 169.393 92.1296V92.267C169.393 92.267 169.393 92.3553 169.393 92.4044C169.393 92.4534 169.393 92.4829 169.403 92.5025V92.5221H169.099C169.099 92.5221 169.099 92.5123 169.099 92.5025C169.099 92.5025 169.099 92.4927 169.099 92.4829V92.424V92.2768C169.099 92.0609 169.04 91.9137 168.912 91.845C168.843 91.8057 168.716 91.7861 168.529 91.7861H168.255V92.5319H167.931V90.6379H168.598ZM168.961 90.9421C168.873 90.8931 168.736 90.8734 168.549 90.8734H168.255V91.5604H168.569C168.716 91.5604 168.824 91.5506 168.893 91.5211C169.03 91.4721 169.099 91.3739 169.099 91.2267C169.099 91.0893 169.059 91.001 168.971 90.9519'
          fill={monochrome ? '' : '#ffffff'}
        />
        <path
          d='M126.87 89.9707H95.5641L89.46 112.994H97.1048L101.168 97.6646L109.666 113.003H120.726L126.87 89.9707Z'
          fill={monochrome ? '' : '#ffffff'}
        />
        <path
          d='M126.869 89.9702C126.869 89.9702 124.583 87.4677 121.531 86.2017C121.933 84.6512 121.825 85.4657 121.825 85.4657C121.825 85.4657 123.611 84.347 123.827 82.2272C123.974 80.814 122.865 78.3901 121.639 77.6344C120.412 76.8788 117.007 82.8258 117.007 82.8258L115.839 87.2027L122.61 90.0192L126.86 89.98L126.869 89.9702Z'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M114.582 80.8436L114.219 81.1184L113.728 81.7956L113.394 82.4531L113.07 82.8849L112.913 83.3952L112.933 84.1214L113.08 85.878L112.972 85.7308H112.884L112.805 85.7406L108.723 86.3L106.113 86.8496L105.062 87.2814L106.191 94.9164L108.821 94.5631L111.961 93.1205L112.334 93.5131L115.593 95.2697L118.89 95.7996L119.489 95.7015L122.079 92.6887L124.611 89.6759L124.572 88.989L121.304 86.83L119.577 85.8682L118.566 85.4953L118.478 85.4364L118.458 85.3383L118.321 84.8672L118.409 84.4256L118.615 84.2195L118.782 83.8368C118.782 83.8368 118.772 83.3657 118.694 83.3167C118.615 83.2676 117.81 82.0311 117.81 82.0311L116.564 81.2656L115.328 80.7553L114.592 80.8436H114.582Z'
          fill={monochrome ? '' : '#D2D3D5'}
        />
        <path
          d='M114.896 85.4172C114.896 85.4172 114.277 85.476 113.983 84.848L113.62 84.9461L113.993 84.4849L114.061 84.6124C114.061 84.6124 114.454 84.7204 115.053 84.7302C115.661 84.7106 116.112 84.6026 116.112 84.6026L116.24 84.4751L116.387 84.9265L116.073 84.8283C115.475 85.4662 114.886 85.4073 114.886 85.4073L114.896 85.4172ZM114.974 82.2375C115.121 82.2866 115.249 82.3455 115.337 82.3749C115.406 82.4044 115.445 82.424 115.445 82.424C115.426 82.3847 115.396 82.3455 115.367 82.3062C114.954 81.7272 114.523 81.7763 114.523 81.7763L113.983 82.0805C114.199 82.0413 114.454 82.0903 114.709 82.159C114.552 82.1983 114.415 82.3357 114.425 82.4633C114.425 82.5908 114.572 82.6693 114.729 82.6301C114.886 82.5908 115.013 82.4633 115.004 82.3357C115.004 82.2964 114.994 82.267 114.974 82.2375ZM117.31 82.3259C117.437 82.3259 117.565 82.3259 117.692 82.3259C117.869 82.5025 118.016 82.6399 118.193 82.8852C118.272 83.0619 118.389 83.268 118.429 83.4054C118.429 83.4054 118.566 83.847 118.586 84.0236C118.321 84.161 118.105 84.4064 118.046 84.6811C117.948 85.0933 118.222 85.427 118.654 85.427C119.096 85.427 119.528 85.0835 119.626 84.6713C119.655 84.5339 119.655 84.4064 119.606 84.2984L119.753 84.2101C123.08 82.0413 122.56 79.4603 122.56 79.4603C122.197 76.5358 118.703 76.4867 118.703 76.4867C115.013 76.4082 114.395 78.3121 114.395 78.3121C112.187 79.4014 113.1 82.3553 113.1 82.3553L112.481 82.9049L113.041 86.7813L115.965 86.6635L113.365 86.0354C113.345 85.1424 113.286 83.5918 113.414 82.9147L114.022 82.3357C114.022 82.3357 114.081 81.8646 114.395 81.109C114.395 81.109 115.082 81.109 115.71 81.7763L114.248 84.0629H115.906C116.024 83.582 115.543 83.5722 115.543 83.5722H115.092L116.358 81.5702C116.721 81.6389 117.015 81.7763 117.271 81.9529C117.015 82.0315 116.682 82.1688 116.279 82.4338C116.279 82.4338 116.633 82.3651 117.055 82.3259C116.986 82.3553 116.927 82.4044 116.898 82.4633C116.819 82.6006 116.868 82.738 117.015 82.7871C117.163 82.8362 117.349 82.7577 117.428 82.6301C117.506 82.4927 117.477 82.3357 117.31 82.3062'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M105.926 87.3307C107.565 86.5358 112.864 85.7409 112.864 85.7409C108.615 85.211 104.051 87.0265 104.051 87.0265C104.159 88.7635 104.395 92.0315 105.582 95.6822V95.741C106.259 95.6135 107.054 95.4368 107.633 95.2798L108.104 96.8598L105.857 96.5065C107.437 100.991 110.283 105.986 115.386 109.51C115.17 107.38 115.111 103.69 115.818 101.089L116.956 101.286C116.956 101.286 117.702 98.3024 118.595 96.8009C118.595 96.8009 119.115 96.9677 119.743 97.007C122.187 92.6301 125.739 89.9117 125.739 89.9117C123.894 86.4573 118.438 85.4367 118.438 85.4367L118.468 85.476C121.863 87.0658 123.747 89.6271 123.747 89.6271C122.079 91.1973 120.597 93.0423 119.429 95.0345C114.63 95.1719 112.442 93.268 112.442 93.268C113.541 92.581 114.051 92.0511 114.051 92.0511L116.554 92.1885C116.573 92.9245 117.143 93.5232 118.016 93.8176C118.016 93.8176 118.173 93.8568 118.203 93.8666C117.869 93.3956 117.741 92.8068 117.898 92.1591C118.193 90.9225 119.429 89.8725 120.852 89.529C120.676 89.5094 120.499 89.4996 120.312 89.4996C119.292 89.4996 118.301 89.843 117.594 90.3828L116.436 88.8224C115.494 88.9402 112.01 89.7743 112.01 89.7743L111.117 88.6065C111.009 88.5673 108.605 88.106 108.605 88.106C108.546 88.2729 108.467 88.685 108.673 89.0678L108.33 89.0089C108.33 89.0089 108.085 89.5781 108.575 90.0982L108.222 90.0687C108.222 90.0687 108.104 90.6183 108.732 90.9912H108.742C110.872 90.3141 115.857 89.6566 115.857 89.6566L117.143 90.8048C116.937 91.0305 116.78 91.2758 116.681 91.5408L116.652 91.5702L114.13 91.4328C110.823 93.5919 107.78 94.0629 106.819 94.1414C106.819 94.1414 105.631 91.2955 105.926 87.3504'
          fill={monochrome ? '' : '#231F20'}
        />
        <path
          d='M116.319 77.3009C115.338 79.3324 117.497 81.3736 117.497 81.3736C118.9 82.5709 119.018 83.5621 119.047 83.6602C119.568 80.9614 117.575 79.4992 117.575 79.4992C119.852 80.1076 120.372 82.512 120.372 82.512C120.814 80.4119 119.46 79.2342 119.46 79.2342C121.187 79.7249 121.491 81.4816 121.491 81.4816C122.306 78.1057 119.862 77.3009 119.862 77.3009C119.283 77.085 118.704 77.0065 118.184 77.0065C117.134 77.0065 116.329 77.3108 116.329 77.3108'
          fill={monochrome ? '' : '#D2D3D5'}
        />
        <mask
          id='mask0_1_600'
          //   style={maskType:luminance"}
          maskUnits='userSpaceOnUse'
          x='113'
          y='79'
          width='2'
          height='3'
        >
          <path
            d='M113.542 81.5501C114.16 80.4804 114.896 80.1958 114.896 80.1958C114.553 79.7444 114.543 79.0967 114.543 79.0967C113.513 79.9112 113.532 81.5501 113.532 81.5501'
            fill={monochrome ? '' : '#ffffff'}
          />
        </mask>
        <g mask='url(#mask0_1_600)'>
          <path
            d='M113.522 79.0967L115.485 79.0869L114.896 81.5501L112.924 81.56L113.522 79.0967Z'
            fill={monochrome ? '' : '#D2D3D5'}
          />
        </g>
        <path
          d='M109.539 94.6809C109.539 94.6809 109.971 97.2324 110.491 98.6652C110 98.5769 109.274 98.4689 108.812 98.3904C110.255 103.072 112.954 105.682 114.357 106.889C114.033 104.72 113.827 102.728 114.465 99.3031L116.173 99.5681C116.448 98.3512 117.164 96.3197 117.164 96.3197C116.143 95.9861 115.397 95.6622 114.455 95.2108C113.513 94.779 112.748 94.1313 111.972 93.5425C111.197 93.9841 110.402 94.3963 109.549 94.6809'
          fill='#D3D3D5'
        />
        <path
          d='M114.946 85.2203C114.72 85.2203 114.435 85.1418 114.259 84.7983C114.259 84.7983 114.534 84.9357 115.014 84.9357H115.034C115.515 84.9357 115.849 84.7885 115.849 84.7885C115.554 85.1418 115.191 85.2007 114.965 85.2105H114.946V85.2203Z'
          fill={monochrome ? '' : '#D2D3D5'}
        />
        <path
          d='M118.734 85.0437C118.94 85.0437 119.136 84.8867 119.185 84.6904C119.234 84.4942 119.106 84.3372 118.9 84.3372C118.694 84.3372 118.498 84.4942 118.449 84.6904C118.4 84.8867 118.527 85.0437 118.734 85.0437Z'
          fill={monochrome ? '' : '#D2D3D5'}
        />
        <path
          d='M110.294 89.3423L110.864 90.0096L111.393 89.882L110.707 88.9596L109.019 88.6063C109.019 88.6063 109.019 89.1068 109.519 89.1755L110.294 89.3423Z'
          fill={monochrome ? '' : '#D2D3D5'}
        />
        <path
          d='M110.412 90.1172L109.99 89.656L108.803 89.4302C108.803 89.4302 108.773 89.9209 109.274 89.9896L109.617 90.0387L109.892 90.235L110.412 90.1172Z'
          fill={monochrome ? '' : '#D2D3D5'}
        />
      </g>
      <defs>
        <clipPath id='clip0_1_600'>
          <rect
            width='179.59'
            height='63.7887'
            fill={monochrome ? '' : '#ffffff'}
            transform='translate(10.2051 68.1058)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
