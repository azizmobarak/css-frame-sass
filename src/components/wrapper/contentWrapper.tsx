import React from 'react';

type Props = {
    children: React.ReactElement;
}

export default function ContentWrapper(props: Props) {
    return (
        <div className='flex-row align-items-center h-75 w-60'>
            {props.children}
        </div>
    )
}
