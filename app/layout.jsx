import '@styles/globals.css';

import Nav from '@components/Nav';

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

            <main className="app mt-20">
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;