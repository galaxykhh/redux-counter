import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import GlobalStyle from './GlobalStyle';

const App: React.FC = () => {
	return (
        <>
            <GlobalStyle />
            <CounterContainer />
            <TodosContainer />
        </>
	);
}

export default App;
