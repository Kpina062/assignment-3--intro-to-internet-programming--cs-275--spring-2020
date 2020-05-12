var rotStatus = [];
var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    rotStatus.push(0);
}

cells.forEach(function(t) {
    t.onclick = function () {
        var i = 0;
        cells.forEach(function(c) {
            if (c != t){
                if (rotStatus[i] == 1) {
                    c.setAttribute(`style`,`transform:rotate(0deg)`);
                    rotStatus[i] = 0;
                }
            } else {
                if (rotStatus[i] == 0) {
                    t.setAttribute(`style`,`transform:rotate(180deg)`);
                    rotStatus[i] = 1;
                } else {
                    t.setAttribute(`style`,`transform:rotate(0deg)`);
                    rotStatus[i] = 0;
                }
            }
            i++;
        });
    };
});
