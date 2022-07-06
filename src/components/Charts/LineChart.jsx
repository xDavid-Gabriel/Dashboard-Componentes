
import { 
  //Primero llamar al componente ChartComponent este lleva parametros  
  ChartComponent, 
  //Luego poner el componente Inject con su parametro que recivira arrays
  Inject, 
  LineSeries, 
  DateTime, 
  Legend, 
  Tooltip,
  //Despues poner el componente SeriesCollectionDirective dentro de el mapear este map tiene que retornar el componente SeriesDirective donde se le pondra el key y el item 
  SeriesCollectionDirective, 
  //Aca pintar todo lo del map en parametros
  SeriesDirective 
} from '@syncfusion/ej2-react-charts';


import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {

  const {currentMode} = useStateContext()
  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    //este sirve para que pinte los datos en la parte de abajo los años
    primaryXAxis={LinePrimaryXAxis}
    //este sirve para que pinte en numero predeterminado en la parte de la izquierda 
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    //Para que cuando se haga hover muestre los datos
    tooltip={{enable:true}}
    background={currentMode === "Dark" ? "#33373E":"#fff"}
    legendSettings={{ background: 'white'}}
    >
      <Inject services={[LineSeries,DateTime,Legend,Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart