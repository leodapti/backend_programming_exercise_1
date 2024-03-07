function Prime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Bilangan prima dari 1 hingga 1000:");
for (let num = 2; num <= 1000; num++) {
    if (Prime(num)) {
        console.log(num);
    }
}
