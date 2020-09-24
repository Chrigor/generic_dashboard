export default {
  title: "Dashboard",
  titleSideBar: "Menu",
  grid: {
    titleGrid: "Process Example",
    columns: [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "company",
        label: "Company",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "city",
        label: "City",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "state",
        label: "State",
        options: {
          filter: true,
          sort: false,
        },
      },
    ],
    options: {
      responsive: "vertical",
      tableBodyMaxHeight: "75vh",
      selectableRowsHeader: false,
      caseSensitive: false,
      selectableRows: false,
    },
  },
};
