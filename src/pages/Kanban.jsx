//Kanban tipo trello
import {
  //Usar el componente KanbanComponent este llevara parametros para que funcione
  KanbanComponent,
  //Dentro del componente KanbanComponent usar el componente ColumnsDirective dentro de este usar un map para mapear el kanbanGrid con su index y su items este retornara el componente ColumnDirective en singular
  ColumnsDirective,
  //que tendra como parametro el index como key y una copia del {...item}
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

//Data del kanban
import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-40 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        //Parametros del componente KanbanComponent
        // un id
        id="kamban"
        // Este dataSource sirve para llamar toda la data
        dataSource={kanbanData}
        //Inmportante usar este parametro cardSettings dentro de ello usar el "contentField:Summary" y el "headerField:Id"  para que pinte toda la data
        cardSettings={{ contentField: "Summary", headerField: "Id"  }}
        // Este keyField:"Status" sirve para que las tareas se dividan de acuerdo al Status establecido
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
