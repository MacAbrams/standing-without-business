const config = {
    type: 'line',
    data: data,
};

const labels = Utils.months({count: 12});
const data = {
    labels: ["test"],
    datasets: [{
        data: [1,2,3,4,5,6]
    }]
};