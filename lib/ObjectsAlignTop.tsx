import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ObjectsAlignTop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1.75 2a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zM5.5 6.5H4a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M4 5a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm8 1.5h-1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M10.5 5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2H12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ObjectsAlignTop);
export default ForwardRef;
