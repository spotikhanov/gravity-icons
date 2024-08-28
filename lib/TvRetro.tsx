import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const TvRetro = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.086.782a.75.75 0 0 0-1.172.937L5.94 3H4a3 3 0 0 0-3 3v5a3 3 0 0 0 2.79 2.993l-.21.421a.75.75 0 0 0 1.34.671l.5-1A1 1 0 0 0 5.458 14h5.086q.015.043.036.085l.5 1a.75.75 0 0 0 1.342-.67l-.211-.422A3 3 0 0 0 15 11V6a3 3 0 0 0-3-3h-1.94l1.026-1.281A.75.75 0 0 0 9.914.782L8.14 3h-.28zM7.494 4.5H12A1.5 1.5 0 0 1 13.5 6v5a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V6A1.5 1.5 0 0 1 4 4.5zM5.5 7.5v2H8v-2zM5 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm7 .75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(TvRetro);
export default ForwardRef;
