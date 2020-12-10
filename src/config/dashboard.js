import React from 'react';
import getMonthLabels from "../utils/getMonthLabels";

export default {
    titleChartMain: "Total de ocorrencias por mês",
    titleChartSecond: "Status",
    titleChartThird: "Areas",
    titleChartFour: "Tipos",
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
                        lineHeight: 2,
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
}