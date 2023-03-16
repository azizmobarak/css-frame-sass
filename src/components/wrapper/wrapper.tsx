import React from 'react'
import ContentWrapper from './contentWrapper';

type Props = {
    headerChildren: React.ReactElement;
    mainChildren: React.ReactElement;
}

export default function Wrapper(props: Props) {
    return (
        <div className='wrapper'>
            {props.headerChildren}
            <br/>
            <ContentWrapper>
                {props.mainChildren}
            </ContentWrapper>
        </div>
    )
}
