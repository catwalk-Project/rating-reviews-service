import React from 'react';
import ReactStars from 'react-stars';


function getAverage(reviews) {
    if (reviews.length === 0) {
        return false
    }
    let sum = 0;
    for (let review of reviews) {
        sum += review.rating
    }
    return sum / reviews.length
}
export const Average = ({ reviews }) => {
    const avg = getAverage(reviews)
    return (
        <div className="grid grid-rows-2 gap-4">
            <div className="flex">
                <div className="flex-1">
                    <p className="text-7xl ml-6 font-extrabold text-gray-600">{avg}</p>
                </div>
                
                <div className="flex-1 mr-20">
                    <ReactStars
                        count={5}
                        value={avg}
                        size={24}
                        color2={'#ffd700'} />
                </div>
                </div>
                <div>
                <p className="text-gray-400 ml-8">{avg} % of reviews recommend this product</p>
                </div>
                
        </div>
    )
}
