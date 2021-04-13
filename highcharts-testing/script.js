Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    },
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true,
                crop: false,
                overflow: 'none'
            }
        }
    },
});

var chart = {
    type: 'column'
 };
 var title = {
    text: 'Vaccinations by number of people vaccinated'   
 };
 var subtitle = {
    text: 'People 16+ partially and fully vaccinated in California'  
 };
 var xAxis = {
    categories: ['Quartile 1','Quartile 2','Quartile 3','Quartile 4'],
    crosshair: true
 };
 var yAxis = {
    min: 0,
    title: {
       text: 'Vaccinations Administered'         
    },
    labels: {
       formatter: function(){
          return this.value/1000000 + "M"
       }
    },
    tickAmount: 0      
 };
 var tooltip = {
    headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
       '<td style = "padding:0"><b>{point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
 };
 var plotOptions = {
    column: {
       pointPadding: 0.2,
       borderWidth: 0
    }
 };  
 var credits = {
    enabled: false
 };
 var series= [
    {
       name: 'Partially Vaccinated',
       data: [1344585, 1420118, 1440359, 1611815]
    }, 
    {
       name: 'Fully Vaccinated',
       data: [1394605, 1660366, 1922228, 2236536]
    }, 
 ];     

 var json = {};   
 json.chart = chart; 
 json.title = title;   
 json.subtitle = subtitle; 
 json.tooltip = tooltip;
 json.xAxis = xAxis;
 json.yAxis = yAxis;  
 json.series = series;
 json.plotOptions = plotOptions;  
 json.credits = credits;
 $('#column_chart').highcharts(json);