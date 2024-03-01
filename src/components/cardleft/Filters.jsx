import AdultChild from "./AdultChild";
import BoatSize from "./boatSize/BoatSize";
import BoatType from "./boatType/BoatType";
import BudgetSlider from "./budget/Budget";
import Pets from "./pets/Pets";

function Filters() {
  return (
    <div>
      <div className="bg-blue-500 text-white h-8 w-58 rounded-t-md ml-8 mt-2 flex items-center justify-center">
        Filters
      </div>
      <div className="filters border border-gray-300 rounded-b-md w-72 ml-8 h-[61.2em] flex flex-col gap-4 bg-white">
        <div>
        <BudgetSlider/>
        <div className="bg-gray-200 h-3"></div>
        </div>
        <div className="bg-gray-200 h-3"></div>
        <div>
          <AdultChild NoOf="No of Adults" Ages="Ages 13 or above" Value="1" />
          <AdultChild NoOf="No of Children" Ages="Age 5-12" Value="0" />
          <AdultChild NoOf="No of Cabin/Bedrooms" Value="0" />
          <Pets />
        </div>
        <div>

        <div className="bg-gray-200 h-3"></div>
        <BoatType />
        </div>
        <div>
        <div className="bg-gray-200 h-3"></div>
        <BoatSize/>
        </div>
      </div>
    </div>
  );
}

export default Filters;
