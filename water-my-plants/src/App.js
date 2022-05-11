import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "./ui/Theme";
import NavigationOut from "./ui/NavigationOut";
// import NavigationIn from "./ui/NavigationIn";
import Footer from "./ui/Footer";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavigationOut
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        {/* placeholder */}
        <div>Meow</div> 
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
