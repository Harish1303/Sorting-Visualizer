function selectionsort() {
    disablebuttons();
    timer = 0;
    var i, j, min_indx;
    for (i = 0; i < array_size - 1; i++) {
        min_indx = i;
        div_update(divs[i], nums[i], "black");
        for (j = i + 1; j < array_size; j++) {
            div_update(divs[j], nums[j], "yellow");
            if (nums[j] < nums[min_indx]) {
                if (min_indx != i) {
                    div_update(divs[min_indx], nums[min_indx], "#55bdca");
                }
                min_indx = j;
                div_update(divs[min_indx], nums[min_indx], "black");
            }
            else {
                div_update(divs[j], nums[j], "#55bdca");
            }
        }
        var temp = nums[i];
        nums[i] = nums[min_indx];
        nums[min_indx] = temp;
        div_update(divs[min_indx], nums[min_indx], "black");
        div_update(divs[i], nums[i], "black");
        div_update(divs[i], nums[i], "green");
        if (min_indx != i) {
            div_update(divs[min_indx], nums[min_indx], "#55bdca");

        }
    }
    div_update(divs[i], nums[i], "green");

    enablebuttons();
}