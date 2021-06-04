import React from 'react';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    // function getPercentage(completed) {
    //     console.log("za",completed)
    //     let sum = 0;
    //     for (let rating in completed) {
    //         sum += rating
    //     }
    // }

    return (
        // <div style={containerStyles}>
        //      <div style={fillerStyles}>
        //          <span style={labelStyles}>{`${completed}%`}</span>
        //      </div>

            <div>
            <div className="py-4 ml-8"> 
      <div className="flex items-stretch ">
         <p className="underline">5 stars</p>
       <div className="shadow w-10/12 bg-gray-200 ">
         <div className="bg-blue text-xs leading-none py-1 text-center text-gray-400" >   
         </div>
       </div>
      </div>
       <div className="flex items-stretch ">
         <p className="underline">4 stars</p>
         <div className="shadow w-10/12 bg-gray-200 mt-2">
         <div className="bg-teal text-xs leading-none py-1 text-center text-gray-400" >
         </div>
       </div>
          </div>
         <div className="flex items-stretch ">
         <p className="underline">3 stars</p>
       <div className="shadow w-10/12 bg-gray-200 mt-2">
         <div className="bg-orange text-xs leading-none py-1 text-center text-gray-400"  >
         </div>
       </div>
       </div>
       <div className="flex items-stretch ">
         <p className="underline">2 stars</p>
       <div className="shadow w-10/12 bg-gray-200 mt-2">
         <div className="bg-orange text-xs leading-none py-1 text-center text-gray-400" >
         </div>
       </div>
       </div>
       <div className="flex items-stretch ">
         <p className="underline">1 stars</p>
       <div className="shadow w-10/12 bg-gray-200 mt-2">
         <div className="bg-orange text-xs leading-none py-1 text-center text-gray-400" >
         </div>
       </div>
       </div>
      
     </div> 
       </div>
            // </div>
       
        
    );
};


export default ProgressBar;

