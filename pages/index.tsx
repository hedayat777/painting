import Head from 'next/head'
import '../styles/pages/home.scss';
import MainMenu from "../components/header/mainMenu/mainMenu";


export default function Home() {
    return (
        <div className='mainPage'>
            <div className='container'>
                <div className='pages '>
                    <div className="header">
                        <MainMenu/>
                    </div>
                </div>
            </div>
        </div>
    )
}
