import React, { EventHandler, FormEvent } from "react";

const CodeInput = (): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Finded!");
  };

  return (
    <div>
      <form className="flex gap-4" action="" onSubmit={handleSubmit}>
        <input
          className="px-4 py-2 border text-3xl rounded-lg"
          type={"number"}
          placeholder="xxxxxx"
          name="code"
          max={999999}
        />
        <input
          className="
          px-8
          py-2 
          rounded-lg
          bg-violet-500 
          text-white 
          font-semibold 
          cursor-pointer
          hover:brightness-90
          transition-all
          "
          type="submit"
          value={"Find"}
        />
      </form>
    </div>
  );
};

export default CodeInput;
