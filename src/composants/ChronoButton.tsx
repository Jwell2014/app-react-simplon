import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRedo, faCirclePlay, faCirclePause, faRemove, faCircleArrowLeft, faCircleChevronLeft, faCircleRadiation } from '@fortawesome/free-solid-svg-icons';


interface ChronoButtonProps {
    name: string;
    onClick: () => void;
}

function ChronoButton({ name, onClick }: ChronoButtonProps) {
    let icon = null;

    switch (name) {
        case 'Play':
            icon = <FontAwesomeIcon icon={faCirclePlay} />;
            break;
        case 'Pause':
            icon = <FontAwesomeIcon icon={faCirclePause} />;
            break;
        case 'Reset':
            icon = <FontAwesomeIcon icon={faRedo} />;
            break;
        default:
            break;
    }
    return (
        <div style={{ margin: "10px" }}>
            <button onClick={onClick}>
                {icon} {name}
            </button>        </div>
    );
}

export default ChronoButton;
