import React from 'react';

export default {
    titleGrid: "Process Example",
    columns: [
        {
            name: "CodigoProjeto",
            label: "Código Projeto",
            options: {
                filter: false,
                sort: true,
                editable: true,
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
                editable: true,
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
                editable: true,
                dataset: "ds_area_pg-0001",
                labelDataset: "Area",
                valueDataset: "Area",
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
                type: "date",
                editable: true,
                dataset: "colleague",
                labelDataset: "colleagueName",
                valueDataset: "colleagueName",
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
        onRowClickCustom(rowData, rowMeta) {
            console.log(rowData);
            console.log(rowMeta);
        }
    },
}