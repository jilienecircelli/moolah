use moolah_db;

INSERT INTO users (firstName, lastName, email, password,createdAt,updatedAt) values ('Taylor', 'Burrows','taylorburrows92@gmail.com','password', '2020-11-01','2020-11-01'), ('Jill', 'Circelli','jilienecircelli@gmail.com','password','2020-11-01','2020-11-01'), ('Laura', 'Hawkins','lhawk1000@gmail.com','password','2020-11-01','2020-11-01');
INSERT INTO budgets (category,amount,month,createdAt,updatedAt) values ('Housing', 2000, 'January','2020-11-01','2020-11-01'), ('Utilities', 350, 'January','2020-11-01','2020-11-01'), ('Food', 800, 'January','2020-11-01','2020-11-01');
INSERT INTO goals (category, goalName, monthlyContribution, description, amount,createdAt,updatedAt) values ('Transportation', 'New Car', 300, 'Contribute 300 a month to buy a new car', 10000,'2020-11-01','2020-11-01'), ('Housing', 'Buy a House', 500, 'Contribute 500 a month to buy a new house', 50000,'2020-11-01','2020-11-01');
INSERT INTO expenses (category,expenseName,amount, month,createdAt,updatedAt) values ('Housing','Rent',1800, 'January','2020-11-01','2020-11-01'), ('Utilities','Internet', 120, 'January','2020-11-01','2020-11-01'), ('Food','Vons', 225, 'January','2020-11-01','2020-11-01');


