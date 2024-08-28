import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Server = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4 3.5h8A1.5 1.5 0 0 1 13.5 5v2.25h-11V5A1.5 1.5 0 0 1 4 3.5M2.5 8.75V11A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V8.75zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm2.75.5a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5H7a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Server);
export default ForwardRef;
