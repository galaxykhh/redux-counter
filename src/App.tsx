import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
const App: React.FC = () => {
	return (
        <>
            <CounterContainer />
            <TodosContainer />
        </>
	);
}

export default App;
