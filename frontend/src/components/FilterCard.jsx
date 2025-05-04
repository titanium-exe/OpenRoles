import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Surrey", "Vancouver", "Richmond", "Burnaby", "Coquitlam"],
  },
  {
    fitlerType: "Role",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    fitlerType: "Salary",
    array: ["0k-40k", "42k-80k", "100k-150k"],
  },
];

const FilterCard = () => {
  return (
    <div>
      <h1>Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {fitlerData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.fitlerType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
