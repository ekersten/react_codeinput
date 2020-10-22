import React from 'react';

import CodeInput from './components/CodeInput/';
import { MainContainer } from './styles';

function App() {

    const handleValueChange = code => {
        console.log(`code: ${code.value} ${code.valid ? 'valid' : 'invalid'}`)
    }

    return (
        <MainContainer>
            <div>
                <h2>Default (4 numeros)</h2>
                <CodeInput onValueChange={handleValueChange} />
            </div>
            <div>
                <h2>Custom props: 6 valores alfanuméricos</h2>
                <CodeInput slots={6} pattern={'[a-z0-9]'} onValueChange={handleValueChange} />
            </div>
        </MainContainer>
    );
}

export default App;
