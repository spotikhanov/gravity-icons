import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const MathOperations = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.874 3.44a.75.75 0 1 0-1.061-1.06L11.75 3.44l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.062 1.06-1.062 1.063a.75.75 0 0 0 1.06 1.06l1.062-1.061 1.062 1.062a.75.75 0 0 0 1.06-1.061L12.813 4.5zm-11.625.31a.75.75 0 0 0 0 1.5H6.75a.75.75 0 1 0 0-1.5zm3.001 5.5a.75.75 0 0 0-1.5 0v1.501h-1.5a.75.75 0 0 0 0 1.5h1.5v1.502a.75.75 0 0 0 1.5 0V12.25h1.501a.75.75 0 0 0 0-1.5h-1.5zm4.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(MathOperations);
export default ForwardRef;
