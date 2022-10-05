/* eslint-disable no-console */
import React from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AppState } from "../types";
import "./PdfViewer.scss";

pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

type PdfViewerProps = {
  appState: AppState;
};

export const PdfViewer = (props: PdfViewerProps) => {
  const { file, currentPageNum } = props.appState.pdfFile;

  if (!file?.name) {
    return <></>;
  }

  return (
    <div className="Example__container">
      <div className="Example__container__document">
        <Document file={file} options={options}>
          <Page
            key={`page_${currentPageNum}`}
            pageNumber={currentPageNum}
            width={800}
          />
        </Document>
      </div>
    </div>
  );
};
