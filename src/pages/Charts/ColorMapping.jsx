// Para hacer que las barras tengan color por meses segun el grado de temperatura
import { 
   //Primero llamar al componente ChartComponent este lleva parametros  
  ChartComponent, 
   //Luego poner el componente Inject con su parametro que recivira arrays
  Inject, 
  ColumnSeries, 
  Tooltip, 
  Category, 
  Legend, 
  ///
  //Despues poner el componente SeriesCollectionDirective dentro de el poner el componente SeriesDirective este llevara paremetros donde tendra la info de la data dataSource={colorMappingData[0]}
  SeriesCollectionDirective, 
  //Aca pintar todo la data y el tipo
  SeriesDirective,  
  //Luego despues dentro del componente ChartComponent poner el componente RangeColorSettingsDirective dentro de el se mapeara la data rangeColorMapping con un map este tiene que retornar el componente RangeColorSettingDirective
  RangeColorSettingsDirective, 
  //Aca llevara el key y una copia del item
  RangeColorSettingDirective 
} from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';

import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-40 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Mapeo de color" title="CLIMA DE ESTADOS UNIDOS - TIEMPO POR MES" />
    <div className="w-full">
      <ChartComponent
        id="charts"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        //para que pinte el cuadrado de abajo
        legendSettings={{ mode: 'Range', background: 'white' }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
              topLeft: 10,
              topRight: 10,
            }}
          />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
        </RangeColorSettingsDirective>
      </ChartComponent>
    </div>
  </div>
  )
}

export default ColorMapping