import React, { useState, useRef } from "react";
import { MDBFile } from 'mdb-react-ui-kit';
function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <MDBFile label='Default file input example' id='customFile' />
      <button
        className={`btn btn-outline-sucess
        }`}
      >
      </button>
    </>
  );
}

export default UploadButton;