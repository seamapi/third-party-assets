import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const AvigilonLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  const fillColor = monochrome ? '' : 'url(#paint0_linear_1_117)'

  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Aviligon logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M98.8262 65.2687C99.4535 63.9134 101.381 63.9151 102.006 65.2716L128.959 123.778C129.303 124.523 130.048 125 130.868 125H143.601C145.139 125 146.156 123.403 145.505 122.009L106.742 39.0201C106.166 37.7876 104.929 37 103.569 37H97.2661C95.9075 37 94.6715 37.7858 94.0949 39.016L55.201 122.007C54.548 123.4 55.5649 125 57.1037 125H69.8348C70.6536 125 71.3978 124.524 71.7417 123.781L98.8262 65.2687ZM88.5341 109.828C87.5456 109.828 86.6538 110.421 86.2724 111.333L81.978 121.603C81.3025 123.218 82.489 125 84.2397 125H116.461C118.212 125 119.398 123.218 118.723 121.603L114.428 111.333C114.047 110.421 113.155 109.828 112.167 109.828H88.5341Z'
        fill={fillColor}
      />
      <path
        d='M75.6489 146.382H73.4269C73.2391 146.382 73.114 146.507 73.114 146.695V162.311C73.114 162.499 73.2391 162.624 73.4269 162.624H75.6489C75.8367 162.624 75.9619 162.499 75.9619 162.311V146.695C75.9619 146.538 75.8367 146.382 75.6489 146.382ZM103.941 146.382H101.719C101.531 146.382 101.406 146.507 101.406 146.695V162.311C101.406 162.499 101.531 162.624 101.719 162.624H103.941C104.128 162.624 104.254 162.499 104.254 162.311V146.695C104.254 146.538 104.128 146.382 103.941 146.382ZM157.394 146.413H155.141C154.984 146.413 154.828 146.538 154.828 146.726V156.897C154.828 157.085 154.578 157.179 154.421 157.022L147.473 146.695C147.348 146.538 147.16 146.413 146.973 146.413H144.156C143.999 146.413 143.843 146.57 143.843 146.695V162.343C143.843 162.499 143.999 162.656 144.156 162.656H146.378C146.597 162.656 146.691 162.499 146.691 162.343V151.452C146.691 151.233 146.973 151.139 147.098 151.327L154.578 162.437C154.671 162.593 154.859 162.687 155.016 162.687H157.3C157.488 162.687 157.645 162.593 157.645 162.343V146.726C157.707 146.57 157.551 146.413 157.394 146.413ZM120.747 159.777H112.735C112.578 159.777 112.422 159.651 112.422 159.464V146.695C112.422 146.538 112.297 146.382 112.109 146.382H109.855C109.699 146.382 109.543 146.507 109.543 146.695V162.311C109.543 162.468 109.668 162.624 109.855 162.624H120.715C120.872 162.624 121.028 162.499 121.028 162.311V160.058C121.059 159.933 120.934 159.777 120.747 159.777ZM47.952 162.249L47.107 160.434C47.0444 160.309 46.9192 160.215 46.794 160.215H42.1622C42.037 160.215 41.9118 160.309 41.8492 160.434L41.0042 162.249C40.9416 162.405 41.0355 162.656 41.2546 162.656H47.7329C47.9207 162.656 48.0458 162.437 47.952 162.249Z'
        fill={fillColor}
      />
      <path
        d='M45.5734 146.695C45.4795 146.507 45.2917 146.382 45.1039 146.382H43.8521C43.633 146.382 43.4452 146.507 43.3826 146.695L36.0281 162.249C35.9342 162.437 36.0907 162.656 36.2784 162.656H38.7821C38.9073 162.656 39.0325 162.562 39.0951 162.468L44.2276 151.452C44.3215 151.264 44.5719 151.264 44.6658 151.452L49.8296 162.437C49.8922 162.562 50.0174 162.624 50.1426 162.624H52.6463C52.8653 162.624 52.9905 162.405 52.8966 162.218L45.5734 146.695ZM61.8786 162.343C61.7847 162.531 61.5969 162.656 61.4091 162.656H60.1573C59.9382 162.656 59.7505 162.531 59.6879 162.343L52.3333 146.789C52.2394 146.601 52.3959 146.382 52.5837 146.382H55.0873C55.2125 146.382 55.3377 146.476 55.4003 146.57L60.5329 157.554C60.6267 157.742 60.8771 157.742 60.971 157.554L66.1348 146.601C66.1974 146.476 66.3226 146.413 66.4478 146.413H68.9515C69.1706 146.413 69.2957 146.632 69.2018 146.82L61.8786 162.343ZM131.356 146.038C126.661 146.038 122.875 149.856 122.875 154.519C122.875 159.182 126.693 163 131.356 163C136.019 163 139.837 159.182 139.837 154.519C139.837 149.856 136.05 146.038 131.356 146.038ZM131.356 160.152C128.257 160.152 125.722 157.617 125.722 154.519C125.722 151.42 128.257 148.885 131.356 148.885C134.454 148.885 136.989 151.42 136.989 154.519C137.02 157.648 134.485 160.152 131.356 160.152ZM97.0866 153.862C97.0866 153.674 96.9301 153.549 96.7424 153.549H90.2954C90.1076 153.549 89.9824 153.705 89.9824 153.862V155.708C89.9824 155.896 90.1389 156.021 90.2954 156.021H93.5502C93.9257 156.021 93.9883 156.24 93.8944 156.522C93.0494 158.744 90.8274 160.309 88.2611 160.121C85.5697 159.933 83.3477 157.836 83.0347 155.145C82.6591 151.733 85.3193 148.854 88.6367 148.854C90.1389 148.854 91.4846 149.417 92.4861 150.388C92.6113 150.513 92.7678 150.575 92.9555 150.575H95.7409C95.9287 150.575 96.0538 150.356 95.9599 150.2C94.3639 147.477 91.2655 145.725 87.7917 146.038C83.8484 146.413 80.6249 149.574 80.1868 153.517C79.6234 158.65 83.6293 163 88.6367 163C93.2059 163 96.9301 159.401 97.1179 154.894V154.487C97.1179 154.3 97.1179 154.081 97.0866 153.862Z'
        fill={fillColor}
      />
      <path
        d='M160.743 148.385V146.632H160.117V146.413H161.588V146.632H160.962V148.385H160.743ZM163.591 148.385V146.757L162.934 148.385H162.84L162.182 146.757V148.385H161.932V146.413H162.276L162.871 147.884L163.497 146.413H163.841V148.385H163.591Z'
        fill={fillColor}
      />
      <defs>
        <linearGradient
          id='paint0_linear_1_117'
          x1='56.1162'
          y1='125'
          x2='145.682'
          y2='125'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0.09375' stop-color='#005EB8' />
          <stop offset='1' stop-color='#B5BE12' />
        </linearGradient>
      </defs>
    </svg>
  )
}
