import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const ObjectsAlignCenterVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M5.5 3H4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5m2 4.25V3.5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v3.75h-.25a.75.75 0 0 0 0 1.5H2v3.75a2 2 0 0 0 2 2h1.5a2 2 0 0 0 2-2V8.75h1V10a2 2 0 0 0 2 2H12a2 2 0 0 0 2-2V8.75h.25a.75.75 0 0 0 0-1.5H14V6a2 2 0 0 0-2-2h-1.5a2 2 0 0 0-2 2v1.25zM10 8v2a.5.5 0 0 0 .5.5H12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(ObjectsAlignCenterVertical);
export default ForwardRef;
