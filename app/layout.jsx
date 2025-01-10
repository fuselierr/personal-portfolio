import '@styles/globals.css';

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