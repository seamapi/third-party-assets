import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const DormakabaLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Dormakaba logo'
      {...rest}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M147.76 107.878V124.167L156.623 113.906L147.76 107.878ZM147.76 127.8L169.438 113.028L164.967 107.878L147.76 127.8ZM181.255 127.8H152.031L181.255 107.878V127.8Z'
        fill={monochrome ? '' : '#E62B2F'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M67.5939 107.878H73.6223L65.2384 117.299L73.6622 127.839H67.6338L61.1662 119.615H59.4096V127.839H54.6587V101.889H59.4096V115.263H61.1662L67.5939 107.878ZM102.49 109.754C103.967 108.197 105.963 107.359 108.319 107.359C113.988 107.359 118.3 111.83 118.3 117.818C118.3 123.807 113.988 128.318 108.319 128.318C105.844 128.318 103.808 127.4 102.49 125.683V127.799H97.7393V101.889H102.49V109.754ZM102.211 117.858C102.211 121.372 104.486 123.807 107.8 123.807C111.114 123.807 113.389 121.372 113.389 117.858C113.389 114.305 111.114 111.87 107.8 111.87C104.526 111.87 102.211 114.345 102.211 117.858ZM135.861 109.954C134.584 108.357 132.787 107.359 130.033 107.359C124.363 107.359 120.052 111.87 120.052 117.859C120.052 123.847 124.324 128.359 130.033 128.359C132.787 128.359 134.584 127.401 135.861 125.724V127.84H140.612V107.878H135.861V109.954ZM130.512 123.807C127.198 123.807 124.922 121.372 124.922 117.859C124.922 114.346 127.238 111.87 130.512 111.87C133.825 111.87 136.101 114.306 136.101 117.859C136.141 121.372 133.825 123.807 130.512 123.807ZM82.9242 107.359C85.6789 107.359 87.4755 108.357 88.753 109.954V107.878H93.5039V127.84H88.753V125.724C87.4755 127.401 85.6789 128.359 82.9242 128.359C77.2152 128.359 72.9434 123.847 72.9434 117.859C72.9434 111.87 77.2551 107.359 82.9242 107.359ZM77.814 117.859C77.814 121.372 80.0896 123.807 83.4033 123.807C86.7169 123.807 88.9925 121.372 88.9925 117.859C88.9925 114.306 86.7169 111.87 83.4033 111.87C80.1296 111.87 77.814 114.346 77.814 117.859Z'
        fill={monochrome ? '' : '#004497'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M38.2926 80.9445C36.8154 79.3476 34.8192 78.5491 32.4637 78.5491C26.7946 78.5491 22.4829 83.0604 22.4829 89.0489C22.4829 95.0374 26.7547 99.5488 32.4637 99.5488C35.4181 99.5488 36.8952 98.5507 38.2926 96.9138V99.0298H43.0434V73.1195H38.2926V80.9445ZM32.9428 94.9576C29.6292 94.9576 27.3536 92.5223 27.3536 89.009C27.3536 85.4957 29.6691 83.0205 32.9428 83.0205C36.2565 83.0205 38.5321 85.4558 38.5321 89.009C38.5321 92.5223 36.2565 94.9576 32.9428 94.9576ZM56.3372 78.5089C50.2289 78.5089 45.6377 83.0202 45.6377 89.0087C45.6377 94.9973 50.2289 99.5086 56.3372 99.5086C62.4454 99.5086 67.0765 94.9973 67.0765 89.0087C67.0765 83.0202 62.4454 78.5089 56.3372 78.5089ZM56.3372 94.9573C52.9437 94.9573 50.5083 92.4422 50.5083 89.0087C50.5083 85.5354 52.9437 83.0202 56.3372 83.0202C59.7306 83.0202 62.166 85.5354 62.166 89.0087C62.166 92.4422 59.7306 94.9573 56.3372 94.9573ZM102.328 81.7826C104.164 79.0678 107.198 78.5089 109.434 78.5089C114.265 78.5089 117.578 81.7826 117.658 86.5335V98.9896H112.867V87.9308C112.867 84.8567 111.31 83.1001 108.596 83.1001C106.2 83.1001 103.805 84.6172 103.805 87.9707V98.9896H99.0141V87.9308C99.0141 84.8567 97.457 83.1001 94.7422 83.1001C92.3468 83.1001 89.9514 84.6172 89.9514 87.9707V98.9896H85.1606V79.0279H89.9115V80.9043C91.5883 78.9481 93.9039 78.5089 95.6206 78.5089C98.4551 78.5089 100.89 79.7066 102.328 81.7826ZM135.864 81.1039C134.587 79.507 132.79 78.5089 130.036 78.5089C124.366 78.5089 120.055 83.0202 120.055 89.0087C120.055 94.9973 124.326 99.5086 130.036 99.5086C132.79 99.5086 134.587 98.5504 135.864 96.8737V98.9896H140.615V79.0279H135.864V81.1039ZM130.515 94.9573C127.201 94.9573 124.925 92.522 124.925 89.0087C124.925 85.4955 127.241 83.0202 130.515 83.0202C133.828 83.0202 136.104 85.4556 136.104 89.0087C136.144 92.522 133.828 94.9573 130.515 94.9573ZM74.502 78.988V80.7047C75.7795 79.2675 77.616 78.5089 79.8517 78.5089C81.0893 78.5089 82.0874 78.6287 83.0056 78.988L81.8878 83.6989C81.1292 83.2997 79.9315 83.0602 78.8935 83.0602C76.2586 83.0602 74.5419 85.0164 74.5419 88.0107V98.9497H69.791V78.988H74.502Z'
        fill={monochrome ? '' : '#004497'}
      />
    </svg>
  )
}