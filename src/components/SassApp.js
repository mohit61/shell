import React, {Component} from 'react'
import SassSearchInput from '../reusableComponents/SassSearchInput'
import SearchResultFeed from '../reusableComponents/SearchResultFeed'
import {useSelector, useDispatch} from 'react-redux'
import controller from './SearchApp.controller'
const test = new controller()

export default ()=>{
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()
    console.log('--')
    console.log(test)

    return(
        <div className="content-container">
            <div className="sidenav-container">
                <div className="app-logo-container">
                    <img className="logo" src="http://blog.tattle.co.in/content/images/2019/06/xmonogram.png.pagespeed.ic.W0h-PgH2Ps.webp"/>
                    <h1>Tattle</h1>
                </div>

                <div className="label-icon-container">
                        <i className="material-icons md-18">cloud</i>
                        <h2>Posts</h2>
                </div>

                <div className="label-icon-container">
                    <i className="material-icons md-18">search</i>
                    <h2>Search</h2>
                </div>

                <div className="label-icon-container">
                    <i className="material-icons md-18">face</i>
                    <h2>Users</h2>
                </div>

            </div>

            <div className="main-content-container">
                <SassSearchInput {...test.getMethods()}></SassSearchInput>
                <SearchResultFeed state='LOADING'></SearchResultFeed>
            </div>

        </div>
    )
}