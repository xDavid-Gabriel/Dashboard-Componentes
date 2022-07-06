import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";

const Customers = () => {
  return (
    <div
      className="m-2 md:m-10 p-2 md:p-10
  bg-white rounded-3xl mt-40"
    >
      <Header category="Página" title="Clientes" />

      {/*1. Componente GridComponent */}
      <GridComponent
        //La data
        dataSource={customersData}
        //"llowPaging: este sirve para las paginaciones segun todos los items que tenga", ////
        allowPaging
        //"llowSorting: este sirve para poder ordenar los items de mayor a menor etc, haciendo click
        allowSorting
        //toolbar: Delete para el Borrar
        toolbar={["Delete"]}
        //editSettings: debe estar en true para editar y borrar
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
        // height="400"
      >
        {/*2. Componente ColumnsDirective */}
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            //3. Componente ColumnDirective
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/*4. Componente Inject  */}
         {/* En el array de services esto es para que funcione el editar y borrar */}
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
