function insertionsort() {
    disablebuttons();
    var i, key, j;
    timer = 0;
    for (i = 1; i < array_size; i++) {
        div_update(divs[i], nums[i], "yellow");
        key = nums[i];
        j = i - 1;
        if (j == 0 && nums[j] < key) {
            div_update(divs[j], nums[j], "green");
        }
        while (j >= 0 && nums[j] > key) {
            div_update(divs[j], nums[j], "yellow");
            nums[j + 1] = nums[j];
            div_update(divs[j + 1], nums[j + 1], "green");
            j = j - 1;

        }
        nums[j + 1] = key;
        div_update(divs[j + 1], nums[j + 1], "black");
        div_update(divs[j + 1], nums[j + 1], "green");

    }
    enablebuttons();
}

