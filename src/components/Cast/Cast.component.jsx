import React from "react";

const Cast = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={props.image}
            alt="cast"
            className="w-full h-full rounded-full"
          />
        </div>
        <h4 className="text-xl text-gray-800">{props.castName}</h4>
        <h5 className="text-sm  text-gray-500">as {props.role}</h5>
      </div>
    </div>
  );
};

export default Cast;
//"https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ajay-devgn-24051-12-09-2017-04-41-13.jpg"
