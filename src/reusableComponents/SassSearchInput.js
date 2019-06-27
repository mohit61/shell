import React, {Component, useState} from 'react'

export default (props)=>{
    const[result, setResult] = useState([])

    function onClickedSearch(e){
        console.log('hi')
        e.preventDefault()
        console.log(result)
        console.log(props)
        props.searchRequested({text:'search query', type:['text', 'image']})
    }

    function onChangeSearchQuery(e){
        console.log(e.target.value)
    }

    return(
        <div class="feed-container">
            <form class="search-input-container">
                <div class="search-input-query-container">
                    <input type="text" id="text-query" onChange={onChangeSearchQuery}/>
                    <p> or </p>
                    <input type="file" id="file-upload"/>
                </div>
        
        
                <div class="search-options-container">
                <p>include</p>
                <input type="checkbox" id="text"/>
                <label for="text">text</label>
                <input type="checkbox" id="image"/>
                <label for="image">image</label>
                <input type="checkbox" id="video"/>
                <label for="video">video</label>
                </div>

                <button className="primary-button" onClick={onClickedSearch}>Search</button>
            </form>
      </div>
    )
}