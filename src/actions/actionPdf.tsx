import { register } from "./register";
import { ArrowLeft, ArrowRight, Close } from "../components/icons";

export const actionPdfPreviousPage = register({
  name: "previousPdfPage",
  trackEvent: { category: "element" },

  perform: (elements, appState) => {
    return {
      appState: {
        ...appState,
        pdfFile: {
          ...appState.pdfFile,
          currentPageNum: Math.max(appState.pdfFile.currentPageNum - 1, 1),
        },
      },
      commitToHistory: true,
    };
  },
  contextItemLabel: "Previous page",
  PanelComponent: ({ updateData, appState }) => (
    <button
      type="button"
      className="zIndexButton"
      onClick={(event) => updateData(null)}
      title={"Previous page"}
    >
      <ArrowLeft theme={appState.theme} />
    </button>
  ),
});

export const actionPdfNextPage = register({
  name: "nextPdfPage",
  trackEvent: { category: "element" },

  perform: (elements, appState) => {
    return {
      appState: {
        ...appState,
        pdfFile: {
          ...appState.pdfFile,
          currentPageNum: Math.min(
            appState.pdfFile.currentPageNum + 1,
            appState.pdfFile.totalPageNum,
          ),
        },
      },
      commitToHistory: true,
    };
  },
  contextItemLabel: "Previous page",
  PanelComponent: ({ updateData, appState }) => (
    <button
      type="button"
      className="zIndexButton"
      onClick={(event) => updateData(null)}
      title={"Previous page"}
    >
      <ArrowRight theme={appState.theme} />
    </button>
  ),
});

export const actionPdfClose = register({
  name: "closePdf",
  trackEvent: { category: "element" },

  perform: (elements, appState) => {
    return {
      appState: {
        ...appState,
        pdfFile: {
          file: null,
          totalPageNum: 0,
          currentPageNum: 0,
        },
      },
      commitToHistory: false,
    };
  },
  contextItemLabel: "Close PDF",
  PanelComponent: ({ updateData, appState }) => (
    <button
      type="button"
      className="zIndexButton"
      onClick={(event) => updateData(null)}
      title={"Close PDF"}
    >
      <Close theme={appState.theme} />
    </button>
  ),
});
