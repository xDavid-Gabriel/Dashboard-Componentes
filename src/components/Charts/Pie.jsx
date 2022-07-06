import { 
  //Primero llamar al componente AccumulationChartComponent este llevara parametros 
  AccumulationChartComponent, 
  //Despues el Inject que llevara un array este componentes son muy importantes para que el pie funcione
  Inject,
  AccumulationLegend,
  PieSeries, 
  AccumulationDataLabel, 
  AccumulationTooltip,
  /////////////////
  //Este componente AccumulationSeriesCollectionDirective tambien ira dentro del componente  AccumulationChartComponent
  AccumulationSeriesCollectionDirective, 
  //Dentro del componente AccumulationSeriesCollectionDirective poner tambien otro componente llamado AccumulationSeriesDirective este llevara parametros para estilisar el pie
  AccumulationSeriesDirective, 
  } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
function Doughnut ({ id, data, legendVisiblity, height }) {

  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
    //El id
    id={id}
    //Estilos para el cuadro y hacer click en ellos para que se muestre
    legendSettings={{ visible: legendVisiblity, background: 'white' }}
    height={height}
    //Cuando cambie a modo dark
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    //Cuando se haga hover se muestre los datos
    tooltip={{ enable: true }}
  >
    {/* El Inject que llevara un parametro services={[]} donde pondra los componentes en un array  */}
    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
    <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective
        // El nombre para cuando se haga hover
        name="Sale"
        // La data traida
        dataSource={data}
        //Estos tienen que concordar con la propiedad de la data del objeto o json traido
        xName="x"
        yName="y"
        // Para que huequito de la dona sea mas grande o pequeño
        innerRadius="40%"
        startAngle={0}
        endAngle={360}
        radius="70%"
        explode
        explodeOffset="10%"
        explodeIndex={2}
        //Para que muestre la informacion
        dataLabel={{
          visible: true,
          name: 'text',
          position: 'Inside',
          font: {
            fontWeight: '600',
            color: '#fff',
          },
        }}
      />
    </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
  )
}

export default Doughnut 