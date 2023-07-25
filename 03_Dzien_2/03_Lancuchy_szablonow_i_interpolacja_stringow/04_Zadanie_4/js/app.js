const quoteRef = document.querySelector('#quote');

const printMultiline = (text) => {
    quoteRef.innerText = text;
};

const multilineText = `"Myślę, że jest wiele piękna
                        w posiadaniu problemów.
                        To jeden ze sposobów w jaki się uczymy"
                        Herbie Hancock`

printMultiline(multilineText);