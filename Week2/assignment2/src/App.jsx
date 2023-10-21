import DataTable from "./components/DataTable";


function App() {
  var cars = [
    {
      id: 1,
      brand: "Mercedes-Benz",
      model: "E-Serisi"
    },
    {
      id: 2,
      brand: "Volkswagen",
      model: "Golf"
    },
    {
      id: 3,
      brand: "BMW",
      model: "3 Serisi"
    },
    {
      id: 4,
      brand: "Ford",
      model: "Mustang"
    }
  ];

  const title = "Car List";
  const text = "Our Cars";
  const number = 4;

  return (
    <div className="App">
      <DataTable title={title} data={cars} text={text} number={number}></DataTable>
    </div>
  );
}

export default App;