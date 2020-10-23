import React, { useState, useRef, createRef } from "react";
import { Container, Input } from './styles';

const CodeInput = (props) => {
    const slots = parseInt(props.slots, 10) > 0 ? parseInt(props.slots, 10) : 1;
    const [values, setValues] = useState([]);
    const slotRefs = useRef(Array(slots).fill(0).map(slot => createRef()));
    const [currentSlot, setCurrentSlot] = useState(0);

    const handleBackspace = (key) => {
        if (
            key === 'Backspace'
            && currentSlot > 0 
            && currentSlot <= (slots - 1)
            && !values[currentSlot]
        ) {
            slotRefs.current[currentSlot - 1].current.focus();
        }
    }
    
    const setValue = (i, value) => {
        // limpio el valor basado en la regex
        const cleanValue = (value.match(props.pattern) || []).join('');
        
        setValues((prev) => {
            const newValues = [...prev];
            newValues[i] = cleanValue;
            props.onValueChange({
                value: newValues.join(''),
                valid: newValues.join('').length === slots
            });
            return newValues;
        });

        // si el valor es valido y no vacio
        if (cleanValue) {
            // si no estoy en el ultimo avanzo al proximo
            if (i < (slots - 1)) {
                slotRefs.current[i + 1].current.focus();
                slotRefs.current[i + 1].current.select();
            }
        }
        
    };

    return (
        <Container>
            {Array(slots).fill(0).map((slot, i) => (
                <Input key={i} ref={slotRefs.current[i]} type="text" step="1" maxLength={1} pattern={`${props.pattern}`} value={values[i] || ""} 
                    onChange={(e) => setValue(i, e.target.value)} 
                    onFocus={(e) => setCurrentSlot(i)} 
                    onKeyDown={(e) => handleBackspace(e.key)} 
                />
            ))}
        </Container>
    );
};

CodeInput.defaultProps = {
    slots: 4,
    onValueChange: () => { },
    pattern: "[0-9]"
};

export default CodeInput;
