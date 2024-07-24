"use client"
import { submitAction } from "@/action/from";
import { useRef } from "react";
export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2/3 mx-auto my-12 ">
      <form ref={ref} className="flex gap-3 flex-col" action={(e) => { submitAction(e); ref.current.reset() }}>
        <div className="flex gap-3">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-white bg-black border-2 border-white" type="text" />
        </div>
        <div className="flex gap-3">
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-white bg-black border-2 border-white" type="text" />
        </div>
        <div>
          <button className="border border-gray-400 p-1">Submit</button>
        </div>
      </form>
    </div>
  );
}
