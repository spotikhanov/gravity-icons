import * as React from 'react';
import {SVGProps} from 'react';
const CommentFill = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13c3.866 0 7-2 7-6s-3.134-6-7-6-7 2-7 6c0 2.16.914 3.737 2.364 4.73l.09 2.161a1.157 1.157 0 0 0 1.857.872l2.322-1.77c.122.005.244.007.367.007Z"
            clipRule="evenodd"
        />
    </svg>
);
export default CommentFill;
