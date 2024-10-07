function swapValues(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log('After swap:', 'a =', a, 'b =', b);
}

swapValues(5, 10);
