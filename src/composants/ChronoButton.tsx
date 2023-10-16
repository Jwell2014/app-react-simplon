import React from 'react';

interface ChronoButtonProps {
    name: string;
    onClick: () => void;
}

function ChronoButton({ name, onClick }: ChronoButtonProps) {
    return (
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    );
}

export default ChronoButton;
