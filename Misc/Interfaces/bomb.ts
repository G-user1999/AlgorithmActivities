
for (let bomb = 10; bomb >= 0; bomb--) {
    if (bomb === 10) {
        console.log("tick");
    } else if (bomb /2 === 0) {
        console.log("tock");
    } else {
        console.log("Boom");
    }
}