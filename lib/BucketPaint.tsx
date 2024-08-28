import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const BucketPaint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="M11.773 7.412c-.064.064-.27.249-1.017-.027-.75-.277-1.706-.928-2.695-1.918-.99-.99-1.64-1.945-1.918-2.695-.276-.746-.091-.953-.027-1.017s.27-.249 1.017.027q.14.052.29.122c.7.323 1.54.93 2.405 1.796.99.99 1.641 1.945 1.918 2.695.276.747.091.953.027 1.017M7 6.528c.85.85 1.738 1.535 2.581 1.972H1.694v-.027a1.3 1.3 0 0 1 .1-.507l2.802-4.33.172-.26C5.16 4.383 5.956 5.485 7 6.529m3.89-3.889c2.147 2.148 3.24 4.537 1.944 5.834a13 13 0 0 1-2.127 1.719L6.352 13.01s-1.945 1.296-4.537-1.296C-.778 9.12.518 7.176.518 7.176l2.818-4.355A13 13 0 0 1 5.056.695C6.351-.602 8.74.49 10.888 2.639M12.75 15c.966 0 1.75-.766 1.75-1.71 0-1.234-1.17-2.76-1.512-3.18a.3.3 0 0 0-.237-.11.31.31 0 0 0-.24.112c-.34.422-1.511 1.96-1.511 3.178 0 .944.784 1.71 1.75 1.71"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(BucketPaint);
export default ForwardRef;
