import React from "react";

//Component
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  return (
    <>
      <div className="conatiner mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Ahmedabad</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNiBEZWM%3D,ots-30,otc-FFFFFF,oy-620,ox-24:q-80/et00121990-kfvkslmhxk-portrait.jpg"
                  title="Ek Room Rasodu"
                  subtitle="Thakorbhai Desai Hall: Ahmedabad &bull; Gujarati &bull; ₹250 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNiBEZWM%3D,ots-30,otc-FFFFFF,oy-620,ox-24:q-80/et00121990-kfvkslmhxk-portrait.jpg"
                  title="Ek Room Rasodu"
                  subtitle="Thakorbhai Desai Hall: Ahmedabad &bull; Gujarati &bull; ₹250 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNiBEZWM%3D,ots-30,otc-FFFFFF,oy-620,ox-24:q-80/et00121990-kfvkslmhxk-portrait.jpg"
                  title="Ek Room Rasodu"
                  subtitle="Thakorbhai Desai Hall: Ahmedabad &bull; Gujarati &bull; ₹250 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNiBEZWM%3D,ots-30,otc-FFFFFF,oy-620,ox-24:q-80/et00121990-kfvkslmhxk-portrait.jpg"
                  title="Ek Room Rasodu"
                  subtitle="Thakorbhai Desai Hall: Ahmedabad &bull; Gujarati &bull; ₹250 onwards"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-3/12">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={[
                  "Gujarati",
                  "English",
                  "Hindi",
                  "Urdu",
                  "Tamil",
                  "Telugu",
                  "Malayalam",
                ]}
              />
              <PlaysFilter title="Categories" tags={["Theatre"]} />
              <PlaysFilter title="Genre" tags={["Drama", "Comedy"]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
