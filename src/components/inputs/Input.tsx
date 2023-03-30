import React from 'react'

type Props = {
    placeHolder: string;
    value: string;
}

export default function Input(props: Props) {
    return (
        <input placeholder={props.placeHolder} />
    )
}
