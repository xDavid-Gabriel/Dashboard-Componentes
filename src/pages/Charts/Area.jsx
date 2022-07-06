import { 
  //Primero llamar al componente ChartComponent este lleva parametros  
  ChartComponent, 
  //Luego poner el componente Inject con su parametro que recibira arrays
  Inject, 
  SplineAreaSeries, 
  DateTime, 
  Legend, 
  //Despues poner el componente SeriesCollectionDirective dentro de el mapear este map tiene que retornar el componente SeriesDirective donde se le pondra el key y el item 
  SeriesCollectionDirective, 
  //Aca pintar todo lo del map en parametros
  SeriesDirective 
} from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {

  const {currentMode} = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-40 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Área" title="Tasa de inflación en porcentaje" />
    <ChartComponent
    id='line-chart'
    height='420px'
    //este sirve para que pinte los datos en la parte de abajo los años
    primaryXAxis={areaPrimaryXAxis}
    //este sirve para que pinte en numero predeterminado en la parte de la izquierda 
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}}
    //Para que cuando se haga hover muestre los datos
    tooltip={{enable:true}}
    background={currentMode === "Dark" ? "#33373E":"#fff"}
    legendSettings={{ background: 'white'}}
    >
      <Inject services={[SplineAreaSeries,DateTime,Legend]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area