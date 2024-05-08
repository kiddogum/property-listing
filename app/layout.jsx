import "../assets/styles/globals.css";

export const metadata = {
  title: "Property Listing | Find the Perfect Home",
  description: "Find your dream rental property",
  keywords: "rentals, rental, find, property, properties, home, homes",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
