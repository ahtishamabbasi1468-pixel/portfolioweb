import { useState, useEffect } from 'react';

/**
 * Cycles through an array of words with a typewriter + backspace effect.
 * @param {string[]} words - words/phrases to type out in a loop
 * @param {number} typingSpeed - ms per character while typing
 * @param {number} deletingSpeed - ms per character while deleting
 * @param {number} pauseTime - ms to pause once a word is fully typed
 */
const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[wordIndex % words.length];
        let timeout;

        if (!isDeleting && text === currentWord) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && text === '') {
            // Deferred (instead of calling setState synchronously in the effect body)
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, typingSpeed);
        } else {
            timeout = setTimeout(() => {
                setText((prev) =>
                    isDeleting
                        ? currentWord.substring(0, prev.length - 1)
                        : currentWord.substring(0, prev.length + 1)
                );
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
};

export default useTypingEffect;
