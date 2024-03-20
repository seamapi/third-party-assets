import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const AlarmLogo = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Alarm logo'
      {...rest}
    >
      <path
        d='M116.743 145.551C116.743 144.327 117.779 143.291 119.003 143.291C120.228 143.291 121.264 144.327 121.264 145.551C121.264 146.776 120.228 147.812 119.003 147.812C117.685 147.812 116.743 146.776 116.743 145.551Z'
        fill={monochrome ? '' : '#E4701E'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M33.9592 147.152C33.9592 147.623 34.3359 147.906 34.7127 147.906V148H46.9561C47.3328 148 47.7095 147.623 47.7095 147.247V145.269C47.7095 144.892 47.3328 144.515 46.9561 144.515H39.045C38.6682 144.515 38.2915 144.139 38.2915 143.762V134.532C38.2915 134.156 37.9148 133.779 37.5381 133.779H34.7127C34.3359 133.779 33.9592 134.156 33.9592 134.532V147.152ZM24.8235 134.25C24.8235 134.25 31.7928 146.681 31.9812 147.152C32.1381 147.78 31.5103 147.885 31.4056 147.902L31.3957 147.904C31.3926 147.905 31.391 147.905 31.391 147.905C31.3911 147.906 31.3989 147.906 31.4161 147.906H28.1198C27.7431 147.812 27.5547 147.529 27.5547 147.529C27.5547 147.529 26.7071 145.928 26.6129 145.74C26.3304 145.363 25.9536 145.457 25.9536 145.457H21.9981H18.0425C18.0425 145.457 17.6658 145.457 17.3832 145.74C17.2891 145.928 16.4414 147.529 16.4414 147.529C16.4414 147.529 16.2531 147.812 15.8764 147.906H12.5801C12.5801 147.906 11.6383 148 11.9208 147.152C12.1092 146.776 19.0785 134.25 19.0785 134.25C19.0785 134.25 19.2668 133.873 19.6436 133.873H21.9039H24.1642C24.6351 133.873 24.8235 134.25 24.8235 134.25ZM21.9981 142.161H24.2584C24.2584 142.161 24.6351 142.161 24.5409 141.69C24.3526 141.313 22.469 137.64 22.469 137.64C22.469 137.64 22.2806 137.452 22.0922 137.452C21.9039 137.452 21.7155 137.64 21.7155 137.64C21.7155 137.64 19.8319 141.313 19.6436 141.69C19.361 142.161 19.7377 142.161 19.7377 142.161H21.9981ZM69.5594 147.152C69.3711 146.681 62.4017 134.25 62.4017 134.25C62.4017 134.25 62.2134 133.873 61.7425 133.873H59.5763H57.316C56.9393 133.873 56.6567 134.25 56.6567 134.25C56.6567 134.25 49.6874 146.776 49.499 147.152C49.2165 148 50.1583 147.906 50.1583 147.906H53.4546C53.8313 147.812 54.0197 147.529 54.0197 147.529C54.0197 147.529 54.8673 145.928 54.9615 145.74C55.244 145.457 55.6208 145.457 55.6208 145.457H59.5763H63.5319C63.5319 145.457 63.9086 145.363 64.1911 145.74C64.2853 145.928 65.1329 147.529 65.1329 147.529C65.1329 147.529 65.3213 147.812 65.698 147.906H68.9943L68.9877 147.906L68.9926 147.905C69.0613 147.9 69.8163 147.837 69.5594 147.152ZM61.9308 142.161H59.5763H57.316C57.316 142.161 56.9393 142.161 57.2218 141.69C57.4102 141.313 59.2938 137.64 59.2938 137.64C59.2938 137.64 59.4821 137.452 59.6705 137.452C59.8589 137.452 60.0472 137.64 60.0472 137.64C60.0472 137.64 61.9308 141.313 62.1192 141.69C62.3075 142.161 61.9308 142.161 61.9308 142.161ZM88.772 136.51V140.842C88.772 141.69 88.1127 142.349 87.3593 142.255H86.1349C87.6418 142.255 88.8661 143.479 88.8661 144.986V147.152C88.8661 147.623 88.4894 147.906 88.1127 147.906H85.2873C84.9106 147.906 84.5339 147.529 84.5339 147.152V145.08C84.5339 144.61 84.1571 144.327 83.7804 144.327H76.6227C76.1518 144.327 75.8693 144.704 75.8693 145.08V147.152C75.8693 147.623 75.4926 147.906 75.1158 147.906H72.2904C71.9137 147.906 71.537 147.529 71.537 147.152V134.532C71.537 134.156 71.9137 133.779 72.2904 133.779H73.7031H86.0407C87.5476 133.779 88.772 135.003 88.772 136.51ZM76.7169 137.546C76.3402 137.546 75.9635 137.923 75.9635 138.299V140.089C75.9635 140.56 76.3402 140.842 76.7169 140.842H83.592C83.9688 140.842 84.3455 140.466 84.3455 140.089V138.299C84.3455 137.829 83.9688 137.546 83.592 137.546H76.7169ZM114.012 133.873H111.375H110.904H108.55C108.55 133.873 106.949 133.779 106.195 135.662L103.746 141.313C103.746 141.313 103.37 142.349 103.087 142.349C102.805 142.349 102.428 141.313 102.428 141.313L99.9792 135.662C99.1316 133.779 97.6247 133.873 97.6247 133.873H95.2702H94.7993H92.1623C91.7855 133.873 91.4088 134.156 91.4088 134.626V147.152C91.4088 147.529 91.6914 147.906 92.1623 147.906H95.2702C95.6469 147.906 96.0236 147.623 96.0236 147.152V138.111C96.0236 137.358 96.5887 138.299 96.5887 138.299L100.827 146.493C101.58 148 102.24 148 102.24 148H103.276H104.311C104.311 148 104.877 148 105.724 146.493L109.962 138.299C109.962 138.299 110.527 137.358 110.527 138.111V147.152C110.527 147.529 110.81 147.906 111.281 147.906H114.389C114.765 147.906 115.142 147.623 115.142 147.152V134.532L115.142 134.532L115.142 134.532L115.142 134.532L115.142 134.532C114.765 134.155 114.483 133.873 114.012 133.873ZM152.814 133.873H159.125C160.914 133.873 162.327 135.286 162.421 137.075V144.704C162.421 146.493 161.008 148 159.219 148H152.814H146.41C144.621 147.906 143.208 146.493 143.208 144.704V137.075C143.302 135.286 144.715 133.873 146.504 133.873H152.814ZM157.806 139.43C157.806 138.299 156.864 137.358 155.734 137.358H149.895C148.765 137.358 147.823 138.299 147.823 139.43V142.443C147.729 143.573 148.671 144.515 149.801 144.515H155.828C156.864 144.515 157.806 143.573 157.806 142.443V139.43ZM187.002 133.873H184.365H183.894H181.539C181.539 133.873 179.938 133.779 179.185 135.662L176.736 141.313C176.736 141.313 176.359 142.349 176.077 142.349C175.794 142.349 175.418 141.313 175.418 141.313L172.969 135.662C172.121 133.779 170.614 133.873 170.614 133.873H168.26H167.789H165.152C164.775 133.873 164.399 134.156 164.399 134.626V147.152C164.399 147.529 164.681 147.906 165.152 147.906H168.26C168.637 147.906 169.013 147.623 169.013 147.152V138.111C169.013 137.358 169.578 138.299 169.578 138.299L173.817 146.493C174.57 148 175.229 148 175.229 148H176.265H177.301C177.301 148 177.866 148 178.714 146.493L182.952 138.299C182.952 138.299 183.517 137.358 183.517 138.111V147.152C183.517 147.529 183.8 147.906 184.271 147.906H187.379C187.755 147.906 188.132 147.623 188.132 147.152V134.532L188.132 134.532C187.755 134.155 187.473 133.873 187.002 133.873ZM129.364 137.169C129.364 137.169 127.386 137.263 127.386 138.488V143.197C127.386 144.515 129.364 144.515 129.364 144.515H135.485C136.429 144.515 136.65 143.99 136.862 143.488C136.904 143.389 136.946 143.29 136.992 143.197C137.275 142.538 137.651 142.632 137.651 142.632H140.288C141.23 142.632 141.136 143.95 141.136 143.95V145.551C141.136 147.906 137.086 147.906 137.086 147.906H126.727C122.959 147.906 122.959 143.668 122.959 143.668V138.017C122.959 138.017 122.959 133.779 126.727 133.779H137.086C137.086 133.779 141.136 133.779 141.136 136.133V137.734C141.136 137.734 141.23 139.053 140.288 139.053H137.651C137.651 139.053 137.275 139.053 136.992 138.488C136.946 138.394 136.904 138.296 136.862 138.197C136.65 137.694 136.429 137.169 135.485 137.169H129.364Z'
        fill={monochrome ? '' : '#1D252D'}
      />
      <path
        d='M105.496 61.5833C104.151 60.2378 101.908 60.2378 100.563 61.5833L68.495 95.8936L82.1742 93.4268C82.1742 93.4268 96.9747 78.1778 100.114 74.8141C101.235 73.6928 102.132 73.4686 103.029 73.4686C103.926 73.4686 105.048 73.6928 105.945 74.8141C109.084 77.9536 123.885 93.4268 123.885 93.4268L137.564 95.8936L105.496 61.5833Z'
        fill={monochrome ? '' : '#E4701E'}
      />
      <path
        d='M152.364 92.3053V71.0016C152.364 70.5531 152.364 66.5166 150.346 62.9286C147.88 58.8921 143.843 56.6496 143.843 56.4254C143.619 56.4254 142.497 55.7526 140.928 54.8556C133.303 50.8191 115.363 41.1764 109.757 39.1581C107.515 38.4854 105.496 38.0369 103.254 38.0369H103.03C101.011 38.0369 98.7688 38.4854 96.5263 39.1581C90.92 41.1764 72.9801 50.8191 65.3556 54.8556C63.7858 55.7526 62.6646 56.4254 62.2161 56.4254C61.9918 56.4254 57.9553 58.8921 55.7128 62.7043C53.9188 66.5166 53.9188 70.7773 53.9188 70.7773V92.0811C53.9188 92.3053 53.6946 96.5661 55.9371 100.154C58.4038 104.191 62.4403 106.433 62.4403 106.657C62.6646 106.882 63.7858 107.33 65.3556 108.227C72.9801 112.264 90.6958 121.906 96.5263 123.925C98.7688 124.597 100.787 125.046 103.03 125.046H103.254C105.272 125.046 107.515 124.597 109.757 123.925C115.363 121.906 133.303 112.264 140.928 108.227C142.497 107.33 143.619 106.657 144.067 106.657C144.292 106.657 148.328 104.191 150.57 100.378C152.589 96.5661 152.364 92.3053 152.364 92.3053ZM149.001 92.3053C149.001 92.5296 149.001 95.8933 147.431 98.3601C145.861 101.051 142.722 103.069 142.273 103.518C142.049 103.518 141.825 103.742 141.152 103.966C119.176 115.852 111.327 119.664 108.412 120.561C106.618 121.234 104.824 121.458 103.03 121.458H102.805C101.011 121.458 99.2173 121.234 97.4233 120.561C93.611 119.215 81.9501 113.385 64.6828 103.966C64.2343 103.742 63.7858 103.518 63.7858 103.518C63.5616 103.518 60.4221 101.5 58.4038 98.3601C56.8341 95.8933 56.8341 92.5296 56.8341 92.3053V71.0016C56.8341 70.7773 56.8341 67.4136 58.4038 64.9468C59.9736 62.2558 63.1131 60.2376 63.5616 59.7891C63.7858 59.7891 64.0101 59.5649 64.4586 59.3406C81.7258 49.9221 93.3868 44.0916 97.199 42.7461C98.993 42.0734 100.787 41.8491 102.581 41.8491H103.254C105.048 41.8491 106.842 42.0734 108.636 42.7461C112.448 44.0916 124.109 49.9221 141.376 59.3406C141.825 59.5649 142.273 59.7891 142.273 59.7891C142.498 59.7891 145.637 62.0316 147.655 64.9468C149.225 67.6378 149.225 71.0016 149.225 71.0016L149.001 92.3053Z'
        fill={monochrome ? '' : '#1D252D'}
      />
      <path
        d='M127.249 71.2259C130.221 71.2259 132.631 68.8163 132.631 65.8439C132.631 62.8715 130.221 60.4619 127.249 60.4619C124.277 60.4619 121.867 62.8715 121.867 65.8439C121.867 68.8163 124.277 71.2259 127.249 71.2259Z'
        fill={monochrome ? '' : '#E4701E'}
      />
    </svg>
  )
}