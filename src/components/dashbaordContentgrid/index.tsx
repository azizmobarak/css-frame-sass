import React from 'react'
import DropDown from '../dropdown/DropDown'
import icon from '../../assets/images/flag.png'
import BroweFile from '../brwoseFile/BroweFile'
import GreenButton from '../buttons/GreenButton'

export default function ContentGrid() {
    return (
        <div className='w-100 h-60 flex-column'>
            <div className='w-100 flex-row flex-center space-around'>
                <div className='w-40 flex-center bg-white p-5 grid-top-boxs'>
                    <div className='w-100 h-100 flex-center flex-column p-5'>
                        <div className='w-100 flex-start flex-row'>
                            <DropDown content={[{ text: 'tteest1', icon: icon }, { text: 'teest 2' }]} width={160} title={'Category'} text='add new +' />
                            <DropDown content={[{ text: 'tteest1', icon: icon }, { text: 'teest 2' }]} width={200} title={'Topic'} text='add new +' />
                            <DropDown content={[{ text: 'tteest1', icon: icon }, { text: 'teest 2' }]} width={100} title={'Valid For'} />
                        </div>
                        <div className='w-100 flex-start flex-row'>
                            <DropDown content={[{ text: 'tteest1', icon: icon }, { text: 'teest 2' }]} width={300} title={'Topic'} text='add new +' />
                            <DropDown content={[{ text: 'tteest1', icon: icon }, { text: 'teest 2' }]} width={100} title={'Valid For'} />
                        </div>
                        <div className='w-100 align-item-center space-between flex-row'>
                            <div className='w-30 flex-column'>
                                <DropDown content={[{ text: 'tteest1', icon: icon }, { text: 'teest 2' }]} width={100} title={'Topic'} text='add new +' />
                                <DropDown content={[{ text: 'tteest1', icon: icon }, { text: 'teest 2' }]} width={100} title={'Valid For'} />
                            </div>
                            <textarea className='w-60' placeholder='' />
                        </div>
                    </div>
                </div>
                <div className='w-30 flex-column grid-top-boxs flex-center bg-white p-5'>
                    <BroweFile title='Image' image='' bottomText='Drag and drop your image here'/>
                    <p className='image-small-gray-text'>*Only JPG, PNG files are allowed. Image must be less than 2 MB</p>
                </div>
                <div className='w-20 flex-column flex-center bg-white'>
                    <BroweFile title='Training file' image='' bottomText='Drag and drop your image here' width={177} />
                    <GreenButton title='Completed' slug='workingAtHeight.pdf' sign='X'/>
                    <p className='image-small-gray-text'>*Only Video, PDF and SlideShow
                        files are allowed.</p>
                    <div className='flex-row flex-center w-100 space-around'>
                        <div className='w-40 divider'></div>
                        <p className='size-s'>OR</p>
                        <div className='w-40 divider'></div>
                    </div>
                    <div className='flex-start w-100 ml-5'>
                        <h2 className='h2-gray-light'>Media URL</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
