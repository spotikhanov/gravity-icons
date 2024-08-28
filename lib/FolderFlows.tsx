import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const FolderFlows = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m6.44 4.06.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm8.25 2.75A.25.25 0 0 1 9 7h1a.75.75 0 0 0 0-1.5H9a1.75 1.75 0 0 0-1.75 1.75v.5H6a.75.75 0 1 0 0 1.5h1.25v.5c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 0 0-1.5H9a.25.25 0 0 1-.25-.25v-.5H10a.75.75 0 0 0 0-1.5H8.75z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(FolderFlows);
export default ForwardRef;
