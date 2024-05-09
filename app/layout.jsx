import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";

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
      </body>
    </html>
  );
};

export default Layout;
