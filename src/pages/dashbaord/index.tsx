import React from 'react'
import Wrapper from '../../components/wrapper/wrapper'
import Header from '../../components/titleHeader/header'
import ContentGrid from '../../components/dashbaordContentgrid'

export default function DashBaord() {
    return (
        <Wrapper headerChildren={<Header />} mainChildren={<ContentGrid/>} />
    )
}
