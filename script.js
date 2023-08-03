// PDFのURL
const pdfUrl = 'path/to/your/multi-page/file.pdf';

// PDF.jsの初期化
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

// PDFドキュメントオブジェクト
let pdfDoc = null;
let currentPageNumber = 1;

// PDFを表示する関数
function displayPDF(url) {
  const container = document.getElementById('pdf-viewer');

  pdfjsLib.getDocument(url).promise.then(doc => {
    pdfDoc = doc;
    renderPage(currentPageNumber);
  });
}

// 特定のページを表示する関数
function renderPage(pageNumber) {
  pdfDoc.getPage(pageNumber).then(page => {
    const scale = 1.5;
    const viewport = page.getViewport({ scale: scale });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.height = viewport.height;
    canvas.width = viewport.width;
    container.innerHTML = ''; // 前のページをクリア
    container.appendChild(canvas);

    // ページの描画
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    page.render(renderContext);
  });
}

// 前のページに移動する関数
function goPreviousPage() {
  if (currentPageNumber > 1) {
    currentPageNumber--;
    renderPage(currentPageNumber);
  }
}

// 次のページに移動する関数
function goNextPage() {
  if (currentPageNumber < pdfDoc.numPages) {
    currentPageNumber++;
    renderPage(currentPageNumber);
  }
}

// PDFを表示
displayPDF(pdfUrl);
