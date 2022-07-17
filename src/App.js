import React, {useEffect,useState} from 'react';
import GameCard from './component/Card';

import DrawerAppBar from './component/Navbar'
import SearchBar from './component/SearchBar'
import OperationBar from './component/OperationBar'



function App() {
  const [data,setData] = useState([]);
  const [displayData,setDisplayData] = useState([]);

  const [searchOpen,setSearchOpen] = useState(false);
  const [sortedUp,setSortedUp] = useState(null);

  useEffect(() => {
    const url = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        var arr = []
        for(var i=1;i<json.length;i++){
          arr.push(json[i])
        }

        setData(arr)
        setDisplayData(arr)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);



  return (
    <div className="App">
      <DrawerAppBar setSearchOpen={setSearchOpen} searchOpen={searchOpen} >
        {searchOpen ? <SearchBar data={data} setDisplayData={setDisplayData} />:<div></div>}
        <OperationBar sortedUp ={sortedUp} setSortedUp={setSortedUp} data={displayData} setData={setDisplayData}/>        
        <div className="w-100 d-flex flex-wrap">
          {displayData.map((item,key)=>(
            <GameCard key={key} data={item}/>
          ))
          }
        </div>
      </DrawerAppBar>
    </div>
  );
}

export default App;
