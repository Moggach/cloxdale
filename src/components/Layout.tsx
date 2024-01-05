
import Footer from '~/components/Footer'
import Header from '~/components/Header'


export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="pt-4 flex flex-col gap-8">{children} </main> 
            <Footer />

        </>
    )
}