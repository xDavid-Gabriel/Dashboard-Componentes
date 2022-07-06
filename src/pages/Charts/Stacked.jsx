import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-40 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Apilado" title="Desglose de ingresos" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;