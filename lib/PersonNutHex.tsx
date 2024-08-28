import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const PersonNutHex = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M7 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.5 1.299c0-.43-.36-.774-.785-.724C2.473 8.955 0 10.728 0 12.5A2.5 2.5 0 0 0 2.5 15h3.25a.75.75 0 0 0 0-1.5H2.5a1 1 0 0 1-1-1c0-.205.22-.809 1.32-1.459.765-.452 1.792-.813 2.969-.964.397-.051.711-.378.711-.778m6.373 5.201 1.406-2.5-1.406-2.5h-2.746L8.721 12l1.406 2.5zm2.713-1.765a1.5 1.5 0 0 0 0-1.47l-1.406-2.5A1.5 1.5 0 0 0 12.873 8h-2.746a1.5 1.5 0 0 0-1.307.765l-1.406 2.5a1.5 1.5 0 0 0 0 1.47l1.406 2.5a1.5 1.5 0 0 0 1.307.765h2.746a1.5 1.5 0 0 0 1.307-.765zM12.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(PersonNutHex);
export default ForwardRef;
