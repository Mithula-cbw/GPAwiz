import React from 'react';

interface ContainerProps {
    percentageX: number;
    percentageY?: number;
    children?: React.ReactNode;
    className?: string; // for inner container
    outerClassName?: string; // optional for outer container
}

const Container: React.FC<ContainerProps> = ({
                                                 percentageX,
                                                 percentageY = 100,
                                                 children,
                                                 className = '',
                                                 outerClassName = ''
                                             }) => {
    return (
        <div className={`w-full ${outerClassName}`}>
            <div
                className={`mx-auto h-full ${className}`}
                style={{ width: `${percentageX}%`, height: `${percentageY}%` }}
            >
                {children}
            </div>
        </div>
    );
};

export default Container;
