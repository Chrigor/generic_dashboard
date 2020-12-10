import React from 'react';

export default [
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
]