import React from 'react';
import './dropDown.scss';

interface SelectContent {
    icon?: any;
    text: string
}

type Props = {
    title: string;
    text?: string;
    width: number;
    content: SelectContent[];
}

export default function DropDown(props: Props) {

    const getSelectContent = () => props.content.map(content =>
        <option value={content.text}>
            <div className='flex-row space-around'>
                <img src={content.icon} width={30} alt={content.text} />
                <p>{content.text}</p>
            </div>
        </option>)

    return (
        <div style={{ width: props.width}} className='flex-column flex-start ml-15'>
            <div className='flex-row space-between w-100'>
                <p className='drp-title'>{props.title}</p>
                {props.text && <p className='drp-text-button'>{props.text}</p>}
            </div>
            <select className='w-100 drp-select'>
                {getSelectContent()}
            </select>
        </div>
    )
}
