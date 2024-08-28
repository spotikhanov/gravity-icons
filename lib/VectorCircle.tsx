import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const VectorCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8 5.5a2.74 2.74 0 0 1-1.444-.409 2.76 2.76 0 0 1-.914-.925c-.6.37-1.106.877-1.476 1.476a2.75 2.75 0 0 1 0 4.716c.37.6.877 1.106 1.476 1.476a2.75 2.75 0 0 1 4.716 0c.6-.37 1.106-.876 1.476-1.476l-.028-.017a2.748 2.748 0 0 1 .028-4.699 4.5 4.5 0 0 0-1.476-1.476l-.017.028A2.75 2.75 0 0 1 8 5.5m2.749-2.835a2.75 2.75 0 0 0-5.498 0 6.03 6.03 0 0 0-2.586 2.586 2.75 2.75 0 0 0 0 5.498 6.03 6.03 0 0 0 2.586 2.586 2.749 2.749 0 0 0 5.09 1.359c.245-.398.393-.862.408-1.36a6.03 6.03 0 0 0 2.586-2.585A2.75 2.75 0 0 0 16 8a2.75 2.75 0 0 0-2.665-2.749 6.03 6.03 0 0 0-2.586-2.586M9.25 2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M4 8a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 4 8m5.25 5.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4-4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(VectorCircle);
export default ForwardRef;
