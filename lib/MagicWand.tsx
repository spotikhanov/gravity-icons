import * as React from 'react';
import type {SVGProps} from 'react';
import {Ref, forwardRef} from 'react';
const MagicWand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d="m11.1 5.894-.412.903.671.732 1.356 1.48-1.994-.227-.986-.113-.49.864-.987 1.747-.4-1.967-.198-.972-.973-.198-1.966-.4 1.746-.989.864-.489-.112-.986-.227-1.994L8.47 4.641l.732.67.903-.411 1.826-.832zM7.02 1.276l2.465 2.26 3.043-1.387c.842-.384 1.708.483 1.325 1.324l-1.387 3.043 2.259 2.465c.625.682.069 1.774-.85 1.67l-3.323-.38-1.646 2.911c-.456.805-1.666.613-1.85-.293l-.667-3.277-3.277-.666c-.906-.185-1.098-1.395-.293-1.85l2.91-1.647-.378-3.322c-.105-.92.987-1.476 1.669-.85M5.53 11.53a.75.75 0 1 0-1.06-1.06l-3.5 3.5a.75.75 0 1 0 1.06 1.06z"
            clipRule="evenodd"
        />
    </svg>
);
const ForwardRef = forwardRef(MagicWand);
export default ForwardRef;
