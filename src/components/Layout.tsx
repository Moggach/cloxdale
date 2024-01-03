
import Footer from '~/components/Footer'
import Header from '~/components/Header'


export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="p-4 flex flex-col gap-8">{children} </div> 
            <Footer />

        </>
    )
}