// Usar el componente ColorPickerComponent
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

// Funcion para que cambie de color
const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  console.log(args);
};

// Usar una funcion por ejemplo este CustomColorPicker para poder usar como componente en mi jsx este recibira parametros que desestructaremos para que funcione mi color picker el "id" para identificarlo y el "mode" para poner que modo vamos a usar en el componente dentro de esta funcion llamar al componente <ColorPickerComponent/> y a este ponerle les paramentros por ejemplo el id y el mode
const CustomColorPicker = ({ id, mode }) => 
<ColorPickerComponent id={id} mode={mode} 

// Para que no se pueda cambiar de modo
modeSwitcher={false} 
//Para que aparescan en cuadrado
inline
// Para que no haya el boton de aplicar 
showButtons={false}
//Para que escuche el cambio de color  
change={change} />;

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-40 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Selector de color" />
    <div className="text-center">
      <div id="preview" />
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Paleta en línea</p>
          {/* Ahi esta el id y el mode */}
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Selector en línea</p>
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ColorPicker