import * as React from 'react';
import {SVGProps} from 'react';
const ArrowShapeDownFromLine = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M6.5 9H4.029l3.499 4.276a.61.61 0 0 0 .944 0L11.971 9H9.5V5.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25V9Zm2.75-5H6.749A1.75 1.75 0 0 0 5 5.75V7.5H3.974a1.474 1.474 0 0 0-1.14 2.407l3.533 4.319a2.11 2.11 0 0 0 3.266 0l3.534-4.319a1.474 1.474 0 0 0-1.14-2.407H11V5.75A1.75 1.75 0 0 0 9.25 4Zm-7.5-1.5a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5H1.75Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowShapeDownFromLine;
