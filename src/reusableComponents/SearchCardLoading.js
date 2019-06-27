import React from 'react';
import PropTypes from 'prop-types';

const SearchCardLoading = props => {
    return (
        <div class="feed-container-flex">
            {[1,2,3,4,5,6,7,8].map((i,index)=>(
                <div class="search-card-container-empty" key={index}>
                    <div class="empty-card-gradient"></div>
                </div>
            ))}
            
        </div>
    );
};

SearchCardLoading.propTypes = {
    
};

export default SearchCardLoading;