<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/x-mathjax-config">
 MathJax.Hub.Config({
 tex2jax: {
 inlineMath: [['$', '$'] ],
 displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
 }
 });
</script>

<!-- CDNから読み込む場合 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>

<div id="pdf-viewer"></div>
<button onclick="goPreviousPage()">Previous</button>
<button onclick="goNextPage()">Next</button>

<script>
  // PDF.jsの初期化
  const pdfjsLib = window['pdfjs-dist/build/pdf'];

  // PDFを読み込む
  const url = '20230510_cv_ksaito.pdf';
  const viewerContainer = document.getElementById('pdf-viewer');

  pdfjsLib.getDocument(url).promise.then(pdfDoc => {
    // PDFを描画するためのキャンバスを作成
    const canvas = document.createElement('canvas');
    viewerContainer.appendChild(canvas);

    // 第1ページを取得
    pdfDoc.getPage(1).then(page => {
      const viewport = page.getViewport({ scale: 1.0 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // PDFの描画
      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport,
      };
      page.render(renderContext);
    });
  });
</script>


 
# PROFILE
## Name
&emsp; Ken Saito
<br>
<br>

## Birthday
&emsp; May 3rd, 1991
<br>
<br>

## Birthplace
&emsp; [Tsuruoka](https://www.city.tsuruoka.lg.jp/), Yamagata, Japan
<br>
<br>


## Educational Background
- Mathematical System Analysis I, System Information Sciences, Division of Mathematics, Graduate School of Information Sciences, Tohoku University
  * April, 2016 - March, 2023
  * April, 2014 - March, 2016 (Master)
  * Adviser: Masaaki Harada
- Department of Mathematical Sciences, Faculty of Science, Yamagata University
  * April, 2010 - March, 2014 (Bachelor)
  * Adviser: Masaaki Harada
- Tsuruoka Minami High School
  * April, 2007 - March, 2010 (Graduated)
<br />
<br />



## Publications
### Submitted
- K. Ishizuka and K. Saito, Construction for both self-dual codes and LCD codes, submitted to Advances in Mathematics of Communications, (2021)
<br />


### In Press
- xxx
<br />


### In Print
- K. Ishizuka and K. Saito, On the existence of quaternary Hermitian LCD codes with Hermitian dual distance $1$,
  *Discrete Math.* **345** (2022), 112702.
- Ken Saito, Self-dual additive $\mathbb{F}_4$-codes of lengths up to $40$ represented by circulant graphs, *Advances in Mathematics of Communications* **13** (2019), 213–220.
- xxx
- xxx
- xxx
<br />
<br />


## Talks
- Binary Linear Complementary Dual Codes, 実験計画法ならびに情報数理と関連する組合せ構造 2018, 神戸大学 瀧川記念学術交流会館 大会議室, November 2, 2018
- Binary linear complementary dual codes, The Japanese Conference on Combinatorics and its Applications in Sendai, Sendai International Center, May 20, 2018


\item On binary codes with complementary dual \\
The 5th Taiwan-Japan Conference on Combinatorics and its Applications
National Taiwan Normal University \\
March 29, 2018
<br />
<br />


## Links
- [Diary](https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:fbaadbdb-fd98-3b5c-898d-9f0b6bb4278e)
- [Twitter](https://twitter.com/ksaito495)
- xxx
- xxx
- 
