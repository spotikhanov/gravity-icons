import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CodeCompare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M9.22 14.03a.75.75 0 0 0 1.06-1.06l-.47-.47H10a3 3 0 0 0 1.507-.405A3 3 0 0 0 13 9.5V6.896h.003a2.7 2.7 0 0 0 .785-.366 2.75 2.75 0 1 0-2.288.366V9.5A1.5 1.5 0 0 1 10 11h-.19l.47-.47a.75.75 0 0 0-1.06-1.06l-.47.47-1.28 1.28a.75.75 0 0 0 0 1.06zM5.72 1.97a.75.75 0 0 1 1.06 0l.47.47 1.28 1.28a.75.75 0 0 1 0 1.06L6.78 6.53a.751.751 0 0 1-1.06-1.06L6.19 5H6a1.5 1.5 0 0 0-1.5 1.5v2.604a2.76 2.76 0 0 1 2 2.646 2.74 2.74 0 0 1-1.212 2.28l-.094.061A2.747 2.747 0 0 1 1 11.75a2.75 2.75 0 0 1 2-2.646V6.5a3 3 0 0 1 3-3h.19l-.47-.47a.75.75 0 0 1 0-1.06m-.908 9.121A1.25 1.25 0 0 1 5 11.75a1.25 1.25 0 1 1-.188-.659M11 4.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CodeCompare);
export default ForwardRef;
