import {
  // Para traer un calendario usar el componente ScheduleComponent este lleva parametros
  ScheduleComponent,
  // Dentro del componente ScheduleComponent poner el componte Inject
  Inject,
  //Los arrays de services
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Resize,
  DragAndDrop,

} from "@syncfusion/ej2-react-schedule";


import { scheduleData } from "../data/dummy";
import { Header } from "../components";
const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-40 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendario" />
      <ScheduleComponent
      height="650px"
      //eventSettings sirve para traer la data
      eventSettings={{dataSource:scheduleData}}
      // Para saber y seleccionar una fecha espesifica esta es de prueba, por defecto trae la fecha actual
      selectedDate={new Date(2022,0,10)}
      >
        <Inject
        // Este sirve trae arrays
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
