import React from 'react'

export default function ContentGrid() {
    return (
        <div style={{ border: '1px solid' }} className='w-100 h-100 flex-column'>
            <div className='w-100 flex-row align-items-center justify-content-center'>
                <div className='w-50 align-items-center justify-content-center'>
                    <p>one</p>
                </div>
                <div className='w-30 align-items-center justify-content-center'>
                    <p>tow</p>
                </div>
                <div className='w-20 align-items-center justify-content-center'>
                    <p>three</p>
                </div>
            </div>
        </div>
    )
}
