let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Donib",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "Binod";
