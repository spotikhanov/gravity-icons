import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Rocket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.37 1.268a.75.75 0 0 0-.62-.634 7.75 7.75 0 0 0-7.516 3.055l-.156.212-2.59.112a.75.75 0 0 0-.433.16L.696 6.827a.75.75 0 0 0 .206 1.292L4.25 9.352c.673.273 1.13.56 1.484.913.352.353.64.811.913 1.484l1.234 3.35a.75.75 0 0 0 1.292.205l2.652-3.36a.75.75 0 0 0 .16-.431l.113-2.591.212-.156a7.75 7.75 0 0 0 3.058-7.498M4.794 5.501l1.144-.05-1.69 2.302-1.572-.58zm4.032 7.822-.58-1.572 2.302-1.69-.05 1.145zm5.127-11.277a6.25 6.25 0 0 0-5.511 2.531l-2.78 3.786c.425.237.8.51 1.132.842s.606.707.842 1.133l3.786-2.78a6.25 6.25 0 0 0 2.53-5.512M2.378 13.952a5 5 0 0 1-.377.053q.018-.18.05-.366c.104-.59.294-1.014.527-1.247.244-.244.694-.274 1.004.036s.281.76.036 1.005c-.223.223-.644.413-1.24.519M.48 15.069a8 8 0 0 1 .025-1.18c.082-.838.33-1.876 1.012-2.557.853-.854 2.253-.838 3.126.035.873.874.89 2.273.036 3.126-1.082 1.082-3.112 1.068-3.735 1.036a.5.5 0 0 1-.319-.145.5.5 0 0 1-.145-.316"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
const ForwardRef = forwardRef(Rocket);
export default ForwardRef;
