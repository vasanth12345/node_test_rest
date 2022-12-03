import { useState, useEffect } from "react";

function App() {
  const [Data, setData] = useState([]);
  const [AddData, setAddData] = useState([]);

  // const fetchData = () => {
  //   return fetch("https://easy-gray-donkey-ring.cyclic.app/api/data/")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // };
  useEffect(() => {
    const fetchData = () => {
      fetch("https://easy-gray-donkey-ring.cyclic.app/api/data/")
        .then((res) => {
          if (res.ok) {
            // setAddData(res);
            // console.log(res);
            return res.json();
          }
        })
        .then((res) => {
          setData(res);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
    // fetchData();
  }, []);

  console.log(Data);
  return (
    <div className="App">
      <div className="status">
        {typeof AddData !== undefined && AddData !== "" ? (
          <h1>{AddData.status}</h1>
        ) : (
          <h1>noo data</h1>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {typeof Data !== undefined && Data !== "" ? (
            Data.map((e) => (
              <div
                key={e.name}
                style={{
                  border: "2px solid #f00",
                  width: "30%",
                  textAlign: "center",
                }}
              >
                <h1>{e.name}</h1>
                <h1>{e.age}</h1>
                <p>{e.desig}</p>
              </div>
            ))
          ) : (
            <h1>noo data</h1>
          )}
        </div>
        <h1>hahah</h1>
      </div>
    </div>
  );
}

export default App;
