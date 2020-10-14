import React from "react";

export default {
  title: "Dashboard",
  titleSideBar: "Menu",
  grid: {
    titleGrid: "Process Example",
    columns: [
      {
        name: "requester",
        label: "Requester",
        options: {
          filter: true,
          sort: true,
          // customBodyRender: function (value, tableMeta, updateValue) {
          //   return <p> eae {value}</p>;
          // }
        },
      },
      {
        name: "dateStart",
        label: "Start Date",
        options: {
          filter: true,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            return <p> {new Date(value).toLocaleDateString()}</p>;
          },
        },
      },
      {
        name: "dateEnd",
        label: "Final Date",
        options: {
          filter: true,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            return <p> {new Date(value).toLocaleDateString()}</p>;
          },
        },
      },
      {
        name: "status",
        label: "Status",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "responsible",
        label: "Responsible",
        options: {
          filter: true,
          sort: true,
        },
      },
    ],
    options: {
      fixedHeader: false,
      draggableColumns: {
        enabled: true,
      },
      responsive: "simple",
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
      onDownload: (buildHead, buildBody, columns, data) => {
        const columnsTable= columns.map((elemento) => elemento.label);
        const rowsTable = data.map((elemento) => elemento.data);

        const columnsTemplate = columnsTable.map((elemento) => `<th>${elemento}</th>`).join('');
        const rowsTemplate = rowsTable.map((elemento) => (`<tr> ${elemento.map((elemento) => `<td>${elemento}</td>`).join('')} </tr>`)).join('');

        const templateHTML =`
          <table>
            <thead>
              ${columnsTemplate}
            </thead>

            <tbody>
              ${rowsTemplate}
            </tbody>
          </table>
        `

        let url = 'data:application/vnd.ms-excel,' + escape(templateHTML); 
        let elem = document.createElement("a");
        elem.setAttribute("href", url);
        elem.setAttribute("download", "Relatório.xls"); // Choose the file name
        elem.click();

        return false;
      },
    },
  },
  dashboard: {
    options: {
      responsive: true,
      maintainAspectRatio: true,
      // aspectRatio:2,
      onResize: function (chart) {
        // chart.canvas.parentNode.style.height = '70%';
        // chart.canvas.parentNode.style.width = '100%';
        // console.log(chart);
      },
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
              // stepSize: 50,
              beginAtZero: true,
              callback: function (tickValue, index, ticks) {
                if (!(index % parseInt(ticks.length / 20))) {
                  return tickValue;
                }
              },
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
      constraintName: "process",
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
      constraintName: "responsavel",
      type: "text",
      required: true,
      change: function (event) {
        console.log(event);
      },
    },
    {
      label: "Quantidade registros",
      identificador: "quantidadeRegistros",
      constraintName: "registros",
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
      constraintName: "dataLimite",
      type: "date",
      required: true,
      width: "200px",
      change: function (event) {
        console.log(event);
      },
    },
  ],
};
