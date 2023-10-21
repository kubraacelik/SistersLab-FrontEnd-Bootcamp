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
  const string = "  Cars";
  const number = 4;

  return (
    <div className="App">
      <DataTable title={title} data={cars} string={string} number={number}></DataTable>
    </div>
  );
}

export default App;