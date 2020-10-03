function bublesort() {

    disablebuttons();
    timer = 0;
    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            var retainer = divs[j].style.backgroundColor;
            div_update(divs[j], nums[j], "yellow");
            div_update(divs[j + 1], nums[j + 1], "yellow");
            if (nums[j] > nums[j + 1]) {
                div_update(divs[j], nums[j], "black");
                div_update(divs[j + 1], nums[j + 1], "black");
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                div_update(divs[j], nums[j], "black");
                div_update(divs[j + 1], nums[j + 1], "black");
            }
            div_update(divs[j], nums[j], retainer);
            div_update(divs[j + 1], nums[j + 1], retainer);
        }
        div_update(divs[j], nums[j], "green");
    }
    div_update(divs[0], nums[0], "green");
    enablebuttons();
}