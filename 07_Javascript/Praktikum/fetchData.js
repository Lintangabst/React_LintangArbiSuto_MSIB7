async function fetchData() {
    console.log('Fetching data...');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
}

fetchData().then((data) => console.log(data));
