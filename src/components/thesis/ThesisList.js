import React, { useEffect } from "react";
import { useGlobalContext } from "../../context.";
import Loading from "../Loader/Loader";
import "./BookList.css";
import PDFViewer from "../../pages/pdfreader/PdfViewer";

//https://covers.openlibrary.org/b/id/240727-S.jpg

import { pdfjs } from "react-pdf";
import {
  pdf,
  pdf1,
  pdf3,
  pdf4,
  pdf5,
  pdf6,
  pdf7,
  pdf8,
  pdf9,
  pdf10,
  pdf12,
  pdf11,
} from "./files";
const data = [
  pdf,
  pdf1,
  pdf3,
  pdf4,
  pdf5,
  pdf6,
  pdf7,
  pdf8,
  pdf9,
  pdf10,
  pdf12,
  pdf11,
];

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

const ThesisList = () => {
  const { searchTerm, loading, resultTitle, page } = useGlobalContext();

  // useEffect(() => {
  //   page != undefined && console.log(page[0].details);
  // }, [page]);

  if (loading) return <Loading />;

  if (page !== undefined && page.length !== 0)
    console.log(data[page[0]?.details]);
  return (
    <section className="booklist">
      <div className="">
        <div className="section-title">{/* <h2>{resultTitle}</h2> */}</div>
        {page !== undefined && page.length !== 0 ? (
          <PDFViewer file={data[page[0]?.details]} />
        ) : (
          <p>No result was found</p>
        )}
        {/* <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div> */}
      </div>
    </section>
  );
};

export default ThesisList;
