import { LogoStyled } from "./LogoStyled";

type Tprops = {
  height: number;
  width: number;
};

const Logo = (props: Tprops) => {
  return (
    <LogoStyled
      aria-label="Petgram logo"
      viewBox="31.559 7.391 436.883 135.218"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__editing-halftone-gradient"
          x1={0.632}
          y1={0.77}
          x2={0.368}
          y2={0.23}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffc500" stopOpacity={0.8} />
          <stop offset={0.5} stopColor="#f0f" stopOpacity={0.9} />
          <stop offset={1} stopColor="#0ff" />
        </linearGradient>
        <filter id="prefix__editing-halftone">
          <feFlood result="color" floodColor="red" />
          <feImage
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNSIgaGVpZ2h0PSI1Ij4KICAgICAgPGNpcmNsZSBjeD0iMi41IiBjeT0iMi41IiByPSIyIiBmaWxsPSJyZWQiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPgo8L3N2Zz4="
            width={1000}
            height={1000}
            result="image"
          />
          <feTile in="image" result="tile" />
          <feComposite
            operator="in"
            in="SourceGraphic"
            in2="tile"
            result="dot"
          />
          <feComposite
            operator="in"
            in="dot"
            in2="SourceGraphic"
            result="dotted"
          />
          <feGaussianBlur in="dotted" stdDeviation={0.8} />
          <feComponentTransfer result="cutoff">
            <feFuncA type="linear" slope={10} intercept={-3} />
          </feComponentTransfer>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-halftone)">
        <path
          d="M29.78-48.69q17.89 0 17.89 12.63 0 6.93-4.45 11.09-4.38 4.17-12.05 4.17-3.58 0-6.35-2.05-1.31-.87-2.19-2.04 5.33 0 8.14-3.25 2.81-3.25 2.81-9.6t-6.28-6.35h-1.75q-.44 0-.8.07L16.35 0H.51l8.98-47.81q7.81-.73 12.34-.81 4.52-.07 7.95-.07zM77.6-12.34q1.82 1.24 1.82 3.98t-1.38 4.49q-1.39 1.75-3.65 2.92-4.67 2.41-9.71 2.41-5.04 0-8-1.1-2.95-1.09-4.92-3.13-3.87-3.87-3.87-10.95 0-11.03 5.98-17.74 6.43-7.23 17.6-7.23 6.93 0 10.36 2.92 2.56 2.19 2.56 5.77 0 12.85-22.19 12.85-.3 1.89-.3 3.5 0 3.36 1.5 4.63 1.5 1.28 4.27 1.28 2.77 0 5.73-1.28 2.96-1.27 4.2-3.32zm-14.89-7.95q5.18 0 8.17-3.22 3-3.06 3-7.95 0-1.68-.62-2.59-.63-.92-1.87-.92-1.24 0-2.3.48-1.05.47-2.15 2.08-2.7 3.65-4.23 12.12zM88.04-7.3q0-1.97 1.02-6.93l3.87-19.72h-4.31l.29-2.18q8.76-2.63 17.23-9.06h3.51l-1.76 7.96h5.7l-.66 3.28h-5.62l-3.72 19.72q-.95 4.52-.95 6.05 0 3.51 3.06 4.24-.73 2.48-3.35 3.94-2.63 1.46-6.36 1.46-3.72 0-5.84-2.34-2.11-2.33-2.11-6.42zm30.07-23.21q2.49-3.51 6.25-5.84 3.75-2.34 8.35-2.34t6.79 1.46l14.31-1.46-4.96 28.03q-2.56 14.31-7.96 19.93-5.18 5.33-15.26 5.33-7.66 0-12.04-2.41-4.38-2.41-4.38-6.42 0-3 2.26-4.71 2.26-1.72 5.77-1.72 3.06 0 5.4 1.39 1.39.73 2.04 1.75Q123 3.94 123 6.35q0 3.14 2.92 3.14 4.9 0 7.67-11.53.8-3.14 1.46-6.28-3.29 4.01-10.73 4.01-5.18 0-8.18-2.48-2.99-2.48-2.99-8.32 0-3.65 1.24-7.78 1.24-4.12 3.72-7.62zm9.49 15.62q0 4.96 2.56 4.96 1.75 0 3.43-1.9 1.31-1.53 1.82-3.79l3.73-18.76q-.37-.08-.73-.22-.73-.29-1.68-.29-4.45 0-7.08 7.3-2.05 5.69-2.05 12.7zm51.91-5.62q2.62-4.67 2.62-9.42 0-3.14-2.26-3.14-1.75 0-3.58 2.99-1.89 3-2.48 6.87L170.02 0l-15.11 1.46 7.44-38.69 12.05-1.46-1.32 7.37q3.58-7.37 11.61-7.37 4.23 0 6.53 2.19t2.3 6.68q0 4.49-2.95 7.34-2.96 2.84-8 2.84-2.19 0-3.06-.87zm18.36 18.32q-1.72-1.9-2.49-4.89-.76-2.99-.76-7.88 0-4.9 1.68-9.35 1.68-4.45 4.74-7.66 6.28-6.72 16.65-6.72 3.72 0 6.42 1.24l12.48-1.24-5.4 28.47q-.22.88-.22 2.48 0 1.61.99 2.63.98 1.02 2.44 1.17-.73 2.48-3.39 3.94-2.67 1.46-5.66 1.46t-5-1.13q-2.01-1.13-2.59-3.03-1.17 1.82-3.65 2.99-2.48 1.17-5.8 1.17-3.33 0-6.03-.88-2.7-.87-4.41-2.77zm15.4-29.64q-.84 1.32-1.57 3.54-.73 2.23-1.93 8.18-1.21 5.95-1.21 10.18 0 4.24.66 5.48.65 1.24 1.82 1.24 2.34 0 4.05-2.23 1.72-2.22 2.38-6.17L221.34-33q-1.54-1.31-3.33-1.31-1.78 0-2.84.58-1.06.59-1.9 1.9zm79.82 33.29q-8.83 0-8.83-6.86 0-2.99 1.28-8.8 1.28-5.8 1.71-8.14 1.03-5.33 1.03-7.01 0-3.72-2.78-3.72-1.82 0-3.57 2.52-1.76 2.52-2.56 7.56L274.84 0l-14.23 1.46 3.94-19.86q.66-3.28 1.24-7 .59-3.73.59-4.31 0-3.36-2.49-3.36-1.67 0-3.5 2.48-1.82 2.49-2.85 7.6L253.09 0l-14.38 1.46 7.66-38.69 11.9-1.46-1.24 7.37q1.9-3.94 5.4-5.65 3.51-1.72 8.98-1.72 3.14 0 5.19 1.53 2.04 1.54 2.7 4.02 1.24-2.56 4.41-4.05 3.18-1.5 7.09-1.5 3.9 0 5.84.84 1.93.84 3.1 2.23 1.97 2.55 1.97 7.22 0 4.6-1.97 14.17-1.02 4.67-1.02 6.38 0 1.72.98 2.74.99 1.02 2.45 1.17-.73 2.48-3.25 3.94t-5.81 1.46z"
          fill="url(#prefix__editing-halftone-gradient)"
          transform="translate(98.67 106.645)"
        />
      </g>
      <style />
    </LogoStyled>
  );
};

export default Logo;
