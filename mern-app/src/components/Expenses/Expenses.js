// import React, { useState } from "react";
// import Card from "../Card/Card";
// import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
// import ExpenseItem from "../ExpenseItem/ExpenseItem";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");
//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           onChangeFilter={filterChangeHandler}
//           selected={filteredYear}
//         />
//         <ExpenseItem
//           title={props.expenses[0].title}
//           amount={props.expenses[0].amount}
//           date={props.expenses[0].date}
//         />
//         <ExpenseItem
//           title={props.expenses[1].title}
//           amount={props.expenses[1].amount}
//           date={props.expenses[1].date}
//         />
//         <ExpenseItem
//           title={props.expenses[2].title}
//           amount={props.expenses[2].amount}
//           date={props.expenses[2].date}
//         />
//         <ExpenseItem
//           title={props.expenses[3].title}
//           amount={props.expenses[3].amount}
//           date={props.expenses[3].date}
//         />
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
