import { useRef, useEffect } from "react";
import { createSpiderChart } from "berles-boolean-skill-map";
import ModalGenerator from "./modal";

/*
  chartRef is a useRef hook used to manage the conflict between react and
  d3 on their pursue of controling the DOM. First, react renders the
  components and chartRef is used to reference the <g> component, in which
  the chart is generated.
*/

function SpiderChart({ formData }) {
  const chartRef = useRef();

  useEffect(() => {
    const chartOptions = {
      onClickSegment(segmentName, levelsData) {
        ModalGenerator(segmentName, levelsData);
      },
    };
    createSpiderChart(chartRef.current, formData, chartOptions);
  }, []);

  return (
    <>
      <h1>Acá va el gráfico</h1>
      <div style={{ textAlign: "center" }}>
        <svg height={800} width={800}>
          <g
            ref={chartRef}
            height={800}
            width={800}
            transform={`translate(
                ${400},
                ${400})`}
          ></g>
        </svg>
      </div>
    </>
  );
}

export default SpiderChart;
