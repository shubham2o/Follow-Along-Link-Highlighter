function myFunction() {
    const element = document.getElementById('myDiv');
    const rect = element.getBoundingClientRect();

    document.getElementById('demo').innerHTML =
        "Left : " + rect.left.toFixed() + ", Top : " + rect.top.toFixed() + ", Width : " + rect.width + ", Height : " + rect.height;
}