import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CircleLetterW = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.712 5.763a.75.75 0 1 0-1.424.474l1.5 4.5a.75.75 0 0 0 1.424 0L8 8.372l.788 2.365a.75.75 0 0 0 1.423 0l1.5-4.5a.75.75 0 1 0-1.422-.474L9.5 8.128l-.788-2.365a.75.75 0 0 0-1.424 0L6.5 8.128z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CircleLetterW);
export default ForwardRef;
