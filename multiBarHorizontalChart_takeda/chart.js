nv.addGraph(function() {

    d3.json("takedaMedDataset.json", function(data){
      var dataset = data;

      chart = nv.models.multiBarHorizontalChart()
          .x(function(d) { return d.label; })
          .y(function(d) { return d.value; })
          .barColor(d3.scale.category20().range())
          .duration(250)
          .margin({left: 200})
          .showValues(false)
          .stacked(false);
  
      chart.yAxis.tickFormat(d3.format(',.1f'));
      chart.yAxis.axisLabel('成分含有量');
      chart.xAxis.axisLabel('').axisLabelDistance(100);
      
      d3.select('#chart1 svg')
          .datum(dataset)
          .call(chart);
  
      nv.utils.windowResize(chart.update);
      chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
      chart.state.dispatch.on('change', function(state){
          nv.log('state', JSON.stringify(state));
      });
      return chart;
      
    });
});