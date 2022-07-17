import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import NavBar from "../NavBar";

import styles from './MainLayout.module.css';

interface MainLayoutInterface {
    children?: React.ReactNode
}

const MainLayout: FC<PropsWithChildren<MainLayoutInterface>> = ({ children }) => {
    return (
        <div className={styles.container}>

            <Head>
                <title>Home - Rodolfo Solano</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>

               { children }
                
            </main>

        </div>
    );
}

export default MainLayout