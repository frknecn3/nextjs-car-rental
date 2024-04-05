"use client";
import { Option } from "@/types";
import { handleInput, handleSelect, selectOptions } from "@/utils/utils";
import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import ReactSelect, {} from "react-select";

type SearchButtonProps = {
  design?: string;
};

const SearchBar = () => {

  const [input,setInput] = useState<string>('')
  const [select,setSelect] = useState<string>('')
  const dispatch = useDispatch()

  const handleInputChange: FormEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value); // Update the input value
  };

  const handleSelectChange = (value:Option|null) =>{
    value?handleSelect(value.value,dispatch):''
  }


  return (
    <form className="searchbar gap-3">  
      <div className="searchbar__item">
        <ReactSelect className="w-full text-black"  options={selectOptions} onChange={(value:Option|null)=>{handleSelectChange(value)}}/>

        <button
          className={`ml-3 z-10 sm:hidden`}
          onClick={(e) =>{handleInput(e, input, dispatch)}}
        >
          <img src="/magnifying-glass.svg" width={40} height={40} alt="" />
        </button>
      </div>
      <div className="searchbar__item">
        <img src="/model-icon.png" className="absolute ml-4" width={25} />
        <input
          type="text"
          className="searchbar__input rounded text-black"
          placeholder="Example: Civic"
          onInput={handleInputChange}
        />
        <button className={`ml-3 z-10`} onClick={(e) =>{handleInput(e, input, dispatch)}}>
            <img src="/magnifying-glass.svg" width={40} height={40} alt="" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
