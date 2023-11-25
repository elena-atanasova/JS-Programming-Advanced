function createTickets(tickets, sortingCriteria) {
    let allTickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    tickets.forEach(ticket => {
        const [destination, price, status] = ticket.split('|');
        const t = new Ticket(destination, price, status);
        allTickets.push(t);
    })

    allTickets.sort(function (t1, t2) {
        if(t1[sortingCriteria] > t2[sortingCriteria]) return 1;
        if(t1[sortingCriteria] < t2[sortingCriteria]) return -1;
    })

    return allTickets;
}

// let result = createTickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination');
// console.log(result);

let result2 = createTickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'status');
console.log(result2);