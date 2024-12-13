import './App.css';
import { Route, Switch } from 'react-router-dom';
import PageContent from './layouts/PageContent';
import HomePage from './pages/HomePage';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </PageContent>
      <Footer />
    </>
  );
}

export default App;

/*
header
pc
switch
.
.
.
switch
pc
footer
*/
