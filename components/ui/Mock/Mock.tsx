import styles from './Mock.module.css'

interface MockProps {
    width?: string;
    height?: string;
    borderRadius?: string;
}

export default function Mock({ width = '100%', height = '100%', borderRadius = '0px' }: MockProps) {
    const mockStyle = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            className={styles.mock}
            style={mockStyle}
        ></div>
    )
}