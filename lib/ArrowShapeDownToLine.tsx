import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ArrowShapeDownToLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M6.5 6H4.029l3.499 4.276a.61.61 0 0 0 .944 0L11.971 6H9.5V2.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25zm1.498 7.5H1.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0-1.5a2.11 2.11 0 0 1-1.631-.774L2.833 6.907A1.474 1.474 0 0 1 3.973 4.5H5V2.75C5 1.784 5.784 1 6.75 1h2.5c.966 0 1.75.784 1.75 1.75V4.5h1.026a1.474 1.474 0 0 1 1.14 2.407l-3.533 4.319c-.4.49-1 .774-1.632.774H8"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ArrowShapeDownToLine);
export default ForwardRef;
