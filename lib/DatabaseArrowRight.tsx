import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const DatabaseArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.5 4c0 .174-.071.513-.885.888S8.538 5.5 7 5.5s-2.799-.237-3.615-.612C2.57 4.513 2.5 4.174 2.5 4s.071-.513.885-.888S5.462 2.5 7 2.5s2.799.237 3.615.612c.814.375.885.714.885.888M3.385 8.888C2.578 8.516 2.5 8.179 2.5 8V6.123C3.6 6.708 5.208 7 7 7s3.4-.292 4.5-.877V7.25a.75.75 0 0 0 1.5 0V4c0-2-2.686-3-6-3S1 2 1 4v8c0 .995.665 1.747 1.757 2.25l.314-.681-.314.681c1.086.5 2.586.75 4.243.75q.132 0 .263-.002a.75.75 0 0 0-.025-1.5L7 13.5c-1.538 0-2.799-.236-3.615-.613-.807-.371-.885-.708-.885-.887v-1.877q.125.066.257.127c1.086.5 2.586.75 4.243.75q.134 0 .266-.002a.75.75 0 1 0-.024-1.5L7 9.5c-1.538 0-2.799-.237-3.615-.612M13.78 14.53a.75.75 0 1 1-1.06-1.06l.72-.72H10a.75.75 0 0 1 0-1.5h3.44l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(DatabaseArrowRight);
export default ForwardRef;
