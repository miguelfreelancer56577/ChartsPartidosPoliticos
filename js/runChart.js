var chartData = generateChartData();
        
            chart = AmCharts.makeChart("chartdiv", {
                type: "serial",
                theme: "light",
                legend: {
                    horizontalGap: 1,
                    maxColumns: 1,
                    position: "right",
                    useGraphSettings: true,
                    markerSize: 10
                },
                marginRight: 25,
                dataProvider: chartData,
                synchronizeGrid:true,
                valueAxes: [{
                    id:"v1",
                    axisColor: "#FF6600",
                    position: "left",
                    title: "Votaciones"
                }],
                graphs: [{
                    valueAxis: "v1",
//                    id: "g1",
                    title: "PRI",
                    valueField: "visits",
                    lineColor: "#FF6600",
//                    fillAlphas: 0.4,
                    bullet: "diamond",
                    bulletBorderColor: "#F0EEF0",
                    bulletBorderAlpha: 1,
                    balloonText: "<div style='margin:5px; font-size:11px;'>Votos:<b>[[visits]]</b></div>"
                },{
                    valueAxis: "v1",
//                    id: "g1",
                    title: "PRD",
                    valueField: "hits",
                    lineColor: "#FCD202",
//                    fillAlphas: 0.4,
                    bullet: "diamond",
                    bulletBorderColor: "#F0EEF0",
                    bulletBorderAlpha: 1,
                    balloonText: "<div style='margin:5px; font-size:11px;'>Votos:<b>[[hits]]</b></div>"
                },{
                    valueAxis: "v1",
//                    id: "g1",
                    title: "PAN",
                    valueField: "otro",
                    lineColor: "#B0DE09",
//                    fillAlphas: 0.4,
                    bullet: "diamond",
                    bulletBorderColor: "#F0EEF0",
                    bulletBorderAlpha: 1,
                    balloonText: "<div style='margin:5px; font-size:11px;'>Votos:<b>[[otro]]</b></div>"
                }],
                chartScrollbar: {},
                chartCursor: {
                    categoryBalloonDateFormat: "JJ:NN, DD MMMM",
                    cursorPosition: "mouse",
                    zoomable: true
                },
//                categoria de la grafica
                categoryField: "date",
                categoryAxis: {
                    parseDates: true,
                    minPeriod: "mm",
                    gridAlpha: 0.15,
                    axisColor: "#DADADA"
                },
                mouseWheelZoomEnabled: true,
                export: {
                    enabled: true,
//                    position: "bottom-right"
                    dateFormat: "YYYY-MM-DD HH:NN:SS",
//                    menu: [{
//                        format: "JPG",
//                        label: "Save as JPG",
//                        title: "Export chart to JPG",
//                    }, "PDF"]
                }
            });
            
            chart.addListener("dataUpdated", zoomChart);
            zoomChart();
            function zoomChart() {
                chart.zoomToIndexes(chartData.length - 250, chartData.length - 100);
            }
            function generateChartData() {
                 var chartData = [];
                 var firstDate = new Date();
                firstDate.setMinutes(firstDate.getDate() - 851);
                for (var i = 0; i < 500; i++) {
                    var newDate = new Date(firstDate);
                    newDate.setMinutes(newDate.getMinutes() + i);
                    var visits = Math.round(Math.random() * 40 + 10 + i + Math.random() * i / 5);
                    chartData.push({
                        date: newDate,
                        visits: visits,
                        hits: visits*3,
                        otro: (i+89)
                    });
                }
                return chartData;
            }