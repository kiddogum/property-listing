import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Property Listing | Find the Perfect Home",
  description: "Find your dream rental property",
  keywords: "rentals, rental, find, property, properties, home, homes",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
