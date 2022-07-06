import { 
  // Primero poner el componente ChartComponent este llevara parametros dentro de el poner el Inject
  ChartComponent,
  //Este Inject llevara un parametro de arrays esto es importante para que funcione las lineas
  Inject, 
  HiloSeries, 
  Tooltip, 
  DateTime, 
  Logarithmic, 
  Crosshair, 
  Zoom, 
  ////////
  //Tambien dentro del componente ChartComponent llamar al componente SeriesCollectionDirective dentro del componente llamar el otro componente SeriesDirective este ya pintara la data filtrada 
  SeriesCollectionDirective, 
  //Este componente SeriesDirective llevara parametros que recibira la data 
  SeriesDirective, 
 } from '@syncfusion/ej2-react-charts';

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const date1 = new Date('2017, 1, 1');

// Esta funcion solo es para poder filtrar la data de la fecha apartir del 2017
// eslint-disable-next-line consistent-return
function filterValue(value) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}

// El dataSource={returnValue} recibira esta variable con la data ya filtrada
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Financiero" title="Histórico de AAPLE" />
      <div className="w-full">
        {/* Componente ChartComponent  */}
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          //Me muestre al hacer hover
          tooltip={{ enable: true, shared: true }}
          //Este es para que me siga abajo las fechas al hacer hover
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >

          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              // la info de la fechas
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
          //Lo unico que muestra es low(baja) y high(alta)  
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial