import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Admin from "./pages/Admin/Admin";
import PDFViewer from "./pages/pdfreader/PdfViewer";
// import pdf from "./files/MicrobiologyTextbook.pdf";
// import pdf from "./files/1.pdf";
import ThesisList from "./components/thesis/ThesisList";

import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/thesis" element={<ThesisList />} />
        </Route>
        <Route exact path="/admin/" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
