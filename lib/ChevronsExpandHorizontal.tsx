import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ChevronsExpandHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
                d="M11.891 3.58a.75.75 0 0 0-1.06 1.061L14.188 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L15.78 8.53a.75.75 0 0 0 0-1.06zM4.11 12.42a.75.75 0 0 0 1.06-1.061L1.811 8l3.353-3.354a.75.75 0 1 0-1.06-1.06L.22 7.47a.75.75 0 0 0 0 1.06z"
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
const ForwardRef = forwardRef(ChevronsExpandHorizontal);
export default ForwardRef;
