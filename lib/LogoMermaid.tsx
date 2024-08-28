import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const LogoMermaid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.5 12.5A1.5 1.5 0 0 1 10 14H6a1.5 1.5 0 0 1-1.5-1.5v-.823a3.11 3.11 0 0 0-1.35-2.566A6.11 6.11 0 0 1 .5 4.073V3A1.5 1.5 0 0 1 2 1.5h.666A6.43 6.43 0 0 1 8 4.343 6.43 6.43 0 0 1 13.334 1.5H14A1.5 1.5 0 0 1 15.5 3v1.073a6.11 6.11 0 0 1-2.65 5.038 3.11 3.11 0 0 0-1.35 2.566zm-8-9.43a4.92 4.92 0 0 1 3.738 3.025c.275.688 1.249.688 1.524 0A4.92 4.92 0 0 1 13.334 3H14v1.073q0 .215-.02.427A4.61 4.61 0 0 1 12 7.875c-1.252.86-2 2.283-2 3.802v.823H6v-.823c0-1.52-.748-2.941-2-3.802a4.61 4.61 0 0 1-2-3.802V3h.666q.425 0 .834.07"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(LogoMermaid);
export default ForwardRef;
