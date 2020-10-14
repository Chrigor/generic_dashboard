import React from "react";

export default {
  title: "Dashboard",
  titleSideBar: "Menu",
  FLUIG_SERVER: "http://vipalnet-teste.vipal.com.br",
  AUTH_CONSUMER_KEY_POST: "consumerKey",
  AUTH_TOKEN_POST:"011278a6-e135-439b-9719-63fc4d8328b7",
  AUTH_CONSUMER_SECRET_KEY_POST:"testeDatasetSecret",
  AUTH_TOKEN_SECRET_POST:"2412cb85-e1b6-49cc-adee-25a057ba17647ae99651-ef4f-4657-ac66-d309a879d5c2",
  dataset: "ds_ConsultaDB0003",
  grid: {
    titleGrid: "Process Example",
    columns: [
      {
        name: "CodigoProjeto",
        label: "Código Projeto",
        options: {
          filter: true,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            const url = `http://vipalnet-teste.vipal.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=${value} target="_blank"`
          
            return <a href={url}> {value}</a>;
          }
        },
      },
      {
        name: "NomeDemanda",
        label: "Nome Demanda",
        options: {
          filter: true,
          sort: true,
          // customBodyRender: function (value, tableMeta, updateValue) {
          //   return <p> eae {value}</p>;
          // }
        },
      },
      {
        name: "Prioridade",
        label: "Prioridade",
        options: {
          filter: true,
          sort: true,
          // customBodyRender: function (value, tableMeta, updateValue) {
          //   return <p> eae {value}</p>;
          // }
        },
      },
      {
        name: "Status",
        label: "Status",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Area",
        label: "Area",
        options: {
          filter: true,
          sort: true,
          // customBodyRender: function (value, tableMeta, updateValue) {
          //   return <p> eae {value}</p>;
          // }
        },
      },
      {
        name: "Diretoria",
        label: "Diretoria",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Responsavel",
        label: "Responsavel",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "Solicitante",
        label: "Solicitante",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "ValorOrcado",
        label: "Valor Orcado",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "HorasDesenvolvimento",
        label: "Horas Dev",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "DataAbertura",
        label: "Data de Abertura",
        options: {
          filter: true,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            return <p> {new Date(value).toLocaleDateString()}</p>;
          },
        },
      },
      {
        name: "Prazo",
        label: "Prazo",
        options: {
          filter: true,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            return <p> {new Date(value).toLocaleDateString()}</p>;
          },
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
