import React from "react";
import { motion } from "framer-motion";

function EyerollCat() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <motion.svg
        width="200"
        height="200"
        initial={{ rotate: "-2deg" }}
        animate={{ rotate: "2deg" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3_72)">
          <path
            d="M53 3.99994C61.2474 9.29525 67.9385 15.4328 74.3125 22.8124C98.3655 50.3698 130.294 60.3631 166 62.9999C170.413 63.1445 174.823 63.157 179.239 63.1611C181.173 63.1685 181.173 63.1685 183.146 63.1761C186.659 63.1891 190.173 63.1957 193.686 63.2001C195.894 63.2031 198.103 63.2072 200.311 63.2116C207.259 63.2253 214.206 63.235 221.154 63.2388C229.101 63.2433 237.048 63.2608 244.995 63.2898C251.184 63.3117 257.372 63.3216 263.56 63.3229C267.234 63.3239 270.908 63.3295 274.581 63.3477C316.398 63.5428 357.535 59.1777 388.688 28.4999C392.034 25.0766 395.197 21.5258 398.328 17.9062C406.687 8.37544 415.821 0.755524 428.844 -0.316462C443.572 -0.927755 443.572 -0.927755 449 3.99994C462.928 20.2496 458.9 48.3733 457.574 68.4804C455.957 88.4658 452.621 108.244 449.438 128.026C447.797 138.23 446.208 148.441 444.643 158.657C444.203 161.525 443.756 164.393 443.31 167.26C440.905 182.84 438.923 198.42 438.375 214.187C438.336 215.151 438.298 216.115 438.258 217.107C438.166 219.405 438.08 221.702 438 224C438.886 223.942 439.771 223.884 440.684 223.824C453.367 223.362 468.004 225.416 478 234C483.308 239.165 485.108 246.13 485.398 253.375C485.406 255.25 485.398 257.125 485.375 259C485.387 259.933 485.398 260.867 485.41 261.828C485.372 270.929 483.555 278.598 477.109 285.269C468.611 292.241 457.618 291.718 447.182 291.229C443.951 290.89 441.077 290.028 438 289C437.966 289.551 437.931 290.102 437.896 290.67C435.677 324.047 427.589 354.087 402.375 377.5C389.78 388.074 374.662 396.669 360 404C366.861 406.311 372.719 408.137 380 408C385.02 409.073 389.529 410.561 393.875 413.312C394.906 413.869 395.938 414.426 397 415C400.369 413.875 402.188 411.866 404.5 409.25C411.633 401.903 420.872 397.934 431.063 397.75C442.03 397.868 453.076 401.097 461.449 408.387C463.424 410.441 465.089 412.67 466.813 414.937C472.592 422.321 479.757 427.084 489 429C494.903 429.705 498.785 429.053 504 426C504.66 426 505.32 426 506 426C503.588 435.97 497.813 442.852 489.188 448.375C480.024 453.422 470.18 456.149 459.727 456.098C458.573 456.094 457.419 456.091 456.23 456.088C455.041 456.079 453.851 456.071 452.625 456.062C451.412 456.058 450.199 456.053 448.949 456.049C445.966 456.037 442.983 456.021 440 456C454.482 472.3 469.056 483.118 490 490C487.967 494.601 485.726 497.629 482 501C481.299 501.66 480.598 502.32 479.875 503C469.346 510.325 458.265 512.385 445.688 512.312C444.671 512.307 443.654 512.301 442.606 512.295C427.371 512.049 415.155 507.623 403.938 497.066C394.852 487.377 391.895 473.744 391.875 460.75C391.916 459.512 391.958 458.275 392 457C391.196 457.351 390.391 457.701 389.563 458.062C384.295 459.449 379.284 459.142 374.375 456.687C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.154 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C106.802 463.577 106.802 463.577 88.8945 447.117C83.5578 441.153 79.87 434.059 80 426C80.9885 419.541 83.5982 415.541 88.6875 411.5C94.6169 407.654 101.253 405.891 108 404C106.97 403.478 105.94 402.956 104.879 402.418C94.1423 396.896 84.0286 390.715 74 384C73.8414 385.016 73.6829 386.032 73.5195 387.078C71.6894 398.132 69.5524 410.058 61 418C53.3253 422.047 45.7347 422.226 37.25 422.312C36.3116 422.341 35.3731 422.37 34.4062 422.4C27.029 422.467 19.8487 421.312 14.0857 416.352C6.78641 408.673 5.66318 398.515 5.78906 388.344C6.51675 376.809 9.52247 363.658 18.3125 355.5C25.9307 349.761 33.6723 347.844 43 348C42.4373 346.741 42.4373 346.741 41.8633 345.457C38.6868 337.992 36.1651 330.576 34.25 322.687C33.9528 321.501 33.9528 321.501 33.6497 320.29C30.3119 305.888 29.7109 291.191 29.695 276.47C29.6913 273.663 29.6743 270.857 29.6543 268.05C29.5998 260.083 29.5685 252.116 29.5437 244.148C29.4662 221.59 29.2743 199.368 26 177C25.7552 175.306 25.7552 175.306 25.5055 173.577C24.4726 166.53 23.3621 159.496 22.2122 152.467C21.4027 147.515 20.611 142.56 19.8183 137.605C19.4244 135.144 19.0298 132.682 18.6344 130.221C16.2714 115.501 14.0071 100.773 12 85.9999C11.8701 85.0784 11.7403 84.1569 11.6064 83.2075C9.8722 70.5359 9.77497 57.8313 9.6875 45.0624C9.67292 43.8041 9.67292 43.8041 9.65805 42.5204C9.38238 14.4892 9.38238 14.4892 17.3008 5.55463C26.7089 -3.05329 42.386 -2.25284 53 3.99994Z"
            fill="#F9A93B"
          />
          <path
            d="M460 407.125C462.666 409.446 464.678 412.129 466.812 414.938C472.592 422.321 479.757 427.084 489 429C494.903 429.705 498.785 429.053 504 426C504.66 426 505.32 426 506 426C503.588 435.97 497.813 442.852 489.188 448.375C480.024 453.422 470.18 456.149 459.727 456.098C458.573 456.094 457.419 456.091 456.23 456.088C455.041 456.08 453.851 456.071 452.625 456.063C451.412 456.058 450.199 456.054 448.949 456.049C445.966 456.037 442.983 456.021 440 456C454.482 472.3 469.056 483.118 490 490C487.967 494.601 485.726 497.629 482 501C481.299 501.66 480.598 502.32 479.875 503C469.346 510.325 458.265 512.385 445.688 512.313C444.671 512.307 443.654 512.301 442.606 512.295C427.371 512.049 415.155 507.623 403.938 497.066C394.852 487.377 391.895 473.744 391.875 460.75C391.916 459.513 391.957 458.275 392 457C391.196 457.351 390.391 457.701 389.562 458.063C384.295 459.449 379.284 459.142 374.375 456.688C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.155 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C106.802 463.577 106.802 463.577 88.8945 447.117C83.5578 441.153 79.87 434.059 80 426C80.988 419.544 83.5958 415.547 88.6797 411.504C95.7094 406.948 103.295 404.997 111.595 404.688C112.692 404.647 113.79 404.606 114.92 404.563C116.102 404.524 117.285 404.486 118.502 404.446C119.745 404.404 120.988 404.362 122.269 404.318C135.833 403.893 149.391 403.856 162.961 403.867C164.997 403.867 167.032 403.866 169.068 403.864C177.756 403.859 186.444 403.865 195.133 403.873C198.134 403.876 201.135 403.878 204.136 403.879C242.015 403.903 279.896 403.95 317.775 404.265C321.776 404.298 325.777 404.325 329.779 404.346C334.408 404.371 339.037 404.411 343.667 404.463C345.325 404.48 346.984 404.491 348.643 404.498C356.42 404.531 363.665 404.61 371.061 407.362C373.214 408.182 373.214 408.182 376.5 408C382.795 408 388.573 409.956 393.875 413.313C395.422 414.148 395.422 414.148 397 415C400.369 413.875 402.188 411.866 404.5 409.25C419.661 393.634 443.133 395.178 460 407.125Z"
            fill="#9AE79C"
          />
          <path
            d="M460 407.125C462.666 409.446 464.678 412.129 466.812 414.938C472.592 422.321 479.757 427.084 489 429C494.903 429.705 498.785 429.053 504 426C504.66 426 505.32 426 506 426C503.588 435.97 497.813 442.852 489.188 448.375C480.024 453.422 470.18 456.149 459.727 456.098C458.573 456.094 457.419 456.091 456.23 456.088C455.041 456.08 453.851 456.071 452.625 456.063C451.412 456.058 450.199 456.054 448.949 456.049C445.966 456.037 442.983 456.021 440 456C454.482 472.3 469.056 483.118 490 490C487.967 494.601 485.726 497.629 482 501C481.299 501.66 480.598 502.32 479.875 503C469.346 510.325 458.265 512.385 445.688 512.313C444.671 512.307 443.654 512.301 442.606 512.295C427.371 512.049 415.155 507.623 403.938 497.066C394.852 487.377 391.895 473.744 391.875 460.75C391.916 459.513 391.957 458.275 392 457C391.196 457.351 390.391 457.701 389.562 458.063C384.295 459.449 379.284 459.142 374.375 456.688C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.155 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C134.302 463.493 134.302 463.493 113 459C113 458.67 113 458.34 113 458C151.797 454.899 190.56 454.549 229.461 454.394C233.859 454.375 238.256 454.35 242.654 454.324C245.69 454.309 248.727 454.305 251.764 454.302C262.617 454.26 273.214 453.677 283.975 452.258C286.848 451.892 289.727 451.586 292.608 451.281C300.614 450.414 308.492 449.127 316.387 447.524C319.587 446.882 322.792 446.267 325.996 445.648C328.56 445.142 331.124 444.634 333.688 444.125C334.899 443.893 336.11 443.66 337.358 443.421C345.677 441.74 353.181 439.287 361 436C360.654 435.087 360.654 435.087 360.301 434.156C358.336 428.867 357.261 424.631 358 419C361.476 413.091 366.652 410.343 373 408C380.247 406.965 387.752 409.436 393.875 413.313C395.422 414.148 395.422 414.148 397 415C400.369 413.875 402.188 411.866 404.5 409.25C419.661 393.634 443.133 395.178 460 407.125Z"
            fill="#99E79C"
          />
          <path
            d="M436 248C436.33 248 436.66 248 437 248C440.338 335.219 440.338 335.219 410.5 369.312C396.819 383.898 379.412 393.498 362 403C361.385 403.349 360.77 403.697 360.137 404.057C357.789 405.093 356.222 405.254 353.668 405.263C352.372 405.274 352.372 405.274 351.049 405.286C349.631 405.284 349.631 405.284 348.185 405.281C347.177 405.287 346.169 405.293 345.131 405.299C341.744 405.316 338.358 405.319 334.971 405.322C332.546 405.332 330.122 405.342 327.697 405.352C321.102 405.379 314.507 405.392 307.911 405.4C303.79 405.406 299.668 405.414 295.547 405.423C284.127 405.448 272.707 405.468 261.288 405.475C260.557 405.476 259.826 405.476 259.073 405.476C258.341 405.477 257.608 405.477 256.853 405.478C255.369 405.479 253.885 405.48 252.4 405.48C251.296 405.481 251.296 405.481 250.169 405.482C238.253 405.49 226.337 405.525 214.422 405.571C202.177 405.619 189.932 405.644 177.687 405.646C170.816 405.648 163.946 405.659 157.075 405.696C150.607 405.73 144.14 405.733 137.672 405.715C135.303 405.714 132.934 405.722 130.566 405.742C107.566 405.923 107.566 405.923 98 399C98.495 398.01 98.495 398.01 99 397C101.857 396.337 104.621 395.826 107.517 395.403C108.409 395.272 109.301 395.141 110.22 395.006C121.366 393.512 132.501 393.559 143.727 393.559C146.054 393.547 148.381 393.533 150.708 393.519C156.781 393.483 162.853 393.462 168.925 393.447C178.646 393.422 188.367 393.382 198.088 393.325C201.445 393.309 204.802 393.305 208.16 393.302C224.089 393.248 239.657 392.441 255.188 388.625C256.586 388.292 256.586 388.292 258.013 387.952C259.855 387.51 261.695 387.062 263.535 386.608C265.625 386.092 267.72 385.595 269.816 385.102C292.616 379.447 314.485 370.298 336 361C336.86 360.63 337.72 360.26 338.605 359.879C350.687 354.626 361.866 348.018 373 341C373.807 340.494 374.614 339.988 375.446 339.466C402.246 322.539 421.678 299.156 428.995 267.809C429.405 265.983 429.799 264.153 430.177 262.32C431.348 256.844 432.962 252.717 436 248Z"
            fill="#FE9432"
          />
          <path
            d="M283.551 190.804C286.487 190.815 289.422 190.815 292.358 190.814C295.232 190.815 298.106 190.82 300.981 190.827C302.976 190.832 304.97 190.834 306.965 190.835C315.356 190.879 323.639 191.299 332 192C335.941 203.822 333.026 218.032 328 229C320.478 243.596 308.98 253.055 293.512 258.254C277.712 262.947 261.885 259.835 247.746 252.203C235.154 245.029 227.523 233.57 223 220C220.829 212.04 220.765 204.206 221 196C241.802 190.984 262.297 190.706 283.551 190.804Z"
            fill="#010101"
          />
          <path
            d="M115.741 190.794C119.69 190.812 123.639 190.815 127.588 190.814C159.218 190.858 159.218 190.858 169 193C172.932 204.797 169.389 219.093 164.5 230C156.609 244.92 143.909 253.99 128 259C112.677 262.301 97.428 260.022 84 252C70.6839 243.123 62.0221 230.99 58.457 215.312C57.5717 208.895 57.7786 202.46 58 196C77.2553 191.356 96.0071 190.699 115.741 190.794Z"
            fill="#010101"
          />
          <path
            d="M390 411C397.863 415.186 406.05 421.576 411 429C412.005 434.354 411.51 438.94 408.688 443.625C403.183 450.964 394.933 456.839 386 459C381.771 459.029 378.173 458.587 374.375 456.688C371.765 455.634 371.765 455.634 368.688 457.75C368.089 458.133 367.491 458.516 366.875 458.91C355.932 465.271 339.588 463.154 327.427 463.161C325.445 463.166 323.463 463.171 321.481 463.176C316.114 463.189 310.748 463.196 305.381 463.2C302.017 463.203 298.653 463.207 295.288 463.212C284.73 463.225 274.172 463.235 263.614 463.239C251.488 463.243 239.362 463.261 227.237 463.29C217.825 463.312 208.414 463.322 199.003 463.323C193.401 463.324 187.799 463.33 182.197 463.348C134.302 463.493 134.302 463.493 113 459C113 458.67 113 458.34 113 458C151.797 454.899 190.56 454.549 229.461 454.393C233.859 454.375 238.256 454.349 242.654 454.324C245.69 454.309 248.727 454.305 251.764 454.302C262.617 454.26 273.214 453.677 283.975 452.258C286.848 451.892 289.727 451.586 292.608 451.281C300.614 450.414 308.492 449.127 316.387 447.524C319.587 446.882 322.792 446.267 325.996 445.648C328.56 445.142 331.124 444.634 333.688 444.125C334.899 443.893 336.11 443.66 337.358 443.421C345.677 441.74 353.181 439.287 361 436C360.654 435.087 360.654 435.087 360.301 434.156C358.336 428.867 357.261 424.631 358 419C365.062 406.994 378.151 406.187 390 411Z"
            fill="#86D890"
          />
          <path
            d="M333 193C345.93 193.367 358.328 194.359 371 197C371.541 219.271 366.2 237.954 351.609 255.262C337.531 270.036 318.22 278.772 297.798 279.293C275.452 279.488 256.956 271.377 240.832 255.922C232.745 247.475 225.58 235.48 223 224C223.33 223.01 223.66 222.02 224 221C224.496 222.062 224.993 223.124 225.504 224.219C233.191 240.35 242.706 250.773 260 257C274.637 261.091 290.411 259.805 304 253C317.784 244.692 326.816 233.503 331.289 217.867C332.795 209.677 332.863 201.31 333 193Z"
            fill="#FDFCFC"
          />
          <path
            d="M170 193C182.777 192.557 195.603 193.844 208 197C208.789 217.855 203.682 237.159 189.688 253.125C188.142 254.766 186.579 256.391 185 258C184.323 258.701 183.646 259.402 182.949 260.125C168.007 274.533 147.864 279.53 127.629 279.203C107.946 278.542 89.2904 268.315 75.832 254.172C70.4977 247.848 66.686 240.673 63.125 233.25C62.8265 232.636 62.528 232.023 62.2205 231.39C60.2807 227.194 59.4544 223.544 59 219C61.2 221.2 61.6309 222.534 62.625 225.437C67.8962 238.947 78.2793 248.521 91 255C105.848 261.057 122.192 260.634 137.016 254.816C149.979 248.95 159.966 239.068 165.277 225.812C168.021 217.845 169.181 210.566 169.562 202.187C169.627 200.862 169.627 200.862 169.693 199.51C169.799 197.34 169.9 195.17 170 193Z"
            fill="#FDFDFC"
          />
          <path
            d="M37.043 347.41C39.822 346.96 41.3439 346.986 44 348C46.6509 351.235 48.661 354.639 50.75 358.25C55.6061 366.613 64.2245 376.612 73 381C74.0795 392.323 70.9552 405.17 64.3008 414.523C59.2549 420.251 52.6745 421.604 45.3687 422.223C42.5971 422.339 39.8364 422.371 37.0625 422.375C36.1376 422.4 35.2127 422.424 34.2598 422.449C26.9577 422.48 19.7827 421.254 14.085 416.353C6.78767 408.671 5.66316 398.517 5.78906 388.344C6.51675 376.809 9.52248 363.658 18.3125 355.5C24.0099 351.208 30.3185 349.352 37.043 347.41Z"
            fill="#00CBFE"
          />
          <path
            d="M437 224C450.913 223.157 466.919 224.485 478 234C483.308 239.165 485.108 246.13 485.398 253.375C485.406 255.25 485.398 257.125 485.375 259C485.387 259.933 485.398 260.867 485.41 261.828C485.372 270.929 483.555 278.598 477.109 285.27C468.554 292.288 457.828 291.518 447.364 291.291C444.127 290.893 441.114 289.946 438 289C436.806 243.604 436.806 243.604 437 224Z"
            fill="#00CBFE"
          />
          <path
            d="M390 411C397.863 415.186 406.05 421.576 411 429C412.005 434.354 411.51 438.94 408.688 443.625C403.183 450.964 394.933 456.839 386 459C381.231 459.032 377.14 458.461 373 456C367.487 449.593 364.393 441.664 361 434C360.574 433.067 360.574 433.067 360.14 432.115C357.935 427.191 357.324 424.32 358 419C365.062 406.994 378.151 406.187 390 411Z"
            fill="#73C884"
          />
          <path
            d="M213.25 313.687C215.163 313.694 215.163 313.694 217.115 313.7C226.431 313.812 235.008 314.516 244 317C245.102 317.302 246.204 317.603 247.34 317.914C253.63 319.827 260.245 322.245 265 327C264.548 333.106 264.548 333.106 262.812 335.937C260.1 337.528 258.122 337.231 255 337C252.548 336.116 250.239 335.197 247.875 334.125C236.89 329.235 225.728 328.609 213.812 328.625C212.543 328.627 211.273 328.628 209.964 328.63C196.736 328.802 185.734 330.801 174 337C170.75 337.562 170.75 337.562 168 337C165.562 334.875 165.562 334.875 164 332C163.812 329 163.812 329 165 326C176.78 314.5 197.849 313.618 213.25 313.687Z"
            fill="#040301"
          />
          <path
            d="M250 7.00004C255.31 11.97 259.878 17.5601 260.625 25C260.47 28.3879 259.614 29.9042 257.125 32.1875C249.235 37.9905 240.885 41.6225 231 42C225.733 40.8957 223.638 38.8506 220.688 34.5625C219.76 33.0608 218.862 31.5402 218 30C217.622 29.3362 217.245 28.6723 216.855 27.9883C214.839 23.3011 215.43 18.4544 217.25 13.8125C225.261 5.61897 239.601 0.0748918 250 7.00004Z"
            fill="#00CCFE"
          />
          <path
            d="M31 29C35.8046 29.4394 38.5485 29.9246 42.0625 33.25C50.4526 40.4452 60.4453 45.5244 70 51C69.2734 55.7871 69.2734 55.7871 66.8125 57.7031C65.8844 58.2136 64.9563 58.7241 64 59.25C55.7234 64.1924 49.7119 70.9904 43.5078 78.2734C43.0102 78.8432 42.5127 79.413 42 80C41.5231 80.5698 41.0461 81.1395 40.5547 81.7266C39 83 39 83 35 83C27.712 68.4239 30.8749 44.738 31 29Z"
            fill="#FEAFDB"
          />
          <path
            d="M434.648 29.4094C435.812 29.7018 435.812 29.7018 437 30C437.335 43.2394 437.138 56.2683 435.625 69.4375C435.499 70.5621 435.373 71.6866 435.243 72.8452C434.263 80.7373 434.263 80.7373 432 83C427.931 82.7996 425.901 80.2369 423.188 77.4375C422.304 76.5326 421.421 75.6277 420.512 74.6953C418.423 72.4536 416.449 70.174 414.5 67.8125C410.65 63.2938 405.953 60.2041 401 57C400.01 56.34 399.02 55.68 398 55C398.456 50.4483 398.456 50.4483 400.851 48.4736C401.649 48.0544 402.447 47.6351 403.27 47.2031C404.153 46.7232 405.037 46.2433 405.947 45.7488C406.893 45.2542 407.838 44.7596 408.812 44.25C416.35 40.1663 423.088 36.0232 429.625 30.4492C432 29 432 29 434.648 29.4094Z"
            fill="#FEAFDA"
          />
          <path
            d="M109.348 115.482C110.95 115.464 110.95 115.464 112.584 115.444C114.306 115.456 114.306 115.456 116.062 115.469C117.246 115.465 118.429 115.461 119.649 115.457C122.15 115.454 124.652 115.462 127.153 115.479C130.986 115.5 134.816 115.479 138.648 115.453C141.078 115.456 143.508 115.461 145.937 115.469C147.085 115.461 148.233 115.453 149.416 115.444C150.484 115.457 151.552 115.469 152.652 115.482C154.06 115.487 154.06 115.487 155.496 115.492C158.777 116.158 159.993 117.361 162 120C162 123.562 162 123.562 161 127C158.018 129.904 155.842 130.382 151.744 130.42C150.696 130.436 149.648 130.452 148.569 130.468C146.88 130.468 146.88 130.468 145.156 130.469C143.995 130.476 142.834 130.484 141.637 130.492C139.183 130.503 136.728 130.505 134.274 130.501C130.514 130.5 126.756 130.542 122.996 130.586C120.612 130.591 118.228 130.594 115.844 130.594C114.718 130.61 113.592 130.627 112.431 130.643C104.655 130.574 104.655 130.574 101.291 127.623C99.8427 124.68 99.3397 123.219 100 120C102.911 116.364 104.728 115.498 109.348 115.482Z"
            fill="#040301"
          />
          <path
            d="M488.453 489.133C488.964 489.419 489.474 489.705 490 490C487.967 494.601 485.726 497.629 482 501C480.948 501.99 480.948 501.99 479.875 503C469.346 510.325 458.265 512.385 445.688 512.313C444.671 512.307 443.654 512.301 442.606 512.295C430.171 512.094 418.043 509.675 408.688 500.809C408.131 500.212 407.574 499.615 407 499C407.804 499.325 407.804 499.325 408.625 499.656C427.432 506.338 451.266 500.857 469 493C471.178 491.833 473.345 490.647 475.5 489.438C480.538 486.744 483.287 486.77 488.453 489.133Z"
            fill="#87D890"
          />
          <path
            d="M276.126 115.596C277.694 115.577 277.694 115.577 279.292 115.557C280.42 115.56 281.549 115.563 282.711 115.566C283.871 115.561 285.032 115.556 286.227 115.551C288.683 115.544 291.139 115.545 293.596 115.554C297.353 115.562 301.11 115.534 304.867 115.502C307.253 115.5 309.638 115.501 312.023 115.504C313.148 115.493 314.272 115.481 315.43 115.47C323.198 115.539 323.198 115.539 327.209 117.843C329 120 329 120 329.625 123C329 126 329 126 327.194 128.154C322.347 130.955 317.781 130.572 312.277 130.531C310.571 130.537 310.571 130.537 308.83 130.543C306.429 130.546 304.027 130.538 301.626 130.521C297.947 130.5 294.27 130.521 290.592 130.547C288.258 130.544 285.924 130.539 283.59 130.531C282.489 130.539 281.388 130.547 280.253 130.556C279.229 130.543 278.204 130.531 277.148 130.518C276.248 130.514 275.349 130.511 274.421 130.508C271.202 129.833 269.999 128.568 268 126C267.266 120.027 267.266 120.027 269.207 117.31C271.61 115.554 273.163 115.613 276.126 115.596Z"
            fill="#040200"
          />
          <path
            d="M483 249C483.66 249 484.32 249 485 249C485.088 252.312 485.141 255.624 485.188 258.938C485.213 259.864 485.238 260.79 485.264 261.744C485.36 270.933 483.624 278.526 477.109 285.27C468.611 292.241 457.618 291.719 447.182 291.229C443.951 290.89 441.077 290.028 438 289C438 287.35 438 285.7 438 284C438.908 283.752 439.815 283.505 440.75 283.25C442.168 282.838 443.584 282.42 445 282C445.919 281.732 446.838 281.464 447.785 281.188C461.196 277.035 471.577 270.584 478.402 258.086C479.984 255.08 481.506 252.051 483 249Z"
            fill="#2AB4F2"
          />
          <path
            d="M479 140C483.798 142.546 486.982 145.561 490 150C490.716 153.821 490.236 155.527 488.5 159C484.943 163.269 481.295 167.264 475.691 168.516C470.343 168.768 467.156 167.495 463 164C462.031 163.237 461.061 162.474 460.062 161.687C458 159 458 159 457.688 155.75C459.953 149.277 464.448 144.684 470.125 140.937C473.418 139.864 475.561 139.498 479 140Z"
            fill="#00CCFE"
          />
          <path
            d="M106.328 195.801C108 198 108 198 108.5 201.563C108 205 108 205 106.312 206.875C101.577 209.179 96.5542 209.197 91.375 209.438C85.5553 209.745 79.9952 210.45 74.2695 211.574C71.3905 212.114 68.9108 212.426 66 212C63.625 210.375 63.625 210.375 62 208C61.4131 204.479 61.5076 202.771 63.4375 199.75C67.0859 197.258 70.7155 196.652 75 196C76.8253 195.722 76.8253 195.722 78.6875 195.438C101.621 192.16 101.621 192.16 106.328 195.801Z"
            fill="#F8F8F8"
          />
          <path
            d="M269.938 196.187C271.56 198.956 271.449 200.855 271 204C268.858 206.778 267.548 207.864 264.115 208.714C262.478 208.861 262.478 208.861 260.809 209.012C259.617 209.13 258.425 209.248 257.197 209.369C255.957 209.474 254.716 209.579 253.438 209.687C250.978 209.918 248.518 210.151 246.059 210.387C244.969 210.482 243.879 210.577 242.756 210.675C239.915 210.916 239.915 210.916 237 212C229.871 212.566 229.871 212.566 226.5 210.375C224.531 207.257 224.321 205.623 225 202C232.787 194.184 260.439 190.366 269.938 196.187Z"
            fill="#F8F8F8"
          />
          <path
            d="M502 429C502.66 429 503.32 429 504 429C503.302 436.384 499.269 440.113 494 445C481.986 454.196 468.121 456.182 453.438 456.25C452.314 456.271 451.191 456.291 450.033 456.312C448.948 456.318 447.864 456.323 446.746 456.328C445.763 456.337 444.78 456.347 443.767 456.356C440.458 455.93 438.645 455.019 436 453C434.688 450.812 434.688 450.812 434 449C434.602 448.991 435.205 448.981 435.826 448.972C458.702 448.529 484.845 446.155 502 429Z"
            fill="#87D991"
          />
          <path
            d="M61 372C63.6667 374 66.3333 376 69 378C69.736 378.517 70.4719 379.033 71.2302 379.566C73 381 73 381 73.5664 383.137C73.5497 394.073 70.3861 407.616 63 416C57.0309 421.155 49.7287 422.396 42 422C45.0563 418.689 48.4349 416.15 52.0977 413.562C57.5937 409.048 58.631 403.54 59.3408 396.73C59.6413 392.989 59.8927 389.247 60.125 385.5C60.2114 384.201 60.2977 382.901 60.3867 381.562C60.5976 378.375 60.8019 375.188 61 372Z"
            fill="#2BB4F1"
          />
          <path
            d="M409 429C409.66 429 410.32 429 411 429C411.76 435.741 411.152 440.339 407.035 445.828C401.3 451.949 394.196 457.017 386 459C381.263 459.031 377.088 458.505 373 456C371.516 454.344 371.516 454.344 370.25 452.5C369.608 451.587 369.608 451.587 368.953 450.656C368 449 368 449 368 447C368.844 446.919 368.844 446.919 369.706 446.836C389.089 445.01 389.089 445.01 405.113 434.766C406.753 432.634 406.753 432.634 407.984 430.504C408.32 430.008 408.655 429.511 409 429Z"
            fill="#62B876"
          />
          <path
            d="M66 49C68.4375 49.75 68.4375 49.75 70 51C69.8125 53.2969 69.8125 53.2969 69 56C66.8125 57.7031 66.8125 57.7031 64 59.25C55.7234 64.1924 49.7119 70.9904 43.5078 78.2734C43.0102 78.8432 42.5127 79.413 42 80C41.2846 80.8546 41.2846 80.8546 40.5547 81.7266C39 83 39 83 35 83C33.4452 79.8905 33.7136 77.4373 34 74C35.5625 71 35.5625 71 38 68C38.4396 67.456 38.8791 66.912 39.332 66.3516C44.7716 60.2648 51.9167 56.8341 59 53C59.6304 52.6192 60.2609 52.2385 60.9104 51.8462C62.5746 50.8419 64.285 49.9148 66 49Z"
            fill="#FE9ACF"
          />
          <path
            d="M250 9C255.476 11.1667 257.638 15.8533 260 21C260.931 24.2954 260.762 25.4813 260 29C255.428 35.1393 247.071 38.6432 240 41C237.667 41.0395 235.333 41.044 233 41C236.771 37.8376 240.727 35.2252 244.914 32.6602C247.967 30.2302 249.771 27.9841 250.23 24.0056C250.295 21.7248 250.262 19.4679 250.188 17.1875C250.174 16.3992 250.16 15.611 250.146 14.7988C250.111 12.8656 250.058 10.9327 250 9Z"
            fill="#28B6F3"
          />
          <path
            d="M488 148C490 150 490 150 490.375 152.75C489.717 158.45 486.548 161.774 482.312 165.375C478.471 168.136 475.544 168.577 470.883 168.309C469 168 469 168 467 167C468.448 163.29 470.076 162.129 473.562 160.312C479.31 157.058 483.553 152.834 488 148Z"
            fill="#29B5F3"
          />
          <path
            d="M414 66C416.407 66.9319 418.784 67.8995 421.125 68.9883C425.431 70.9886 429.217 72.5094 434 73C434.195 79.0547 434.195 79.0547 434 81C433.34 81.66 432.68 82.32 432 83C426.836 82.7663 423.702 78.0346 420.352 74.5898C417.857 71.8422 415.854 69.2021 414 66Z"
            fill="#FE9BCE"
          />
          <path
            d="M59 219C61.2415 221.242 61.882 222.931 63 225.875C64.1972 229.008 65.4498 232.024 67 235C66.01 235 65.02 235 64 235C63.1579 233.087 62.3266 231.17 61.5 229.25C61.0359 228.183 60.5719 227.115 60.0938 226.016C59 223 59 223 59 219Z"
            fill="#E9DBC7"
          />
        </g>
        <defs>
          <clipPath id="clip0_3_72">
            <rect width="512" height="512" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}

export default EyerollCat;
