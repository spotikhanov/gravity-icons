import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Heading5 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M2.5 4.25a.75.75 0 0 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 0 0-1.5 0v3h-4zm8-.75a1.25 1.25 0 0 0-1.25 1.25V7.5a.75.75 0 0 0 1.221.584l.033-.022c.04-.024.118-.067.236-.112.235-.091.643-.2 1.26-.2.892 0 1.534.751 1.534 1.75 0 .366-.139.735-.413 1.01-.265.268-.7.49-1.371.49-.568 0-.905-.184-1.094-.336a1.2 1.2 0 0 1-.24-.26l-.002-.003a.75.75 0 0 0-1.335.684l.671-.335-.67.336v.003l.003.003.004.01.012.02.034.06q.042.071.119.174c.102.136.254.31.467.48.436.348 1.099.664 2.031.664 1.027 0 1.86-.352 2.437-.933a2.94 2.94 0 0 0 .847-2.067c0-1.591-1.096-3.25-3.034-3.25a5.6 5.6 0 0 0-1.25.133V5H14a.75.75 0 0 0 0-1.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Heading5);
export default ForwardRef;
