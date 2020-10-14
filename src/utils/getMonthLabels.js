export default function getLabelsMonths() {
  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  let now = new Date();

  let labels = [];

  for (let i = 0; i < 12; i++) {
    let month = now.getMonth();
    let year = now.getFullYear();

    labels.push({ month, year ,monthDescription: `${monthNames[now.getMonth()]} / ${year}` });
    now.setMonth(now.getMonth() - 1);
  }

  return labels;
}
