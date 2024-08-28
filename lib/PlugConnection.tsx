import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PlugConnection = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M15.53 1.53A.75.75 0 0 0 14.47.47l-1.29 1.29a4.24 4.24 0 0 0-5.423.483l-.58.58a.96.96 0 0 0 0 1.354l4.646 4.646a.96.96 0 0 0 1.354 0l.58-.58a4.24 4.24 0 0 0 .484-5.423zm-8.5 4.94a.75.75 0 0 1 0 1.06L5.78 8.78l1.44 1.44 1.25-1.25a.75.75 0 0 1 1.06 1.06l-1.25 1.25.543.543a.96.96 0 0 1 0 1.354l-.58.58a4.24 4.24 0 0 1-5.423.484l-1.29 1.29A.75.75 0 0 1 .47 14.47l1.29-1.29a4.24 4.24 0 0 1 .483-5.423l.58-.58a.96.96 0 0 1 1.354 0l.543.543 1.25-1.25a.75.75 0 0 1 1.06 0M3.5 8.62l-.197.197a2.743 2.743 0 0 0 3.879 3.879l.197-.197zm9.197-1.439-.197.197L8.621 3.5l.197-.197a2.743 2.743 0 0 1 3.879 3.879"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(PlugConnection);
export default ForwardRef;
