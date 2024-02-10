export default function Footer() {

  return (
    <footer className="p-4 flex flex-row justify-between font-merriweather  text-base">
      &copy; Cameron Loxdale 2024
      <div className="flex flex-row gap-2">
        <a href="https://bsky.app/profile/cloxdale.bsky.social">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 320" width="30" height="30">
          <path fill="#295ef6" d="M180 142c-16.3-31.7-60.7-90.8-102-120C38.5-5.9 23.4-1 13.5 3.4 2.1 8.6 0 26.2 0 36.5c0 10.4 5.7 84.8 9.4 97.2 12.2 41 55.7 55 95.7 50.5-58.7 8.6-110.8 30-42.4 106.1 75.1 77.9 103-16.7 117.3-64.6 14.3 48 30.8 139 116 64.6 64-64.6 17.6-97.5-41.1-106.1 40 4.4 83.5-9.5 95.7-50.5 3.7-12.4 9.4-86.8 9.4-97.2 0-10.3-2-27.9-13.5-33C336.5-1 321.5-6 282 22c-41.3 29.2-85.7 88.3-102 120Z" />
        </svg> 
        </a>
        <a href="https://twitter.com/Cloxdale">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"/></svg>
       </a>
       <a href="https://linktr.ee/cloxdale">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path d="M 22.253906 3.5 C 20.890312 3.5 19.753906 4.6364058 19.753906 6 A 1.50015 1.50015 0 0 0 22.673828 6.5 L 25.248047 6.5 L 25.248047 11.804688 C 25.248047 12.860767 25.947798 13.771864 26.806641 14.121094 C 27.665483 14.470324 28.801868 14.306819 29.539062 13.550781 L 33.087891 9.9101562 L 34.628906 11.490234 L 30.896484 15.042969 C 30.127215 15.774598 29.95135 16.916367 30.296875 17.78125 C 30.6424 18.646133 31.557452 19.353516 32.619141 19.353516 L 37.966797 19.353516 L 37.966797 21.582031 L 32.527344 21.582031 C 31.470883 21.582031 30.560005 22.282769 30.210938 23.142578 C 29.86187 24.002387 30.027594 25.138612 30.785156 25.875 L 34.621094 29.601562 L 33.085938 31.150391 L 31.474609 29.53125 A 1.50015 1.50015 0 1 0 29.349609 31.646484 L 31.314453 33.623047 C 32.279066 34.592594 33.897457 34.592407 34.861328 33.621094 L 37.107422 31.357422 C 38.074563 30.38288 38.057947 28.759345 37.074219 27.802734 L 33.759766 24.582031 L 38.466797 24.582031 C 39.830391 24.582031 40.966797 23.445625 40.966797 22.082031 L 40.966797 18.853516 C 40.966797 17.489921 39.830391 16.353516 38.466797 16.353516 L 33.871094 16.353516 L 37.064453 13.314453 C 38.05929 12.366519 38.0903 10.741922 37.130859 9.7578125 A 1.50015 1.50015 0 0 0 37.128906 9.7578125 L 34.876953 7.4492188 C 33.908568 6.4561922 32.263973 6.4574503 31.296875 7.4492188 L 28.248047 10.576172 L 28.248047 6 C 28.248047 4.6364058 27.111641 3.5 25.748047 3.5 L 22.253906 3.5 z M 14.916016 6.6933594 C 14.261827 6.6933594 13.606866 6.9420918 13.123047 7.4394531 L 10.865234 9.7617188 C 9.9093011 10.744754 9.9406398 12.368314 10.933594 13.314453 L 14.138672 16.369141 L 9.5332031 16.369141 C 8.1696089 16.369141 7.0332031 17.505546 7.0332031 18.869141 L 7.0332031 22.099609 C 7.0332031 23.463204 8.1696089 24.599609 9.5332031 24.599609 L 14.230469 24.599609 L 10.917969 27.816406 C 9.9298095 28.774921 9.9193608 30.403737 10.892578 31.376953 L 13.144531 33.630859 C 14.110621 34.596949 15.722271 34.593257 16.685547 33.625 L 24.001953 26.273438 L 25.517578 27.796875 A 1.50015 1.50015 0 1 0 27.642578 25.681641 L 25.773438 23.802734 C 24.808823 22.833187 23.193129 22.833187 22.228516 23.802734 L 14.912109 31.154297 L 13.373047 29.615234 L 17.205078 25.892578 A 1.50015 1.50015 0 0 0 17.205078 25.890625 C 17.962641 25.154237 18.128365 24.018012 17.779297 23.158203 C 17.430229 22.298394 16.519352 21.599609 15.462891 21.599609 L 10.033203 21.599609 L 10.033203 19.369141 L 15.386719 19.369141 C 16.448029 19.369141 17.361051 18.663015 17.707031 17.798828 C 18.053012 16.934642 17.881118 15.793107 17.113281 15.060547 A 1.50015 1.50015 0 0 0 17.111328 15.058594 L 13.369141 11.490234 L 14.916016 9.8984375 L 18.462891 13.546875 C 19.199822 14.303819 20.336071 14.467978 21.195312 14.119141 C 22.054555 13.770303 22.755859 12.859373 22.755859 11.802734 L 22.755859 11.064453 A 1.50015 1.50015 0 0 0 19.814453 10.630859 L 16.708984 7.4394531 C 16.225165 6.9420918 15.570204 6.6933594 14.916016 6.6933594 z M 22.238281 29.089844 C 20.874687 29.089844 19.738281 30.22625 19.738281 31.589844 L 19.738281 34.277344 A 1.50015 1.50015 0 1 0 22.738281 34.277344 L 22.738281 32.089844 L 25.234375 32.089844 L 25.234375 41.5 L 22.738281 41.5 L 22.738281 39.935547 A 1.50015 1.50015 0 1 0 19.738281 39.935547 L 19.738281 42 C 19.738281 43.363594 20.874687 44.5 22.238281 44.5 L 25.734375 44.5 C 27.097969 44.5 28.234375 43.363594 28.234375 42 L 28.234375 31.589844 C 28.234375 30.22625 27.097969 29.089844 25.734375 29.089844 L 22.238281 29.089844 z"/></svg></a>
      </div>
    </footer>
  )
}
