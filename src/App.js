import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Property from './components/Property';

function App() {

  const urlProperty = 'https://localhost:44369/api/PropertyItems';
  const urlOwner = 'https://localhost:44369/api/OwnerItems';
  const urlPropertyImg = 'https://localhost:44369/api/PropertyImages';
  const urlPropertyTrace = 'https://localhost:44369/api/PropertyTraces';

  const [propertys, setPropertys] = useState()
  const [owners, setOwners] = useState()
  const [propertysImg, setPropertysImg] = useState()
  const [propertysTrace, setPropertyTrace] = useState()
  const [search, setSearch] = useState(false);
  const [searchName, setSearchName] = useState(false);
  const fetchApi = async () => {
    const response = await fetch(urlProperty)
    const responseJSON = await response.json()
    setPropertys(responseJSON)

    const response1 = await fetch(urlOwner)
    const responseJSON1 = await response1.json()
    setOwners(responseJSON1)

    const response2 = await fetch(urlPropertyImg)
    const responseJSON2 = await response2.json()
    setPropertysImg(responseJSON2)

    const response3 = await fetch(urlPropertyTrace)
    const responseJSON3 = await response3.json()
    setPropertyTrace(responseJSON3)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(true);
    console.log("submit")
    
  }

  return (
    <div className="App">
      <h1>RealState</h1>
      <form action="" className='bg-dark' onSubmit={handleSubmit}>
        <input type="text" name="" className='m-3' placeholder='Search for name' onChange={(e) => { setSearchName(e.target.value) }} id="search" />
        <input type="submit" className='btn btn-primary' value="Search" />
      </form>
      <div className='bg-light'>
      {
        !search ? "Please search..." :
        !propertys ? "Cargando..." :
        propertys.map((property, index) => {
          if(property.name == searchName) {
            return <Property property={property} owners= {owners} propertysImg={propertysImg} propertysTrace={propertysTrace} />
            
          }
        }

        )
      }
      </div>
    
    </div>
  );
}

export default App;
