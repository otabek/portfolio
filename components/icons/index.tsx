type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  github: (props: IconProps) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.6931 2.9C7.39151 2.9 3.09311 7.1984 3.09311 12.5C3.09311 16.9984 6.19071 20.7624 10.3667 21.804C10.3219 21.6744 10.2931 21.524 10.2931 21.3376V19.6968C9.90351 19.6968 9.25071 19.6968 9.08671 19.6968C8.42991 19.6968 7.84591 19.4144 7.56271 18.8896C7.24831 18.3064 7.19391 17.4144 6.41471 16.8688C6.18351 16.6872 6.35951 16.48 6.62591 16.508C7.11791 16.6472 7.52591 16.9848 7.90991 17.4856C8.29231 17.9872 8.47231 18.1008 9.18671 18.1008C9.53311 18.1008 10.0515 18.0808 10.5395 18.004C10.8019 17.3376 11.2555 16.724 11.8099 16.4344C8.61311 16.1056 7.08751 14.5152 7.08751 12.356C7.08751 11.4264 7.48351 10.5272 8.15631 9.7696C7.93551 9.0176 7.65791 7.484 8.24111 6.9C9.67951 6.9 10.5491 7.8328 10.7579 8.0848C11.4747 7.8392 12.2619 7.7 13.0891 7.7C13.9179 7.7 14.7083 7.8392 15.4267 8.0864C15.6331 7.836 16.5035 6.9 17.9451 6.9C18.5307 7.4848 18.2499 9.0248 18.0267 9.7752C18.6955 10.5312 19.0891 11.428 19.0891 12.356C19.0891 14.5136 17.5659 16.1032 14.3739 16.4336C15.2523 16.892 15.8931 18.18 15.8931 19.1504V21.3376C15.8931 21.4208 15.8747 21.4808 15.8651 21.552C19.6059 20.2408 22.2931 16.6888 22.2931 12.5C22.2931 7.1984 17.9947 2.9 12.6931 2.9Z"
        fill="white"
      />
    </svg>
  ),
  email: (props: IconProps) => (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 6.5C22 5.4 21.1 4.5 20 4.5H4.00005C2.90005 4.5 2.00005 5.4 2.00005 6.5V18.5C2.00005 19.6 2.90005 20.5 4.00005 20.5H20C21.1 20.5 22 19.6 22 18.5V6.5ZM20 6.5L12 11.5L4.00005 6.5H20ZM20 18.5H4.00005V8.5L12 13.5L20 8.5V18.5Z"
        fill="white"
      />
    </svg>
  ),
  telegram: (props: IconProps) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.4304 3.6875C20.1703 3.69897 19.928 3.77472 19.7148 3.86094C19.515 3.94131 18.7516 4.26873 17.5491 4.78438C16.3457 5.30047 14.7521 5.98462 13.0523 6.71563C9.65251 8.17763 5.83031 9.82334 3.87256 10.6656C3.79895 10.6973 3.54208 10.7793 3.26944 10.9922C2.9968 11.205 2.70694 11.6461 2.70694 12.1375C2.70694 12.5338 2.89579 12.9275 3.1335 13.1625C3.37121 13.3975 3.62274 13.5137 3.83819 13.6016C4.61992 13.9205 7.04442 14.9127 7.50225 15.1C7.66338 15.5936 8.54093 18.278 8.74444 18.9359C8.87859 19.3701 9.0063 19.642 9.17256 19.8578C9.2557 19.9657 9.35233 20.0603 9.46944 20.1344C9.51625 20.164 9.56757 20.1868 9.61944 20.2078L9.62256 20.2094C9.63452 20.2142 9.64482 20.2223 9.65694 20.2266C9.67981 20.2346 9.6951 20.2355 9.72569 20.2422C9.84755 20.2815 9.97058 20.3063 10.0804 20.3063C10.5485 20.3063 10.8351 20.0484 10.8351 20.0484L10.8523 20.0359L13.2601 17.9531L16.1804 20.7156C16.2215 20.7738 16.605 21.3 17.4507 21.3C17.9528 21.3 18.3512 21.048 18.6069 20.7797C18.8627 20.5114 19.022 20.2294 19.0898 19.875V19.8734C19.1531 19.5385 21.8444 5.72188 21.8444 5.72188L21.8398 5.74063C21.9185 5.38102 21.9392 5.04611 21.8523 4.71563C21.7653 4.38514 21.5363 4.06871 21.2523 3.89844C20.9683 3.7282 20.6904 3.67603 20.4304 3.6875ZM20.2804 5.35938C20.2765 5.38272 20.2833 5.37098 20.2773 5.39844L20.2757 5.40781L20.2741 5.41719C20.2741 5.41719 17.6161 19.0571 17.5179 19.5766C17.5251 19.5373 17.4922 19.6153 17.4585 19.6625C17.4109 19.6297 17.3132 19.5875 17.3132 19.5875L17.2976 19.5703L13.3085 15.7969L10.4882 18.2344L11.3273 14.875C11.3273 14.875 16.5722 9.44569 16.8882 9.12969C17.1426 8.87689 17.196 8.78876 17.196 8.70156C17.196 8.58476 17.1351 8.5 16.9991 8.5C16.8767 8.5 16.7121 8.619 16.6241 8.675C15.4776 9.40584 10.4444 12.3393 8.18819 13.6516C7.82964 13.5048 5.33867 12.4852 4.49444 12.1406C4.50083 12.1378 4.49873 12.1388 4.50538 12.1359C6.46363 11.2934 10.2842 9.64773 13.6835 8.18594C15.3831 7.45504 16.9779 6.77037 18.1804 6.25469C19.3644 5.74695 20.187 5.39751 20.2804 5.35938Z"
        fill="white"
      />
    </svg>
  ),
};