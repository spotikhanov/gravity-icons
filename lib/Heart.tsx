import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Heart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M1.633 2.796c.762-.837 1.85-1.297 3.127-1.297 1.164 0 2.407.55 3.24 1.626.828-1.075 2.066-1.626 3.24-1.626 1.274 0 2.36.458 3.124 1.293.756.828 1.136 1.962 1.136 3.22 0 2.166-1.113 3.909-2.522 5.264-1.405 1.352-3.17 2.383-4.633 3.14a.75.75 0 0 1-.693-.002c-1.463-.765-3.228-1.788-4.633-3.133C1.61 9.93.5 8.193.5 6.013c0-1.255.378-2.389 1.133-3.217m1.109 1.01C2.287 4.306 2 5.053 2 6.013c0 1.624.816 2.996 2.057 4.184 1.146 1.098 2.6 1.985 3.945 2.705 1.335-.71 2.79-1.604 3.937-2.707C13.182 8.998 14 7.62 14 6.013c0-.963-.288-1.71-.744-2.21C12.808 3.314 12.14 3 11.24 3c-.976 0-2.093.628-2.527 1.95a.75.75 0 0 1-1.426 0C6.854 3.63 5.725 3 4.76 3c-.903 0-1.57.315-2.018.807"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Heart);
export default ForwardRef;
