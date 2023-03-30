import React from 'react'


type Props = {
    title: string;
    slug: string;
    sign: string;
}

export default function GreenButton({ title, sign, slug }: Props) {
    return (
        <button style={getStyle(177, 37)} className='flex-row space-between align-items-center bg-green m-5'>
            <div className='text-align-start'>
                <p className='size-m color-w'>{title + '\n' + slug}</p>
            </div>
            <div className='bg-white p-5 border-raduis-circle'>
                <span className='color-lg size-b mb-5 t0'>{sign}</span>
            </div>
        </button>
    )
}


const getStyle = (width: number, height: number): React.CSSProperties => ({
    width,
    height,
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
    borderRadius: 5,
})
