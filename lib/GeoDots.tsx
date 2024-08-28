import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const GeoDots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.293 3H4.5a1.5 1.5 0 0 0-1.41.987L7 6.475a2.5 2.5 0 0 1 2.654-2.47zM8.41 8.751a2.5 2.5 0 0 0 2.667-4.19l.935-1.47A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5H5.707zM3 5.707V11.5c0 .648.411 1.2.987 1.41l.963-1.514A1.5 1.5 0 1 1 6.531 8.91l.434-.68zM1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(GeoDots);
export default ForwardRef;
