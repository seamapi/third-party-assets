import type { CommonManufacturerLogoProps } from './CommonManufacturerLogoProps.js'

export const SchlageLogo: React.FC<CommonManufacturerLogoProps> = ({
  monochrome = false,
  ...rest
}: CommonManufacturerLogoProps) => {
  return (
    <svg
      viewBox='0 0 200 200'
      fill='currentColor'
      aria-label='Schlage logo'
      {...rest}
    >
      {monochrome ? (
        <>
          <g clipPath='url(#clip0_57_214)'>
            <path d='M174.204 116.037C174.434 116.041 174.662 115.997 174.874 115.908C175.087 115.819 175.279 115.687 175.438 115.521C175.763 115.189 175.946 114.742 175.946 114.277C175.946 113.812 175.763 113.365 175.438 113.033C175.109 112.705 174.664 112.521 174.2 112.521C173.735 112.521 173.29 112.705 172.962 113.033C172.635 113.365 172.451 113.811 172.451 114.277C172.451 114.743 172.635 115.19 172.962 115.521C173.122 115.688 173.315 115.82 173.529 115.909C173.742 115.998 173.972 116.042 174.204 116.037ZM173.338 113.102H174.157C174.373 113.092 174.589 113.119 174.795 113.182C174.912 113.229 175.01 113.311 175.076 113.418C175.142 113.525 175.171 113.65 175.16 113.775C175.166 113.866 175.147 113.956 175.107 114.037C175.066 114.117 175.004 114.186 174.928 114.235C174.825 114.296 174.711 114.335 174.592 114.35C174.67 114.357 174.746 114.381 174.815 114.42C174.883 114.459 174.943 114.512 174.989 114.576C175.068 114.68 175.113 114.807 175.118 114.938V115.108C175.118 115.162 175.118 115.216 175.118 115.281C175.117 115.322 175.124 115.363 175.137 115.402L175.154 115.43H174.762C174.764 115.423 174.764 115.415 174.762 115.408C174.759 115.398 174.759 115.389 174.762 115.379L174.754 115.307V115.12C174.769 115.02 174.757 114.918 174.719 114.825C174.681 114.732 174.618 114.651 174.538 114.59C174.394 114.529 174.237 114.503 174.081 114.514H173.757V115.429H173.349L173.338 113.102Z' />
            <path d='M182.858 80.9873H22.7619C22.2934 81.0288 21.8423 81.1847 21.4482 81.4412C21.054 81.6977 20.7288 82.047 20.501 82.4585L11.4978 104.439C11.4224 104.59 11.3884 104.758 11.3992 104.927C11.4099 105.095 11.4651 105.258 11.5591 105.398C11.653 105.538 11.7825 105.651 11.9341 105.725C12.0858 105.799 12.2544 105.831 12.4227 105.818H33.1725C33.3983 105.865 33.6317 105.861 33.8558 105.807C34.0799 105.752 34.289 105.648 34.4679 105.503C34.6468 105.357 34.791 105.174 34.89 104.965C34.9891 104.757 35.0405 104.529 35.0405 104.299C35.0405 104.068 34.9891 103.84 34.89 103.632C34.791 103.424 34.6468 103.24 34.4679 103.095C34.289 102.949 34.0799 102.845 33.8558 102.791C33.6317 102.736 33.3983 102.732 33.1725 102.779H24.5186C23.7151 102.762 22.9229 102.586 22.1885 102.259C21.4542 101.933 20.7924 101.463 20.242 100.877C19.6916 100.291 19.2637 99.6017 18.9833 98.8485C18.7029 98.0953 18.5757 97.2937 18.6091 96.4907C18.582 95.6907 18.7137 94.8932 18.9967 94.1443C19.2796 93.3955 19.7082 92.7102 20.2576 92.128C20.807 91.5458 21.4664 91.0783 22.1975 90.7524C22.9287 90.4266 23.7172 90.2489 24.5175 90.2296L39.3373 90.2361C39.5098 90.2217 39.6829 90.2548 39.838 90.3317C39.9931 90.4086 40.1242 90.5264 40.2172 90.6724C40.3102 90.8184 40.3615 90.987 40.3656 91.1601C40.3697 91.3331 40.3265 91.504 40.2405 91.6543L38.9641 94.8248L27.2813 94.8032C26.8333 94.7611 26.3865 94.896 26.0366 95.179C25.6867 95.462 25.4614 95.8707 25.4089 96.3176C25.4612 96.7649 25.6858 97.1742 26.035 97.4586C26.3842 97.743 26.8305 97.8801 27.2792 97.8407H35.933C36.7369 97.857 37.5293 98.0337 38.2639 98.3604C38.9985 98.6871 39.6604 99.1573 40.2108 99.7434C40.7612 100.329 41.1889 101.02 41.469 101.773C41.749 102.527 41.8756 103.329 41.8415 104.132C41.868 104.931 41.736 105.728 41.453 106.476C41.1701 107.224 40.7418 107.909 40.1929 108.49C39.644 109.072 38.9854 109.539 38.255 109.865C37.5246 110.191 36.7369 110.369 35.9374 110.389H9.55174C8.96436 115.313 11.8991 118.981 17.1174 119.317H177.028C177.496 119.276 177.948 119.121 178.342 118.864C178.736 118.607 179.061 118.258 179.289 117.846L181.872 111.543C181.908 111.403 181.91 111.257 181.878 111.116C181.846 110.975 181.781 110.843 181.688 110.733C181.595 110.622 181.477 110.535 181.344 110.479C181.211 110.423 181.066 110.399 180.922 110.41H165.109C163.746 110.418 162.435 109.883 161.466 108.925C160.496 107.966 159.947 106.662 159.939 105.298L159.93 94.9135C160.04 93.6925 160.583 92.5509 161.46 91.6947C162.338 90.8384 163.492 90.3238 164.715 90.2437L178.706 90.2253V94.3846H168.078C167.084 94.3846 166.691 94.5858 166.691 95.5236L166.705 98.2745H176.234C176.949 98.3524 177.278 98.9776 176.967 99.7359L176.956 99.7629L175.902 102.374H166.707L166.693 105.136C166.693 106.073 167.087 106.275 168.08 106.275H184.035L189.831 92.1378C191.704 86.158 188.766 81.4254 182.858 80.9873ZM174.497 113.512C174.856 113.159 175.34 112.961 175.844 112.961C176.348 112.961 176.832 113.159 177.192 113.512C177.373 113.682 177.517 113.888 177.613 114.117C177.71 114.345 177.758 114.592 177.754 114.84C177.757 115.09 177.709 115.337 177.612 115.568C177.516 115.798 177.373 116.006 177.192 116.178C176.833 116.533 176.348 116.732 175.843 116.732C175.338 116.732 174.854 116.533 174.494 116.178C174.318 116.004 174.177 115.796 174.082 115.568C173.986 115.339 173.937 115.093 173.937 114.845C173.937 114.597 173.986 114.351 174.082 114.122C174.177 113.894 174.318 113.686 174.494 113.512H174.497ZM64.0722 110.401H53.0612C50.9886 110.401 43.4154 109.552 43.4814 100.4C43.5474 91.2486 50.9886 90.2459 53.0612 90.2459H62.627C62.7943 90.2321 62.9623 90.2631 63.1137 90.3357C63.2652 90.4082 63.3946 90.5197 63.4888 90.6587C63.583 90.7976 63.6386 90.9592 63.6498 91.1267C63.6611 91.2942 63.6277 91.4617 63.5529 91.6121L62.2548 94.8367H55.4702C53.5231 94.8367 50.5938 95.8709 50.5289 100.319C50.5938 104.767 53.522 105.802 55.4702 105.802H64.0765L64.0722 110.401ZM88.5972 110.401H82.0192V102.259H73.6249V110.407H66.9788V90.2523H73.6541V97.5616H82.0819V90.2523H88.5972V110.401ZM108.011 107.199L106.718 110.401H96.6691C96.4798 110.401 92.0934 110.942 92.0934 106.539C92.1031 103.166 92.0934 90.2469 92.0934 90.2469H98.7049V105.246C98.7049 105.246 98.6757 105.811 99.3875 105.811H107.134C107.301 105.803 107.467 105.84 107.616 105.917C107.764 105.994 107.889 106.11 107.978 106.251C108.067 106.393 108.118 106.556 108.123 106.723C108.129 106.89 108.09 107.056 108.011 107.203V107.199ZM127.408 110.389L125.94 106.813H120.408C120.234 106.827 120.061 106.794 119.905 106.716C119.749 106.638 119.618 106.52 119.525 106.373C119.432 106.226 119.381 106.056 119.378 105.883C119.374 105.709 119.418 105.537 119.506 105.387L120.761 102.306H124.186L121.448 95.449L115.5 110.389H108.693L116.512 90.9587C116.822 90.3259 117.082 90.2523 117.552 90.2523H125.35C125.82 90.2523 126.057 90.2523 126.365 90.8862L134.206 110.389H127.408ZM142.948 110.401C140.872 110.401 133.297 109.552 133.361 100.4C133.426 91.2486 140.872 90.2459 142.948 90.2459H154.945H155.443C155.606 90.2307 155.771 90.2587 155.92 90.327C156.069 90.3954 156.198 90.5017 156.293 90.6355C156.389 90.7692 156.447 90.9256 156.463 91.089C156.479 91.2524 156.452 91.4171 156.384 91.5667L155.064 94.8335H145.347C143.4 94.8335 140.472 95.8676 140.408 100.316C140.472 104.764 143.4 105.799 145.347 105.799H149.688V102.567H146.352C146.186 102.581 146.019 102.552 145.868 102.48C145.717 102.409 145.588 102.299 145.494 102.161C145.399 102.024 145.343 101.864 145.331 101.697C145.319 101.531 145.351 101.364 145.425 101.215L146.534 98.4714H156.849L156.885 110.405L142.948 110.401Z' />
            <path d='M174.519 114.175C174.584 114.145 174.64 114.1 174.681 114.042C174.723 113.985 174.75 113.918 174.758 113.847C174.767 113.777 174.757 113.705 174.73 113.639C174.703 113.574 174.659 113.516 174.603 113.472C174.445 113.407 174.275 113.378 174.104 113.388H173.75V114.226H174.128C174.26 114.232 174.393 114.215 174.519 114.175Z' />
            <path d='M192.041 82.4361C191.141 81.0795 189.953 79.9387 188.561 79.0954C187.169 78.2522 185.607 77.7273 183.988 77.5586H22.3827C21.471 77.5998 20.5829 77.8617 19.7948 78.3218C19.0066 78.7819 18.3419 79.4265 17.8578 80.2002L17.821 80.2802L17.7853 80.3668L7.259 106.97C6.48487 108.697 6.1412 110.587 6.25745 112.476C6.37369 114.366 6.94638 116.199 7.92643 117.819C8.78562 119.194 9.97163 120.336 11.3788 121.142C12.786 121.948 14.3707 122.393 15.9918 122.439H16.0556H177.394C178.942 122.439 181.46 121.327 182.22 119.795L182.262 119.713L182.292 119.628L193.068 92.8727L193.097 92.797L193.12 92.7148C193.695 91.0254 193.896 89.2315 193.709 87.4569C193.523 85.6823 192.953 83.9693 192.041 82.4361ZM191.962 92.5536L191.938 92.6315L191.911 92.7039L181.328 118.839L181.299 118.92L181.259 118.997C180.876 119.722 180.311 120.336 179.62 120.777C178.928 121.219 178.133 121.473 177.314 121.515H16.7696H16.7069C15.1188 121.483 13.5623 121.065 12.1713 120.298C10.7803 119.531 9.59642 118.438 8.7215 117.112C6.89554 114.19 6.78736 110.365 8.40996 106.356L18.4776 81.4409L18.5133 81.3566L18.5534 81.2798C18.9362 80.5545 19.5011 79.9413 20.1926 79.5004C20.884 79.0594 21.6783 78.8059 22.4974 78.7647H183.306C184.814 78.8189 186.289 79.2175 187.62 79.93C188.95 80.6425 190.1 81.65 190.981 82.8753C191.867 84.3085 192.416 85.9247 192.586 87.6015C192.756 89.2783 192.542 90.9717 191.961 92.5536H191.962Z' />
          </g>
          <defs>
            <clipPath id='clip0_57_214'>
              <rect
                width='187.5'
                height='44.8854'
                transform='translate(6.25 77.5576)'
              />
            </clipPath>
          </defs>
        </>
      ) : (
        <>
          <g clipPath='url(#clip0_63_350)'>
            <path
              d='M174.204 116.037C174.434 116.041 174.662 115.997 174.874 115.908C175.087 115.819 175.279 115.687 175.438 115.521C175.763 115.189 175.946 114.742 175.946 114.277C175.946 113.812 175.763 113.365 175.438 113.033C175.109 112.705 174.664 112.521 174.2 112.521C173.735 112.521 173.29 112.705 172.962 113.033C172.635 113.365 172.451 113.811 172.451 114.277C172.451 114.743 172.635 115.19 172.962 115.521C173.122 115.688 173.315 115.82 173.529 115.909C173.742 115.998 173.972 116.042 174.204 116.037ZM173.338 113.102H174.157C174.373 113.092 174.589 113.119 174.795 113.182C174.912 113.229 175.01 113.311 175.076 113.418C175.142 113.525 175.171 113.65 175.16 113.775C175.166 113.866 175.147 113.956 175.107 114.037C175.066 114.117 175.004 114.186 174.928 114.235C174.825 114.296 174.711 114.335 174.592 114.35C174.67 114.357 174.746 114.381 174.815 114.42C174.883 114.459 174.943 114.512 174.989 114.576C175.068 114.68 175.113 114.807 175.118 114.938V115.108C175.118 115.162 175.118 115.216 175.118 115.281C175.117 115.322 175.124 115.363 175.137 115.402L175.154 115.43H174.762C174.764 115.423 174.764 115.415 174.762 115.408C174.759 115.398 174.759 115.389 174.762 115.379L174.754 115.307V115.12C174.769 115.02 174.757 114.918 174.719 114.825C174.681 114.732 174.618 114.651 174.538 114.59C174.394 114.529 174.237 114.503 174.081 114.514H173.757V115.429H173.349L173.338 113.102Z'
              fill='#0171B1'
            />
            <path
              d='M182.858 80.9873H22.7619C22.2934 81.0288 21.8423 81.1847 21.4482 81.4412C21.054 81.6977 20.7288 82.047 20.501 82.4585L11.4978 104.439C11.4224 104.59 11.3884 104.758 11.3992 104.927C11.4099 105.095 11.4651 105.258 11.5591 105.398C11.653 105.538 11.7825 105.651 11.9341 105.725C12.0858 105.799 12.2544 105.831 12.4227 105.818H33.1725C33.3983 105.865 33.6317 105.861 33.8558 105.807C34.0799 105.752 34.289 105.648 34.4679 105.503C34.6468 105.357 34.791 105.174 34.89 104.965C34.9891 104.757 35.0405 104.529 35.0405 104.299C35.0405 104.068 34.9891 103.84 34.89 103.632C34.791 103.424 34.6468 103.24 34.4679 103.095C34.289 102.949 34.0799 102.845 33.8558 102.791C33.6317 102.736 33.3983 102.732 33.1725 102.779H24.5186C23.7151 102.762 22.9229 102.586 22.1885 102.259C21.4542 101.933 20.7924 101.463 20.242 100.877C19.6916 100.291 19.2637 99.6017 18.9833 98.8485C18.7029 98.0953 18.5757 97.2937 18.6091 96.4907C18.582 95.6907 18.7137 94.8932 18.9967 94.1443C19.2796 93.3955 19.7082 92.7102 20.2576 92.128C20.807 91.5458 21.4664 91.0783 22.1975 90.7524C22.9287 90.4266 23.7172 90.2489 24.5175 90.2296L39.3373 90.2361C39.5098 90.2217 39.6829 90.2548 39.838 90.3317C39.9931 90.4086 40.1242 90.5264 40.2172 90.6724C40.3102 90.8184 40.3615 90.987 40.3656 91.1601C40.3697 91.3331 40.3265 91.504 40.2405 91.6543L38.9641 94.8248L27.2813 94.8032C26.8333 94.7611 26.3865 94.896 26.0366 95.179C25.6867 95.462 25.4614 95.8707 25.4089 96.3176C25.4612 96.7649 25.6858 97.1742 26.035 97.4586C26.3842 97.743 26.8305 97.8801 27.2792 97.8407H35.933C36.7369 97.857 37.5293 98.0337 38.2639 98.3604C38.9985 98.6871 39.6604 99.1573 40.2108 99.7434C40.7612 100.329 41.1889 101.02 41.469 101.773C41.749 102.527 41.8756 103.329 41.8415 104.132C41.868 104.931 41.736 105.728 41.453 106.476C41.1701 107.224 40.7418 107.909 40.1929 108.49C39.644 109.072 38.9854 109.539 38.255 109.865C37.5246 110.191 36.7369 110.369 35.9374 110.389H9.55174C8.96436 115.313 11.8991 118.981 17.1174 119.317H177.028C177.496 119.276 177.948 119.121 178.342 118.864C178.736 118.607 179.061 118.258 179.289 117.846L181.872 111.543C181.908 111.403 181.91 111.257 181.878 111.116C181.846 110.975 181.781 110.843 181.688 110.733C181.595 110.622 181.477 110.535 181.344 110.479C181.211 110.423 181.066 110.399 180.922 110.41H165.109C163.746 110.418 162.435 109.883 161.466 108.925C160.496 107.966 159.947 106.662 159.939 105.298L159.93 94.9135C160.04 93.6925 160.583 92.5509 161.46 91.6947C162.338 90.8384 163.492 90.3238 164.715 90.2437L178.706 90.2253V94.3846H168.078C167.084 94.3846 166.691 94.5858 166.691 95.5236L166.705 98.2745H176.234C176.949 98.3524 177.278 98.9776 176.967 99.7359L176.956 99.7629L175.902 102.374H166.707L166.693 105.136C166.693 106.073 167.087 106.275 168.08 106.275H184.035L189.831 92.1378C191.704 86.158 188.766 81.4254 182.858 80.9873ZM174.497 113.512C174.856 113.159 175.34 112.961 175.844 112.961C176.348 112.961 176.832 113.159 177.192 113.512C177.373 113.682 177.517 113.888 177.613 114.117C177.71 114.345 177.758 114.592 177.754 114.84C177.757 115.09 177.709 115.337 177.612 115.568C177.516 115.798 177.373 116.006 177.192 116.178C176.833 116.533 176.348 116.732 175.843 116.732C175.338 116.732 174.854 116.533 174.494 116.178C174.318 116.004 174.177 115.796 174.082 115.568C173.986 115.339 173.937 115.093 173.937 114.845C173.937 114.597 173.986 114.351 174.082 114.122C174.177 113.894 174.318 113.686 174.494 113.512H174.497ZM64.0722 110.401H53.0612C50.9886 110.401 43.4154 109.552 43.4814 100.4C43.5474 91.2486 50.9886 90.2459 53.0612 90.2459H62.627C62.7943 90.2321 62.9623 90.2631 63.1137 90.3357C63.2652 90.4082 63.3946 90.5197 63.4888 90.6587C63.583 90.7976 63.6386 90.9592 63.6498 91.1267C63.6611 91.2942 63.6277 91.4617 63.5529 91.6121L62.2548 94.8367H55.4702C53.5231 94.8367 50.5938 95.8709 50.5289 100.319C50.5938 104.767 53.522 105.802 55.4702 105.802H64.0765L64.0722 110.401ZM88.5972 110.401H82.0192V102.259H73.6249V110.407H66.9788V90.2523H73.6541V97.5616H82.0819V90.2523H88.5972V110.401ZM108.011 107.199L106.718 110.401H96.6691C96.4798 110.401 92.0934 110.942 92.0934 106.539C92.1031 103.166 92.0934 90.2469 92.0934 90.2469H98.7049V105.246C98.7049 105.246 98.6757 105.811 99.3875 105.811H107.134C107.301 105.803 107.467 105.84 107.616 105.917C107.764 105.994 107.889 106.11 107.978 106.251C108.067 106.393 108.118 106.556 108.123 106.723C108.129 106.89 108.09 107.056 108.011 107.203V107.199ZM127.408 110.389L125.94 106.813H120.408C120.234 106.827 120.061 106.794 119.905 106.716C119.749 106.638 119.618 106.52 119.525 106.373C119.432 106.226 119.381 106.056 119.378 105.883C119.374 105.709 119.418 105.537 119.506 105.387L120.761 102.306H124.186L121.448 95.449L115.5 110.389H108.693L116.512 90.9587C116.822 90.3259 117.082 90.2523 117.552 90.2523H125.35C125.82 90.2523 126.057 90.2523 126.365 90.8862L134.206 110.389H127.408ZM142.948 110.401C140.872 110.401 133.297 109.552 133.361 100.4C133.426 91.2486 140.872 90.2459 142.948 90.2459H154.945H155.443C155.606 90.2307 155.771 90.2587 155.92 90.327C156.069 90.3954 156.198 90.5017 156.293 90.6355C156.389 90.7692 156.447 90.9256 156.463 91.089C156.479 91.2524 156.452 91.4171 156.384 91.5667L155.064 94.8335H145.347C143.4 94.8335 140.472 95.8676 140.408 100.316C140.472 104.764 143.4 105.799 145.347 105.799H149.688V102.567H146.352C146.186 102.581 146.019 102.552 145.868 102.48C145.717 102.409 145.588 102.299 145.494 102.161C145.399 102.024 145.343 101.864 145.331 101.697C145.319 101.531 145.351 101.364 145.425 101.215L146.534 98.4714H156.849L156.885 110.405L142.948 110.401Z'
              fill='#0171B1'
            />
            <path
              d='M174.519 114.175C174.584 114.145 174.64 114.1 174.681 114.042C174.723 113.985 174.75 113.918 174.758 113.847C174.767 113.777 174.757 113.705 174.73 113.639C174.703 113.574 174.659 113.516 174.603 113.472C174.445 113.407 174.275 113.378 174.104 113.388H173.75V114.226H174.128C174.26 114.232 174.393 114.215 174.519 114.175Z'
              fill='#0171B1'
            />
            <path
              d='M192.041 82.4361C191.141 81.0795 189.953 79.9387 188.561 79.0954C187.169 78.2522 185.607 77.7273 183.988 77.5586H22.3827C21.471 77.5998 20.5829 77.8617 19.7948 78.3218C19.0066 78.7819 18.3419 79.4265 17.8578 80.2002L17.821 80.2802L17.7853 80.3668L7.259 106.97C6.48487 108.697 6.1412 110.587 6.25745 112.476C6.37369 114.366 6.94638 116.199 7.92643 117.819C8.78562 119.194 9.97163 120.336 11.3788 121.142C12.786 121.948 14.3707 122.393 15.9918 122.439H16.0556H177.394C178.942 122.439 181.46 121.327 182.22 119.795L182.262 119.713L182.292 119.628L193.068 92.8727L193.097 92.797L193.12 92.7148C193.695 91.0254 193.896 89.2315 193.709 87.4569C193.523 85.6823 192.953 83.9693 192.041 82.4361ZM191.962 92.5536L191.938 92.6315L191.911 92.7039L181.328 118.839L181.299 118.92L181.259 118.997C180.876 119.722 180.311 120.336 179.62 120.777C178.928 121.219 178.133 121.473 177.314 121.515H16.7696H16.7069C15.1188 121.483 13.5623 121.065 12.1713 120.298C10.7803 119.531 9.59642 118.438 8.7215 117.112C6.89554 114.19 6.78736 110.365 8.40996 106.356L18.4776 81.4409L18.5133 81.3566L18.5534 81.2798C18.9362 80.5545 19.5011 79.9413 20.1926 79.5004C20.884 79.0594 21.6783 78.8059 22.4974 78.7647H183.306C184.814 78.8189 186.289 79.2175 187.62 79.93C188.95 80.6425 190.1 81.65 190.981 82.8753C191.867 84.3085 192.416 85.9247 192.586 87.6015C192.756 89.2783 192.542 90.9717 191.961 92.5536H191.962Z'
              fill='#0171B1'
            />
          </g>
          <defs>
            <clipPath id='clip0_63_350'>
              <rect
                width='187.5'
                height='44.8854'
                fill='white'
                transform='translate(6.25 77.5576)'
              />
            </clipPath>
          </defs>
        </>
      )}
    </svg>
  )
}
