const rotStatus = [];
const cells = document.querySelectorAll("td");
for (let i = 0; i < cells.length; i++) {
    rotStatus.push(0);
}

cells.forEach(function(t) {
    t.onclick = function () {
        let i = 0;
        cells.forEach(function(c) {
            if (c !== t){
                if (rotStatus[i] === 1) {
                    c.className=`rotation`;
                    rotStatus[i] = 0;
                }
            } else {
                if (rotStatus[i] === 0) {
                    t.className=`rotation`;
                    rotStatus[i] = 1;
                } else {
                    t.className=`rotation`;
                    rotStatus[i] = 0;
                }
            }
            i++;
        });
    };
});
