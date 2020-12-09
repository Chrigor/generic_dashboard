import React from "react";
import getMonthLabels from "./utils/getMonthLabels";

export default {
  title: "Dashboard",
  titleSideBar: "Menu",
  modeDevelopment: true,
  FLUIG_SERVER: "http://vipalnet-teste.vipal.com.br",
  AUTH_CONSUMER_KEY_POST: "consumerKey",
  AUTH_TOKEN_POST: "011278a6-e135-439b-9719-63fc4d8328b7",
  AUTH_CONSUMER_SECRET_KEY_POST: "testeDatasetSecret",
  AUTH_TOKEN_SECRET_POST:
    "2412cb85-e1b6-49cc-adee-25a057ba17647ae99651-ef4f-4657-ac66-d309a879d5c2",
  dataset: "ds_ConsultaDB0003",
  grid: {
    titleGrid: "Process Example",
    columns: [
      {
        name: "CodigoProjeto",
        label: "Código Projeto",
        options: {
          filter: false,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            const url = `http://vipalnet-teste.vipal.com.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID=${value} target="_blank"`;

            return <a href={url}>{value}</a>;
          },
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
        name: "Ordem",
        label: "Ordem",
        options: {
          filter: true,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            return <p>{value > 3 ? 1 : value}</p>;
          },
        },
      },
      {
        name: "Prioridade",
        label: "Prioridade",
        options: {
          filter: true,
          sort: true,
          customBodyRender: function (value, tableMeta, updateValue) {
            return <p>{value > 3 ? 1 : value}</p>;
          },
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
      onFilterChange: (changedColumn, filterList) => {
        console.log("Filter .... ");
        console.log("Salvar filtros ou data filtrada no redux ... ");
        console.log(changedColumn, filterList);
      },
      onDownload: (buildHead, buildBody, columns, data) => {
        const columnsTable = columns.map((elemento) => elemento.label);
        const rowsTable = data.map((elemento) => elemento.data);

        const columnsTemplate = columnsTable
          .map((elemento) => `<th>${elemento}</th>`)
          .join("");
        const rowsTemplate = rowsTable
          .map(
            (elemento) =>
              `<tr> ${elemento
                .map((elemento) => `<td>${elemento}</td>`)
                .join("")} </tr>`
          )
          .join("");

        const templateHTML = `
          <table>
            <thead>
              ${columnsTemplate}
            </thead>

            <tbody>
              ${rowsTemplate}
            </tbody>
          </table>
        `;

        let url = "data:application/vnd.ms-excel," + escape(templateHTML);
        let elem = document.createElement("a");
        elem.setAttribute("href", url);
        elem.setAttribute("download", "Relatório.xls"); // Choose the file name
        elem.click();

        return false;
      },
      onRowClickCustom(rowData, rowMeta){
        console.log(rowData);
        console.log(rowMeta);
      }
    },
  },
  dashboard: {
    options: {
      pointLabelFontSize: 20,
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
              lineHeight:2,
              fontSize: 12,
              fontStyle: "bold",
              precision: 5,
              suggestedMin: 0,
              fontColor: "gray",
              // stepSize: 100,
              beginAtZero: true,
              callback: function (tickValue, index, ticks) {
                return tickValue;
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
              callback: function (label = "") {
                const sub = label.substring(0, 10);
                return `${label.length > 10 ? sub + "..." : sub}`;
              },
            },
          },
        ],
      },
    },
    formatDataChartMain: (data = []) => {
      const monthLabels = getMonthLabels();

      const monthFormatted = monthLabels.map((month) => {
        const occurrencesMonth = data.filter((occurrence) => {
          const dateOccurence = new Date(occurrence["DataAbertura"]);
          const monthOccurence = dateOccurence.getMonth();
          const yearOccurence = dateOccurence.getFullYear();

          return month.year == yearOccurence && month.month == monthOccurence;
        });

        month.quantity = occurrencesMonth.length;
        return month;
      });

      const labels = monthLabels
        .map((elemento) => elemento.monthDescription)
        .reverse();
      const quantity = monthFormatted
        .map((elemento) => elemento.quantity)
        .reverse();

      return {
        labels,
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            fillColor: "transparent",
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 7,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: quantity,
          },
        ],
      };
    },
    formatDataChartSecond: (data = []) => {
      const status = [...new Set(data.map((elemento) => elemento["Status"]))];

      const dataStatus = status.map((status) => {
        const quantity = data.filter((elemento) => {
          return elemento["Status"] === status;
        });

        return {
          status,
          quantity: quantity.length,
        };
      });

      let dataChart = dataStatus.map((elemento) => elemento.quantity);
      const total = data.length;

      status.push("Total");
      dataChart.push(total);

      return {
        labels: status,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "transparent",
            borderColor: "rgba(75,192,192,0.8)",
            borderWidth: 1.5,
            hoverBorderColor: "rgba(75,192,192,1)",
            hoverBorderWidth: 2.5,
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            data: dataChart,
          },
        ],
      };
    },
    formatDataChartThird: (data = []) => {
      const areas = [...new Set(data.map((elemento) => elemento["Area"]))];

      const dataArea = areas.map((area) => {
        const quantity = data.filter((elemento) => {
          return elemento["Area"] === area;
        });

        return {
          area,
          quantity: quantity.length,
        };
      });

      let dataChart = dataArea.map((elemento) => elemento.quantity);

      return {
        labels: areas,
        datasets: [
          {
            label: "Quantidade por area",
            fill: false,
            fillColor: "transparent",
            lineTension: 0.3,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 7,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataChart,
          },
        ],
      };
    },
    formatDataChartFour: (data = []) => {
      const tipos = [...new Set(data.map((elemento) => elemento["Tipo"]))];

      const dataTipo = tipos.map((tipo) => {
        const quantity = data.filter((elemento) => {
          return elemento["Tipo"] === tipo;
        });

        return {
          tipo,
          quantity: quantity.length,
        };
      });

      let dataChart = dataTipo.map((elemento) => elemento.quantity);
      return {
        labels: tipos,
        datasets: [
          {
            label: "Quantidade por tipo de demanda",
            backgroundColor: "transparent",
            borderColor: "rgba(75,192,192,0.8)",
            borderWidth: 1.5,
            hoverBorderColor: "rgba(75,192,192,1)",
            hoverBorderWidth: 2.5,
            borderCapStyle: "butt",
            borderDashOffset: 0.0,
            data: dataChart,
          },
        ],
      };
    },
  },
  filtersInput: [
    {
      label: "Processo",
      identificador: "process",
      type: "text",
      required: false,
      change: function (event) {
        console.log(event);
      },
    },

    {
      label: "Responsável",
      identificador: "Responsavel",
      type: "text",
      dataset: "ds_responsaveis_TI_pg-0001",
      labelDataset: "Analista",
      valueDataset: "Analista",
      required: false,
      change: function (event) {
        console.log(event);
      },
    },
    {
      label: "Area",
      identificador: "Area",
      // type: "number",
      required: false,
      width: "400px",
      dataset: "ds_area_pg-0001",
      labelDataset: "Area",
      valueDataset: "Area",
      change: function (event) {
        console.log(event);
      },
    },
    {
      label: "Etapa",
      identificador: "Etapa",
      // type: "number",
      required: false,
      width: "400px",
      dataset: "ds_etapa_pg-0001",
      labelDataset: "Etapa",
      valueDataset: "Etapa",
      change: function (event) {
        console.log(event);
      },
    },
    {
      label: "Data",
      identificador: "data",
      type: "date",
      required: false,
      width: "200px",
      change: function (event) {
        console.log(event);
      },
    },
  ],
};
