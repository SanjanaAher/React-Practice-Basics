import logo from "./download.png";
import "./App.css";
import First from "./Components/FunctionalComponent/First";
import ClassCompo from "./Components/ClassComponent/ClassCompo";
import JsxWithoutJsx from "./Components/FunctionalComponent/JsxWithoutJsx";
import FuncCompWithProps from "./Components/FunctionalComponent/FuncCompProps";
import ClassCompProps from "./Components/ClassComponent/ClassCompProps";
import StateInClassCompo from "./Components/ClassComponent/StateInClassCompo";
import PrevStateInClassCompo from "./Components/ClassComponent/PrevStateInClassComp";
import DestructuringPropsFuncComp from "./Components/FunctionalComponent/DesturcturingPropsFuncComp";
import DestructuringPropsClassComp from "./Components/ClassComponent/DestructuringPropsClassComp";
import EventHandlingFuncComp from "./Components/FunctionalComponent/EventHandlingFuncComp";
import EventHandlingClassComp from "./Components/ClassComponent/EventHandlingClassComp";
import BindingEventHandlersInClassComp from "./Components/ClassComponent/BindingEventHandlersInClassComp";
import MethodsAsPropsClassCompo from "./Components/ClassComponent/MethodsAsPropsClassCompo";
import ConditionalRenderClass from "./Components/ClassComponent/ConditionalRenderClass";
import ArrayRenderUsingMap from "./Components/FunctionalComponent/ArrayRenderUsingMap";
import ListOFObjectRenderUsingMap from "./Components/FunctionalComponent/ListOFObjectRenderUsingMap";
import FromHandlingClassCompo from "./Components/ClassComponent/FromHandlingClassCompo";
import ParentMountingLifecycle from "./Components/ClassComponent/ParentMountingLifecycle";
import ParentUpdateLifecycleMethods from "./Components/ClassComponent/ParentUpdateLifecycleMethods";

function App() {
  return (
    <div className="App">
      <h1>Learn React With Me...</h1>
      <h3>Ganpati Bappa Moryaa</h3>
      <hr />
      <First />
      <hr />
      <ClassCompo />
      <hr />
      <JsxWithoutJsx />
      <hr />
      <FuncCompWithProps name="Sanju" love="Pani Puri">
        <h6>I am first Children of prop.</h6>
        <button> Wanna Know me more? Click Here;)</button>
      </FuncCompWithProps>
      <FuncCompWithProps name="Dnaynu" love="Palak">
        <h6>I am second Children of prop.</h6>
        <button> Wanna Know me more? Click Here;)</button>
      </FuncCompWithProps>
      <FuncCompWithProps name="Pallu" love="Puran Poli">
        <h6>I am third Children of prop.</h6>
        <button> Wanna Know me more? Click Here;)</button>
      </FuncCompWithProps>
      <hr />
      <ClassCompProps name="Annju">
        <p>Children of prop1</p>
      </ClassCompProps>
      <ClassCompProps name="Manju">
        <p>Children of prop2</p>
      </ClassCompProps>
      <ClassCompProps name="Gannju">
        <p>Children of prop3</p>
      </ClassCompProps>
      <hr />
      <StateInClassCompo />
      <hr />
      <PrevStateInClassCompo />
      <hr />
      <DestructuringPropsFuncComp
        first="As Argument to the Function"
        second="In Function Body"
      />
      <hr />
      <DestructuringPropsClassComp
        first="Using This.Props.PropsName"
        second="To the Function body"
      />
      <hr />
      <EventHandlingFuncComp />
      <hr />
      <EventHandlingClassComp />
      <hr />
      <BindingEventHandlersInClassComp />
      <hr />
      <MethodsAsPropsClassCompo />
      <hr />
      <ConditionalRenderClass />
      <hr />
      <ArrayRenderUsingMap />
      <hr />
      <ListOFObjectRenderUsingMap />
      <hr />
      <FromHandlingClassCompo />
      <hr />
      {/* <ParentMountingLifecycle /> */}
      <hr />
      <ParentUpdateLifecycleMethods />
    </div>
  );
}

export default App;
