function Meter(props: MeterProps) {
    const width = props.percent + "%"
    return (
        <div style={{ border: "1px solid #ccc", flexGrow: 1 }}>
            <div style={{ width, color: "#000", backgroundColor:"#9e9e9e", height:"24px" }}></div>
        </div >
    )
}
export interface MeterProps {
    percent: number;
}

export default Meter;