import { FC, PropsWithChildren } from "react"


interface DarkLayoutInterface {
    children?: React.ReactNode
}

const DarkLayout: FC<PropsWithChildren<DarkLayoutInterface>> = ({ children }) => {


    return (
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: '10px',
            borderRadius: '5px'
        }}>
            <h3>DarkLayout</h3>
            <div>
                { children }
            </div>
        </div>
    )
}

export default DarkLayout