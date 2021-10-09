import { Item } from "../types/Item";

export const items: Item[] = [
  { date: new Date(2021, 9, 15), category: 'food', title: 'McDonalds', value: 32.12 },
  { date: new Date(2021, 9, 15), category: 'food', title: 'Burder King', value: 28 },
  { date: new Date(2021, 9, 16), category: 'rent', title: 'Aluguel Apt', value: 2300 },
  { date: new Date(2021, 10, 18), category: 'salary', title: 'Salário ACME', value: 4500 },
];

/// date no 9, é o mês 10, pois no javascript os arrays começam pelo zero;