import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const AugustLogo: React.FC<CommonManufacturerLogoProps> = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  const fillColor = monochrome ? '' : '#EB3821'

  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='August logo'
      {...rest}
    >
      <g>
        <path
          d='M155.388 130.57C154.191 129.43 153.384 127.874 152.966 125.901C150.628 128.096 148.04 129.764 145.201 130.903C141.416 132.404 137.268 133.154 132.899 133.154C130.06 133.154 127.36 132.849 124.827 132.237C122.239 131.598 119.901 130.542 117.924 129.069C115.92 127.568 114.306 125.623 113.137 123.261C111.996 120.926 111.412 118.092 111.412 114.84C111.412 111.172 112.052 108.115 113.332 105.725C114.612 103.363 116.31 101.39 118.398 99.9166C120.429 98.4437 122.795 97.3321 125.412 96.6095C127.916 95.887 130.505 95.3034 133.093 94.8309C135.793 94.3029 138.465 93.8583 140.97 93.5804C143.336 93.3302 145.451 92.9412 147.205 92.4687C148.819 92.0241 150.127 91.3849 151.018 90.579C151.769 89.912 152.131 88.8837 152.131 87.4664C152.131 85.6044 151.797 84.1038 151.129 83.0199C150.433 81.9083 149.598 81.1024 148.541 80.5188C147.427 79.9074 146.147 79.4905 144.728 79.296C143.225 79.0736 141.694 78.9625 140.219 78.9625C136.294 78.9625 133.038 79.7128 130.449 81.1579C128.111 82.4919 126.859 84.9097 126.664 88.8282L126.581 90.1343H113.638L113.694 88.6892C113.861 84.7429 114.696 81.4081 116.199 78.6568C117.702 75.9055 119.761 73.6545 122.266 71.9315C124.744 70.2362 127.638 69.0134 130.839 68.2909C136.517 66.9847 142.946 66.9291 149.097 67.8184C151.602 68.1797 153.913 68.9023 156 69.9305C145.674 52.0056 126.302 40 104.119 40C70.9145 40 44 66.8736 44 100C44 133.126 70.9145 160 104.091 160C125.996 160 145.173 148.3 155.666 130.792C155.555 130.709 155.443 130.653 155.36 130.542'
          fill={fillColor}
        />
      </g>
    </svg>
  )
}
