// Libreria que sirve para hacer paginacion y ordenar los items busqueda libreria @syncfusion/ej2-react-grids
import {
  //1. Primero llamar el componente GridComponent y ponerlo en el jsx, este lleva parametros para que funcione el dataSource={employeesData} para traer toda la info de la data, "llowPaging: este sirve para las paginaciones segun todos los items que tenga", "llowSorting: este sirve para poder ordenar los items de mayor a menor etc, haciendo click en cada titulo" 
  GridComponent,
  //2. Dentro del GridComponent llamar otro componente llamado ColumnsDirective dentro de ella mapearlo con el employeesGrid.map() poniendo su index y su item 
  ColumnsDirective,
  //3. Luego dentro del ColumnsDirective poner el componente en singular ColumnDirective este recibe parametros donde recibe el key={num} para el index, y una copia de los item mapeados {...item} 
  ColumnDirective,
 //4 debajo del ColumnsDirective poner el componente Inject donde este recibira un solo parametro que revibe arrays, que sera services={[]} 
  Inject,
  //5 todos estos son los que recibira services como arrays
  Page,
  Search,
  Toolbar
} from "@syncfusion/ej2-react-grids";
//La data
import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {

  return (
    <div
      className="m-2 md:m-10 p-2 md:p-10
    bg-white rounded-3xl mt-40"
    >
      <Header category="Página" title="Empleados" />

   {/*1. Componente GridComponent */}
      <GridComponent
      //La data
        dataSource={employeesData}
        //"llowPaging: este sirve para las paginaciones segun todos los items que tenga", ////
        allowPaging
        //"llowSorting: este sirve para poder ordenar los items de mayor a menor etc, haciendo click 
        allowSorting
      //toolbar: Search para el buscador
      toolbar={["Search"]}
       width="auto"
        // height="400"
      >
       {/*2. Componente ColumnsDirective */}
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            //3. Componente ColumnDirective 
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/*4. Componente Inject */}
        <Inject
          services={[
            Search,
            Page,
            Toolbar
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
