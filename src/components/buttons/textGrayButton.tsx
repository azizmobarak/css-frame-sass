import React from 'react'

type Props = {
    width: number;
    height: number;
    title: string;
    cssClass?: string;
}

export default function TextGrayButton({ width, height, title, cssClass }: Props) {
    const getClassName = (): string => cssClass ?? '';
    return (
        <button className={getClassName()} style={getStyle(width, height)}>{title}</button>
    )
}

const getStyle = (width: number, height: number): React.CSSProperties => ({
    width,
    height,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: 'GrayText',
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'normal',
})
