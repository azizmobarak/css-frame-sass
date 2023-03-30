import React from 'react';

type Props = {
    title: string;
    image: string;
    bottomText: string;
    width?: number;
}

export default function BroweFile(props: Props) {
    return (
        <>
            <div className='w-100 flex-start ml-15'>
                <p>{props.title}</p>
            </div>
            <div style={{ width: props.width }} className='image-drag-area flex-column flex-center w-75 h-75'>
                <img src={props.image} alt='upload' />
                <p className='image-small-gray-text w-75'>{props.bottomText}
                    Or <a href='any'>browse files</a></p>
            </div>
        </>

    )
}
