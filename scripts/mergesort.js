function merge(l, m, r) {
    var i, j, k;
    var n1 = m - l + 1;
    var n2 = r - m;
    var g = 0;
    if (n1 + n2 == array_size) {
        g = 1;
    }
    var templ = [];
    var tempr = [];
    for (i = 0; i < n1; i++) {
        templ[i] = nums[l + i];
    }
    for (j = 0; j < n2; j++) {
        tempr[j] = nums[m + 1 + j];
    }
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (templ[i] <= tempr[j]) {
            nums[k] = templ[i];
            if (!g) {
                div_update(divs[k], nums[k], "blue");
            }
            else {
                div_update(divs[k], nums[k], "green");
            }
            i++;
        }
        else {
            nums[k] = tempr[j];
            if (!g) {
                div_update(divs[k], nums[k], "blue");
            }
            else {
                div_update(divs[k], nums[k], "green");
            }
            j++;
        }
        k++;
    }
    while (i < n1) {
        nums[k] = templ[i];
        if (!g) {
            div_update(divs[k], nums[k], "blue");
        }
        else {
            div_update(divs[k], nums[k], "green");
        }
        i++;
        k++;
    }
    while (j < n2) {
        nums[k] = tempr[j];
        if (!g) {
            div_update(divs[k], nums[k], "blue");
        }
        else {
            div_update(divs[k], nums[k], "green");
        }
        j++;
        k++;
    }
}

function mergeSort(l, r) {
    if (l < r) {
        var z = Math.floor((r - l) / 2);
        var m = l + z;
        mergeSort(l, m);
        mergeSort(m + 1, r);
        merge(l, m, r);
    }
}
function mergesorter() {
    disablebuttons();
    timer = 0;
    mergeSort(0, array_size - 1);
    enablebuttons();
}
