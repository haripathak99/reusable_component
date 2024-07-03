import "./App.css";
import Button from "./components/Button";
import Image from "./components/Image";

function App() {
  return (
    <>
      {/* test documentation */}
      <h1>Reusable Component</h1>
      <Button
        label="Click me"
        color="blue"
        onClick={() => console.log("Button clicked")}
      />
      <Image
        source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoRGyXmHy_6aIgXYqWHdOT3KjfmnuSyxypw&s"
        width={300}
        height={200}
        alt="Girl with camera"
      />
    </>
  );
}

export default App;
