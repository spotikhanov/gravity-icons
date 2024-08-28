import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const SquareListUl = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm4.75.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1 0A.75.75 0 0 1 8 4.5h2.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M5.25 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 1.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 7.25a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 0-1.5zm-.75 3.5A.75.75 0 0 1 8 10h2.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SquareListUl);
export default ForwardRef;
