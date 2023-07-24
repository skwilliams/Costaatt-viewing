import Header from '../NavComponents/Header';
import Footer from '../Footer';

const TopNavOnlyLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default TopNavOnlyLayout;
