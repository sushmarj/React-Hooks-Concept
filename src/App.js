import React from 'react';

import './App.css';
import ClassCounter from './components/useState/classCounter';
import HooksCounter from './components/useState/hooksCounter';
import Hooks2 from './components/useState/hooks2prevstate';
import Hooks4 from './components/useState/hooks4array';
import Hooks3 from './components/useState/hooks3obj';
import ClassCounter1 from './components/useEffect/classCounter';
import HooksCounter1 from './components/useEffect/hooks1';
import ClassMouse from './components/useEffect/classmouse';
import HooksMouse from './components/useEffect/hooksmouse';
import MouseContainer from './components/useEffect/mouseContainer';
import IntervalCounter from './components/useEffect/intervalcounter';
import HooksInterval from './components/useEffect/hooksinterval';
import DataFetching from './components/fetching/datafetching';
import FetchingId from './components/fetching/fetchingparticular';
import ComponetC from './components/context/componentC';
import UseReducercounter from './components/reducer/usereducercounter';
import ReducerObj from './components/reducer/reducerobj';
import MultipleReducer from './components/reducer/multiplereducer';
import Root from './components/reducerwithcontext/root';
import DataFetching1 from './components/fetchingwithreducer/datafetching1';
import DataFetching2 from './components/fetchingwithreducer/datafetching2';
import ParentComponent from './components/useCallBack/ParentComponet';
import Counter from './components/usememo/counter';
import FocusInput from './components/useRef/focusInput';
import ClassTimer from './components/useRef/classTimer';
import HooksTimer from './components/useRef/HooksTimer';
import DocTitleOne from './components/customhooks/Doctitleone';
import DocTitleTwo from './components/customhooks/Doctitletwo';
import CustomHooks from './components/customhooks/counter1';
import Counter1 from './components/customhooks/counter1';
import Counter2 from './components/customhooks/counter2';
import UserForm from './components/customhooks/userform';
import image from './components/1.jpg';
export const Usercontext = React.createContext();
export const Channelcontext = React.createContext()
function App() {
  return (
    <div className="App">
     <ClassCounter />
      <HooksCounter />
      <Hooks2 />
      <Hooks3 />
      <Hooks4 />
      <ClassCounter1 />
      <HooksCounter1 />

      <MouseContainer />
      <IntervalCounter />
      <HooksInterval />
      <FetchingId />
      <Usercontext.Provider value={'Sushma'}>
        <Channelcontext.Provider value={'jogi'}>
          <ComponetC />
        </Channelcontext.Provider>

      </Usercontext.Provider>
      <UseReducercounter />
      <ReducerObj />
      <MultipleReducer />
      <Root/>
      <DataFetching1/>
      <DataFetching2/>
      <ParentComponent/>
      <Counter/>
      <FocusInput/>
      <ClassTimer/>
      <HooksTimer/>
      <DocTitleOne/>
      <DocTitleTwo/>
      <Counter1/>
      <Counter2/>
      <UserForm/>
      <div className="container">
            
            <div className="row ">
                <div className="col-md-3 col-lg-4">
                    <div className="card card-center">
                        <img  src={image} className="card-img-top img fluid" />
                        <div className="card-block">
                            <h3 className="card-title"> Hole Event </h3>
                            <p className='text-justify'> kajld sjkafjkg jfklgjflkgj fkjlkfjk jkjgjgkfj vhihuduhg ygdjka jddjkfk</p>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
            </div>
    </div>
  
  );
}

export default App;
