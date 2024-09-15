'use strict';
const app = function () {
    const inputText = document.querySelector('#input-text');
    const outputText = document.querySelector('#output-text');
    const iconClear = document.querySelector('.clear-input-icon');
    const iconCopy = document.querySelector('.icon-copy');
    const wordCountEl = document.querySelector('.word-count');
    inputText.value = '';
    outputText.value = '';

    const RenderWordCount = function (wordsCount) {
        if (wordsCount === 0) {
            wordCountEl.textContent = '';
        } else {
            wordCountEl.textContent =
                length == 1 ? `${wordsCount} word` : `${wordsCount} words`;
        }
    };

    const removeNewLine = function () {
        outputText.value = inputText.value.replaceAll('\n', ' ');
        const wordsCount = outputText.value.split(' ').filter((w) => w).length;

        RenderWordCount(wordsCount);
    };

    const clearInput = function () {
        inputText.value = '';
        outputText.value = '';
        RenderWordCount(0);
    };

    iconClear.addEventListener('click', clearInput);

    inputText.addEventListener('input', removeNewLine);

    iconCopy.addEventListener('click', function () {
        const text = outputText.value;
        navigator.clipboard.writeText(text);
    });
};

app();
