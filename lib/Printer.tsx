import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Printer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M10.75 2.5h-5.5a.75.75 0 0 0-.75.75V4h7v-.75a.75.75 0 0 0-.75-.75M13 4v-.75A2.25 2.25 0 0 0 10.75 1h-5.5A2.25 2.25 0 0 0 3 3.25V4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1h1a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-9 6v.5H3A1.5 1.5 0 0 1 1.5 9V7A1.5 1.5 0 0 1 3 5.5h10A1.5 1.5 0 0 1 14.5 7v2a1.5 1.5 0 0 1-1.5 1.5h-1V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m6-.5H6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5m2.5-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Printer);
export default ForwardRef;
