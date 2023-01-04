import Header from '../header/header';
import Footer from '../footer/footer';
import Head from 'next/head';


const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>NextJS Event App</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout;