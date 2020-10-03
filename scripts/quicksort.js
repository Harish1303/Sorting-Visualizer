function partion(low, high) {
    var pivot = low;
    div_update(divs[pivot], nums[pivot], "black");
    var i = low;
    var sw = 0;
    var j = high;
    while (i <= j) {
        while (nums[pivot] >= nums[i]) {
            if (i != pivot) {
                div_update(divs[i], nums[i], "yellow");
            }
            i++;
            if (i - 1 != pivot) {
                div_update(divs[i - 1], nums[i - 1], "#55bdca");
            }
            if (nums[pivot] < nums[i]) {
                div_update(divs[i], nums[i], "blue");
            }
        }

        while (nums[pivot] < nums[j]) {

            if (j != pivot) {
                div_update(divs[j], nums[j], "yellow");
            }
            j--;
            if (j + 1 != pivot) {
                div_update(divs[j + 1], nums[j + 1], "#55bdca");
            }
            if (nums[pivot] > nums[j]) {
                div_update(divs[j], nums[j], "blue");
            }
        }

        if (i < j) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            div_update(divs[i], nums[i], "blue");
            div_update(divs[j], nums[j], "blue");
            div_update(divs[i], nums[i], "#55bdca");
            div_update(divs[j], nums[j], "#55bdca");
            sw = 1;
        }

    }

    var temp2 = nums[j];
    nums[j] = nums[pivot];
    nums[pivot] = temp2;
    div_update(divs[j], nums[j], "green");
    if (sw == 0) {
        div_update(divs[pivot], nums[pivot], "green");
    }
    if (j == pivot) {
        div_update(divs[pivot], nums[pivot], "green");
    }

    return j;
}

function quicksort(low, high) {
    if (low == high) {
        div_update(divs[low], nums[low], "green");
    }
    if (low > high) {
        div_update(divs[low], nums[low], "green");

    }
    if (low < high) {
        var pi = partion(low, high);
        quicksort(low, pi - 1);
        quicksort(pi + 1, high);
    }
}
function quicksorter() {

    disablebuttons();
    timer = 0;
    quicksort(0, array_size - 1);
    enablebuttons();

}