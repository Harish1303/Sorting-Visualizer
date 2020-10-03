function heapify(i, n) {
    var but = document.getElementById("lol");
    but.disabled = true;
    var largest = i;
    var l = (2 * i) + 1;
    var r = (2 * i) + 2;
    if (l < n && nums[l] > nums[largest]) {
        largest = l;
    }
    if (r < n && nums[r] > nums[largest]) {
        largest = r;
    }
    if (largest != i) {
        div_update(divs[i], nums[i], "black");
        div_update(divs[largest], nums[largest], "black");
        var temp = nums[i];
        nums[i] = nums[largest];
        nums[largest] = temp;
        div_update(divs[i], nums[i], "black");
        div_update(divs[largest], nums[largest], "black");
        div_update(divs[i], nums[i], "#55bdca");
        div_update(divs[largest], nums[largest], "#55bdca");
        heapify(largest, n);
    }

}
function heapsort(n) {
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(i, n);
    }
    for (var i = n - 1; i > 0; i--) {
        div_update(divs[0], nums[0], "black");
        div_update(divs[i], nums[i], "black");
        var temp = nums[0];
        nums[0] = nums[i];
        nums[i] = temp;
        div_update(divs[0], nums[0], "#55bdca");
        div_update(divs[i], nums[i], "green");
        heapify(0, i);
    }
    div_update(divs[0], nums[0], "green");
}
function heapsorter() {
    disablebuttons()
    timer = 0;

    heapsort(array_size);

    enablebuttons();
}