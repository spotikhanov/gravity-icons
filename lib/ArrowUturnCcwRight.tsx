import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ArrowUturnCcwRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.53 11.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06L11.19 10H7a3.25 3.25 0 0 1 0-6.5h1A.75.75 0 0 0 8 2H7a4.75 4.75 0 0 0 0 9.5h4.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ArrowUturnCcwRight);
export default ForwardRef;
