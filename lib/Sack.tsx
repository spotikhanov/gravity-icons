import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Sack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
                d="M5.042.156a.75.75 0 0 1 .83-.057c.832.475 1.507.75 2.156.886.644.134 1.304.139 2.116.023a.75.75 0 0 1 .83.94l-.562 2.06C12.957 5.758 14 10.142 14 12.75c0 2-3 3.25-6 3.25s-6-1.25-6-3.25c0-2.608 1.044-6.995 3.592-8.745L4.775.943a.75.75 0 0 1 .267-.787M7.992 5.6c.536.005 1.044-.116 1.605-.332.55.385 1.047.983 1.486 1.785a3.9 3.9 0 0 1-2.96.706.75.75 0 1 0-.246 1.48 5.4 5.4 0 0 0 3.83-.793c.543 1.494.793 3.122.793 4.303 0 .15-.114.568-1.046 1.033-.875.438-2.136.717-3.454.717s-2.579-.279-3.454-.717C3.614 13.318 3.5 12.9 3.5 12.75c0-.41.03-.874.092-1.368a8.15 8.15 0 0 0 5.251 1.112.75.75 0 1 0-.186-1.488c-1.719.215-3.356-.225-4.768-1.219.199-.808.477-1.627.84-2.37.485-.989 1.047-1.71 1.678-2.15.549.2 1.053.329 1.586.334M6.646 2.135l.479 1.793c.364.12.633.17.882.173.247.002.513-.042.87-.166l.368-1.347a6.7 6.7 0 0 1-2.599-.453"
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
const ForwardRef = forwardRef(Sack);
export default ForwardRef;
