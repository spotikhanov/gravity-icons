import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const QrCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M8.75 2.25a.75.75 0 0 0-1.5 0v5h-5a.75.75 0 0 0 0 1.5h5.5a1 1 0 0 0 1-1zM7.25 11a1 1 0 0 1 1-1H11a.75.75 0 0 1 0 1.5H8.75v2.25a.75.75 0 0 1-1.5 0zM13 13h-2.25a.75.75 0 0 0 0 1.5h2.75a1 1 0 0 0 1-1V8.25a1 1 0 0 0-1-1h-2.75a.75.75 0 0 0 0 1.5H13zM3 4.5V3h1.5v1.5zm-1.5-2a1 1 0 0 1 1-1H5a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H2.5a1 1 0 0 1-1-1zm1.5 9V13h1.5v-1.5zM2.5 10a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1H5a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm9-5.5V3H13v1.5zm-1.5-2a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1V5a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(QrCode);
export default ForwardRef;
