import React from 'react'
import SearchCardLoading from './SearchCardLoading'

export default (props)=>(props.state=='LOADING'? <SearchCardLoading/> : <h1>Result</h1>)
