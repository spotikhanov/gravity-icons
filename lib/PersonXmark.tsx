import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PersonXmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1 1.225a.71.71 0 0 0-.679-.72A11 11 0 0 0 8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h8.75a.75.75 0 0 0 0-1.5H3.5a1 1 0 0 1-1-1c0-.204.22-.809 1.32-1.459C4.838 10.44 6.32 10 8 10q.088 0 .175.002c.442.008.825-.335.825-.777m4-.286-.97-.97a.75.75 0 1 0-1.06 1.061l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97.97-.97a.75.75 0 0 0-1.06-1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(PersonXmark);
export default ForwardRef;
