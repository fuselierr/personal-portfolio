import '@styles/globals.css';

import Background from '@components/ui/Background';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    title: "Mike Gao",
    description: 'Personal Portfolio'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
                <Background/>
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout;