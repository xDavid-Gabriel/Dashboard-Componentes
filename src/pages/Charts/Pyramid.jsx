//Para la piramide de informaciòn
import {
  //Primero llamar el componente AccumulationChartComponent que llevara parametros
  AccumulationChartComponent,
  //Luego poner el componente Inject con su parametro que recibira arrays
  Inject,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationLegend,
  AccumulationSelection,
  ////////////
  //Luego poner el componente AccumulationSeriesCollectionDirective dentro de el poner el componente AccumulationSeriesDirective que llevara parametros para que reciba los parametros
  AccumulationSeriesCollectionDirective,
  //Este tendra la info de la data en sus parametros dataSource={PyramidData}
  AccumulationSeriesDirective,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { ChartsHeader } from "../../components";

const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-40  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pirámide" title="Cuadro comparativo de alimentos" />
      <div className="w-95">
        <AccumulationChartComponent
           width="auto"
          id="pyramid-chart"
          legendSettings={{ background: "white" }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          {/* Todo esto es para que funcione la piramide */}
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />

          <AccumulationSeriesCollectionDirective>
            {/* Este tendra parametros donde pintara toda la informaciòn de la data y estilos de la piramide */}
            <AccumulationSeriesDirective
              name="Alimento"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
