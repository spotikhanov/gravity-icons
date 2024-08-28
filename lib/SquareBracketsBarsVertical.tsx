import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const SquareBracketsBarsVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.5 4.25a.75.75 0 0 1 .75-.75h1.01a.75.75 0 0 0 0-1.5H3.25A2.25 2.25 0 0 0 1 4.25v7.5A2.25 2.25 0 0 0 3.25 14h1.01a.75.75 0 0 0 0-1.5H3.25a.75.75 0 0 1-.75-.75zM11.74 2a.75.75 0 0 0 0 1.5h1.01a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-1.01a.75.75 0 0 0 0 1.5h1.01A2.25 2.25 0 0 0 15 11.75v-7.5A2.25 2.25 0 0 0 12.75 2zM8.75 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0zm2-.75a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75M6 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(SquareBracketsBarsVertical);
export default ForwardRef;
