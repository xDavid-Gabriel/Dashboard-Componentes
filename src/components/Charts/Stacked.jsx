import {
  // Primero
  ChartComponent,
  //Dentro del ChartComponent luego darle el parametro services=[] en un arrayue tendra
  Inject,
  // [0]
  Legend,
   // [1]
   Category,
   // [2]
   StackingColumnSeries,
   // [3]
   Tooltip,
  //  Debajo del Inject poner el componente SeriesCollectionDirective, dentro de estecomponente mapear mi data con su item y index poniendo otro componente SeriesDirective
   SeriesCollectionDirective,
   // A este componente ponerle parametros su key y una copia del {...item} y pinta todo el grafico de barras 
   SeriesDirective,
} from "@syncfusion/ej2-react-charts";

import {
  //Mi data
  stackedCustomSeries,
  //Estilos de la libreria Stacked
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import {useStateContext} from "../../contexts/ContextProvider"
function Stacked({ width, height }) {

  const {currentMode} = useStateContext()
  return (
    <ChartComponent
      width={width}
      height={height}
      // Id para el hover
      id="charts"
       //Estilos de la libreria Stacked tanto en el eje X como en el Y
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      // Para su border de toda la caja
      chartArea={{ border: { width: 0 } }}
    // Id para el hover
      tooltip={{ enable: true }}
      // Para cambiar de fondo
     background={currentMode === "Dark" ? "#33373E":"#fff"}
     //Para cuando sea Dark el fondo cambie a blanco y que los botones de abajo se vean
    legendSettings={{ background: 'white'}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default Stacked;
