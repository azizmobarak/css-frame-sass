import React from 'react'

type Props = {
    width: number;
    height: number;
    title: string;
}

export default function OrangeButton({ width, height, title }: Props) {
    return (
        <button style={getStyle(width, height)}>{title}</button>
    )
}

const getStyle = (width: number, height: number): React.CSSProperties => ({
    width,
    height,
    border: 'none',
    outline: 'none',
    backgroundColor: '#EB7421',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'normal',
})
