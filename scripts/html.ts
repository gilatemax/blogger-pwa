export const getIndexHTML = (title = 'My App', headMetaTags = '') => `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>

  ${headMetaTags}

  <style>
    *,
    ::before,
    ::after {
      box-sizing: border-box;
    }

    body {
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
      padding: 20px;
      margin: 0;
    }

    .pwa-svg {
      max-width: 200px;
    }

    .pwa-svg-w {
      fill: #5a0fc8;
    }
  </style>
</head>

<body>
  <!--[ PWA Logo SVG ]-->
  <svg class="pwa-svg" width="100%" height="100%" viewBox="0 0 978 388" version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linejoin: round;
      stroke-miterlimit: 2;
    ">
    <g class="pwa-svg-p" transform="matrix(7.83465,0,0,7.83465,-398.586,-488.321)">
      <path
        d="M62.789,93.166L70.52,93.166C72.862,93.166 74.947,92.905 76.776,92.382L78.775,86.223L84.363,69.007C83.938,68.333 83.452,67.694 82.905,67.093C80.036,63.917 75.838,62.33 70.312,62.33L50.875,62.33L50.875,109.286L62.789,109.286L62.789,93.166ZM73.022,73.132C74.143,74.26 74.703,75.77 74.703,77.66C74.703,79.566 74.21,81.077 73.225,82.194C72.144,83.435 70.155,84.056 67.257,84.056L62.789,84.056L62.789,71.441L67.29,71.441C69.991,71.441 71.902,72.004 73.022,73.132Z"
        style="fill-opacity: 0.91; fill-rule: nonzero" />
    </g>
    <g class="pwa-svg-w" transform="matrix(7.83465,0,0,7.83465,-398.586,-488.321)">
      <path
        d="M131.535,109.284L150.467,62.328L137.916,62.329L124.965,92.673L115.755,62.329L106.108,62.329L96.22,92.673L89.246,78.845L82.935,98.288L89.343,109.284L101.695,109.284L110.631,82.072L119.15,109.284L131.535,109.284Z"
        style="fill-opacity: 0.91; fill-rule: nonzero" />
    </g>
    <g class="pwa-svg-a" transform="matrix(7.83465,0,0,7.83465,-398.586,-488.321)">
      <path
        d="M142.662,103.442L146.265,94.331L156.668,94.331L151.73,80.51L157.905,64.896L175.59,111.852L162.548,111.852L159.526,103.442L142.662,103.442Z"
        style="fill-opacity: 0.91; fill-rule: nonzero" />
    </g>
  </svg>
</body>

</html>`;
