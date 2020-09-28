import React from "react";

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
          // customBodyRender: function (value, tableMeta, updateValue) {
          //   return <p> eae {value}</p>;
          // }
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
          sort: true,
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
      {
        name: "Teste",
        label: "Teste",
        options: {
          filter: true,
          sort: false,
        },
      },
    ],
    options: {
      draggableColumns: {
        enabled: true
      },
      responsive: "vertical",
      tableBodyMaxHeight: "75vh",
      selectableRowsHeader: false,
      caseSensitive: false,
      selectableRows: false,
      downloadOptions: {
        filename: "Grid.csv",
      },
      onFilterChange: (changedColumn, filterList) => {
        console.log("Filter .... ");
        console.log("Salvar filtros ou data filtrada no redux ... ");
        console.log(changedColumn, filterList);
      },
    },
  },
  dashboard: {
    options: {
      responsive: true,
      legend: {
        display: false,
        labels: {
          fontColor: "gray",
          fontSize: 18,
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "gray",
              fontSize: 18,
              stepSize: 15,
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "gray",
              fontSize: 14,
              stepSize: 1,
            },
          },
        ],
      },
    },
  },
  filtersInput: [
    {
      label: "Processo",
      identificador: "process",
      dataset: "ds_teste",
      type: "text",
      required: true,
      change: function (event) {
        console.log(event);
      },
    },
    {
      label: "Responsável",
      identificador: "responsavel",
      type: "text",
      required: true,
      change: function (event) {
        console.log(event);
      },
    },
    {
      label: "Quantidade registros",
      identificador: "quantidadeRegistros",
      type: "number",
      required: false,
      width: "200px",
      change: function (event) {
        console.log(event);
      },
    },
    {
      label: "Data",
      identificador: "data",
      type: "date",
      required: true,
      width: "200px",
      change: function (event) {
        console.log(event);
      },
    },
  ],
};
