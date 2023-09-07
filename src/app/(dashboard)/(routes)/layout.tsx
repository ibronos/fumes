
import Header from "./header";
import Footer from "./footer";

export default function Admin({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header /> 
        {children}
        <Footer />
      </>
    )
  }