import React from 'react';


function fetchFilms() {
    return fetch(`http://127.0.0.1:8000/get-products`)
      .then((res) => res.json())
      .catch(() => alert("Error in fetch!"));
  }
  
const ProductsList = ({
    showProduct,
    callAddMovie,
    products,
    setFilms,
    stateMovie
    }) => {
  
      //const [value,setValue] = useState('');  
      //const {debounceValue} = useDebounce(value,500)
    useEffect(()=>{
      fetchFilms(value).then((res)=>setFilms(res));
    },[]);
  
    return (
      <div className="products-list">
        <div className="search">
          <input
            className="input-search"
            id="input-search"
            placeholder="Введите название фильма"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="movies">
          {movies.length ?
            movies.map((elem) => (
              <MovieCard key={elem.id} movie={elem} showMovie={showMovie} />
            ))
          :
            null
          }
        </div>
        <div className="line"/>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="found" style={{ marginLeft: 15 }}>
            <p className="found-text">Найдено {movies.length} фильмов</p>
          </div>
          <button
            className="btn-add"
            disabled={stateMovie==='EDIT' ? true : false}
            onClick={callAddMovie}
          >
            <p className="btn-add-text">Добавить фильм</p>
          </button>
        </div>
      </div>
    );
};

export default ProductsList;