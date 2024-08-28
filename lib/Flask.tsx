import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const Flask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.494 13.2c.837-.482 1.006-.946 1.006-1.2 0-.35-.105-.692-.303-.981L9.072 6.435a1.85 1.85 0 0 1-.322-1.044V2.909C8.518 2.968 8.265 3 8 3s-.518-.032-.75-.09v2.48c0 .373-.112.737-.322 1.045L3.803 11.02c-.198.289-.303.63-.303.981 0 .254.169.718 1.006 1.2.813.468 2.043.8 3.494.8s2.68-.332 3.494-.8M8 .5c2 0 2.25 1 2.25 1.5v3.39q0 .11.062.2l3.125 4.584c.367.538.563 1.175.563 1.826 0 2-2.686 3.5-6 3.5S2 14 2 12c0-.652.196-1.288.563-1.826L5.69 5.59a.35.35 0 0 0 .061-.2V2C5.75 1.5 6 .5 8 .5m.084 7.626a.75.75 0 0 1 1.04.208l1.5 2.25a.75.75 0 1 1-1.248.832l-1.5-2.25a.75.75 0 0 1 .208-1.04"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(Flask);
export default ForwardRef;
