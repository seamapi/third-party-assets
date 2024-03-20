import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const OpenPathLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='OpenPath logo'
      {...rest}
    >
      <g clip-path='url(#clip0_1_607)'>
        <path
          d='M101.037 112.385H104.942V97.8272C104.942 91.7796 100.711 87.8281 94.9921 87.8281C89.2705 87.8281 84.993 91.7796 84.993 97.8272V112.385H88.8969V97.6873C88.8969 94.1066 91.2701 91.5026 94.9921 91.5026C98.6651 91.5026 101.037 94.1066 101.037 97.6873V112.385ZM78.2304 97.9195H62.6987C63.7215 93.8267 67.2085 91.4088 70.5093 91.4088C73.9977 91.4088 77.2537 94.0128 78.2304 97.9195ZM82.6031 101.455C82.6493 92.9438 76.6954 87.8281 70.5079 87.8281C63.8587 87.8281 58.4646 93.5035 58.4646 100.433C58.4646 107.455 63.8587 112.943 70.7416 112.943C76.2757 112.943 80.3699 110.061 82.042 104.944H77.8554C76.5555 107.735 74.1362 109.361 70.7416 109.361C66.7901 109.361 62.9743 106.433 62.4622 101.455H82.6031ZM56.5112 100.431C56.5112 93.2222 51.1157 87.8281 44.5126 87.8281C37.7206 87.8281 32.465 93.3622 32.465 100.431V120.392H36.2794V100.279C36.3591 95.3729 40.1833 91.5026 44.5126 91.5026C48.93 91.5026 52.6716 95.4093 52.6716 100.433C52.6716 105.456 48.93 109.363 44.5126 109.363C42.3354 109.363 40.305 108.403 38.8064 106.834V111.236C40.4757 112.336 42.4599 112.991 44.5574 112.991C51.208 112.988 56.5112 107.594 56.5112 100.431ZM26.3867 100.479C26.3867 105.27 22.7598 109.175 18.2934 109.175C13.8773 109.175 10.2491 105.268 10.2491 100.479C10.2491 95.5968 13.8773 91.5963 18.2934 91.5963C22.7612 91.5949 26.3867 95.5968 26.3867 100.479ZM30.3424 100.479C30.3424 93.5021 25.1329 87.8281 18.2948 87.8281C11.5056 87.8267 6.25 93.5021 6.25 100.479C6.25 107.362 11.5056 112.99 18.2934 112.99C25.1315 112.988 30.3424 107.362 30.3424 100.479Z'
          fill={monochrome ? '' : '#F16923'}
        />
        <path
          d='M193.75 112.385V97.9656C193.75 92.0131 190.401 87.8266 184.495 87.8266C181.705 87.8266 179.286 88.9894 177.658 90.8504V79.6088H173.752V112.385H177.658V97.7347C177.658 94.1526 180.355 91.4562 183.937 91.4562C187.844 91.4562 189.798 94.1064 189.798 97.827V112.385H193.75ZM170.999 112.385V108.757C168.023 108.941 165.462 107.874 165.462 103.641V92.1992H170.904V88.4339H165.462V83.7729H161.559V103.641C161.559 109.733 165.418 113.037 170.999 112.385ZM154.347 112.385H158.161V100.432C158.161 93.362 152.953 87.828 146.161 87.828C139.51 87.828 134.115 93.2221 134.115 100.432C134.115 107.594 139.464 112.989 146.067 112.988C148.196 112.988 150.178 112.312 151.818 111.166V106.816C150.334 108.365 148.326 109.316 146.161 109.316C141.696 109.316 137.941 105.454 137.941 100.434C137.941 95.4091 141.432 91.4576 146.034 91.4576C150.586 91.4576 154.347 95.4567 154.347 100.434V108.666V108.664V112.385ZM132.39 100.431C132.39 93.2221 126.994 87.828 120.391 87.828C113.6 87.828 108.344 93.362 108.344 100.431V120.391H112.158V100.279C112.238 95.3742 116.065 91.5024 120.391 91.5024C124.809 91.5024 128.552 95.4091 128.552 100.432C128.552 105.456 124.809 109.362 120.391 109.362C118.214 109.362 116.185 108.403 114.688 106.834V111.236C116.354 112.336 118.341 112.991 120.439 112.991C127.088 112.988 132.39 107.594 132.39 100.431Z'
          fill={monochrome ? '' : '#939597'}
        />
      </g>
      <defs>
        <clipPath id='clip0_1_607'>
          <rect
            width='187.5'
            height='40.7826'
            fill={monochrome ? '' : '#ffffff'}
            transform='translate(6.25 79.6088)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
