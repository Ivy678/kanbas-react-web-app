import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";



function JavaScript() {
    console.log('Hello World!');

    return(
       <div>
          <h3>JavaScript</h3>
          <FunctionDestructing />
          <Destructing />
          <Spread />
          <House />
          <TemplateLiterals />
          <FilterFunction />
          <FindIndex />
          <FindFunction />
          <JsonStringify />
          <MapFunction />
          <AddingAndRemovingDataToFromArrays />
          <ArrayIndexAndLength />
          <WorkingWithArrays />
          <FunctionParenthesisAndParameters />
          <ImpliedReturn/> 
          <ArrowFunctions/>
          <ES5Functions/>
          <TernaryOperator/>
          <IfElse/>
          <BooleanVariables/>
          <VariableTypes/>
          <VariablesAndConstants/>
       </div>
    );
 }
 export default JavaScript