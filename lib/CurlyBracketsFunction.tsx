import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const CurlyBracketsFunction = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M4.25 2.5a.84.84 0 0 0-.837.921l.2 2.096A2.4 2.4 0 0 1 2.04 8a2.4 2.4 0 0 1 1.571 2.483l-.2 2.096a.84.84 0 0 0 .838.921.75.75 0 0 1 0 1.5 2.34 2.34 0 0 1-2.33-2.563l.199-2.096a.9.9 0 0 0-.677-.957l-.139-.035a1.39 1.39 0 0 1 0-2.698l.14-.035a.9.9 0 0 0 .676-.957l-.2-2.096A2.34 2.34 0 0 1 4.25 1a.75.75 0 0 1 0 1.5m4.805 2.639a.78.78 0 0 1 .989-.668.75.75 0 1 0 .412-1.442 2.28 2.28 0 0 0-2.892 1.953L7.456 6H6.5a.75.75 0 0 0 0 1.5h.798l-.353 3.361a.78.78 0 0 1-.989.668.75.75 0 1 0-.412 1.442 2.28 2.28 0 0 0 2.892-1.953l.37-3.518h.944a.75.75 0 0 0 0-1.5h-.785zm3.533 7.44a.84.84 0 0 1-.838.921.75.75 0 0 0 0 1.5 2.34 2.34 0 0 0 2.33-2.563l-.199-2.096a.9.9 0 0 1 .677-.957l.139-.035a1.39 1.39 0 0 0 0-2.698l-.14-.035a.9.9 0 0 1-.676-.957l.2-2.096A2.34 2.34 0 0 0 11.75 1a.75.75 0 0 0 0 1.5c.496 0 .884.427.838.921l-.2 2.096A2.4 2.4 0 0 0 13.959 8a2.4 2.4 0 0 0-1.571 2.483z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(CurlyBracketsFunction);
export default ForwardRef;
