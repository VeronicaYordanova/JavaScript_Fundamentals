function restaurantBill(string) {
    let items = string.filter((item, index) => index % 2 == 0);
    let sum = string.filter((item, index) => index % 2 == 1)
        .map(Number).reduce((a, b) => a + b);
    console.log(`You purchased ${items.join(', ')} for a total sum of ${sum}`);
}
restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);