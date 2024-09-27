import React, { useState, useEffect } from "react";

export const AutoWriteText: React.FC = () => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const fullText: string = " Imprime tus ideas, viste tu creatividad";
    const typingSpeed: number = 100; // Velocidad de escritura en milisegundos
    const delayBeforeRepeat: number = 2000; // Milisegundos, retraso antes de repetir

    useEffect(() => {
        let currentIndex: number = 0;

        const typeText = (): void => {
            if (currentIndex < fullText.length - 1) {
                setDisplayedText((prev) => prev + fullText[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setDisplayedText("");
                    currentIndex = 0;
                    startTyping();
                }, delayBeforeRepeat);
            }
        };

        const startTyping = (): void => {
            typingInterval = setInterval(typeText, typingSpeed);
        };

        let typingInterval = setInterval(typeText, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold p-2">{displayedText}</h1>
        </div>
    );
};


