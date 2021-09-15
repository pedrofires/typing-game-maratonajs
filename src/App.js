import React, { useState, useEffect } from 'react';
import wordList from './resources/words.json'

const MAX_TYPED_KEYS = 30;

const getWord = () =>{
    const index = Math.floor(Math.random() * wordList.length);
    const word = wordList[index];
    return word.toLowerCase();
}

const Word = ({word, validKeys}) => {
    if(!word) return null;
    const joinedKeys = validKeys.join('');
    const matched = word.slice(0, joinedKeys.length);
    const remainder = word.slice(joinedKeys.length);

    return (
    <>
        <span className="matched">{matched}</span>
        <span className="remainder">{remainder}</span>
    </>
)}

const isValidKey = (key, word) => {
    if(!word) return false;
    const result = word.split('').includes(key);
    return result;
}

const App = () =>{

    const [typedKeys, setTypedKeys] = useState([]);
    const [validKeys, setValidKeys] = useState([]);
    const [word, setWord] = useState('');

    useEffect(()=>{
        setWord(getWord());
    }, []);

    const handleKeyDown = (e) => {
        e.preventDefault();
        const { key } = e;

        if(isValidKey(key, word)){
            setValidKeys((prevTypedKeys) => {
                const isValidLength = prevTypedKeys.length <= word.length;
                const isNextChar = isValidLength && word[prevTypedKeys.length] === key;
                return (isNextChar) ? [...prevTypedKeys,key] : prevTypedKeys;
            })
        }

        setTypedKeys((prevTypedKeys) =>{
            return [...prevTypedKeys, key].slice(MAX_TYPED_KEYS * -1);
        })
        console.log('key ', key)
    }

    return (
    <div className= "container" tabIndex="0" onKeyDown={handleKeyDown}>
        <div className="valid-keys">
            <Word word={word} validKeys={validKeys}/>
        </div>
        <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
        <div className="completed-words">
            <ol>
                <li>Macaco cidadão</li>
                <li>Neemias</li>
                <li>Torebas</li>
            </ol>
        </div>
    </div>)
}

export default App;