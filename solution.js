console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const filterFunction = (data) => {
    return data.filter((el) => {
        
        return (
        el.credit_card_company == 'VISA' &&
        new Date(el.transaction_date).getFullYear() >= 2015 &&
        el.price > 50
        )

    });
}


// Assignment 2:
const aboveAverageFunction = (data) => {
    let avgPrice = getAveragePrice(data); 
    return data.map(function(el) {
        el.isPriceAboveAverage = el.price > avgPrice 
        return el;
    })
};

const getAveragePrice = (data) => {
    let avg = 0;
    data.forEach(el => {
        avg += parseInt(el.price)
    });
    return avg / data.length
};


const iterateData = (data) => {
    data.forEach(el => {
        console.log(el);
    });
}

//const filteredData = filterFunction(transactions);
//iterateData(filteredData);

const averageData = aboveAverageFunction(transactions);
iterateData(averageData)

