import React from 'react';
import moment from 'moment';
import ReactStars from 'react-stars';

const Reviews = (props) => (
  <div className="">
    {console.log(props)}
    <div className="font-serif text-lg ml-96 py-8 ">
       {props.data.results.length} reviews, sorted by
       <select>
         <option>relevence</option>
         <option>helpful</option>
         <option>Newest</option>
       </select>
     </div>
    <div>
      <div className="inline-block">
        {console.log(props.data.results)}
        {props.data.results &&
          props.data.results.filter((e,i)=>i< props.count).map((review, index) => (
            <div key={index}>
              <li className="flex items-stretch ml-40 py-1 mt-1">
                 <div className="flex justify-center items-center mr-32">
                   <div className="flex items-center mt-2 mb-4">
                     <ReactStars
                       count={5}
                       value={review.rating}
                       size={24}
                       color2={"#ffd700"}
                     />
                   </div>
                 </div>
                 <span className="h-6 flex items-center sm:h-7">
                   <svg
                     className="flex-shrink-0 h-5 w-5 text-cyan-500"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                   >
                     <path
                       fillRule="evenodd"
                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                       clipRule="evenodd"
                     />
                   </svg>
                 </span>

                 <p className="ml-2 text-sm font-bold text-gray-300">
                   {review.reviewer_name},
                   {moment(review.date).format("MMM Do YY")}
                 </p>
               </li>
               <p className="font-serif text-lg ml-40">{review.summary}</p>
               <p className="text-gray-400 ml-40 py-12">{review.body}</p>
               <div className="text-gray-400 ml-40 ">
                 Helpful? <span className="underline">Yes</span> (
                 {review.helpfulness}) |{" "}
                 <span className="underline">Report</span>
               </div>
               <hr></hr>
            </div>
          )
          )
        }
      </div>
      <div className='flex w-3/5'>
        <div className={props.show}>
      <button onClick={() => props.addReview()} className="flex-1 text-black-700 font-semibold hover:text-black py-4 px-6 border border-black-500  rounded ml-40 mt-50">
         MORE REVIEWS
       </button>
       </div>
       <button className="flex-1 text-black-700 font-semibold hover:text-black py-4 px-6 border border-black-500 ml-4 rounded  mt-50">
         ADD A REVIEW +
       </button>
      </div>
      
    </div>
  </div>
);

export default Reviews;

