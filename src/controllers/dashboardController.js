import Record from "../models/Record.models.js";

export const summary = async (req, res) => {
  const records = await Record.find();

  const totalIncome = records
    .filter((r) => r.type === "income")
    .reduce((acc, r) => acc + r.amount, 0);

  const totalExpense = records
    .filter((r) => r.type === "expense")
    .reduce((acc, r) => acc + r.amount, 0);

  res.json({
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
  });
};

export const categorySummary = async (req, res) => {
  const data = await Record.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" },
      },
    },
  ]);

  res.json(data);
};